import React, { useState } from 'react'
import { useFormikContext } from 'formik'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
	Button,
	Grid,
	Step,
	StepButton,
	StepLabel,
	Stepper,
	Typography,
} from '@material-ui/core'
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation'
import PatientComplaints from './Complaints/complaints'
import Assessment from './Assessment/assessments'
import * as PropTypes from 'prop-types'
import ReviewOfSystems from './ReviewOfSystems/ReviewOfSystems'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	active: {
		color: '#0BB5FF',
	},

	step: {
		display: 'flex',
		color: '#0BB5FF',
	},
	end_encounter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))

function getSteps() {
	return [
		{ index: 0, label: 'Complaints' },
		{ index: 1, label: 'Review of Systems' },
		{ index: 2, label: 'Physical Exam' },
		{ index: 3, label: 'Assessment' },
		{ index: 4, label: 'Plan' },
		{ index: 5, label: 'Follow Up' },
		{ index: 6, label: 'Summary' },
	]
}

function FakeCompoent(props) {
	return <div></div>
}

function EncounterStepper(props) {
	return (
		<Grid item>
			<Grid container direction={`row`}>
				<Grid item xs={10}>
					<Stepper nonLinear activeStep={props.activeStep}>
						{props.steps.map(props.prop2)}
					</Stepper>
				</Grid>
				<Grid item xs={2} className={props.classes.end_encounter}>
					<Button variant={`contained`} color={`primary`}>
						End Encounter
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

EncounterStepper.propTypes = {
	activeStep: PropTypes.number,
	steps: PropTypes.any,
	prop2: PropTypes.func,
	classes: PropTypes.any,
}

function EncounterStep(props) {
	return (
		<Step
			active={props.activeStep === props.step.index}
			className={props.classes.step}>
			<StepButton
				icon={<InsertInvitationIcon />}
				onClick={props.onClick}
				className={
					props.activeStep === props.step.index
						? props.classes.active
						: ''
				}>
				<StepLabel>
					<Typography
						className={
							props.activeStep === props.step.index
								? props.classes.active
								: ''
						}>
						{props.step.label}
					</Typography>
				</StepLabel>
			</StepButton>
		</Step>
	)
}

EncounterStep.propTypes = {
	activeStep: PropTypes.number,
	step: PropTypes.any,
	classes: PropTypes.any,
	onClick: PropTypes.func,
}
export default function PatientEncounter(props) {
	const classes = useStyles()
	const [activeStep, setActiveStep] = useState(0)
	const appointment = useSelector((state) => state.appointment)
	const { values } = useFormikContext()
	// i have no idea why i did the steps like this
	const steps = getSteps()

	const handleStep = (step) => () => {
		setActiveStep(step)
	}

	function getStepContent(step, formvalues) {
		switch (step) {
			//display patient complaints component
			case 0:
				return (
					<PatientComplaints
						name={`clinical_data.complaints`}
						complaints={formvalues.clinical_data.complaints}
					/>
				)
			//display review of systems component
			case 1:
				return <ReviewOfSystems />
			case 2:
				return <ReviewOfSystems />
			case 3:
				return <Assessment />
			case 4:
				return <PatientComplaints />
			case 5:
				return <PatientComplaints />
			case 6:
				return <PatientComplaints />

			default:
				return <Typography>Unknown step</Typography>
		}
	}

	return (
		<Grid container direction={`column`} className={classes.root}>
			<EncounterStepper
				activeStep={activeStep}
				steps={steps}
				prop2={(step, index) => (
					<EncounterStep
						key={step.label}
						activeStep={activeStep}
						step={step}
						classes={classes}
						onClick={handleStep(step.index)}
					/>
				)}
				classes={classes}
			/>
			<Grid item>
				<div>{getStepContent(activeStep, values)}</div>
			</Grid>
		</Grid>
	)
}
