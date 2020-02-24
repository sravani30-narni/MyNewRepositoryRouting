/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Cap/PracticeRouting/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});