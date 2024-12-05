/*
    NOTES for posts and comments: 
    1. We have to update immutably(oporiborton)
    2. Array is refernce value, so, if we perform Array Method (slice, splice) Directly
       state will unpredictably change and react unpredictably re-render. DO NOT USE LIKE THAT
    3. Always make a copy of Reference values with (SPREAD Operator)

*/

import React from "react";
// import PropTypes from "prop-types";

const array = [1, 2, 4, 5];
const copyOfReferenceValue = [...array];

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: copyOfReferenceValue,
      comments: [],
    };
  }

  componentDidCatch() {
    // you can update independently
    this.postFunction(() => {
      this.setState({
        posts: copyOfReferenceValue,
      });
    });

    this.commentFunction(() => {
      this.setState({
        comments: copyOfReferenceValue,
      });
    });
  }

  render() {
    console.log("bro : ",this.state.posts);
    return <h1> {this.state.posts} </h1>;
  }
}

export default Blog;
