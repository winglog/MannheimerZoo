// Quelle: https://redux-form.com/8.3.0/examples/material-ui/
/******************************************************************************************************************************** * Lessons learnt:
 *
 * TODO: Input Field suggesting some country names while user types
 * yarn add @material-ui/lab
 *********************************************************************************************************************************/


// Loading countries list from here: *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import renderCountryInput from './renderCountryInput';
import asyncValidate from './asyncValidate';

import topFilms from '../mockdata/filmsData';

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
    'movie',  // <-- This is the 'name' attribute of a <Field>.
    'country'
  ];

  // Simple Input Validation per input field:
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'; // <-- Error text shown under the input field if the user did not type a value into the field.
    }
  });

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
);


const renderMovieInput = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <Autocomplete
    freeSolo
    options={topFilms.map(option => option.title)}
    renderInput={params => (
      <TextField
        {...params}
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        margin="normal"
        variant="outlined"
        fullWidth
        {...input}
        {...custom}
      />
    )}
  />
);



function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};


const BaseForm = props => {

  const { handleSubmit, pristine, reset, submitting, classes } = props;

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;


  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map(key => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };

  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="movie"
          component={renderMovieInput}
          label="Enter movie"
        />
      </div>
      <div>
        <Field
          name="country"
          component={renderCountryInput}
          label="Enter country"
          loading={loading}
          open={open}
          setOpen={setOpen}
          options={options}
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

// The order of the decoration does not matter.
const MuiFormCountries = reduxForm({
  form: 'MuiFormCountriesId', //  <--- a unique identifier for this form
  validate: validateAllInput, // <--- Validation function given to redux-form. It does the immediate validation on user input.
  asyncValidate // <-- Validation Promise, can be used to lookup existing emails!
})(BaseForm);


export default MuiFormCountries;

// Doc:
// https://redux-form.com/8.3.0/docs/api/reduxform.md/
// https://material-ui.com/components/autocomplete/#autocomplete
