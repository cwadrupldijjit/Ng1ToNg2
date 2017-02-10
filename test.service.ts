export interface IService {
}
export class testService implements IService {
    static inject: Array<string> = ['$http'];
    constructor(private $http: angular.IHttpService) {
    }

    getPosts() {
        return this.$http.get('https://jsonplaceholder.typicode.com/posts')
    }

}