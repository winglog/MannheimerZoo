import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";

import showResults from "../showResults";
import ValidationYupFormikForm from "../formiks/ValidationYupFormikForm";
import descriptionText from "./Kabeljau.md";

// let kabeljauText = `
// # Kabeljau - Formik Validation with Yup Use basic and Formik HOC

// formik tutorial: href="https://jaredpalmer.com/formik/docs/tutorial"

// validation with Yup, so you don't need to write valdation scheema by
// yourself.

// Yup: https://github.com/jquense/yup
// `

const Kabeljau = () => {
	const theme = useTheme();

	const [desc, setDesc] = useState("");

	useEffect(() => {
		if (descriptionText.endsWith(".md")) {
			fetch(descriptionText)
				.then(res => res.text())
				.then(md => setDesc(md));
		}else{
			setDesc(descriptionText)
		}
	}, []);

	console.log(typeof descriptionText);
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Typography
					component="div"
					style={{
						backgroundColor: theme.palette.secondary.light,
						color: theme.palette.secondary.contrastText,
						// height: "280px",
						padding: "60px"
					}}
				>
					<Markdown>{desc}</Markdown>

				</Typography>

				<Typography
					component="div"
					style={{
						backgroundColor: "#fff",
						minHeight: "calc(100vh - 30px)",
						padding: 20
					}}
				>
					<Container maxWidth="xs">
						<ValidationYupFormikForm onSubmit={showResults} />
					</Container>
				</Typography>
			</Container>
		</React.Fragment>
	);
};

export default Kabeljau;
