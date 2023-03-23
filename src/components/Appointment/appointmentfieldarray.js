import React from "react";
import { Formik, FieldArray } from "formik";
import { TextField, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Add, Delete } from "@mui/icons-material";

const initialValues = {
	fields: [{ label: "", type: "", placeholder: "", helperText: "" }]
};

const onSubmit = (values) => {
	console.log(values);
};

const Form = styled("form")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	"& > *": {
		margin: "1rem"
	}
});

const FieldGroup = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "1rem",
	boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
	borderRadius: "10px",
	transition: "all 0.3s ease",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
	}
});

const FormField = styled(TextField)({
	width: "100%",
	marginBottom: "1rem"
});

const FormButton = styled(Button)({
	width: "100%"
});

const AddButton = styled(IconButton)({
	alignSelf: "flex-end"
});

const DeleteButton = styled(IconButton)({
	alignSelf: "flex-start",
	marginLeft: "auto"
});

const AppointmentFieldArray = () => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ values }) => (
				<FieldArray name="fields">
					{({ insert, remove, push }) => (
						<Form>
							{values.fields.length > 0 &&
								values.fields.map((field, index) => (
									<FieldGroup key={index}>
										<DeleteButton onClick={() => remove(index)}>
											<Delete />
										</DeleteButton>
										<FormField
											label="Label"
											name={`fields.${index}.label`}
											value={field.label}
											onChange={(e) =>
												push({
													...field,
													label: e.target.value
												})
											}
										/>
										<FormField
											label="Type"
											name={`fields.${index}.type`}
											value={field.type}
											onChange={(e) =>
												push({
													...field,
													type: e.target.value
												})
											}
										/>
										<FormField
											label="Placeholder"
											name={`fields.${index}.placeholder`}
											value={field.placeholder}
											onChange={(e) =>
												push({
													...field,
													placeholder: e.target.value
												})
											}
										/>
										<FormField
											label="Helper Text"
											name={`fields.${index}.helperText`}
											value={field.helperText}
											onChange={(e) =>
												push({
													...field,
													helperText: e.target.value
												})
											}
										/>
									</FieldGroup>
								))}
							<AddButton onClick={() => push(initialValues.fields[0])}>
								<Add />
							</AddButton>
							<FormButton type="submit" variant="contained" color="primary">
								Submit
							</FormButton>
						</Form>
					)}
				</FieldArray>
			)}
		</Formik>
	);
};

export default AppointmentFieldArray;
