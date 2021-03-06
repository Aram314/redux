import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./postsActions.js";

class Posts extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
        console.log(this.props,'postsList');
        const { error, loading, posts } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error
});

export default connect(mapStateToProps)(Posts);