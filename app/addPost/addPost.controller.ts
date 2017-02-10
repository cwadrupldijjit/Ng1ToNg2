export default class AddPostController {
    post: any;
    static inject: Array<string> = ['testService'];
    constructor(private testService: any) {
        // testService.getPosts().then((res: angular.IHttpPromiseCallbackArg<any>) => console.log(res))
    }

    addToList() {
        console.log(this)
        // this.add({post: this.post})
    }

}
