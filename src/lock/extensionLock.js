const ChasterLock = require("./chasterLock");

/**
 * @abstract
 * @class 
 */
module.exports = class ExtensionLock extends ChasterLock{

    /**
     * 
     * @param {import("chaster-api").LockForKeyholder} lock 
     * @param {Object} config 
     */
    constructor(lock, config={}){
        super(lock);

        /**
         * @type {Object}
         */
        this.config = config;
    }

    mergeConfig(config={}){
        Object.assign(this.config, config)
    }
}