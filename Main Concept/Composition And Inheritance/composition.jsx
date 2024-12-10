import React from "react";

export class Composition extends React.Component {
    compositionFunction = (argument1, argument2) => {
        return `This is ${argument1}, ${argument2}`
    }

    render() {
        return this.props.children({ bro: this.compositionFunction});
    }
}