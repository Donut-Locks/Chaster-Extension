const { Scheduler } = require('../scheduler/scheduler');

class ExtensionManager{

    /**
     * 
     * @param {import('./definition')} extension 
     */
    constructor(extension){

        if(this.constructor == ExtensionManager){
            throw new Error("Abstract classes cannot be instantiated.");
        }

        this.extension = extension;

        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }
}

class ExtensionManagerScheduler extends ExtensionManager{

    /**
     * 
     * @param {import('./definition')} extension 
     */
    constructor(extension){
        super(extension);

        if(this.constructor == ExtensionManager){
            throw new Error("Abstract classes cannot be instantiated.");
        }
        
        this.scheduler = new Scheduler();
    }
}

module.exports = {
    ExtensionManager,
    ExtensionManagerScheduler
}