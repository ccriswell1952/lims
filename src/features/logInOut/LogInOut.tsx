import React, { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import UserStore from "../../stores/UserStore";
import { createAsyncAction, successResult, errorResult } from "pullstate";
import { navigationItems } from "../../components/navigation/navigationData";
import { useNavigate } from "react-router-dom";

async function waitSeconds(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
const handleLogin = createAsyncAction(async () => {
  try {
    // we'll do something like this to get the actual log in.
    //const user = await (await fetch("https://[Our API Goes Here]]/api/")).json();
    await waitSeconds(Math.random() * 2);
    UserStore.update((s) => {
      s.userInfo.isLoggedOn = true;
      s.userInfo.labId = 1;
      s.userInfo.roleIds = [1, 3];
      s.userInfo.ticket = "asdfbgereter";
      s.userInfo.userId = 1;
      s.userInfo.userName = "charles.criswell";
    });
  } catch (e: any) {
    return errorResult([], `There was an error... ( ${e.message} )`);
  }

  return successResult();
});

const LogInOut = () => {
  let navigate = useNavigate();
  //console.log("in loginout component", window.location.pathname);
  useEffect(() => {
    if (window.location.pathname === "/logoff") {
      UserStore.update((s) => {
        s.userInfo.isLoggedOn = false;
        s.userInfo.labId = -1;
        s.userInfo.roleIds = [];
        s.userInfo.ticket = "";
        s.userInfo.userId = -1;
        s.userInfo.userName = "";
      });
      //console.log("logged off");
      navigate("/logon");
    }
  });
  const [started, finished, result, updating] = handleLogin.useWatch();
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} rowSpacing={3}>
          <Grid item xs={10}>
            <h2>Log In</h2>
          </Grid>
          <Grid item xs={12}>
            Log in page content goes here
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              id="btn-log-on-off"
              onClick={() => handleLogin.run({}, { treatAsUpdate: true })}
              disabled={(started && !finished) || updating}
              title="Log In"
            >
              Log In
            </Button>
            {started && !finished && (
              <div className="loading">Please wait...</div>
            )}
            {finished && !result.error && navigate("/")}
            {finished && result.error && (
              <div className="error-block">{result.message}</div>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LogInOut;
