import React from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { useParams } from 'react-router-dom'
import Card from '../../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../../basestyledcomponents/Card/CardBody'
import EditorHeader from './EditorHeader/EditorHeader'
import CardFooter from '../../../../basestyledcomponents/Card/CardFooter'

const useStyles = makeStyles({
	builderroot: {
		border: 1,
		borderColor: 'black',
		padding: '10px',
		// backgroundColor: 'lightgrey'
	},
	addfieldcontainer: {
		backgroundColor: 'white',
		padding: '10px',
	},
	addfielditem: {
		padding: '10px',
		flexGrow: 2,
	},
	formTitle: {
		padding: '15px',
	},
	formTypeSelectContainer: {
		marginTop: '5px',
	},
})
/*

 */

export default function FormEditor(props) {
	const dispatch = useDispatch()
	const classes = useStyles()
	// let { path, url } = useRouteMatch();
	const { formId } = useParams()

	const defaultValues = {
		id: formId,
		form_title: 'Test Form TItle',
		form_type: 'review_of_systems',
		fields: [],
		new_checkbox_field: '',
		new_field: {
			type: '',
			label: '',
		},
	}

	async function handleSubmit(values) {
		console.log(values)
	}

	return (
		<Formik
			enableReinitialize
			initialValues={defaultValues}
			onSubmit={handleSubmit}>
			{(formikProps) => (
				<Form>
					<Grid container direction="column">
						<Grid item>
							<Card>
								<CardHeader>
									<EditorHeader formId={formId} />
								</CardHeader>
								<CardBody>
									<Grid container direction="column">
										<Grid item>
											<Typography>
												Tesdt githubPlaceholder for Form
												Fields
											</Typography>
										</Grid>
										<Grid item>
											<Typography>
												Placeholder for Form Editor
												Input
											</Typography>
										</Grid>
									</Grid>
								</CardBody>
								<CardFooter>
									<Typography>Test</Typography>
								</CardFooter>
							</Card>
						</Grid>
					</Grid>
				</Form>
			)}
		</Formik>
	)
}

/*
<Grid item>
                      <Field
                        component={TextField}
                        fullWidth
                        name="form_title"
                      />
                    </Grid>

<Grid container>
                    <Grid item>
                      <Typography>
                        MAKE SURE FORM IS SAVED BEFORE PREVIEWING
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button color="primary" onClick={handleSubmit}>
                        Save Form
                      </Button>
                    </Grid>
                    <Grid item>
                      <NavLink to={`/formscenter/${formId}/preview/`}>
                        <Button color="primary">Preview Form</Button>
                      </NavLink>
                    </Grid>
                  </Grid>
<FormFields
                customfields={props.fields}
                handleDeleteFIeld={props.handleDeleteFIeld}
              />


<EditorInput
                append={props.append}
                handleAddField={props.handleAddField}
                methods={props.methods}
              />
 */

/*
<Formik initialValues={defaultValues} onSubmit={handleSubmit}>
      {({ props }) => (
        <Form>
          <Grid container direction={`column`}>
            <Grid item>
              <Card>
                <CardHeader>
                  <Grid container justify={`flex-end`}>
                    <Grid item>
                      <Typography variant="h2">
                        MAKE SURE FORM IS SAVED BEFORE PREVIEWING
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button color={`primary`} onClick={handleSubmit}>
                        Save Form
                      </Button>
                    </Grid>
                    <Grid item>
                      <NavLink to={`/formscenter/${formId}/preview/`}>
                        <Button color={`primary`}>Preview Form</Button>
                      </NavLink>
                    </Grid>
                  </Grid>
                </CardHeader>
                <CardBody>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        component={TextField}
                        fullWidth
                        name={`form_title`}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>{formtype}</Typography>
                    </Grid>
                  </Grid>
                </CardBody>
              </Card>
            </Grid>
            <Grid item>
              <FormFields
                customfields={props.fields}
                handleDeleteFIeld={props.handleDeleteFIeld}
              />
            </Grid>
            <Grid item>
              <EditorInput
                methods={props.methods}
                handleAddField={props.handleAddField}
                append={props.append}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>



 */

/*
    fetchForm(formId).then((response) => {
      //setFormTitle(response.title);
      // dispatch({type: 'update_form_title', newtitle: response.title})
      dispatch({ type: "update_form_type", newtype: response.form_type });
      if (response.form) {
        dispatch({ type: "load_form_fields", newformfields: response.form });
      } else {
        dispatch({ type: "load_form_fields", newformfields: {} });
      }
      // dispatch({type: 'load_form_fields', newformfields: response.form })
    });
 */
