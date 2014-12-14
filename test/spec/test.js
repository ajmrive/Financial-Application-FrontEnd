/* global describe, it */

(function() {
    'use strict';

    describe("App testing init", function() {
        it("should be equal using 'expect'", function() {
            expect(window.FinancialApplicationFront).to.be.a('object');
        });

        it("should be equal using 'expect'", function() {
            expect(FinancialApplicationFront).to.be.a('object');
        });
        it("should be equal using 'expect'", function() {
            expect(FinancialApplicationFront.Models).to.be.a('object');
            console.log(FinancialApplicationFront);
        });

        /**
         * Expenses model testing
         * @type FinancialApplicationFront.Models.Expenses
         */
        var ExpensesModel = {};
        beforeEach(function() {
            ExpensesModel = new FinancialApplicationFront.Models.Expenses({});
        });

        it('Testing Expenses Model is object', function() {
            expect(ExpensesModel).to.be.a('object');
        });
        it("should default the status to 'description'", function() {
            ExpensesModel.get('description').should.equal("");
        });
        it("should default the amount to 0", function() {
            ExpensesModel.get('amount').should.equal(0);
        });
        it("test getCustomUrl function for read", function() {
            expect(ExpensesModel.getCustomUrl('read')).to.equal('http://localhost/financial/expenses');
        });

        it("test description in view", function() {
            var ExpensesModel = new FinancialApplicationFront.Models.Expenses({id:2,description: 'Hola testing', amount: 0});
            var ExpensesView = new FinancialApplicationFront.Views.Expenses(ExpensesModel);
            expect(ExpensesView.$el.selector).to.equal("#table-expenses-body");
        });


    });
})();
