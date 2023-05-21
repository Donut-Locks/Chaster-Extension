
module.exports = class ChasterLock{


    /**
     * @param {import("chaster-api").LockForKeyholder} data
     */
    constructor(data={}){

        /**@type {import("chaster-api").LockForKeyholder} */
        this.data = data;
    }

    /**
     * Get a specific extension from the lock.
     * @param {import("./chasterLock").ChasterExtensions} extension 
     * @returns {import("chaster-api").ExtensionPartyForPublic}
     */
    getExtension(extension){
        return this.data.extensions.find(e => e.slug == extension);
    }

    /**
     * Has the wearer trusted the keyholder.
     * @returns {boolean}
     */
    isTrusted(){
        return this.data.trusted == true;
    }

    /**
     * Is the wearer actively locked.
     * @returns {boolean}
     */
    isLocked(){
        return this.data.status == 'locked';
    }   
}