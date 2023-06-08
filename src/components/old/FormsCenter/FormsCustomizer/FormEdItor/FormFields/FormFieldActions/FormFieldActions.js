import React from 'react'
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../../../basestyledcomponents/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import move from 'lodash-move'

export default function FormFieldActions(props) {
	const dispatch = useDispatch()

	const handleMove = (index, newposition) => {
		let sortedarray = move(props.formfields, index, newposition)
		console.log(sortedarray)
		// dispatch({type: 'move_field', index: index, newposition: newposition  });
		dispatch({ type: 'load_updated_array', newarray: sortedarray })
	}
	return (
		<Grid item xs={4}>
			<Grid container direction={`row`} justify={`space-around`}>
				<Grid item></Grid>
				<Grid item></Grid>
				<Grid item>
					<Button justIcon round color={`primary`}>
						<CancelIcon />
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

/*
{props.index === 0 ? null : (<Button justIcon round color={`primary`}><ArrowUpwardIcon/></Button>)}
{props.length === props.index + 1 ? null: (<Button justIcon round color={`primary`} onClick={() => handleMove(props.index, props.index + 1)}><ArrowDownwardIcon/></Button>)}

 */
