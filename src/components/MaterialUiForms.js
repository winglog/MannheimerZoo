// Quelle: https://redux-form.com/8.3.0/examples/material-ui/
/******************************************************************************************************************************** * Lessons learnt:
 *
 * Use buttonStyle to decorate buttons
 * Use TextField fullWidth={true} to have an Input Field take up the full width of its container!
 * Use style to do local decorations quickly
 *
 * Validation:
 * - 'pristine' is the opposite of 'dirty'. The Submit button is disabled.
 * - 'submitting' means that the user has already clicked onSubmit. The Submit button is disabled.
 * - use renderFormHelper to add validation state and texts to <Select> which does not have its own helperText
 * - Be careful: onSubmit expects the outer calling component to pass the Submit-handler
 *   the attribute onSubmit={handlerFunction} but the same is referenced here via the props.attribute called 'handleSubmit'
 *
 *********************************************************************************************************************************/
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import asyncValidate from './asyncValidate';


const buttonStyle = {
  padding: '10px 20px',
  width: '200px',
  display: 'block',
  margin: '20px auto',
  fontSize: '18px'
};

const selectBoxStyle = {
  minWidth: '200px',
  fontSize: '18px'
};

/**
 *
 * Input validation for the whole form:
 *
 */
const validateAllInput = values => {
  const errors = {};
  const requiredFields = [
    'firstName',  // <-- This is the 'name' attribute of a <Field>.
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ];

  // Simple Input Validation per input field:
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'; // <-- Error text shown under the input field if the user did not type a value into the field.
    }
  });

  // Special E-mail Input Validation checking for the structure of a valid E-mail.
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  return errors; // <-- Returns all input errors. Ideally, it should be empty!
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    fullWidth={true}
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
)

const renderFormHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => {
  return (
    <FormControl error={touched && invalid}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select style={selectBoxStyle}
        native
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'color-native-simple'
        }}
      >
        {children}
      </Select>
      {renderFormHelper({ touched, error })}
    </FormControl>
  )
}


const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={radioButton}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field
          classes={classes}
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <option value="" />
          <option value={'ff0000'}>Red</option>
          <option value={'00ff00'}>Green</option>
          <option value={'0000ff'}>Blue</option>
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div />
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>
      <div>
        <button style={buttonStyle} type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button style={buttonStyle} type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm', //  <--- a unique identifier for this form
  validate: validateAllInput, // <--- Validation function given to redux-form. It does the immediate validation on user input.
  asyncValidate // <-- Validation Promise, can be used to lookup existing emails!
})(MaterialUiForm)

// Doc:
// https://redux-form.com/8.3.0/docs/api/reduxform.md/
//
// The first parameter 'form'
// is required. It is the name of your form and the key to where your form's state will be mounted under the redux-form reducer.
