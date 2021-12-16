interface IUserLogOnInfo {
  userInfo: {
    isLoggedOn: boolean;
    userName: string;
    roleIds: Number[];
    labId: number;
    userId: number;
    ticket: string;
  };
}

export default IUserLogOnInfo;
