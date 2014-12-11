/*global FinancialApplicationFront, $*/


window.FinancialApplicationFront = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: function () {
        'use strict';
        console.log('Hello from routers!');
        
    },
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    FinancialApplicationFront.init();
});
