import { observable , action } from 'mobx'

class Store {
    @observable numbers = 0;

    @action.bound adds(){
        this.numbers += 1;
    }
}

export default new Store();