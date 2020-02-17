import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidationYupFormikForm = props => {
	return (
		<Formik
			initialValues={{ firstName: "", lastName: "", email: "" }}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, "Must be 15 characters or less")
					.required("Required"),
				lastName: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Required"),
				email: Yup.string()
					.email("Invalid email address")
					.required("Required")
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					props.onSubmit(values);
					setSubmitting(false);
				}, 400);
			}}
		>
			{formik => (
				<form onSubmit={formik.handleSubmit}>
					<label htmlFor="firstName">First Name</label>
					<input id="firstName" {...formik.getFieldProps("firstName")} />
					{formik.touched.firstName && formik.errors.firstName ? (
						<div>{formik.errors.firstName}</div>
					) : null}
					<br />

					<label htmlFor="lastName">Last Name</label>
					<input id="lastName" {...formik.getFieldProps("lastName")} />
					{formik.touched.lastName && formik.errors.lastName ? (
						<div>{formik.errors.lastName}</div>
					) : null}
					<br />

					<label htmlFor="email">Email</label>
					<input id="email" {...formik.getFieldProps("email")} />
					{formik.touched.email && formik.errors.email ? (
						<div>{formik.errors.email}</div>
					) : null}
					<br />
					<button type="submit">Submit</button>
				</form>
			)}
		</Formik>
	);
};

export default ValidationYupFormikForm;