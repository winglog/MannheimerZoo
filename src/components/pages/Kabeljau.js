import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";

import showResults from "../showResults";
import ValidationYupFormikForm from "../formiks/ValidationYupFormikForm"

const Kabeljau = () => {
	const theme = useTheme();

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
					<h2>Lachs - Formik Validation with Yup</h2>
					Use basic Formik function, validation with Yup, so you don't need to write valdation scheema by yourself. 
					<p>
						from:{" "}
						<a
							href="https://jaredpalmer.com/formik/docs/tutorial"
							target="blank"
						>
							Formik Tutorial
						</a>
					</p>
                    <p>
                        Yup is a library which makes the validation very simple.
                        Yup library: https://github.com/jquense/yup
                    </p>
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
