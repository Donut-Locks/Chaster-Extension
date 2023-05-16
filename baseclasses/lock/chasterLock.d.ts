import { LockForKeyholder } from "../../api";
import TokenManager from "../tokenManager";

export type ChasterExtensions = 'link' | 'pillory' | 'dice' | 'wheel-of-fortune' | 'tasks' | 'penalty' | 'temporary-opening' | 'verification-picture' | 'random-events' | 'guess-timer' | 'cards' | 'locktober'

declare class ChasterLock{

    constructor(tokenManager: TokenManager, lock: LockForKeyholder)
    
    public tokenManager: TokenManager;
    
    public lockData: LockForKeyholder;

    getExtension(slug: ChasterExtensions): ExtensionPartyForPublic; 

    isLocked(): boolean;
}

export = ChasterLock;