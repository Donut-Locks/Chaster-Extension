module.exports = class ChasterLock{


    constructor(tokenManager, lock={}){
        this.tokenManager = tokenManager;
        this.lockData = lock;

    }

    getExtension(extension){
        return this.lockData.extensions.find(e => e.slug == extension);
    }

    isLocked(){
        return this.lockData.trusted == true;
    }
}