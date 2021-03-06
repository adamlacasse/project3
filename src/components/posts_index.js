import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <div key={post.id +1} className="box"> 
                    <Link to={`/post/${post.id}`}>
                        <div className="gallery">  
                            <img src={post.post_img} alt="this isn't really an image" title={post.content} />
                            <div className="image-date"><p>{post.createdAt.substring(0, 10)}<br></br>{post.post_text}</p></div>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render(){
        return (
            <div>
                <div className="bg-everyday">Everyday.</div>
                <div>
                    <div>
                        <Link className="btn btn-success" to="/post/new">Add a Post</Link>
                        <Link to="/login" className="btn btn-danger">Log In Page</Link>
                    </div>
                    <div>&nbsp;</div>
                    <div className="top">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);