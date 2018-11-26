import * as React from "react";
import {ListItemText,ListItemIcon,MenuItem,MenuList,IconButton,Typography,Grid,Toolbar,AppBar} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

export default class SideMenu extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return this.getMenus()
    }

    getMenus(){
        return <MenuList>
            <MenuItem className={""}>
                <ListItemIcon className={""}>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText classes={{  }} inset primary="Button" />
            </MenuItem>
            <MenuItem className={""}>
                <ListItemIcon className={""}>
                    <DraftsIcon/>
                </ListItemIcon>
                <ListItemText classes={{ }} inset primary="Label" />
            </MenuItem>
            <MenuItem className={""}>
                <ListItemIcon className={""}>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText classes={{ }} inset primary="Menu" />
            </MenuItem>
        </MenuList>
    }
}
