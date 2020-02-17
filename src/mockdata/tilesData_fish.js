import React from "react";
import AccessibilityNewSharpIcon from "@material-ui/icons/AccessibilityNewSharp";
import AccessAlarmSharpIcon from "@material-ui/icons/AccessAlarmSharp";

const aCards = [
	{
		title: "Forelle",
		description: "Formik Simple",
		displayIcon: () => {
			return <AccessibilityNewSharpIcon />;
		},
		visible: true
	},	{
		title: "Lachs",
		description: "Formik use Yup library to validate",
		displayIcon: () => {
			return <AccessAlarmSharpIcon />;
		},
		visible: true
	}, {
		title: "Hundslachs",
		description: "Formik use 'getFieldProps()' to create your own fields",
		displayIcon: () => {
			return <AccessAlarmSharpIcon />;
		},
		visible: true
	}, {
		title: "Kabeljau",
		description: "Formik use <Formik>",
		displayIcon: () => {
			return <AccessAlarmSharpIcon />;
		},
		visible: true
	}, 
];

export default aCards;
