sap.ui.define(["com/rikosjett/localVSCodeDemo/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.rikosjett.localVSCodeDemo.controller.MainView", {
        
        onInit: function(){
            var dataModel = this.getOwnerComponent().getModel();
            this.getView().setModel(dataModel, "DataModel");
        },

        pokemonListFactory: function(sId, oContext){
            console.log(sId, oContext)
            console.log(this.getModel().getData())
            console.log(oContext.getPath())
            
            console.log(this.getModel().getProperty("/pokemon"))
            console.log(oContext.getProperty("/name"))
        }
    });
});
