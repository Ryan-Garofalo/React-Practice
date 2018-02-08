import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
    }

    render() {
        const {handleSubmit} =this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="title"
                        label="Title"
                        component={this.renderField}
                    />
                    <Field
                        name="categories"
                        label="Categories"
                        component={this.renderField}
                    />
                    <Field
                        name="content"
                        label="Post Content"
                        component={this.renderField}
                    />
                    <button typer="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const error = {};
    if (!values.title) {
        error.title = "Enter a title";
    }
    if (!values.categories) {
        error.categories = "Enter some categories";
    }
    if (!values.content) {
        error.content = "Enter some content please";
    }
    return error;
}

export default reduxForm({
    validate,
    form: "PostsNewForm"
})(PostNew);
