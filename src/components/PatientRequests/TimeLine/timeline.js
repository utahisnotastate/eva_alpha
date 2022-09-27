import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Close from '@material-ui/icons/Close'
// @material-ui/icons
import CardTravel from '@material-ui/icons/CardTravel'
import Build from '@material-ui/icons/Build'
import TimelineComponent from '../../basestyledcomponents/TimeLineStyled/Timeline'
import Button from '../../basestyledcomponents/Button'
import styles from '../../basestyledcomponents/Modal/modalStyle'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import UpdatePatientRequestForm from './UpdatePatientRequestForm/updatepatientrequestform'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />
})

const useStyles = makeStyles(styles)

function TimeLineTitle(props) {
	return (
		<div>
			<Typography>Medication Refill</Typography>
		</div>
	)
}

export default function RequestTimeLine({
	patient_request_updates,
	request_description,
	type,
	status,
	requestId,
}) {
	const [modal, setModal] = React.useState(false)
	const classes = useStyles()
	const [combinedupdates, setCombinedUpdates] = useState([])

	useEffect(() => {
		const updates =
			patient_request_updates && patient_request_updates.length > 0
				? patient_request_updates.map((update) => {
						return {
							inverted: true,
							badgeColor: 'success',
							badgeIcon: Build,
							title: <TimeLineTitle />,
							titleColor: 'success',
							body: <p>{update.update}</p>,
						}
				  })
				: []
		//async wait for updates to be set
		setCombinedUpdates(updates)
	})

	return (
		<div>
			<Button color="primary" onClick={() => setModal(true)}>
				View Request
			</Button>
			<Dialog
				classes={{
					root: classes.center,
					paper: classes.modal,
				}}
				open={modal}
				disableBackdropClick
				keepMounted
				scroll="body"
				fullScreen={false}
				fullWidth={false}
				transition={Transition}
				onClose={() => setModal(false)}
				aria-labelledby="modal-slide-title"
				aria-describedby="modal-slide-description">
				<DialogTitle
					id="classic-modal-slide-title"
					disableTypography
					className={classes.modalHeader}>
					<Button
						justIcon
						className={classes.modalCloseButton}
						key="close"
						aria-label="Close"
						color="transparent"
						onClick={() => setModal(false)}>
						<Close className={classes.modalClose} />
					</Button>
					<h4 className={classes.modalTitle}>Patient Request:</h4>
					<Typography>{request_description}</Typography>
				</DialogTitle>
				<DialogContent
					id="modal-slide-description"
					className={classes.modalBody}>
					<TimelineComponent stories={combinedupdates} />
					<Divider />
					<Divider />
					<div>
						<div>
							<Typography variant={`h6`}>
								Update Request
							</Typography>
						</div>
						<div>
							<UpdatePatientRequestForm
								requestId={requestId}
								firststory={combinedupdates[0]}
								setModal={setModal}
								setCombinedUpdates={setCombinedUpdates}
							/>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

/*
[
                        firststory,
                        {
                            inverted: true,
                            badgeColor: "danger",
                            badgeIcon: CardTravel,
                            title: (<Typography>Employee Responded</Typography>),
                            titleColor: "danger",
                            body: (
                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank
                                    you for making my family We just had fun with the “future” theme !!! It was a fun
                                    night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @
                                    Figueroa and 12th in downtown.</p>
                            ),
                        },
                        {
                            inverted: false,
                            badgeColor: "danger",
                            badgeIcon: CardTravel,
                            title: (<Typography>Update from patient</Typography>),
                            titleColor: "danger",
                            body: (
                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank
                                    you for making my family We just had fun with the “future” theme !!! It was a fun
                                    night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @
                                    Figueroa and 12th in downtown.</p>
                            ),
                        }
                    ]
 */

/*
useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/clinicalrequests/${props.requestId}`);
            // console.log(result.data.patient_request_updates);
            // setRequestUpdates(result.data.patient_request_updates)
            return result;
        };
        fetchData().then(data => console.log(data));
    }, []);
 */
/*
 /*axios.get(`http://127.0.0.1:8000/api/clinicalrequests/${props.requestId}`)
            .then(response => {
                const request_updates = response.data.patient_request_updates;
                for (const update of request_updates ) {
                    combinedupdates.push({
                        inverted: true,
                        badgeColor: "danger",
                        badgeIcon: CardTravel,
                        title: (<Typography>Update from patient</Typography>),
                        titleColor: "danger",
                        body: (
                            <p>{update.update}</p>
                        ),
                    })
                }
                // console.log(styledrequestupdateobjects);
                // dispatch({type: 'set_request_updates', requestupdates: styledrequestupdateobjects})
            });*/
