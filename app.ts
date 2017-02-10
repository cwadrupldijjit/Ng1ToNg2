var angular = require('angular');

var app = angular.module('testApp', [
    require('angular-ui-router')
]);

import mainCtrl from './app/app.controller';
import PostListController from './app/postList/postList.controller';
import PostListComponent from './app/postList/postList.component';
import AddPostController from './app/addPost/addPost.controller';
import AddPostComponent from './app/addPost/addPost.component';
import mainComponent from './app/app.component';
import {testService} from './test.service';
import routes from './routes';

app.config(routes);

app.controller('mainCtrl', mainCtrl);
app.controller('PostListController', PostListController);
app.controller('AddPostController', AddPostController);

app.component('postListComponent', new PostListComponent);
app.component('addPostComponent', new AddPostComponent);
app.component('mainComponent', new mainComponent());

app.service('testService', testService);
