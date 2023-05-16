const { scheduleJob, Job } = require("node-schedule");

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
        if(event.rule < date || event.from < date) throw new Error("Event trigger date set before current date.");

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
        console.log("Events Scheduled: " + this.#events.length);
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
    }

    start(deschedule){
        this.#isStarted = true;

        const isFrom = this.from instanceof Date && this.from.getTime() > new Date().getTime();
        const scheduledAt  = isFrom ? this.from : this.nextDate();

        this.job = scheduleJob(scheduledAt, async()=>{            

            try {
                if(this.rule instanceof RandomEventRule){
                    const reschedule = this.rule.randomDate();
                    this.job.reschedule(reschedule);
                }else if(isFrom == true && (this.rule instanceof Date) == false){
                    return this.start(deschedule);
                }

                await this.handler();
                //Job has been descheduled, make sure we dont execute this function
                if(!this.job) return;

                if(this.rule instanceof Date){
                    this.#isStarted = false;
                    return deschedule()
                }

                this.onSchedule(new Date(this.job.nextInvocation()))

            } catch (error) {
                if(this.onFail) return this.onFail(error);
                throw error;
            }
        });

        this.onSchedule(new Date(this.job.nextInvocation()))
    }

    nextDate(){
        if(this.rule instanceof RandomEventRule){
            return this.rule.randomDate();
        }

        return this.rule;
    }

    stop(){
        this.#isStarted = false;
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