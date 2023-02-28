import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import Appointment from '../components/Appointment/appointment'

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree />}>
			<ComponentPreview path="/Appointment">
				<Appointment />
			</ComponentPreview>
			<ComponentPreview path="/Appointment">
				<Appointment />
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews
