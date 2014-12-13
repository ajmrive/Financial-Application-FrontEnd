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

            $('#save-button-form').on('click', function() {

//                var inputDescription = this.find('#inputDescription');
//                if (){
//                    
//                }
//
//                this.find('#inputAmount').each(function() {
//                    newExpense.set(this.name, this.value);
//                });

            });

        },
        events: {
            //'submit #save-button-form': 'submitForm',
            'click #save-button-form': 'submitForm'
        },
        submitForm: function(e) {
            console.log(this);
            var newExpense = new FinancialApplicationFront.Models.Expenses();

            this.$el.find('#inputDescription').each(function() {
                newExpense.set('description', this.value);
            });
            this.$el.find('#inputAmount').each(function() {
                newExpense.set('amount', this.value);
            });
            console.log(newExpense);

            newExpense.save({}, {
//            dataType: 'jsonp',
                success: function(model, respose, options) {
                    console.log(model);
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
        }

    });
})();
