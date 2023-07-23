import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MicIcon from '@mui/icons-material/Mic'

import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	InputToolbox,
} from '@chatscope/chat-ui-kit-react'

export default function AIAppointment() {
	//Component Description: This is the component for the medical appointment.
	// Description: User has an input box to record their transcript. Once done, they can click send and the transcript will be sent to the chatbot AI.
	// The chatbot AI will then respond with a message.
	// The user can then record their transcript again and click send.
	// This process will repeat until the appointment is over.

	// Google API information for the transcript text
	/*
	API: This API call takes the transcript and turns it into clinical documentation
	 *const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "YOUR API KEY";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const context = "";
const examples = [
  {
    "input": {
      "content": "The user pasts a transcript of a medical office visit. "
    },
    "output": {
      "content": "Generates a medical office note which include diagnoses, patient complaints, assesssments, plans, physical exam notes, summary, etc.. The notes should implement the advice given in this article: \"https://mobius.md/2022/11/14/step-by-step-guide-to-taking-perfect-clinical-notes/\""
    }
  },
  {
    "input": {
      "content": "Doctor: Good morning, Ms. Johnson. Please have a seat. How have you been feeling since your last visit?\n\nPatient: Good morning, Doctor. Overall, I've been feeling much better. The symptoms I was experiencing seem to have improved significantly.\n\nDoctor: That's wonderful to hear. Can you tell me more about the improvements you've noticed?\n\nPatient: Well, the persistent headaches I mentioned during my last visit have reduced in frequency and intensity. I used to have them almost every day, but now it's only once or twice a week, and they're much milder.\n\nDoctor: Excellent. I'm glad to hear that your headaches have decreased. How about the abdominal pain you mentioned last time?\n\nPatient: The abdominal pain has also improved. It's become less frequent, and the intensity has reduced as well. I would say it's more of an occasional discomfort now rather than a constant pain.\n\nDoctor: That's a positive development. I'm pleased to see these improvements. Have you noticed any other changes in your overall health?\n\nPatient: Yes, my energy levels have increased significantly. I used to feel tired and fatigued most of the time, but now I have more energy to go about my daily activities. I even started exercising regularly, which has been great for my mood too.\n\nDoctor: That's fantastic news, Ms. Johnson. I'm really glad to hear that you're feeling more energized and motivated. It sounds like the treatment plan we discussed in our previous visits is working well for you.\n\nPatient: Absolutely, Doctor. I've been following your recommendations diligently, taking the prescribed medication as directed, and making some positive lifestyle changes. I'm really happy with the progress I've made so far.\n\nDoctor: That's wonderful to hear, Ms. Johnson. It's always rewarding for me to see my patients achieve positive outcomes. Based on your description and the improvements you've experienced, I believe we're on the right track.\n\nPatient: Thank you, Doctor. I appreciate your expertise and guidance throughout this journey. It's been reassuring to have a doctor who listens and supports me.\n\nDoctor: It's my pleasure, Ms. Johnson. Your health and well-being are my top priorities, and I'll continue to monitor your progress closely. Please don't hesitate to reach out if you have any concerns or questions in the future.\n\nPatient: I will, Doctor. Thank you once again for all your help. I'm looking forward to continuing on this positive path.\n\nDoctor: You're very welcome, Ms. Johnson. Take care of yourself, and I'll see you for a follow-up appointment in a few weeks.\n\nPatient: Sounds good, Doctor. Have a great day!"
    },
    "output": {
      "content": "**Patient:** Ms. Johnson, 35 yo female\n\n**Chief Complaint:** Improved headache and abdominal pain\n\n**History of Present Illness:** Ms. Johnson is a 35-year-old female who presents for a follow-up appointment. She states that she has been feeling much better since her last visit. Her headaches have reduced in frequency and intensity, and her abdominal pain has also improved. She is no longer experiencing any fatigue or other symptoms.\n\n**Past Medical History:** Ms. Johnson has a history of migraine headaches and irritable bowel syndrome. She is currently taking sumatriptan and amitriptyline for her headaches, and she is taking loperamide for her abdominal pain.\n\n**Social History:** Ms. Johnson is married and has two children. She is a stay-at-home mom. She does not smoke or drink alcohol.\n\n**Physical Examination:** Ms. Johnson is a well-developed, well-nourished female in no acute distress. Her vital signs are within normal limits. Her HEENT examination is unremarkable. Her neck is supple without lymphadenopathy. Her chest is clear to auscultation bilaterally. Her heart rate is regular and her rhythm is sinus. Her abdomen is soft and non-tender. There is no organomegaly or masses. Her extremities are warm and well-perfused.\n\n**Assessment:** Ms. Johnson is a 35-year-old female with a history of migraine headaches and irritable bowel syndrome who presents for a follow-up appointment. She states that she has been feeling much better since her last visit. Her headaches have reduced in frequency and intensity, and her abdominal pain has also improved. She is no longer experiencing any fatigue or other symptoms. Her physical examination is unremarkable.\n\n**Plan:** I will continue Ms. Johnson on her current medications. I will also recommend that she continue to make lifestyle changes, such as eating a healthy diet, exercising regularly, and getting enough sleep. I will see her back in 2 weeks for a follow-up appointment."
    }
  }
];
const messages = [
  {
    "content": "Doctor: Good morning, Mrs. Anderson. How can I assist you today?\n\nPatient: Good morning, Doctor. I've been experiencing some respiratory issues lately, and I wanted to have it checked.\n\nDoctor: I understand. Let's discuss your respiratory concerns in more detail. Can you describe the specific symptoms you've been experiencing?\n\nPatient: Lately, I've been coughing persistently, especially at night. I also feel shortness of breath and tightness in my chest, particularly during physical exertion or when exposed to certain triggers.\n\nDoctor: I see. Those symptoms can be indicative of various respiratory conditions. To better understand the underlying cause, I'll need to ask you a few more questions. Have you noticed any patterns related to your environment or any specific allergens that seem to worsen the symptoms?\n\nPatient: Yes, I've noticed that my symptoms worsen when I'm exposed to pollen or certain strong odors, such as cleaning agents or perfumes. I also have a history of allergies.\n\nDoctor: Alright. Based on your symptoms and history, I suspect you may be dealing with asthma or allergic rhinitis. However, to confirm this and rule out any other potential respiratory conditions, I recommend performing a comprehensive respiratory examination and conducting pulmonary function tests.\n\nPatient: That sounds reasonable, Doctor. I'm ready to undergo the necessary tests to get a clearer understanding of what's going on with my respiratory system.\n\nDoctor: Excellent. We'll start with a thorough respiratory examination, assessing your lung function, checking for any signs of inflammation or wheezing. We'll also arrange for pulmonary function tests to evaluate the airflow in your lungs and determine if there are any underlying lung disorders. Additionally, I'll provide you with some recommendations for managing your symptoms and avoiding triggers.\n\nPatient: Thank you, Doctor. I appreciate your thoroughness and guidance. I'll follow your instructions and look forward to getting more insights from the tests.\n\nDoctor: You're welcome, Mrs. Anderson. It's my priority to help you improve your respiratory health. After the examination and review of the test results, we'll discuss the findings and explore appropriate treatment options if necessary. Remember, if you have any concerns or if your symptoms worsen, don't hesitate to reach out.\n\nPatient: I will, Doctor. Thank you for your expertise and attention.\n\nDoctor: It's my pleasure. Take care, and we'll see you soon for your respiratory examination.\n\n[End of simulated audio transcript]"
  },
  {
    "content": "**Patient:** Mrs. Anderson, 50 yo female\n\n**Chief Complaint:** Respiratory issues\n\n**History of Present Illness:** Mrs. Anderson is a 50-year-old female who presents with a chief complaint of respiratory issues. She states that she has been experiencing a persistent cough, shortness of breath, and tightness in her chest for the past few weeks. The symptoms are worse at night and when she is exposed to certain triggers, such as pollen or strong odors.\n\n**Past Medical History:** Mrs. Anderson has a history of allergies and asthma. She is currently taking an albuterol inhaler as needed for her asthma.\n\n**Social History:** Mrs. Anderson is a married stay-at-home mom. She does not smoke or drink alcohol.\n\n**Physical Examination:** Mrs. Anderson is a well-developed, well-nourished female in no acute distress. Her vital signs are as follows: temperature 98.6 degrees Fahrenheit, pulse 80 beats per minute, respirations 16 breaths per minute, and blood pressure 120/80 mmHg. Her HEENT examination is unremarkable. Her neck is supple without lymphadenopathy. Her chest is clear to auscultation bilaterally. Her heart rate is regular and her rhythm is sinus. Her abdomen is soft and non-tender. There is no organomegaly or masses. Her extremities are warm and well-perfused.\n\n**Assessment:** Mrs. Anderson is a 50-year-old female with a history of allergies and asthma who presents with a chief complaint of respiratory issues. She has a persistent cough, shortness of breath, and tightness in her chest. The symptoms are worse at night and when she is exposed to certain triggers. Her physical examination is unremarkable.\n\n**Plan:** I will order a pulmonary function test to evaluate Mrs. Anderson's lung function. I will also recommend that she avoid triggers that worsen her symptoms, such as pollen and strong odors. I will prescribe an albuterol inhaler for her to use as needed for her asthma. I will see her back in 2 weeks for a follow-up appointment."
  }
];

messages.push({ "content": "NEXT REQUEST" });

client.generateMessage({
  // required, which model to use to generate the result
  model: MODEL_NAME,
  // optional, 0.0 always uses the highest-probability result
  temperature: 0.1,
  // optional, how many candidate results to generate
  candidateCount: 1,
  // optional, number of most probable tokens to consider for generation
  top_k: 40,
  // optional, for nucleus sampling decoding strategy
  top_p: 0.95,
  prompt: {
    // optional, sent on every request and prioritized over history
    context: context,
    // optional, examples to further finetune responses
    examples: examples,
    // required, alternating prompt/response messages
    messages: messages,
  },
}).then(result => {
  console.log(JSON.stringify(result, null, 2));
});
	 *
	 *
	 *
	 * */
	const [appointment, setAppointment] = useState([])
	const [note, setNote] = useState('')
	const [message, setMessage] = useState('')
	const [messagelist, setMessageList] = useState([
		{
			message:
				'Please record your transcript here. Once done, click send.',
			sender: 'Eva',
		},
	])

	// onChange handler for the MessageInput component should use the note state variable above

	const handleNoteChange = (value) => {
		setNote(value)
	}

	// onClick handler for the send button should use the note state variable above. It should also update the messagelist state variable above. The message should be sent from the user (not Eva) and should be appended to the end of the messagelist array.

	const handleSendClick = () => {
		console.log(note)
		setMessageList([
			...messagelist,
			{
				message: note,
				sender: 'User',
			},
		])
		setNote('')
	}
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom>
					Chatbot AI
				</Typography>
				<MainContainer>
					<ChatContainer>
						<MessageList>
							{messagelist.map((message, index) => (
								<Message
									key={index}
									model={{
										message: message.message,
										sentTime: 'just now',
										sender: message.sender,
									}}
								/>
							))}
						</MessageList>
					</ChatContainer>
				</MainContainer>
			</CardContent>
			<CardActions>
				<InputToolbox>
					<MicIcon />
				</InputToolbox>
				<MessageInput
					placeholder="Type message here"
					attachButton={false}
					onChange={handleNoteChange}
					onSend={() => handleSendClick()}
					value={note}
				/>
			</CardActions>
		</Card>
	)
}
