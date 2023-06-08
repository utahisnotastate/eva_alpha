import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import Appointment from '../components/Appointment/appointment'
import Patient from '../components/Patient/patient'
import FormBuilder from '../components/FormBuilder/formbuilder'

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree />}>
			<ComponentPreview path="/Appointment">
				<Appointment />
			</ComponentPreview>
			<ComponentPreview path="/Appointment">
				<Appointment />
			</ComponentPreview>
			<ComponentPreview path="/Patient">
				<Patient />
			</ComponentPreview>
			<ComponentPreview path="/FormBuilder">
				<FormBuilder />
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews
