import { LockForKeyholder } from "chaster-api";
import TokenManager from "../tokenManager";
import ChasterLock from "./chasterLock";

declare abstract class ExtensionLock<Config> extends ChasterLock{

    /**
     * 
     * @param lock The information about a lock provided by Chaster
     * @param config The extension configuration for a specifc lock.

     */
    constructor(lock: LockForKeyholder, config: Config);

    /**
     * The extension configuration for a specifc lock.
     */
    public config: Config;

    /**
     * Merges the existing config with a new config
     */
    mergeConfig(config: Config): Config;
}

export = ExtensionLock;