import React from "react";
import UserStore from "../../stores/UserStore";
const LogOut = () => {
  const updateUserStore = function () {
    UserStore.update((s) => {
      s.userInfo.isLoggedOn = false;
      s.userInfo.labId = -1;
      s.userInfo.roleIds = [];
      s.userInfo.token = "";
      s.userInfo.userId = -1;
      s.userInfo.userName = "";
    });
  };
  React.useEffect(() => {
    updateUserStore();
  }, []);
  return (
    <div className="file-not-found">
      <h2>You are logged out</h2>
      <p>bla bla bla.</p>
    </div>
  );
};

export default LogOut;
