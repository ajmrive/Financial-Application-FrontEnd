/*global FinancialApplicationFront, Backbone*/

FinancialApplicationFront.Models = FinancialApplicationFront.Models || {};

(function() {
    'use strict';

    FinancialApplicationFront.Models.Expenses = Backbone.Model.extend({
        //url: 'http://localhost/financial/expenses',
        url: '/financial_application/public/expenses',

        initialize: function() {
            console.log('Expenses has been called...');

        },
        defaults: {
            description: "",
            amount: 0
        },
        validate: function(attrs, options) {
        },
        parse: function(response, options) {
            return response;
        },
        // Lets create function which will return the custom URL based on the method type
        getCustomUrl: function(method) {
            switch (method) {
                case 'read':
                    console.log(this.id);
                    if (typeof this.id === 'undefined' || this.id === null) {
                        return this.url;
                        break;
                    }
                    return this.url + '/' + this.id;
                    break;

                case 'create':
                    return this.url;
                    break;
            }
        },
        // Now lets override the sync function to use our custom URLs
        sync: function(method, model, options) {
            options || (options = {});
            options.url = this.getCustomUrl(method.toLowerCase());

            // Lets notify backbone to use our URLs and do follow default course
            return Backbone.sync.apply(this, arguments);
        }
    });

})();




