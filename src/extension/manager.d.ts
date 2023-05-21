import { Scheduler } from "../scheduler/scheduler";
import ExtensionDefinition from "./definition";

export abstract class ExtensionManager{

    /**
     * This should be used for extensions that only trigger an actions when an input is given.
     * (e.g `Wheel-Of-Fortune`, `Dice`, `Shared-Link`, `Pillory`, `Guess-The-Timer`, `Verification`, `Tasks`)
     * @param extension The extension definition to be managed.
     */
    constructor(extension: ExtensionDefinition);

    /**
     * Property to hold the actual information about an extension.
     */
    public extension: ExtensionDefinition;
}

export abstract class ExtensionManagerScheduler extends ExtensionManager{

    /**
     * Identical to `ExtensionManager` however, this provides further functionality for extensions 
     * that require an event to trigger at a certain time (e.g. `Penalties`, `Random-Events`). 
     * 
     * Certain extensions such as `Hygine Opening`,
     * whilst not requiring such events for its core functionality, does intergrate a penalty system. 
     * @param extension The extension definition to be managed.
     */
    constructor(extension: ExtensionDefinition);

    /**
     * Property to manage scheduled events related to the extension.
     */
    public scheduler: Scheduler;
}