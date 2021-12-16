import React, { useState } from "react";
import { common } from "@mui/material/colors";
import {
  Toolbar,
  Menu,
  AppBar,
  Button,
  MenuItem,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import { navigationItems, INavHasChildrenObj } from "./navigationData";
// import ShortCutLegand from '../../components/shortCutLegand/ShortCutLegand';
import UserStore from "../../stores/UserStore";

const hasChildrenObj = (parentMenuId: number): INavHasChildrenObj => {
  let returnChildObj: INavHasChildrenObj = {
    hasChildren: false,
    children: [],
  };
  // get the parentMenu object with the passed parentMenuId
  const parentMenuObj = navigationItems.filter(
    (navItem) => navItem.parentMenu.parentMenuId === parentMenuId
  )[0];
  if (!parentMenuObj) {
    returnChildObj.hasChildren = false;
    return returnChildObj;
  }
  // get the parent menu's menu items that are ACTIVE
  const childMenuObj = parentMenuObj.parentMenu.childMenus.filter(
    (child) => child.menuItem.active === true
  );

  if (childMenuObj === undefined) {
    returnChildObj.hasChildren = false;
  } else if (childMenuObj.constructor !== Array) {
    returnChildObj.hasChildren = false;
  } else if (childMenuObj.length === 0) {
    returnChildObj.hasChildren = false;
  } else {
    returnChildObj.hasChildren = true;
  }

  returnChildObj.children = childMenuObj;
  return returnChildObj;
};

export default function Header() {
  const { userInfo } = UserStore.useState();
  //console.log("user info", userInfo);
  const [anchorEl, setAnchorEl] = useState<any>([]);

  const handleClick = (index: number, event: React.MouseEvent) => {
    setAnchorEl({ [index]: event.target });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <ButtonGroup>
          {userInfo.isLoggedOn &&
            navigationItems.map((item, index) => {
              let calledChildObj: INavHasChildrenObj = hasChildrenObj(
                item.parentMenu.parentMenuId
              );
              let btnId = `nav-btn-${item.parentMenu.title
                .replaceAll(" ", "-")
                .toLowerCase()}`;
              if (!calledChildObj.hasChildren) {
                return (
                  <div key={index}>
                    <Button
                      variant="text"
                      sx={{ color: common.white }}
                      id={btnId}
                      component={Link}
                      to={item.parentMenu.url}
                      title={item.parentMenu.title}
                    >
                      {item.parentMenu.title}
                    </Button>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <Button
                      variant="text"
                      sx={{ color: common.white }}
                      onClick={(e) => handleClick(index, e)}
                      id={btnId}
                      title={item.parentMenu.title}
                    >
                      {item.parentMenu.title}
                    </Button>
                    <Menu
                      anchorEl={
                        // Check to see if the anchor is set.
                        anchorEl && anchorEl[index]
                      }
                      keepMounted
                      open={
                        // Likewise, check here to see if the anchor is set.
                        Boolean(anchorEl && anchorEl[index])
                      }
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      {calledChildObj.children.map((menuitems, menuindex) => (
                        <MenuItem
                          key={menuindex}
                          selected={
                            menuitems.menuItem.url === window.location.pathname
                          }
                          component={Link}
                          to={menuitems.menuItem.url}
                          onClick={handleClose}
                          title={menuitems.menuItem.text}
                        >
                          {menuitems.menuItem.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                );
              }
            })}
          <div key="1000">
            <Button
              variant="text"
              sx={{ color: common.white }}
              id="btn-log-on"
              component={Link}
              to={userInfo.isLoggedOn ? "/logoff" : "/logon"}
              title={userInfo.isLoggedOn ? "Log Off" : "Log On"}
            >
              {userInfo.isLoggedOn ? "Log Off" : "Log On"}
            </Button>
          </div>
          {/* <div key="-2">
                <ShortCutLegand  />
            </div> */}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
