import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost, updatePost} from '../actions';

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

    renderField(field){
        const { meta: { touched, error } } = field;
        // const className = `form-group ${touched && error ? 'has-danger' : "" }`
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        const { post, handleSubmit } = this.props;

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
                <form //onSubmit={handleSubmit(this.onSubmit.bind(this))}
                >
                    <Field
                        label="Title"
                        name="title"
                        placeholder={post.title} 
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        placeholder={post.categories} 
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        placeholder={post.content} 
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default reduxForm({
    form: 'EditPostForm'
})(
    connect(mapStateToProps, {fetchPost, deletePost, updatePost})(PostsShow)
);
