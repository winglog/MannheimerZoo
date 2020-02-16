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
		description: "Formik use library 'formik-material-ui'",
		displayIcon: () => {
			return <AccessibilityNewSharpIcon />;
		},
		visible: true
	}
];

export default aCards;
