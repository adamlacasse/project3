import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary"> Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <div>&nbsp;</div>
                <div className="">
                    <div className="top">
                        <div className="item">{post.post_title}</div>
                        <div className="item">{post.post_text}</div>
                        <div className="gallery"><img src={post.post_img} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
