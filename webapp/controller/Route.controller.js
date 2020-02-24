sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("Cap.PracticeRouting.controller.Route", {
		onInit: function () {
			var dataModel = this.getOwnerComponent().getModel("contactdetails");
			this.getView().setModel(dataModel);
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.getRoute("Route").attachMatched(this._onObjectMatched, this);
		},

		okButton: function () {
			this.pressDialog.close();
		},

		onPress: function (oEvent) {
			if (!this.pressDialog) {
				this.pressDialog = sap.ui.xmlfragment("Cap.PracticeRouting.view.testData", this);
				this.getView().addDependent(this.pressDialog, this);
				this.pressDialog.setModel(this.getView().getModel("contactdetails"));
			}
			var oSelect = oEvent.getSource().getBindingContext("contactdetails");
			this.pressDialog.setBindingContext(oSelect);
			this.pressDialog.open();
		},

		routingPress: function (oEvent) {
			var spath = oEvent.getSource().getBindingContext("contactdetails").getPath();
			var selectedPath = JSON.stringify(oEvent.getSource().getBindingContext("contactdetails").getProperty(spath));
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Route1", {
				"selectedobj": selectedPath
			});
		}
	});
});