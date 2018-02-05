import React from 'react';
import {reduxForm, Field, focus, SubmissionError} from 'redux-form';
import Input from './input';
import {required, nonEmpty, exactlyFiveChars, mustBeNumber} from './validators';
import { PostForm } from './actions';


export class ReduxForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(PostForm(values));
  }
  render() 
  
  {

    let successMessage;
    if(this.props.submitSucceeded) {
      successMessage = <div>Feedback received!</div>
    }

    let failedMessage;
    if(this.props.submitFailed) {
      console.log(this.props);
      failedMessage = <div>We Were Unable to Receive Feedback</div>
    }

    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {successMessage}
        {failedMessage}
        <label htmlFor='trackingNumber'>Tracking Number</label>
        <Field 
          component={Input}
          // element="input"
          type='text' 
          name='trackingNumber' 
          id='trackingNumber' 
          validate={[required, nonEmpty, exactlyFiveChars, mustBeNumber]} 
          />
        <label htmlFor='issue'>What is your issue?</label>
        <Field 
          component='select'
          // element='select'
          name='issue' 
          id='issue'
          validate={[required]}
          >
          <option value='not-delivered'>My delivery hasn't arrived</option>
          <option value='wrong-item'>The wrong item was delivered</option>
          <option value='missing-part'>Part of my order was missing</option>
          <option value='damaged'>Some of my order arrived damaged</option>
          <option value='other'>Other (give details below)</option>
        </Field>
        <label htmlFor='details'>Give more details (optional)</label>
        <Field component='textarea' type='text' name='details' id='details' />
        <button
        type="submit"
        disabled={this.props.pristine || this.props.submitting}>
        Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'feedback',
  onSubmitFail: (errors, dispatch) =>
        dispatch(focus('feedback', Object.keys(errors)[0]))
})(ReduxForm);