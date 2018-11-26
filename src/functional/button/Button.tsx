import * as React from "react";
import ButtonX from "@material-ui/core/Button";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    /**
     * default false
     */
    outline?: boolean;
    /**
     * default false
     */
    active?: boolean;
    /**
     * default false
     */
    block?: boolean;
    color?: string;
    /**
     * default false
     */
    disabled?: boolean;
    /**
     * a or button react types
     */
    tag?: React.ReactType;
    innerRef?: string | ((instance: HTMLButtonElement) => any);
    onClick?: React.MouseEventHandler<any>;
    size?: any;
    id?: string;
    style?: React.CSSProperties;
    async ?:boolean;
    icon ?: string;
    /**
     * left,right
     */
    iconALign ?:string;
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export default class Button extends React.Component<any,any> {

    constructor(props:any){
        super(props);
        this.state = {
            asyncIcon : "fa-circle-o-notch",
            async : false,
            icon : props.icon
        }
    }

    /**
     * @returns {any}
     */
    render():any {
        return <ButtonX {...this.props}/>;
    }


}

