import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {navigationItems, INavHasChildrenObj} from './navigationData';
import ShortCutLegand from '../../components/shortCutLegand/ShortCutLegand';

const hasChildrenObj = (parentMenuId: number): INavHasChildrenObj =>{
    let returnChildObj: INavHasChildrenObj = {
        hasChildren: false,
        children:[]
    }
    // get the parentMenu object with the passed parentMenuId
    const parentMenuObj = navigationItems.filter(navItem => navItem.parentMenu.parentMenuId === parentMenuId)[0];
    if (!parentMenuObj) {
        returnChildObj.hasChildren = false;
        return returnChildObj;
    }
    // get the parent menu's menu items that are ACTIVE
    const childMenuObj = parentMenuObj.parentMenu.childMenus.filter(child => child.menuItem.active === true);


    if (childMenuObj === undefined) {
        returnChildObj.hasChildren = false;
    }
    else if (childMenuObj.constructor !== Array) {
        returnChildObj.hasChildren = false;
    }
    else if (childMenuObj.length === 0) {
        returnChildObj.hasChildren = false;
    }
    else{
        returnChildObj.hasChildren = true;
    }
    
    returnChildObj.children = childMenuObj;
    return returnChildObj;
}

export default function Header() {

    const [anchorEl, setAnchorEl] = useState<any>([]);
    const [loggedOn, setLoggedOn] = useState(true);
    const handleClick = (index: number, event: React.MouseEvent) => {
        setAnchorEl({ [index]: event.target });
      };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    let prevLoggedOn = false;
    const handleLogOn = () => {
        let loggedOnStatus = loggedOn !== prevLoggedOn;
        setLoggedOn(loggedOnStatus);
        prevLoggedOn = loggedOnStatus;
    }
    
    return (
        <AppBar position='fixed'>
          <Toolbar>
              <Typography title="LIMS">
                    LIMS |  
              </Typography>
              <Tabs centered>
                {loggedOn && navigationItems.map((item, index) =>
                {
                    let calledChildObj: INavHasChildrenObj = hasChildrenObj(item.parentMenu.parentMenuId);
                    let btnId = `nav-btn-${item.parentMenu.title.replaceAll(' ', '-').toLowerCase()}`;
                    if(!calledChildObj.hasChildren){
                        return(
                            <div key={index}>
                                <Tab 
                                    //variant="contained"
                                    color="primary"
                                    id={btnId}
                                    component={Link} 
                                    to={item.parentMenu.url}
                                    //size="small"
                                    label={item.parentMenu.title}
                                    title={item.parentMenu.title}
                                />
                            </div>
                        )
                    }                  
                    else
                    {
                        return (
                            <div key={index}>
                                <Tab 
                                    //variant="text"
                                    color="primary"
                                    onClick={(e)=> handleClick(index, e)}
                                    id={btnId}
                                    label={item.parentMenu.title}
                                    title={item.parentMenu.title}
                                />
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
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                                    >
                                    {calledChildObj.children.map((menuitems, menuindex) => (
                                    <MenuItem 
                                        key={menuindex} 
                                        selected={menuitems.menuItem.url===window.location.pathname}
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
                        )
                    }
                })}
                <div key="-1">
                    <Tab 
                        //variant="text"
                        color="primary"
                        id="btn-log-on"
                        component={Link} 
                        to="/logOn"
                        //size="small"
                        onClick={handleLogOn}
                        label={loggedOn ? "Log Off" : "Log On"}
                        title={loggedOn ? "Log Off" : "Log On"}
                    />
                </div>
                <div key="-2">
                    <ShortCutLegand  />
                </div>
              </Tabs>
           </Toolbar>
      </AppBar>
    )}
    
