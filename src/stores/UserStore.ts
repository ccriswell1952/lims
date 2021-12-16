import IUserLogOnInfo from "../../src/interfaces/IUserLogOnInfo";
import { Store } from "pullstate";

const UserStore = new Store<IUserLogOnInfo>({
  userInfo: {
    isLoggedOn: false,
    userName: "",
    roleIds: [],
    labId: -1,
    userId: -1,
    ticket: "",
  },
});

export default UserStore;
