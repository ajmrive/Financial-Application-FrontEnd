/*global FinancialApplicationFront, Backbone, JST*/

FinancialApplicationFront.Views = FinancialApplicationFront.Views || {};
(function() {
    'use strict';
    FinancialApplicationFront.Views.Expenses = Backbone.View.extend({
//        template: JST['app/scripts/templates/expenses.hbs'],
//
//        tagName: 'div',
        el: $('#table-expenses-body'),
        template: _.template(
                '<tr>' +
                '<td class="active"><%= id %></td>' +
                '<td class="active"><%= description %></td>' +
                '<td class="active"><%= amount %></td>' +
                '</tr>'
                ),
        initialize: function() {
            this.render();
        },
        render: function() {
            console.log(this);
            var viewModel = this.attributes;
            console.log(viewModel);
            // render the function using substituting the varible 'who' for 'world!'.
            this.$el.append(this.template(
                    {
                        id: viewModel.id,
                        amount: viewModel.amount,
                        description: viewModel.description
                    }
            ));
            //***Try putting your name instead of world.
        }

    });
    
    FinancialApplicationFront.Views.ExpensesClean = Backbone.View.extend({
        el: $('#table-expenses-body'),
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html('');
        }
    });
    
    FinancialApplicationFront.Views.ExpensesForm = Backbone.View.extend({
        el: '#formExtense',
        initialize: function() {
            console.log("initialize");
        },
        events: {
            'submit #save-button-form': 'submitForm'
        },
        submitForm: function(e) {
            var model = this.model;

            this.$el.find('input[inputDescrption]').each(function() {
                    model.set(this.name, this.value);
            });
            this.$el.find('input[inputAmount]').each(function() {
                    model.set(this.name, this.value);
            });
            this.model.save();
//            console.log(this);
//            console.log(e);
//            if (e.which === 13) // enter key
//                this.submit();
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
        }

    });
})();
