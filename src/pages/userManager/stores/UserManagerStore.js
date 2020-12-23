import { observable, action } from 'mobx';
import axios from '../../../utils/axios';
import '../data';

class UserManagerStore {
    @observable queryName = '';
    @observable loading = false;
    @observable originalList = [];
    @observable tableList = [];

    @action
    getTableList() {
        this.loading = true;
        axios.get('/mock/user/manager').then((res) => {
            this.originalList = res.data.userinfo;
            this.tableList = res.data.userinfo;
        }).finally(() => {
            this.loading = false;
        })
    }

    @action
    queryData() {
        debugger
        this.tableList = this.originalList.filter(item => {
            return item.name.toString().includes(this.queryName);
        })
    }

    @action
    setInputValue(e) {
        const { value } = e.target;
        this.queryName = value;
    }

    @action
    reset() {
        this.queryName = '';
        this.getTableList();
    }
}

export default UserManagerStore;