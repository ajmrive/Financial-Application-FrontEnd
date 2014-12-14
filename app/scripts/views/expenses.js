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

    /**
     * 
     */
    FinancialApplicationFront.Views.ExpensesClean = Backbone.View.extend({
        el: $('#table-expenses-body'),
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html('');
        }
    });

    /**
     * 
     */
    FinancialApplicationFront.Views.ExpensesForm = Backbone.View.extend({
        el: '#formExtense',
        initialize: function() {
            console.log("initialize");
            console.log(this);
            var expenseForm = this;
            $('#inputDescription').on('change', function() {
                 expenseForm.$el.find('#inputDescriptionError').hide();
                 expenseForm.$el.find('#inputAmountError').hide();
            });
            $('#inputAmount').on('change', function() {
                 expenseForm.$el.find('#inputAmountError').hide();
                 expenseForm.$el.find('#inputDescriptionError').hide();
            });

        },
        events: {
            //'submit #save-button-form': 'submitForm',
            'click #save-button-form': 'submitForm'
        },
        submitForm: function(e) {
            console.log(this);
            var expenseForm = this;
            var newExpense = new FinancialApplicationFront.Models.Expenses();

            expenseForm.$el.find('#inputDescription').each(function() {
                if (this.value === '' || this.value === null){
                    expenseForm.$el.find('#inputDescriptionError').show();
                    throw new Error("The description is empty!");;
                }
                newExpense.set('description', this.value);
            });
            expenseForm.$el.find('#inputAmount').each(function() {
                console.log(this.value);
                this.value = Number(this.value);
                console.log(this.value);
                if (this.value === '' || this.value === null || (isNaN(this.value))){
                    expenseForm.$el.find('#inputAmountError').show();
                    throw new Error("The amount must be a number!");;
                }
                newExpense.set('amount', this.value);
            });

            newExpense.save({}, {
//            dataType: 'jsonp',
                success: function(model, respose, options) {
                    console.log(model);
                    Backbone.history.navigate('read');
                    Backbone.history.loadUrl();
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
        }

    });
})();
