import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import validate from './validateWizard';
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {

  const { handleSubmit, previousPage } = props;

  const theme = useTheme();

  const useStyles = makeStyles({
    buttonPosition1: {
      position: 'fixed',
      bottom: '15px',
      right: '30px'
    },
    buttonPosition2: {
      position: 'fixed',
      bottom: '15px',
      right: '190px'
    },
    buttonTheme: theme.buttonStyle
  });
  
  const classes = useStyles();
  const classButtonNext = clsx(classes.buttonPosition1,classes.buttonTheme);
  const classButtonPrev = clsx(classes.buttonPosition2,classes.buttonTheme);
  
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className={classButtonPrev} onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className={classButtonNext}>Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
