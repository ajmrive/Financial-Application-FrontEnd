/*global FinancialApplicationFront, Backbone*/

FinancialApplicationFront.Routers = FinancialApplicationFront.Routers || {};

(function() {
    'use strict';

    FinancialApplicationFront.Routers.Expenses = Backbone.Router.extend({
        routes: {
            "read/:id": "getExpense",
            "read": "getExpense",
            "create": "setExpense",
            "clean": "cleanTable"
        }

    });

    var expenses_routers = new FinancialApplicationFront.Routers.Expenses();

    expenses_routers.on('route:cleanTable', function(id) {
        //clean table
        var modelViewClean = new FinancialApplicationFront.Views.ExpensesClean();
    });

    expenses_routers.on('route:getExpense', function(id) {

        if (typeof id === 'undefined') {
            id = null;
        }

        var Expense = new FinancialApplicationFront.Models.Expenses({id: id});

        Expense.fetch({
            reset: true,
            // url: "C:/wamp/www/financial_application_front/app/newjson.json",
            error: function() {
                console.log("error!!");
            },
            success: function(response) {
                console.log(id);
                if (id !== null) {
                    var expense_response = new FinancialApplicationFront.Models.Expenses({
                        id: response.attributes.id,
                        amount: response.attributes.amount,
                        description: response.attributes.description
                    });

                    console.log(expense_response);
                    //clean table
                    var modelViewClean = new FinancialApplicationFront.Views.ExpensesClean();
                    var modelView = new FinancialApplicationFront.Views.Expenses(expense_response);

                }
                else {

                    //clean table
                    var modelViewClean = new FinancialApplicationFront.Views.ExpensesClean();

                    var Expense = new FinancialApplicationFront.Models.Expenses({});
                    var Expenses = Backbone.Collection.extend({
                        model: Expense
                    });

                    var expenses_length = response.attributes._embedded.expenses.length;
                    var expenses_ar_tmp = [];

                    for (var i = 0; i < expenses_length; i++) {
                        var tmp_expense = response.attributes._embedded.expenses[i];

                        var expense_response = new FinancialApplicationFront.Models.Expenses({
                            id: tmp_expense.id,
                            amount: tmp_expense.amount,
                            description: tmp_expense.description
                        });

                        expenses_ar_tmp.push(expense_response);
                        var modelView = new FinancialApplicationFront.Views.Expenses(expense_response);
                    }

                    //var myExpenses = new Expenses(expenses_ar_tmp);

                    //var modelView = new FinancialApplicationFront.Views.Expenses(myExpenses);

                }
            }
        });

    });


    expenses_routers.on('route:setExpense', function() {
        var Expense = new FinancialApplicationFront.Models.Expenses({description: "Backbone Book 43", amount: 2});
        Expense.save({}, {
//            dataType: 'jsonp',
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
