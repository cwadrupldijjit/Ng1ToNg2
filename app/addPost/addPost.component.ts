import AddPostController from './addPost.controller';

export default class AddPostComponent {
    controller: any = AddPostController;
    templateUrl: string = './app/addPost/addPost.template.html'
    bindings: any = {
        add: '&'
    }
    
    constructor() {}

}