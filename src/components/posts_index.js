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
                <div key={post.id +1} className="item"> 
                    <div className="item">
                        <Link to={`/post/${post.id}`}>
                            {post.post_title}
                        </Link>
                    </div>
                    <div className="item">{post.post_text}</div>
                    <div className="item"><img src={post.post_img} alt="this isn't really an image" title={post.content} /></div>
                </div>
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
                <div className="happy-grid">
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);