sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.rikosjett.localVSCodeDemo.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.rikosjett.localVSCodeDemo",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
