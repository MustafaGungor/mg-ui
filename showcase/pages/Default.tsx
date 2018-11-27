import * as React from "react";
import {ListItemText,ListItemIcon,MenuItem,MenuList,IconButton,Typography,Grid,Toolbar,AppBar} from '@material-ui/core';

export default class Default extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return <Grid container xs={12}>
            <Grid item xs={12} md={3} >
                <div className="list-type1">
                    <div className={"list-title"}>BAŞLIK</div>
                    <ol>
                        <li><a className={"first"} href="#">Tureng</a></li>
                        <li><a className={"first"} href="#">Cunda</a></li>
                        <li><a className={"first"} href="#">Haubaty</a></li>
                        <li><a className={"first"} href="#">CakePhp</a></li>
                        <li><a className={"first"} href="#">DenDen</a></li>
                        <li><a className={"first"} href="#">Junkle</a></li>
                    </ol>
                </div>
            </Grid>
            <Grid item xs={12} md={3} >
                <div className="list-type1">
                    <div className={"list-title"}>BAŞLIK</div>
                    <ol>
                        <li><a className={"second"} href="#">Karaf</a></li>
                        <li><a className={"second"} href="#">Apache</a></li>
                        <li><a className={"second"} href="#">Css</a></li>
                        <li><a className={"second"} href="#">Html</a></li>
                        <li><a className={"second"} href="#">Fundamentals</a></li>
                        <li><a className={"second"} href="#">Oracle</a></li>
                    </ol>
                </div>
            </Grid>
            <Grid item xs={12} md={3} >
                <div className="list-type1">
                    <div className={"list-title"}>BAŞLIK</div>
                    <ol>
                        <li><a href="#">Learn Java</a></li>
                        <li><a href="#">Learn Php</a></li>
                        <li><a href="#">Learn Hadoop</a></li>
                        <li><a href="#">Google</a></li>
                        <li><a href="#">Asp</a></li>
                        <li><a href="#">C#</a></li>
                    </ol>
                </div>
            </Grid>
            <Grid item xs={12} md={3} >
                <div className="list-type1">
                    <div className={"list-title"}>BAŞLIK</div>
                    <ol>
                        <li><a className={"third"} href="#">Describe</a></li>
                        <li><a className={"third"} href="#">Abroad</a></li>
                        <li><a className={"third"} href="#">Absence</a></li>
                        <li><a className={"third"} href="#">Dehunca</a></li>
                        <li><a className={"third"} href="#">Spark</a></li>
                        <li><a className={"third"} href="#">Kafka</a></li>
                    </ol>
                </div>
            </Grid>

        </Grid>;
    }

}
