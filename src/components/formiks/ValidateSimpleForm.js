import React from "react";
import { useFormik } from "formik";

/**
 * Your own validation function, write the rule by yourself
 * @param {*} values
 */
const validate = values => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = "Required";
	} else if (values.firstName.length > 15) {
		errors.firstName = "First Name must be 15 characters or less";
	}

	if (!values.lastName) {
		errors.lastName = "Required";
	} else if (values.lastName.length > 15) {
		errors.lastName = "Last Name must be 15 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	return errors;
};

const ValidateSimpleForm = props => {
	// Notice: the returned value "formik" from "useFormik" has a lot useful properties, like 'formik.touched.firstname', 'formik.error.fistname', 'formik.isSubmitting'...
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: ""
		},
		validate,
		// onSubmit: values => {
		// 	alert(JSON.stringify(values, null, 2));
		// }
		onSubmit: values => props.onSubmit(values)
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleChange}
				value={formik.values.firstName}
			/>

			{formik.touched.firstName && formik.errors.firstName ? (
				<div>{formik.errors.firstName}</div>
			) : null}
			<br />

			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleChange}
				value={formik.values.lastName}
			/>
			{formik.touched.lastName && formik.errors.lastName ? (
				<div>{formik.errors.lastName}</div>
			) : null}
			<br />

			<label htmlFor="email">Email</label>
			<input
				id="email"
				name="email"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleChange}
				value={formik.values.email}
			/>
			{formik.touched.email && formik.errors.email ? (
				<div>{formik.errors.email}</div>
			) : null}
			<br />

			<button type="submit">Submit</button>
		</form>
	);
};

export default ValidateSimpleForm;
