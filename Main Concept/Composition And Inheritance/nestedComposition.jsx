import React from "react";

export class NestedComposition extends React.Component {
    nestedCompositionFunction = (argument1) => {
        return `This is ${argument1}`;
    }

    render() {
        return this.props.children(this.nestedCompositionFunction);
    }
}