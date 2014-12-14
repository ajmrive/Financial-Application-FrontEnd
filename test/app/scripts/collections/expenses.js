/*global FinancialApplicationFront, Backbone*/

FinancialApplicationFront.Collections = FinancialApplicationFront.Collections || {};

(function () {
    'use strict';

    FinancialApplicationFront.Collections.Expenses = Backbone.Collection.extend({

        model: FinancialApplicationFront.Models.Expenses

    });

})();
