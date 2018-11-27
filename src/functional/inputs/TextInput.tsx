import * as React from "react";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement>{

}

export default class TextInput extends React.Component<TextInputProps, any> {

    static defaultProps:Partial<TextInputProps> = {

    }

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return <input
            {...this.props}
            type={"text"}
        />;
    }

}
