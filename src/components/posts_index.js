import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

// const imageTest = '../../img/testing.jpg';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <tbody key={post.id}>
                    <tr>
                        <td className="">
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </td>
                        <td>{post.categories}</td>
                        <td><img src={post.content} /></td>
                    </tr>
                </tbody>
            );
        });
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Categories</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    {this.renderPosts()}
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);