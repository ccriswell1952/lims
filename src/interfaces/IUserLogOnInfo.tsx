interface IUserLogOnInfo {
  userInfo: {
    isLoggedOn: boolean;
    userName: string;
    roleIds: Number[];
    labId: number;
    userId: number;
    token: string;
  };
}

export default IUserLogOnInfo;
