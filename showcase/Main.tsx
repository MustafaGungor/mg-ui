import * as React from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {ListItemText,ListItemIcon,MenuItem,MenuList,IconButton,Button,Typography,Grid,Toolbar,AppBar} from '@material-ui/core';

export default class Main extends React.Component<any,any>{
    render(){
        return <Grid container xs={12}>
            <Grid item xs={12}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton className={"mg-header-menu-button"} color="inherit" aria-label="Menu">
                            <img src={"./img/strawberry.png"} height={25}/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={"mg-header-grow"}>
                            MG-UI
                        </Typography>
                        <Button color="inherit">Components</Button>
                        <Button color="inherit">Docs</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Github</Button>
                        <Button color="inherit">Language</Button>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={2}>
                {this.getMenus()}
            </Grid>
            <Grid item xs={10} className={"mg-container"}>
                <Grid item xs={12}>
                    Container
                </Grid>
            </Grid>


        </Grid>
    }

    headerClick(e:any){
        debugger
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
                    <DraftsIcon />
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
