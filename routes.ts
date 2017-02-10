import mainCtrl from './app/app.controller';

export default function routes($urlRouterProvider: angular.ui.IUrlRouterProvider, 
                               $stateProvider: angular.ui.IStateProvider,
                               $compileProvider: angular.ICompileProvider) {

    $compileProvider.preAssignBindingsEnabled(true);
                    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
        })

        .state('list', {
            url: '/list',
            template: '<post-list-component></post-list-component>',
        })
        .state('add', {
            url: '/add',
            template: '<add-post-component></add-post-component>',
        })
}