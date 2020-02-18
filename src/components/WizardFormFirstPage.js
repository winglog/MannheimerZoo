import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import validate from './validateWizard';
import renderField from './renderField';



const WizardFormFirstPage = props => {

  const theme = useTheme();

  const useStyles = makeStyles({
    buttonPosition: {
      position: 'fixed',
      bottom: '15px',
      right: '30px'
    },
    buttonTheme: theme.buttonStyle
  });
  
  const classes = useStyles();
  console.log('buttonPosition: ', classes.buttonPosition);
  console.log('buttonTheme: ', classes.buttonTheme);
  console.log('buttonStyle: ', theme.buttonStyle);
  const className = clsx(classes.buttonPosition,classes.buttonTheme);

  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <div>
        <button type="submit" className={className}>Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
