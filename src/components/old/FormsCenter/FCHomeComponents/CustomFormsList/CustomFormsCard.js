import React from 'react'
import { Typography } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import Card from '../../../../basestyledcomponents/Card/Card'
import CardIcon from '../../../../basestyledcomponents/Card/CardIcon'
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../../basestyledcomponents/Card/CardBody'
import CustomFormsList from './CustomFormsList'

function CustomFormsCard({ forms, listlabel, typeOfFormToShow, url }) {
	return (
		<Card>
			<CardHeader icon>
				<CardIcon color="primary">
					<LanguageIcon />
				</CardIcon>
			</CardHeader>
			<CardBody>
				<Typography>{listlabel} Forms</Typography>
				{forms && forms.length > 0 ? (
					<CustomFormsList
						forms={forms}
						typeOfFormToShow={typeOfFormToShow}
						url={url}
					/>
				) : (
					<Typography>
						There have been no {listlabel} forms created. Create
						One!
					</Typography>
				)}
			</CardBody>
		</Card>
	)
}

export default React.memo(CustomFormsCard)
/*
<List>
          {props.forms && props.forms.length === 0 ? (
            <Typography>
              There have been no {props.listtitle} forms created. Create One!
            </Typography>
          ) : (
            props.forms
              .filter((form) => form.form_type === props.typeOfFormToShow)
              .map((form) => (
                <ListItem key={form.id}>
                  <NavLink to={`${props.url}/${form.id}/edit`}>
                    <ListItemText
                      primary={<Typography>{form.title}</Typography>}
                    />
                  </NavLink>
                  <ListItemSecondaryAction>
                    <Switch
                      checked={form.active}
                      edge={`end`}
                      onChange={handleFormStatusUpdate}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))
          )}
        </List>
 */
