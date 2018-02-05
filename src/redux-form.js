import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import {required, nonEmpty, exactlyFiveChars, mustBeNumber} from './validators';

export class ReduxForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor='tracking'>Tracking Number</label>
        <Field 
          component='input' 
          type='text' 
          name='tracking' 
          id='tracking' 
          validate={[required, nonEmpty, exactlyFiveChars, mustBeNumber]} />
        <label htmlFor='issues'>What is your issue?</label>
        <Field 
          component='select' 
          name='issues' 
          id='issues'
          validate={[required]}>
          <option value='hasNotArrived'>My delivery hasn't arrived</option>
          <option value='wrongItemDelivered'>The wrong item was delivered</option>
          <option value='partMissing'>Part of my order was missing</option>
          <option value='arrivedDamaged'>Some of my order arrived damaged</option>
          <option value='other'>Other (give details below)</option>
        </Field>
        <label htmlFor='details'>Give more details (optional)</label>
        <Field component='text-area' type='text' name='details' id='details' />
        <button>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'feedback'
})(ReduxForm);