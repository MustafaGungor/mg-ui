import * as React from "react";

export default class Main extends React.Component<any,any>{
    render(){
        return <div>
            <div className={"mg-header"}>
                <div className={"mg-header-logo"}>
                    <img src={"./img/strawberry.png"} height={20}/> MG-UI
                </div>
                <div className={"mg-header-menu"}>
                    <ul>
                        <li className={"mg-header-li"} id={"components"} onClick={this.headerClick.bind(this)}>Components</li>
                        <li className={"mg-header-li"} id={"docs"} onClick={this.headerClick.bind(this)}>Docs</li>
                        <li className={"mg-header-li"} id={"about"} onClick={this.headerClick.bind(this)}>About</li>
                        <li className={"mg-header-li"} id={"mgcore"} onClick={this.headerClick.bind(this)}>MG-CORE</li>
                        <li className={"mg-header-li"} id={"github"} onClick={this.headerClick.bind(this)}>Github</li>
                        <li className={"mg-header-li"} id={"language"} onClick={this.headerClick.bind(this)}>Language</li>
                    </ul>
                </div>
            </div>
            <div className={"mg-container"}>Container</div>
            <div className={"mg-footer"}>Footer</div>
        </div>
    }

    headerClick(e:any){
        debugger
    }
}
