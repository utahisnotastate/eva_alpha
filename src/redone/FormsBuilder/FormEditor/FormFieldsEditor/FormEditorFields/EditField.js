import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LabelTextFieldRow from './LabelTextFieldRow/LabelTextFieldRow'
import FieldOptionsEditor from './FieldOptionsEditor/FieldOptionsEditor'
import EditFieldPreview from './EditFieldPreview/EditFieldPreview'

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
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		padding: '1rem',
	},
}))

function EditField({ type, label, options, index, name }) {
	return (
		<>
			<LabelTextFieldRow
				label={label}
				name={`${name}.label`}
				index={index}
			/>
			{options ? (
				<FieldOptionsEditor
					name={`${name}.${index}.choices`}
					options={options}
					index={index}
				/>
			) : null}
		</>
	)
}
/*
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
