import { LockForKeyholder } from "../../api";
import TokenManager from "../tokenManager";
import ChasterLock from "./chasterLock";

declare class ExtensionLock<Config> extends ChasterLock{
    constructor(tokenManager: TokenManager, lockData: LockForKeyholder, config: Config);

    public config: Config;

}

export = ExtensionLock;