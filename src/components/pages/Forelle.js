import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";

import showResults from "../showResults";
import ValidateSimpleForm from '../formiks/ValidateSimpleForm'

const Forelle = () => {
	const theme = useTheme();

	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Typography
					component="div"
					style={{
						backgroundColor: theme.palette.secondary.light,
						color: theme.palette.secondary.contrastText,
						height: "280px",
						padding: "120px"
					}}
				>
					<h2>Forelle - Formik Basic</h2>
					use only Formik basic function, write the validation functions by
					yourself.
					<p>
						from:{" "}
						<a
							href="https://jaredpalmer.com/formik/docs/tutorial"
							target="blank"
						>
							Formik Tutorial
						</a>
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
						<ValidateSimpleForm onSubmit={showResults} />
					</Container>
				</Typography>
			</Container>
		</React.Fragment>
	);
};

export default Forelle;
