import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : "" }`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const {handleSubmit} = this.props;

        return (
            <div>
                <div className="bg-everyday">Everyday</div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="post_title"
                        component={this.renderField}
                    />
                    <Field
                        label="Text"
                        name="post_text"
                        component={this.renderField}
                    />
                    <Field
                        label="Image URL"
                        name="post_img"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    // if errors is empty, the form is fine to submit; if errors has *any* properties redux assumes the form is invalid
    if(!values.post_title) {
        errors.post_title = "Enter a title, asshat!";
    }
    if(!values.post_text) {
        errors.post_text = "Enter some text, shitbird!";
    }
    if(!values.post_img) {
        errors.post_img = "Enter an image, fuckface!";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);
