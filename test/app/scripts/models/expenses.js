/*global FinancialApplicationFront, Backbone*/

FinancialApplicationFront.Models = FinancialApplicationFront.Models || {};

(function() {
    'use strict';

    FinancialApplicationFront.Models.Expenses = Backbone.Model.extend({
        url: 'http://localhost/financial/expenses',
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


    // Lets perform a create operation [CREATE]
//    var Expense = new FinancialApplicationFront.Models.Expenses({description: "Backbone Book 43", amount: 2});
//    Expense.save({}, {
//        dataType: 'jsonp',
//        success: function(model, respose, options) {
//            console.log("The model has been saved to the server");
//        },
//        error: function(model, xhr, options) {
//            console.log("Something went wrong while saving the model");
//        }
//    });

//    // Now let us try to retrieve a book [READ]
//    var Expense = new FinancialApplicationFront.Models.Expenses({id: 1});
//    Expense.fetch({
//        //dataType: 'jsonp',
//        //add: true,
////        crossDomain:true, 
//        //refresh: true,
//        reset: true,
//        
////        add:true,
//        // url: "C:/wamp/www/financial_application_front/app/newjson.json",
//        error: function() {
//            console.log("error!!");
//        },
//        success: function(response) {
//            console.log(response);
//            console.log("no error");
//        }
//    });

})();




