/*global QUnit*/

sap.ui.define([
	"Cap/PracticeRouting/controller/Route.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Route Controller");

	QUnit.test("I should test the Route controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});