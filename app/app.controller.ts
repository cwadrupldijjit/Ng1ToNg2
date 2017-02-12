export interface IPost{
    title: string;
    body: string;
}

export default class MainCtrl {
    something: string;
    posts: Array<IPost> = [];
    remotePosts: Array<any>;

    static inject: Array<string> = ['testCtrl'];
    constructor(private testService: any) {
        this.something = "hello";
        testService.getPosts().then((res: angular.IHttpPromiseCallbackArg<any>) => this.remotePosts = res.data)
    }

    add(post: IPost) {
        this.posts.push(post);
    }
}
