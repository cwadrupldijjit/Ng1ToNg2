import PostListController from './postList.controller';

export default class PostListComponent {
    controller: any = PostListController;
    templateUrl: string = './app/postList/postList.template.html'
    bindings: any = {
        posts: '=',
        remoteposts: '='
    }
    
    constructor() {
    }

}