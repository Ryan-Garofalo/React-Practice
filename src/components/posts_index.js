import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
		console.log(this.props.posts);
        return <div>Boooyahhhh</div>;
    }
}

function mapStateToProps(state){
	return { posts : state.posts  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
