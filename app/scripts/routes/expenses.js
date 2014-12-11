/*global FinancialApplicationFront, Backbone*/

FinancialApplicationFront.Routers = FinancialApplicationFront.Routers || {};

(function() {
    'use strict';

    FinancialApplicationFront.Routers.Expenses = Backbone.Router.extend({
        routes: {
            "read/:id": "getExpense",
            "read": "getExpense",
            "create": "setExpense"

        }

    });

    var expenses_routers = new FinancialApplicationFront.Routers.Expenses();

    expenses_routers.on('route:getExpense', function(id) {

        if (typeof this.id === 'undefined') {
            id = '';
        }

        var Expense = new FinancialApplicationFront.Models.Expenses({id: id});

        Expense.fetch({
            reset: true,
            // url: "C:/wamp/www/financial_application_front/app/newjson.json",
            error: function() {
                console.log("error!!");
            },
            success: function(response) {
                console.log(response);
                console.log("no error");
            }
        });

    });


    expenses_routers.on('route:setExpense', function() {
        var Expense = new FinancialApplicationFront.Models.Expenses({description: "Backbone Book 43", amount: 2});
        Expense.save({}, {
            dataType: 'jsonp',
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
            }
        });
    });


    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
})();
