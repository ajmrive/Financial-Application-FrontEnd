/*global FinancialApplicationFront, Backbone*/

FinancialApplicationFront.Models = FinancialApplicationFront.Models || {};

(function () {
    'use strict';

    FinancialApplicationFront.Models.Expenses = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
