/*global FinancialApplicationFront, Backbone, JST*/

FinancialApplicationFront.Views = FinancialApplicationFront.Views || {};

(function () {
    'use strict';

    FinancialApplicationFront.Views.Expenses = Backbone.View.extend({

        template: JST['app/scripts/templates/expenses.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
