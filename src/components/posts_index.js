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
                <tbody key={post.id +1}> 
                    <tr>
                        <td className="">
                            <Link to={`/post/${post.id}`}>
                                {post.post_title}
                            </Link>
                        </td>
                        <td>{post.post_text}</td>
                        <td><img src={post.post_img} height="200" width="200" alt="this isn't really an image" title={post.content} /></td>
                    </tr>
                </tbody>
            );
        });
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/post/new">
                        Add a Post
                    </Link>
                    <Link to="/login" className="btn btn-danger">Log In Page</Link>
                </div>
                <h3>Posts</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Text</th>
                            <th>Image</th>
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