const ChasterLock = require("./chasterLock");

/**
 * @abstract
 * @class 
 */
module.exports = class ExtensionLock extends ChasterLock{

    /**
     * 
     * @param {import('../tokenManager')} tokenManager 
     * @param {import("../../api").LockForKeyholder} lock 
     * @param {Object} config 
     */
    constructor(tokenManager, lock, config={}){
        super(tokenManager, lock);

        this.config = config;
    }
}