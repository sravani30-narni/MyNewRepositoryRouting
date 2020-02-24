sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function (Controller, JSONModel, History) {
	"use strict";

	return Controller.extend("Cap.PracticeRouting.controller.Route1", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var dataModel = this.getOwnerComponent().getModel("contactdetails");
			this.getView().setModel(dataModel);
			oRouter.getRoute("Route1").attachMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			var dataModel = this.getOwnerComponent().getModel("contactdetails");
			dataModel.getProperty("contactdetails");
			var model = new JSONModel({});
			var selectedArguments = oEvent.getParameter("arguments");
			var data = JSON.parse(selectedArguments.selectedobj);
			model.setData(data);
			this.getView().setModel(model, "formModel");
		},

		onNavBack: function (oEvt) {
			window.history.go(-1);
			// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("Route");
		}
	});
});