export interface ScheduleOptions{

    /**
     * The identifier of the job.
     */
    lockId: string,

    /**
     * The rule the schedule will follow, uses standard [node-scheduler](https://www.npmjs.com/package/node-schedule) documentation alongside `RandomEventRule`
     */
    rule: string,

    /**
     * The type of event to be triggered
     */
    eventSlug: string,

    /**
     * The function which will be called each job trigger 
     */
    handler: ()=>{},

    /**
     * When provided this `onSchedule()` will return the next job invocation each call
     */
    onSchedule?: (date: Date) => {},

    /**
     * If the handler unexpectedly fails and onFail() is provided, this will be called 
     */
    onFail?: (error: Error) => {},

    /**
     * When a job is scheduled, this is the first scheduled date a job will occur, after triggered, the `rule` property will be used instead  
     */
    from?: Date,
}

export type SchedulerRules = string | Date | RandomEventRule; 

declare class Scheduler{
    
    /**
     * `Scheduler` is a class which stores `node-schedule` jobs and provides utlity functions to manage such jobs.
     */
    constructor();

    /**
     * Schedule a `node-schedule` job
     * @param {ScheduleOptions} options Used to configure a job 
     */
    schedule(options: ScheduleOptions): void;

    /**
     * Deschedules an already scheduled job for a lock with a specific job type
     * @param lockId The id of the lock the job is attatched to.
     * @param eventSlug The job type, helps to identifiy locks with multiple jobs.
     */
    deschedule(lockId: string, eventSlug: string): void;

    /**
     * Deschedules all scheduled job for a single lock
     * @param lockId The id of the lock the job is attatched to.
     */
    descheduleAll(lockId: string): void;

    /**
     * Reschedule an already scheduled job
     * @param lockId The id of the lock the job is attatched to.
     * @param eventSlug The job type, helps to identifiy locks with multiple jobs.
     * @param rule The rule the reschedule job will follow.
     */
    reschedule(lockId: string, eventSlug: string, rule: SchedulerRules): void;

    /**
     * The date of when a job for a lock with a specific job type will occur
     * @param lockId The id of the lock the job is attatched to.
     * @param eventSlug The job type, helps to identifiy locks with multiple jobs. 
     */
    nextEventTrigger(lockId: string, eventSlug: string): Date;
}

class RandomEventRule{

    /**
     * @param min The miniumum number of seconds for an event to trigger
     * @param max The maximum number of seconds for an event to trigger
     */
    constructor(min: number = 1800, max: number = 3600);

    /**
     * The miniumum number of seconds for an event to trigger
     */
    public min: number;

    /**
     * The maximum number of seconds for an event to trigger
     */
    public max: number;

    /**
     * Adds a random amount of seconds from min to mix
     * @param {Date} from 
     */
    randomDate(from: Date): Date;
}

class ChasterRandom{

    /**
     * Obtain a random integer from `min` to `max`
     * @param min The starting range
     * @param max The end range
     */
    static range(min: number, max: number): number

    /**
     * Obtain a value from `0` to `max`
     * @param max The maximum range
     */
    static random(max: number): number

    /**
     * 
     * @param value Value to be rounded
     * @param nearest Value to rounded to  
     */
    static round(value: number, nearest: number = 1): number
}
