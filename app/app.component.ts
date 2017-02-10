import MainCtrl from './app.controller';

export default class mainComponent {
    controller: any = MainCtrl;
    templateUrl: string = './app/component.html'
    bindings: any = {
        str: '<'
    }
    
    constructor() {
    }

}