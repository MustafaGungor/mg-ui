import * as React from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Button} from "mg-ui";
import {ListItemText,ListItemIcon,MenuItem,MenuList,IconButton,Typography,Grid,Toolbar,AppBar} from '@material-ui/core';
import SideMenu from "./SideMenu";
import { HashRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
import Default from "./pages/Default";
import Docs from "./pages/Docs";


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
                <SideMenu/>
            </Grid>
            <Grid item xs={10} className={"mg-container"}>
                <Grid item xs={12} style={{padding:5}}>
                    <Switch >
                        <Route exact path="/" component={Default} />
                        {/*<Route path="/Components" render={()=><Components menuToggle={this.state.sideMenuOpen} responsiveMenu={this.state.responsiveMenu} />} />*/}
                        <Route path="/Docs" component={Docs} />
                        <Route component={<div></div>} />
                    </Switch>
                </Grid>
            </Grid>


        </Grid>
    }

    headerClick(e:any){
        debugger
    }


}
