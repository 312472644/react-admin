import { observable, action } from 'mobx';

class UserInfo {

    @observable userInfo = '';

    @observable isLogin = false;

    @action
    setUserInfo(param) {
        this.userInfo.userName = { ...param };
        sessionStorage.userInfo = JSON.stringify(param);
    }

    @action
    setLogin(param) {
        this.isLogin = param;
    }
}

export default UserInfo;