import UserInfoStore from './userInfo'

const store = {
    UserInfo: new UserInfoStore()
}

export const UserInfo = new UserInfoStore();
export default store;