import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LabelTextFieldRow from './LabelTextFieldRow/LabelTextFieldRow'
import ChoicesEditor from './ChoicesEditor/ChoicesEditor'
import EditFieldPreview from './EditFieldPreview/EditFieldPreview'
import { Typography } from '@mui/material'

const useStyles = makeStyles((theme) => ({
	header: {
		padding: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
	card: {
		padding: theme.spacing(1),
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		gap: theme.spacing(2),
		padding: '1rem',
	},
}))

/*
LabelTextFieldRow is just the label for the field that shows up on the form. The user can edit this in case of typos etc.

 */

function EditField({ type, label, choices, index, name }) {
	const classes = useStyles()
	return (
		<>
			<div className={classes.header}>
				<Typography>Field type: {type}</Typography>
			</div>
			<div className={classes.row}>
				<Typography>Label</Typography>
				<LabelTextFieldRow name={`${name}[label]`} />
			</div>
			{choices ? (
				<ChoicesEditor name={`${name}[choices]`} choices={choices} />
			) : null}
		</>
	)
}
/*
<EditFieldPreview
				type={type}
				label={label}
				options={choices}
				name={name}
			/>

{choices ? (
				<FieldOptionsEditor
					name={`${name}.${index}.choices`}
					options={choices}
					index={index}
				/>
			) : null}

			<EditFieldPreview
				type={type}
				label={label}
				options={options}
				name={name}
				index={index}
			/>


<EditFieldPreview
				type={type}
				label={label}
				options={options}
				index={index}
			/>

{options ? (
        <FieldOptionsEditor
          name={`${name}.${index}.choices`}
          options={options}
          index={index}
        />
      ) : null}
      <EditFieldPreview
        type={type}
        label={label}
        options={options}
        name={name}
        index={index}
      />


<EditFieldPreview
          type={type}
          label={label}
          options={options}
          index={index}
        />

<DynamicTextField label={label} />
<DynamicField
          type={type}
          options={choices ? choices : []}
          label={label}
          index={index}
        />
 */

export default React.memo(EditField)
