import React from "react";
import { Button } from "./button.jsx";

export class Click extends React.Component {

    handleClick = (event, value) => {
        event.preventDefault();

        console.log("got the value :", value);
    }

    render() {
        // sending callback as props
        return <Button change={this.handleClick}/>;
    }
}
