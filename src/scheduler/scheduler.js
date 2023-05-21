const { scheduleJob, Job, RecurrenceRule } = require("node-schedule");

class Scheduler{
    
    /**@type {ScheduledEvent[]} */
    #events;

    constructor(){
        this.#events = [];
    }

    /**
     * 
     * @param {import('./interface').ScheduleOptions} options 
     */
    schedule(options){

        const event = new ScheduledEvent(options);

        const index = this.#findIndex(event.lockId, event.eventSlug);
        if(index != -1 ) throw new Error(`Event already exists with lockId: ${event.lockId} & eventSlug: ${event.eventSlug}`);

        const date = new Date();

        if(event.rule <= date || options.from <= date) throw new Error("Event trigger date set before current date.");

        this.#events.push(event);
        
        event.start(() => this.deschedule(event.lockId, event.eventSlug));
    }

    /**
     * 
     * @param {string} lockId 
     * @param {string} eventSlug 
     */
    deschedule(lockId, eventSlug){
        const index = this.#findIndex(lockId, eventSlug);
        if(index == -1 ) throw new Error(`Could not find event with lockId: ${lockId} & eventSlug: ${eventSlug}`);
        this.#events[index].stop();
        this.#events.splice(index, 1);
    }

    /**
     * 
     * @param {string} lockId 
     */
    descheduleAll(lockId){
        this.#events.filter(event => event.lockId == lockId).forEach(event => this.deschedule(event.lockId, event.eventSlug));
    }

    /**
     * 
     * @param {string} lockId
     * @param {string} eventSlug 
     * @param {} rule 
     */
    reschedule(lockId, eventSlug, rule){
        const index = this.#findIndex(lockId, eventSlug);
        if(index == -1 ) throw new Error(`Could not find event with lockId: ${lockId} & eventSlug: ${eventSlug}`);
        const event = this.#events[index];
        event.reschedule(rule, () => this.deschedule(lockId, eventSlug));
    }

    nextEventTrigger(lockId, eventSlug){
        const index = this.#findIndex(lockId, eventSlug);
        if(index == -1 ) return null;
        return new Date(this.#events[index].job.nextInvocation());
    }

    #findIndex(lockId, eventSlug){
        const index = this.#events.findIndex(event => event.lockId == lockId && event.eventSlug == eventSlug);
        return index;
    }
}

class ScheduledEvent{
    
    #isStarted;
    rule;

    constructor({
        lockId,
        rule,
        eventSlug,
        handler=()=>{},
        onSchedule=(date)=>{},
        onFail=null,
        from=null,
    }){
        this.lockId = lockId;
        this.eventSlug = eventSlug;

        this.rule = rule;
        this.from = from;

        this.handler = handler;
        this.onSchedule = onSchedule;
        this.onFail = onFail;

        this.#isStarted=false;
        
        /**@type {Job} */
        this.job=null;

        if(!rule){
            throw new Error("A rule must be specified.")
        }
    }

    start(deschedule){
        
        let isStartingAtFromDate = this.from instanceof Date && this.from > new Date();
        const scheduledAt  = isStartingAtFromDate ? this.from : this.nextDate();

        this.job = scheduleJob(scheduledAt, async()=>{            

            if(this.rule instanceof RandomEventRule){

                this.job.reschedule(this.rule.randomDate());
            
            }else if(this.rule instanceof Date){
                deschedule();

            }else if(isStartingAtFromDate){
                isStartingAtFromDate = false;
                this.job.schedule(this.rule)
            }

            await this.callHandler();

            const nextEvent = this.job?.nextInvocation()
            if(nextEvent){
                this.onSchedule(new Date(nextEvent))
            }
        });

        this.onSchedule(new Date(this.job.nextInvocation()))
    }

    async callHandler(){
        try {
            await this.handler();
        } catch (error) {
            if(this.onFail) return this.onFail(error);
            throw error;
        }
    }

    nextDate(){
        if(this.rule instanceof RandomEventRule){
            return this.rule.randomDate();
        }

        return this.rule;
    }

    stop(){
        this.job.cancel();
        this.job = null;
    }

    reschedule(rule, deschedule){
        this.stop();
        
        this.rule = rule;

        this.start(deschedule);
        
    }

    get isStarted(){
        return this.#isStarted;
    }
}

class RandomEventRule{
    constructor(min=1800, max=3600){
        this.min = min;
        this.max = max;
    }

    randomDate(from=new Date()){
        const duration = ChasterRandom.range(this.min, this.max);
        const date = from; 
        date.setMilliseconds(0);
        date.setSeconds(date.getSeconds() + duration)
        return date;
    }
}

class ChasterRandom{
    constructor(){

    }

    static range(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)

    }

    static random(max){
        return Math.floor(Math.random() * max)

    }

    static round(value, nearest=1){
        // if(!nearest) throw new Error("Value must be rounded to 'nearest'")
        return Math.ceil(value / nearest) * nearest;
    }
}

module.exports = { Scheduler, RandomEventRule }