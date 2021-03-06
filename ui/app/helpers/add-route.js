export default function(app) {

  return function(name, url, templateUrl, controller) {

    // Add the route to ui-router
    app.config(['$stateProvider', function($stateProvider) {

      var opts = {
        url: url,
        templateUrl: '/app/views/' + templateUrl
      }

      if (controller) {

        opts.controller = controller

      }

      $stateProvider.state(name, opts)

    }])

  }

}
