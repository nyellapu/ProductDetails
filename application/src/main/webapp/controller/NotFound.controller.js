sap.ui.define([
		"mckesson/eu/ProductDetails/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("mckesson.eu.ProductDetails.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);