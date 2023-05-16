class ExtensionDefinition{

    /**
     * @param {import('./interface').ExtensionDefinitionConstructor} definition 
     */
    constructor({
        isEnabled=false,
        slug="api-", 
        displayName, 
        subtitle, 
        summary, 
        icon,
        availableModes=['unlimited'],
        defaultRegularity=3600,
        enableStartTimeout=false,
        defaultConfig={},
        configurationDescription=null,
    }={}){
        
        //-------------------------------------------------
        /** Documentation - https://docs.chaster.app/api/extensions-api/getting-started */
        //-------------------------------------------------
        
        /**
         * You can choose to enable or disable your extension to the public. If the extension is disabled, new people will no longer be able to create locks containing your extension, nor will they be able to load shared locks with your extension enabled. Old locks with your extension enabled will still be active.
         * @type {boolean}
         */
        this.isEnabled = isEnabled;
        
        /**
         * The slug is the unique identifier of your extension, and must be filled in at the time of creation. Once created, it cannot be modified. The slug of an extension always starts with `api-`, and must only contain alphanumeric characters, and dashes.
         * @type {string}
         */
        this.slug = slug;

        /**
         * This is the name of the extension, which will be displayed to other users in the list of extensions, and in the description of locks.
         * @type {string}
         */
        this.displayName = displayName;

        /**
         * This is the subtitle of the extension, it is a short sentence explaining the concept of your extension, and will be displayed in the list of extensions.
         * @type {string}
         */
        this.subtitle = subtitle;

        /**
         * This is the description of your extension, it is a paragraph explaining how your extension works, and what its purpose is.
         * @type {string}
         */
        this.summary = summary;
        
        /**
         * The icon you choose must be one of the regular icons available on FontAwesome 5, which you can find list [here](https://fontawesome.com/icons?d=gallery&p=1&s=regular). The icon will be displayed in the list of extensions.
         */
        this.icon = icon;

        /**
         * An extension can offer different modes, depending on the way it works and the actions to be performed. An action is a user interaction, for example in Chaster extensions, spinning the wheel of fortune, assigning a task, or checking in. The frequency of the actions can be defined and limited according to the mode chosen by the user among the modes offered by the extension.
         * - Non-cumulative: For extensions where the user can perform actions at a certain frequency, the non-cumulative mode can be selected. When the action is performed, the user will have to wait for the time specified in `regularity` before being able to perform the action again.
         * - Cumulative: The number of possible actions to perform is cumulative from the beginning of the lock, according to the time set in `regularity`.
         * - Unlimited: The user can perform the action in an unlimited way.
         * 
         * For extensions that do not require user action (random events, penalties), the default mode is Unlimited.
         * @type {import('../../api').ExtensionConfigForPublicModeEnum[]}
         */
        this.availableModes = availableModes;

        /**
         * The default regularity displayed in the configuration, if the user chooses the cumulative or non-cumulative mode. If you enable only Unlimited mode, you don't need to fill this parameter.
         * @type {number}
         */
        this.defaultRegularity = defaultRegularity;
        
        /**
         * If this option is enabled, once the lock is created the user will have to wait the time configured in `regularity` before he can perform his first action. By default, the option is disabled, and the user can perform the action immediately after creating the lock.
         * @type {boolean}
         */
        this.enableStartTimeout = enableStartTimeout;
        
        /**
         * A JSON object representing the default configuration of a session.
         * @type {object}
         */
        this.defaultConfig = defaultConfig; //Custom JSON object for personal details

        /**
         * A Handlebars template displaying the configuration description.
         * 
         * Chaster displays a text on each lock page describing the configuration of the extension. The Handlebars template takes as input the configuration object of your extension, and should return as output the configuration description, in textual form.
         * @type {string}
         */
        this.configurationDescription = configurationDescription; // Minimal information, unknown until chaster improves the documentation

        if(!slug.startsWith("api-") || slug.length <= "api-".length){
            throw new SyntaxError("Slug must start with `api-` and follow with an extension slug.")
        }

        checkRequiredParams({
            displayName,
            subtitle,
            summary,
            icon
        })
    }    
}


function checkRequiredParams(params) {
    for (const [paramName, paramValue] of Object.entries(params)) {
        if (paramValue === undefined || paramValue === null) {
            throw new Error(`ExtensionDefinition requires a ${paramName}.`);
        }
    }
}


module.exports = ExtensionDefinition;