import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const renderCountryInput = ({
  label,
  loading,
  open,
  setOpen,
  options,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <Autocomplete
    freeSolo
    open={open}
    onOpen={() => {
      setOpen(true);
    }}
    onClose={() => {
      setOpen(false);
    }}
    getOptionSelected={(option, value) => option.name === value.name}
    getOptionLabel={option => option.name}
    options={options}
    loading={loading}
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
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          ),
        }}
        {...input}
        {...custom}
      />
    )}
  />
);

export default renderCountryInput;