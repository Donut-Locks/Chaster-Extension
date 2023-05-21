import { ExtensionPartyForPublic, LockForKeyholder } from "chaster-api";

export type ChasterExtensions = 'link' | 'pillory' | 'dice' | 'wheel-of-fortune' | 'tasks' | 'penalty' | 'temporary-opening' | 'verification-picture' | 'random-events' | 'guess-timer' | 'cards' | 'locktober'

declare class ChasterLock{
    
    /**
     * @param {LockForKeyholder} lock The information about a lock provided by Chaster
     */
    constructor(lock: LockForKeyholder)
        
    /**
     * The information about the lock provided by Chaster
     */
    public data: LockForKeyholder;

    /**
     * Get a specific chaster extension.
     */
    getExtension(slug: ChasterExtensions): ExtensionPartyForPublic; 

    /**
     * Has the wearer trusted the keyholder.
     */
    isTrusted(): boolean;
    
    /**
     * Is the wearer actively locked.
     */
    isLocked(): boolean;

}

export = ChasterLock;