import AddPostController from './addPost.controller';

export default class AddPostComponent {
    restrict: string = 'E';
    controller: any = AddPostController;
    templateUrl: string = './app/addPost/addPost.template.html'
    bindToController: any = {
        add: '&'
    }
    controllerAs: string = '$ctrl'
    
    constructor() {}

}