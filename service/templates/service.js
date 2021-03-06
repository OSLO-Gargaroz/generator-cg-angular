(function() {
    'use-strict';

    /**
     * @ngdoc service
     * @name <%= appname %>.service:<%= _.camelize(name) %>
     * @description
     * 
     * @requires
     */
    angular
    .module('<%= appname %>')
    .factory('<%= _.camelize(name) %>',<%= _.camelize(name) %>);

    <%= _.camelize(name) %>.$injector = [];

    function <%= _.camelize(name) %>() {

        // PRIVATE VARIABLES


        // PUBLIC VARIABLES AND FUNCTIONS
        var <%= _.camelize(name) %> = {};

        return <%= _.camelize(name) %>;

        // PUBLIC FUNCTIONS IMPLEMENTATIONS


        // PRIVATE FUNCTIONS

    }

})();