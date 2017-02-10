export interface IPost{
    title: string;
    body: string;
}

export default class MainCtrl {
    something: string;
    posts: Array<IPost> = [];

    static inject: Array<string> = ['testCtrl'];
    constructor(private testService: any) {
        this.something = "hello";
        testService.getPosts().then((res: angular.IHttpPromiseCallbackArg<any>) => console.log(res))
    }

    add(post: IPost) {
        this.posts.push(post);
    }
}
