import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
   renderError({ error, touched }) {
      if (error && touched) {
         return (
            <div className="ui error message">
               <div className="header">{error}</div>
            </div>
         );
      }
   }
   renderInput = ({ input, meta, label }) => {
      const className = `field ${meta.error && meta.touched ? "error" : ""}`;
      return (
         <div className={className}>
            <label>{label}</label>
            <input type="text" {...input} autoComplete="off" />
            <div>{this.renderError(meta)}</div>
         </div>
      );
   };
   onSubmit = (formValues) => {
      //pass formValues to parent
      this.props.onSubmit(formValues);
   };
   render() {
      return (
         <div>
            <form
               onSubmit={this.props.handleSubmit(this.onSubmit)}
               className="ui form error"
            >
               <Field
                  name="title"
                  label="Enter title"
                  component={this.renderInput}
               />
               <Field
                  name="description"
                  label="Enter description"
                  component={this.renderInput}
               />
               <button className="ui button green">Submit</button>
            </form>
         </div>
      );
   }
}
// make error object in meta
const validate = (formValues) => {
   const error = {};

   if (!formValues.title) {
      // set title in errors object don't return it
      error.title = "You should enter a title";
   }
   if (!formValues.description) {
      // set title in errors object don't return it
      error.description = "You should enter a description";
   }

   return error;
};

export default reduxForm({ form: "StreamForm", validate: validate })(StreamForm);


