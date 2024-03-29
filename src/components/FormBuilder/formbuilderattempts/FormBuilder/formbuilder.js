import * as React from 'react'
import { Formik, Form } from 'formik'
import styled from '@mui/system/styled'

import FormBuilderArrayField from './FormBuilderArrayField'

export default function FormBuilder({ fields, inputs }) {
	return (
		<Formik
			initialValues={{
				fields,
				inputs,
				friends: ['chris', 'michael', 'utah'],
			}}
			onSubmit={(values) => console.log(values)}>
			{({ values }) => (
				<Form>
					<FormBuilderArrayField
						name={`fields`}
						values={values.fields}
						inputs={values.inputs}
					/>
				</Form>
			)}
		</Formik>
	)
}

/*
<Form>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<FormBuilderArrayField
								name={`friends`}
								values={values.friends}
							/>
						</Grid>
						<p style={{ textAlign: 'center' }}>Add Field</p>
						<Grid
							container
							spacing={{ xs: 2, md: 3 }}
							columns={{ xs: 4, sm: 8, md: 12 }}
							sx={{ backgroundColor: 'lightgray' }}>
							{inputs.map((input, index) => (
								<Grid item xs={2} sm={4} md={4} key={index}>
									<Item>
										<Button
											variant="contained"
											onClick={() => {
												const mergedarray = [
													...fields,
													{
														type: input.type,
														label: input.label,
													},
												]
												console.log(mergedarray)
											}}>
											{input.buttonlabel}
										</Button>
									</Item>
								</Grid>
							))}
						</Grid>
					</Box>
				</Form>


<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<FormBuilderArrayField
								name={`friends`}
								values={values.friends}
							/>
						</Grid>
						<p style={{ textAlign: 'center' }}>Add Field</p>
						<Grid
							container
							spacing={{ xs: 2, md: 3 }}
							columns={{ xs: 4, sm: 8, md: 12 }}
							sx={{ backgroundColor: 'lightgray' }}>
							{inputs.map((input, index) => (
								<Grid item xs={2} sm={4} md={4} key={index}>
									<Item>
										<Button
											variant="contained"
											onClick={() => {
												const mergedarray = [
													...fields,
													{
														type: input.type,
														label: input.label,
													},
												]
												console.log(mergedarray)
											}}>
											{input.buttonlabel}
										</Button>
									</Item>
								</Grid>
							))}
						</Grid>
					</Box>

* <Grid container spacing={2}>
                <Grid xs={12}>
                    {fields && fields.length > 0 ? (
                        fields.map((field, index) => (
                            <Item key={index}>
                                <EditField
                                    label={field.label}
                                    type={`text`}
                                    options={field.options}
                                />
                            </Item>
                        ))
                    ) : (
                        <p>Add a field below</p>
                    )}
                </Grid>
            </Grid>
*
* */
