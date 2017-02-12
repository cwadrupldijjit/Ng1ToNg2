import mainCtrl from './app/app.controller';

export default function routes($urlRouterProvider: angular.ui.IUrlRouterProvider, 
                               $stateProvider: angular.ui.IStateProvider,
                               $compileProvider: angular.ICompileProvider) {

    // $compileProvider.preAssignBindingsEnabled(true);
                    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
        })

        .state('blog', {
            url: '/blog',
            template: '<main-component></main-component>',
        })
        .state('blog.list', {
            url: '/list',
            template: '<post-list-component posts="$ctrl.posts" remoteposts="$ctrl.remotePosts"></post-list-component>',
        })
        .state('blog.add', {
            url: '/add',
            template: '<add-post-component add="$ctrl.add(post)"></add-post-component>',
        })
}