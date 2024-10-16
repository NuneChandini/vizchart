sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("vizchart.controller.View1", {
        onInit: function () {
         var omodel = this.getOwnerComponent().getModel("json");
         this.getView().setModel(omodel);
        }
    });
});
