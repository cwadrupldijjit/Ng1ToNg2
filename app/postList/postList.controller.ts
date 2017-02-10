export default class PostListController {
    something: string;
    static inject: Array<string> = ['testCtrl'];
    constructor(private testService: any) {
        this.something = "hello";
        testService.getPosts().then((res: angular.IHttpPromiseCallbackArg<any>) => console.log(res))
    }
}
