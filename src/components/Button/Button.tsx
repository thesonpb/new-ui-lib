import * as React from "react";
import "./Button.scss";
import {Button as AntButton, ButtonProps} from 'antd'

const Button = (props: ButtonProps) => {
    const { children, disabled } = props;

    /** Override Defaults */

    return (
        <AntButton
            {...props}
        >
            {children}
        </AntButton>
    );
};

export default Button;
