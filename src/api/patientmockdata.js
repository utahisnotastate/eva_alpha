const mockpatients = [
	{
		id: 1,
		details: {
			first_name: 'Nicolais',
			last_name: 'Kayser',
			middle_name: 'nkayser0@apple.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '8858 Rutledge Pass',
			address_two: null,
			city: 'Dallas',
			state: 'TX',
			zip: '75246',
			date_of_birth: '1975-02-09T21:18:46Z',
			contact_methods: [
				{ number: '835-433-4783', notes: null },
				{
					number: '760-715-0955',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				},
				{
					allergy: null,
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
				{
					allergy: null,
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				},
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T485X5A',
					ICD10diagnosislongdescription:
						'Adverse effect of other anti-common-cold drugs, initial encounter',
					ICD10diagnosisshortdescription:
						'Adverse effect of other anti-common-cold drugs, init encntr',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S7221XF',
					ICD10diagnosislongdescription:
						'Displaced subtrochanteric fracture of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing',
					ICD10diagnosisshortdescription:
						'Displ subtrochnt fx r femr, 7thF',
					medications: [
						{
							drugname: 'Prednisone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Trixy Planke',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'Q-3575011409',
					company: 'Pagac-Christiansen',
					frontimage:
						'http://dummyimage.com/174x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/124x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/09/1956',
					eligibiltybegan: '06/09/1981',
					eligibiltyexpired: '12/22/1980',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-9789967265',
					company: 'Kris-Sipes',
					frontimage:
						'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/05/2022',
					eligibiltybegan: '09/27/1980',
					eligibiltyexpired: '03/30/1965',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-3464911365',
					company: 'Turcotte-Runolfsson',
					frontimage:
						'http://dummyimage.com/121x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/218x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/27/1996',
					eligibiltybegan: '08/27/1982',
					eligibiltyexpired: '05/01/1979',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0VBL4ZX',
					performed_by: 'Vern Horning',
					date: 1998,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0476366',
					performed_by: 'Alphard Seals',
					date: 2020,
					additional_information:
						'cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices',
				},
			],
		},
		ssn: '582023399',
	},
	{
		id: 2,
		details: {
			first_name: 'Tansy',
			last_name: 'Wraxall',
			middle_name: 'twraxall1@cornell.edu',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2082 Sugar Road',
			address_two: null,
			city: 'Silver Spring',
			state: 'MD',
			zip: '20904',
			date_of_birth: '1975-07-24T07:44:47Z',
			contact_methods: [
				{ number: '332-463-2439', notes: null },
				{
					number: '479-157-7220',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
				{ number: '828-157-2253', notes: null },
				{
					number: '686-827-4957',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T63411A',
					ICD10diagnosislongdescription:
						'Toxic effect of venom of centipedes and venomous millipedes, accidental (unintentional), initial encounter',
					ICD10diagnosisshortdescription:
						'Toxic effect of venom of centipede/millipede, acc, init',
					medications: [
						{
							drugname: 'Ferrum Phos',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Bertina Ort',
						},
					],
				},
				{
					ICD10diagnosiscode: 'J9610',
					ICD10diagnosislongdescription:
						'Chronic respiratory failure, unspecified whether with hypoxia or hypercapnia',
					ICD10diagnosisshortdescription:
						'Chronic respiratory failure, unsp w hypoxia or hypercapnia',
					medications: [
						{
							drugname: 'Aluminum Chlorohydrate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Kain Looby',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Abdul Hewlings',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Ben Curgenven',
						},
						{
							drugname:
								'LOSARTAN POTASSIUM AND HYDROCHLOROTHIAZIDE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Tessi Tointon',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Loree Boorn',
						},
						{
							drugname: 'PIPERACILLIN and TAZOBACTAM',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Duky McCallion',
						},
						{
							drugname: 'sodium oxybate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Lacey Hartburn',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Carolyn Van Der Walt',
						},
						{
							drugname: 'Didanosine',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Colly Gelling',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M10259',
					ICD10diagnosislongdescription:
						'Drug-induced gout, unspecified hip',
					ICD10diagnosisshortdescription:
						'Drug-induced gout, unspecified hip',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'U-8411921148',
					company: 'Von-Hirthe',
					frontimage:
						'http://dummyimage.com/136x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/161x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/29/1952',
					eligibiltybegan: '04/05/1996',
					eligibiltyexpired: '05/29/2004',
				},
				{
					primary: false,
					active: true,
					membernumber: 'O-4979847859',
					company: 'Emard-Steuber',
					frontimage:
						'http://dummyimage.com/178x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/10/2006',
					eligibiltybegan: '01/07/1983',
					eligibiltyexpired: '09/08/1999',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-8906459986',
					company: 'Tremblay Inc',
					frontimage:
						'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/12/1971',
					eligibiltybegan: '09/05/1993',
					eligibiltyexpired: '08/07/1985',
				},
				{
					primary: true,
					active: false,
					membernumber: 'N-5173286312',
					company: 'Paucek-Mayer',
					frontimage:
						'http://dummyimage.com/250x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/221x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/17/1956',
					eligibiltybegan: '01/08/1974',
					eligibiltyexpired: '10/02/2003',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-5539385380',
					company: 'Gerlach Group',
					frontimage:
						'http://dummyimage.com/118x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/26/1960',
					eligibiltybegan: '12/26/1979',
					eligibiltyexpired: '12/21/1982',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-8421858688',
					company: 'Schroeder-Brekke',
					frontimage:
						'http://dummyimage.com/141x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/158x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/01/2008',
					eligibiltybegan: '07/22/1985',
					eligibiltyexpired: '12/06/1994',
				},
				{
					primary: false,
					active: true,
					membernumber: 'G-0512986138',
					company: 'Bartoletti, Langworth and Dibbert',
					frontimage:
						'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/223x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/03/1956',
					eligibiltybegan: '02/05/1982',
					eligibiltyexpired: '04/21/1953',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-2861511191',
					company: 'Green Group',
					frontimage:
						'http://dummyimage.com/137x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/183x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/12/1964',
					eligibiltybegan: '02/08/1950',
					eligibiltyexpired: '12/12/2000',
				},
				{
					primary: true,
					active: true,
					membernumber: 'L-1499278667',
					company: 'Koch-Mraz',
					frontimage:
						'http://dummyimage.com/110x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/248x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/09/1982',
					eligibiltybegan: '10/08/1973',
					eligibiltyexpired: '10/29/1966',
				},
				{
					primary: true,
					active: true,
					membernumber: 'I-4042650883',
					company: 'Heathcote Group',
					frontimage:
						'http://dummyimage.com/237x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/14/1980',
					eligibiltybegan: '04/24/1976',
					eligibiltyexpired: '09/02/1973',
				},
			],
			surgicalhistory: null,
		},
		ssn: '207746802',
	},
	{
		id: 3,
		details: {
			first_name: 'Susy',
			last_name: 'Boden',
			middle_name: 'sboden2@wikispaces.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '621 Ridgeway Court',
			address_two: null,
			city: 'Omaha',
			state: 'NE',
			zip: '68117',
			date_of_birth: '1978-06-10T11:38:03Z',
			contact_methods: [
				{ number: '268-787-7156', notes: null },
				{ number: '313-832-0811', notes: null },
				{ number: '329-282-1771', notes: null },
				{
					number: '364-111-2866',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				},
				{ number: '630-940-3068', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M25629',
					ICD10diagnosislongdescription:
						'Stiffness of unspecified elbow, not elsewhere classified',
					ICD10diagnosisshortdescription:
						'Stiffness of unspecified elbow, not elsewhere classified',
					medications: [
						{
							drugname: 'POLOXAMER 407',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Marlee McCorry',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V9002XA',
					ICD10diagnosislongdescription:
						'Drowning and submersion due to fishing boat overturning, initial encounter',
					ICD10diagnosisshortdescription:
						'Drown due to fishing boat overturning, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S89392',
					ICD10diagnosislongdescription:
						'Other physeal fracture of lower end of left fibula',
					ICD10diagnosisshortdescription:
						'Other physeal fracture of lower end of left fibula',
					medications: [
						{
							drugname: 'Loratadine',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Alyosha Thornhill',
						},
						{
							drugname:
								'avobenzone, homosalate, octisalate, octocrylene, oxybenzone',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Nora Skey',
						},
						{
							drugname: 'Digoxin',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Niki Di Claudio',
						},
						{
							drugname: 'thioridazine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Adah Culley',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Astra Linskey',
						},
						{
							drugname:
								'Yellow Hornet hymenoptera venom Venomil Diagnostic',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Keven Pettinger',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T360X4',
					ICD10diagnosislongdescription:
						'Poisoning by penicillins, undetermined',
					ICD10diagnosisshortdescription:
						'Poisoning by penicillins, undetermined',
					medications: [
						{
							drugname: 'OCTINOXATE and TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Nyssa Latchford',
						},
						{
							drugname: 'Bahia Grass',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Regina Kenrack',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92146P',
					ICD10diagnosislongdescription:
						'Nondisplaced dome fracture of unspecified talus, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Nondisp dome fracture of unsp talus, subs for fx w malunion',
					medications: [
						{
							drugname: 'Loratadine, Pseudoephedrine',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Emera Fretson',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Carie Chatel',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Haily Yakubowicz',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Dona Tomkies',
						},
						{
							drugname: 'Magesium Citrate',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Kania Aylward',
						},
						{
							drugname:
								'Norethindrone Acetate/Ethinyl Estradiol and Ferrous Fumarate',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Marcelia Cholerton',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Karlotte Jorez',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Corinna Grass',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Zebadiah Van Brug',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Jacquette Dunne',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92054B',
					ICD10diagnosislongdescription:
						'Nondisplaced other extraarticular fracture of right calcaneus, initial encounter for open fracture',
					ICD10diagnosisshortdescription:
						'Nondisp oth extrartic fx r calcaneus, init for opn fx',
					medications: [
						{
							drugname: 'Glycerin',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Edlin Duigan',
						},
						{
							drugname:
								'Apis mellifica, Arsenicum album, Baptisia tinctoria, Capsicum annuum, Dulcamara, Echinacea, Nitricum acidum, Pyrogenium, Rhus toxicodendron,',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Gasper Drinkall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'A3686',
					ICD10diagnosislongdescription:
						'Diphtheritic conjunctivitis',
					ICD10diagnosisshortdescription:
						'Diphtheritic conjunctivitis',
					medications: [
						{
							drugname: 'hydroxyzine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Dion Morcombe',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Gena Milmore',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S59099S',
					ICD10diagnosislongdescription:
						'Other physeal fracture of lower end of ulna, unspecified arm, sequela',
					ICD10diagnosisshortdescription:
						'Oth physeal fracture of lower end of ulna, unsp arm, sequela',
					medications: [
						{
							drugname: 'SODIUM CHLORIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Josefa Thompson',
						},
						{
							drugname:
								'Arnica 30c, Apis 30c, Belladonna 30c, Calendula 30c, Caulophyllum 30c, Chamomilla 30c, Cimicifuga 30c, Ferrum Met. 30c, Kali Carb 30c, Sabina 30c, Secale 30c, Viburnum 30c',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Yoshi Greenroyd',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Chick Willmetts',
						},
					],
				},
				{
					ICD10diagnosiscode: 'B675',
					ICD10diagnosislongdescription:
						'Echinococcus multilocularis infection of liver',
					ICD10diagnosisshortdescription:
						'Echinococcus multilocularis infection of liver',
					medications: [
						{
							drugname: 'PRAVASTATIN SODIUM',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Cecilla Kearle',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Judah Drew-Clifton',
						},
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Maddie Rupel',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V659XXS',
					ICD10diagnosislongdescription:
						'Unspecified occupant of heavy transport vehicle injured in collision with railway train or railway vehicle in traffic accident, sequela',
					ICD10diagnosisshortdescription:
						'Occup of hv veh inj in clsn w rail trn/veh in traf, sequela',
					medications: [
						{
							drugname: 'Acetaminophen, Aspirin and caffeine',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Nappy Spire',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Eydie Sloley',
						},
						{
							drugname:
								'Octinoxate, Octisalate, Titanium dioxide, and Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Augy Torns',
						},
						{
							drugname:
								'Pentazocine Hydrochloride and Naloxone Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Blondelle Monketon',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ula Gullyes',
						},
						{
							drugname: 'Prochlorperazine Edisylate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Darcey Chesshyre',
						},
						{
							drugname: 'Metoprolol succinate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Mitzi Tamblingson',
						},
						{
							drugname: 'Bisacodyl',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Tedda Greystock',
						},
						{
							drugname: 'Nisoldipine',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Nessa Hazeldean',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Clayborne Fautly',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'R-2979159549',
					company: 'Rath and Sons',
					frontimage:
						'http://dummyimage.com/196x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/103x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/25/1956',
					eligibiltybegan: '11/23/1978',
					eligibiltyexpired: '11/22/1994',
				},
				{
					primary: false,
					active: true,
					membernumber: 'S-1317521751',
					company: 'Kassulke-Bauch',
					frontimage:
						'http://dummyimage.com/243x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/130x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/15/1991',
					eligibiltybegan: '10/10/1974',
					eligibiltyexpired: '01/05/1975',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-5283625596',
					company: "O'Reilly-Ward",
					frontimage:
						'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/129x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/24/1973',
					eligibiltybegan: '03/14/1953',
					eligibiltyexpired: '05/03/2004',
				},
				{
					primary: true,
					active: false,
					membernumber: 'S-7191565227',
					company: 'Mann-Cremin',
					frontimage:
						'http://dummyimage.com/247x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/244x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/03/1975',
					eligibiltybegan: '03/21/1954',
					eligibiltyexpired: '07/25/1998',
				},
				{
					primary: false,
					active: true,
					membernumber: 'N-7313745459',
					company: 'Blanda Inc',
					frontimage:
						'http://dummyimage.com/186x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/228x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/23/1952',
					eligibiltybegan: '04/20/2005',
					eligibiltyexpired: '08/29/1983',
				},
				{
					primary: false,
					active: true,
					membernumber: 'N-8270335534',
					company: 'Skiles-Leannon',
					frontimage:
						'http://dummyimage.com/116x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/231x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/17/2018',
					eligibiltybegan: '08/15/1989',
					eligibiltyexpired: '08/18/1994',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'B52J1ZZ',
					performed_by: 'Sisely Petruskevich',
					date: 1952,
					additional_information: null,
				},
			],
		},
		ssn: '620572961',
	},
	{
		id: 4,
		details: {
			first_name: 'Craggy',
			last_name: 'Zanre',
			middle_name: 'czanre3@jigsy.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '736 Dovetail Parkway',
			address_two: null,
			city: 'Tulsa',
			state: 'OK',
			zip: '74156',
			date_of_birth: '1965-03-03T13:41:55Z',
			contact_methods: [{ number: '649-966-4270', notes: null }],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'Y92523',
					ICD10diagnosislongdescription:
						'Highway rest stop as the place of occurrence of the external cause',
					ICD10diagnosisshortdescription:
						'Highway rest stop as place',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Jacobo List',
						},
						{
							drugname: 'oxygen',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Mario Eccleshall',
						},
						{
							drugname: 'Tacrolimus',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Kyla Hyndman',
						},
						{
							drugname: 'MENTHOL',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Tove Karolewski',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Frank Crosson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52371F',
					ICD10diagnosislongdescription:
						"Galeazzi's fracture of right radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
					ICD10diagnosisshortdescription: "Galeazzi's fx r rad, 7thF",
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S92153',
					ICD10diagnosislongdescription:
						'Displaced avulsion fracture (chip fracture) of unspecified talus',
					ICD10diagnosisshortdescription:
						'Displaced avulsion fracture (chip fracture) of unsp talus',
					medications: [
						{
							drugname: 'Carvedilol',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Valry Turland',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Gerianne Avery',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Tommi Sebire',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Koo Stadding',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Laird Bene',
						},
						{
							drugname: 'Olanzapine',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Gilligan Gentery',
						},
						{
							drugname: 'Medroxyprogesterone Acetate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Sheba Beardow',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Carolina Luciani',
						},
						{
							drugname: 'Ropinirole Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Renie Bonas',
						},
						{
							drugname: 'omeprazole',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Nady Wanstall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O2671',
					ICD10diagnosislongdescription:
						'Subluxation of symphysis (pubis) in pregnancy',
					ICD10diagnosisshortdescription:
						'Subluxation of symphysis (pubis) in pregnancy',
					medications: [
						{
							drugname:
								'BROMPHENIRAMINE MALEATE , PHENYLEPHRINE HYDROCHLORIDE, DEXTROMETHORPHAN HYDROBROMIDE,',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Lanny Loving',
						},
						{
							drugname: 'Aspirin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Emelyne Golden',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Maxy Putton',
						},
						{
							drugname: 'Quetiapine fumarate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Theresita Penella',
						},
						{
							drugname: 'cetirizine hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Rosa Colbran',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Lynna Jacketts',
						},
						{
							drugname:
								'Calendula Officinalis Flower, Hydrated Silica, and Allylthiourea',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Delphine Capelen',
						},
						{
							drugname: 'PREGABALIN',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Duncan Heymann',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Sheridan Wibrow',
						},
						{
							drugname: 'lansoprazole',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Patrizius Muckle',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S1249',
					ICD10diagnosislongdescription:
						'Other fracture of fifth cervical vertebra',
					ICD10diagnosisshortdescription:
						'Other fracture of fifth cervical vertebra',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Y-8662981863',
					company: 'Bergnaum Inc',
					frontimage:
						'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/103x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/22/1978',
					eligibiltybegan: '10/17/1980',
					eligibiltyexpired: '04/01/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'B-4104918430',
					company: 'Cremin-Becker',
					frontimage:
						'http://dummyimage.com/119x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/130x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/30/1956',
					eligibiltybegan: '06/27/2022',
					eligibiltyexpired: '01/02/1987',
				},
				{
					primary: false,
					active: false,
					membernumber: 'L-4715843413',
					company: 'Gislason-Cronin',
					frontimage:
						'http://dummyimage.com/105x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/226x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/30/1985',
					eligibiltybegan: '05/12/1972',
					eligibiltyexpired: '09/19/1968',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-9146450776',
					company: 'Schmidt-Schulist',
					frontimage:
						'http://dummyimage.com/186x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/102x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/01/1964',
					eligibiltybegan: '03/30/2009',
					eligibiltyexpired: '12/05/2009',
				},
				{
					primary: true,
					active: false,
					membernumber: 'N-0786142007',
					company: 'Hudson-Little',
					frontimage:
						'http://dummyimage.com/104x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/156x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/25/1989',
					eligibiltybegan: '02/01/1953',
					eligibiltyexpired: '01/18/2000',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-7468698845',
					company: 'Dietrich Inc',
					frontimage:
						'http://dummyimage.com/218x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/04/1984',
					eligibiltybegan: '08/24/2017',
					eligibiltyexpired: '03/20/2001',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0RGJ4KZ',
					performed_by: 'Kenny Surman',
					date: 1950,
					additional_information: null,
				},
				{
					ICD10procedurecode: '099C3ZX',
					performed_by: 'Anthea Halahan',
					date: 1996,
					additional_information: null,
				},
				{
					ICD10procedurecode: '00C80ZZ',
					performed_by: 'Heinrick Duligall',
					date: 1973,
					additional_information: null,
				},
			],
		},
		ssn: '582806020',
	},
	{
		id: 5,
		details: {
			first_name: 'Justus',
			last_name: 'Leney',
			middle_name: 'jleney4@usnews.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '070 Petterle Center',
			address_two: null,
			city: 'San Antonio',
			state: 'TX',
			zip: '78265',
			date_of_birth: '1992-01-31T06:25:22Z',
			contact_methods: [
				{
					number: '935-519-8433',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
				{ number: '746-984-4494', notes: null },
				{
					number: '328-332-9197',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				},
				{
					number: '963-295-2855',
					notes: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S82109A',
					ICD10diagnosislongdescription:
						'Unspecified fracture of upper end of unspecified tibia, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Unsp fracture of upper end of unsp tibia, init for clos fx',
					medications: [
						{
							drugname: 'Cedar Red',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Modesta Orchard',
						},
						{
							drugname: 'Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Florri Witham',
						},
						{
							drugname: 'populus nigra pollen',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Maddie Mogie',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Bran Isgar',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Jewelle Hawson',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Cassondra Kender',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Daryl Richard',
						},
					],
				},
				{
					ICD10diagnosiscode: 'W16512S',
					ICD10diagnosislongdescription:
						'Jumping or diving into swimming pool striking water surface causing other injury, sequela',
					ICD10diagnosisshortdescription:
						'Jump/div into swim pool strk surfc cause oth injury, sequela',
					medications: [
						{
							drugname: 'Treatment Set TS329109',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Willabella Ripper',
						},
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Kacie Yanson',
						},
						{
							drugname: 'PERIDOT',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Joeann Scourge',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Humfried Cracknall',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Vergil Bauser',
						},
						{
							drugname:
								'Acetaminophen Chlorpheniramine Maleate Dextromethorphan Hydrobromide Phenylepherine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Holly-anne Spikins',
						},
						{
							drugname:
								'Hydrocodone Bitartrate And Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Bess Bliben',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Osmond Vant',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T23112S',
					ICD10diagnosislongdescription:
						'Burn of first degree of left thumb (nail), sequela',
					ICD10diagnosisshortdescription:
						'Burn of first degree of left thumb (nail), sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S89302K',
					ICD10diagnosislongdescription:
						'Unspecified physeal fracture of lower end of left fibula, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Unsp physl fx lower end of l fibula, subs for fx w nonunion',
					medications: [
						{
							drugname: 'ORPHENADRINE CITRATE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Kaitlyn Brockhouse',
						},
						{
							drugname: 'zaleplon',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Osbourn Slobom',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Em Plomer',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Marcel Clissold',
						},
						{
							drugname: 'Cocklebur',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Alexio Bassingham',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Priscella Casillas',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'H-2353822400',
					company: 'Miller, Hirthe and Baumbach',
					frontimage:
						'http://dummyimage.com/100x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/206x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/27/1981',
					eligibiltybegan: '05/19/2018',
					eligibiltyexpired: '03/31/2018',
				},
				{
					primary: true,
					active: false,
					membernumber: 'T-3730123655',
					company: 'Roberts-Oberbrunner',
					frontimage:
						'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/13/1951',
					eligibiltybegan: '01/13/1970',
					eligibiltyexpired: '11/11/2020',
				},
				{
					primary: false,
					active: false,
					membernumber: 'D-7639850277',
					company: 'Bernier, Cruickshank and Windler',
					frontimage:
						'http://dummyimage.com/248x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/172x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/19/2018',
					eligibiltybegan: '04/12/1966',
					eligibiltyexpired: '11/27/1995',
				},
				{
					primary: false,
					active: false,
					membernumber: 'H-7968184080',
					company: 'Jacobi-Cole',
					frontimage:
						'http://dummyimage.com/243x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/01/2010',
					eligibiltybegan: '05/17/1961',
					eligibiltyexpired: '01/14/2012',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0PSK0BZ',
					performed_by: 'Audry Urrey',
					date: 2019,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'BQ2M1ZZ',
					performed_by: 'Melisenda Amor',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0BW1XKZ',
					performed_by: 'Stace McAlroy',
					date: 1985,
					additional_information:
						'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus',
				},
				{
					ICD10procedurecode: '05HH03Z',
					performed_by: 'Fields Cescoti',
					date: 2013,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WW801Z',
					performed_by: 'Jacky Dewane',
					date: 2003,
					additional_information:
						'sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et',
				},
				{
					ICD10procedurecode: '0KC43ZZ',
					performed_by: 'Aurea Scholefield',
					date: 1954,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0JRN37Z',
					performed_by: 'Vere Felstead',
					date: 2009,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0FWDX2Z',
					performed_by: 'Olag Ogilvie',
					date: 2015,
					additional_information:
						'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
				},
				{
					ICD10procedurecode: '0KX44ZZ',
					performed_by: 'Brewer Tansly',
					date: 2008,
					additional_information: null,
				},
			],
		},
		ssn: '860184209',
	},
	{
		id: 6,
		details: {
			first_name: 'Ines',
			last_name: 'MacInherney',
			middle_name: 'imacinherney5@homestead.com',
			gender: 'Female',
			preffered_name: null,
			address_one: '58 Carey Street',
			address_two: null,
			city: 'Birmingham',
			state: 'AL',
			zip: '35295',
			date_of_birth: '1963-10-08T15:14:52Z',
			contact_methods: [
				{ number: '780-266-2762', notes: null },
				{
					number: '949-611-3285',
					notes: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
				},
				{
					number: '169-362-5242',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{ allergy: 'animals', notes: null },
				{
					allergy: 'medication',
					notes: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
				{ allergy: 'medication', notes: null },
				{ allergy: null, notes: null },
			],
			diagnoses: null,
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'V-7062668330',
					company: 'Pfeffer, Ryan and Runte',
					frontimage:
						'http://dummyimage.com/219x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/247x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/09/1988',
					eligibiltybegan: '09/20/1984',
					eligibiltyexpired: '07/31/1954',
				},
				{
					primary: false,
					active: true,
					membernumber: 'O-0489270764',
					company: 'Sporer LLC',
					frontimage:
						'http://dummyimage.com/209x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/184x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/03/2001',
					eligibiltybegan: '10/12/2016',
					eligibiltyexpired: '04/18/2019',
				},
				{
					primary: true,
					active: false,
					membernumber: 'N-7628752624',
					company: 'Kilback Inc',
					frontimage:
						'http://dummyimage.com/166x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/177x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/04/1996',
					eligibiltybegan: '06/22/2010',
					eligibiltyexpired: '03/31/1984',
				},
				{
					primary: false,
					active: false,
					membernumber: 'V-5041482388',
					company: 'Beier Group',
					frontimage:
						'http://dummyimage.com/204x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/12/1991',
					eligibiltybegan: '12/05/1961',
					eligibiltyexpired: '09/16/1983',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-1552654522',
					company: 'Friesen-Ullrich',
					frontimage:
						'http://dummyimage.com/107x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/28/1985',
					eligibiltybegan: '05/08/2003',
					eligibiltyexpired: '10/03/1968',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-3854177846',
					company: 'Blanda and Sons',
					frontimage:
						'http://dummyimage.com/140x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/106x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/06/1992',
					eligibiltybegan: '09/05/2005',
					eligibiltyexpired: '07/19/2013',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Z-8575273621',
					company: 'Spencer Inc',
					frontimage:
						'http://dummyimage.com/224x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/23/1966',
					eligibiltybegan: '07/16/1953',
					eligibiltyexpired: '07/30/2015',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0G9K0ZX',
					performed_by: 'Wendell McKinty',
					date: 1984,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06R80KZ',
					performed_by: 'Leeland Rolles',
					date: 1953,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DSLXZZ',
					performed_by: 'Howard Novelli',
					date: 2003,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DBB3ZZ',
					performed_by: 'Zelma Bynold',
					date: 1963,
					additional_information:
						'pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem',
				},
				{
					ICD10procedurecode: 'B50N0ZZ',
					performed_by: 'Sallie Fantonetti',
					date: 1987,
					additional_information:
						'orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
				},
				{
					ICD10procedurecode: 'BR1BYZZ',
					performed_by: 'Vlad Nanetti',
					date: 1957,
					additional_information: null,
				},
				{
					ICD10procedurecode: '037A0ZZ',
					performed_by: 'Padgett Mussett',
					date: 1971,
					additional_information:
						'pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at',
				},
				{
					ICD10procedurecode: '0RPB4KZ',
					performed_by: 'Mace Francescone',
					date: 1989,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SJ3XZZ',
					performed_by: 'Alicea Zanicchi',
					date: 1980,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'F01D0FZ',
					performed_by: 'Sukey Giraldez',
					date: 2020,
					additional_information: null,
				},
			],
		},
		ssn: '614421447',
	},
	{
		id: 7,
		details: {
			first_name: 'Koo',
			last_name: 'Talman',
			middle_name: 'ktalman6@fema.gov',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '684 Emmet Hill',
			address_two: null,
			city: 'Jacksonville',
			state: 'FL',
			zip: '32220',
			date_of_birth: '1988-07-06T05:20:51Z',
			contact_methods: [{ number: '928-945-1947', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				},
				{
					allergy: null,
					notes: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'M0892',
					ICD10diagnosislongdescription:
						'Juvenile arthritis, unspecified, elbow',
					ICD10diagnosisshortdescription:
						'Juvenile arthritis, unspecified, elbow',
					medications: [
						{
							drugname: 'TETRAHYDROZOLINE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ramsay Boag',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Dorey Skippen',
						},
						{
							drugname:
								'Hydrocodone Bitartrate And Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Martie Sinderland',
						},
						{
							drugname: 'pilocarpine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Cornelius Rodder',
						},
						{
							drugname:
								'phenylephrine hcl, brompheniramine maleate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Cathlene Hills',
						},
						{
							drugname:
								'ANAS BARBARIAE HEPATIS ET CORDIS EXTRACTUM',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Meade Andreotti',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Katusha Weall',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Archibaldo Kornes',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Silvester Dadd',
						},
						{
							drugname: 'Benzalkonium Chloride',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Denise Agneau',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'T-1453949530',
					company: 'Crist-Strosin',
					frontimage:
						'http://dummyimage.com/250x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/139x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/24/1980',
					eligibiltybegan: '06/17/1995',
					eligibiltyexpired: '12/03/1955',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-4750205723',
					company: 'Corkery, Ward and Fisher',
					frontimage:
						'http://dummyimage.com/153x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/188x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '06/16/2021',
					eligibiltybegan: '02/15/1963',
					eligibiltyexpired: '07/26/1978',
				},
				{
					primary: false,
					active: false,
					membernumber: 'H-4086386271',
					company: 'Hermiston, Volkman and Donnelly',
					frontimage:
						'http://dummyimage.com/180x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/228x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/17/1991',
					eligibiltybegan: '07/30/1970',
					eligibiltyexpired: '04/29/2020',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-6956686253',
					company: "Hudson, Okuneva and O'Kon",
					frontimage:
						'http://dummyimage.com/247x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/14/1980',
					eligibiltybegan: '10/30/2011',
					eligibiltyexpired: '05/01/1971',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-7703671066',
					company: 'Harvey Group',
					frontimage:
						'http://dummyimage.com/163x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/188x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/10/2007',
					eligibiltybegan: '03/19/2017',
					eligibiltyexpired: '05/06/2019',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-9712598868',
					company: 'Mayert, Kutch and Larkin',
					frontimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/229x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/31/1956',
					eligibiltybegan: '09/02/1965',
					eligibiltyexpired: '06/11/2011',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0D1B47H',
					performed_by: 'Carroll Caurah',
					date: 1955,
					additional_information:
						'quam a odio in hac habitasse platea dictumst maecenas ut massa',
				},
				{
					ICD10procedurecode: '0TWD33Z',
					performed_by: 'Beverie Rumbelow',
					date: 1951,
					additional_information: null,
				},
			],
		},
		ssn: '492436979',
	},
	{
		id: 8,
		details: {
			first_name: 'Luciano',
			last_name: 'Galley',
			middle_name: 'lgalley7@desdev.cn',
			gender: 'Male',
			preffered_name: null,
			address_one: '384 Moulton Terrace',
			address_two: null,
			city: 'Mobile',
			state: 'AL',
			zip: '36622',
			date_of_birth: '1990-01-30T23:20:58Z',
			contact_methods: [
				{ number: '801-882-4129', notes: null },
				{ number: '596-784-2559', notes: null },
				{
					number: '584-407-7837',
					notes: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
				},
				{ number: '170-755-9759', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: null,
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'R-5041583506',
					company: 'Wolff LLC',
					frontimage:
						'http://dummyimage.com/250x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/184x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/11/1958',
					eligibiltybegan: '12/24/1980',
					eligibiltyexpired: '03/10/1964',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-1939815113',
					company: 'Bergnaum-Wolff',
					frontimage:
						'http://dummyimage.com/172x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/110x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/04/1974',
					eligibiltybegan: '01/06/2005',
					eligibiltyexpired: '07/01/2008',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-2112144926',
					company: "O'Hara-Leffler",
					frontimage:
						'http://dummyimage.com/201x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/22/1967',
					eligibiltybegan: '06/06/1964',
					eligibiltyexpired: '02/13/2015',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-0853708529',
					company: 'Powlowski, Weissnat and Wolf',
					frontimage:
						'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/147x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/11/2010',
					eligibiltybegan: '02/15/2001',
					eligibiltyexpired: '03/19/2016',
				},
				{
					primary: false,
					active: true,
					membernumber: 'A-0956655253',
					company: 'MacGyver, Bernier and Lemke',
					frontimage:
						'http://dummyimage.com/233x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/203x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/05/2020',
					eligibiltybegan: '05/03/1956',
					eligibiltyexpired: '08/30/2002',
				},
				{
					primary: false,
					active: true,
					membernumber: 'M-1254251369',
					company: 'Kohler-Nitzsche',
					frontimage:
						'http://dummyimage.com/173x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/190x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/29/1955',
					eligibiltybegan: '01/14/1990',
					eligibiltyexpired: '12/27/2014',
				},
				{
					primary: false,
					active: true,
					membernumber: 'R-2015953837',
					company: 'Olson, Anderson and Skiles',
					frontimage:
						'http://dummyimage.com/225x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/156x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/14/1974',
					eligibiltybegan: '06/27/1956',
					eligibiltyexpired: '08/11/1952',
				},
				{
					primary: true,
					active: true,
					membernumber: 'F-2418223429',
					company: 'Wisozk Group',
					frontimage:
						'http://dummyimage.com/210x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/113x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/12/1983',
					eligibiltybegan: '08/10/1994',
					eligibiltyexpired: '12/12/1956',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'DP044ZZ',
					performed_by: 'Donnell Levesque',
					date: 1961,
					additional_information:
						'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in',
				},
				{
					ICD10procedurecode: '0TVD3CZ',
					performed_by: 'Sheff Daveran',
					date: 2008,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D737ZZ',
					performed_by: 'Halley Costin',
					date: 1997,
					additional_information:
						'risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero',
				},
				{
					ICD10procedurecode: '0WWCXKZ',
					performed_by: 'Michal Stoaks',
					date: 1987,
					additional_information: null,
				},
				{
					ICD10procedurecode: '7W05X8Z',
					performed_by: 'Lenard Overton',
					date: 1967,
					additional_information:
						'id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum',
				},
				{
					ICD10procedurecode: '09DR3ZZ',
					performed_by: 'Cristine Joint',
					date: 1976,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0X093KZ',
					performed_by: 'Lou Von Der Empten',
					date: 1952,
					additional_information:
						'in hac habitasse platea dictumst etiam faucibus cursus urna ut',
				},
				{
					ICD10procedurecode: '0PPM37Z',
					performed_by: 'Randolf Cranmore',
					date: 1956,
					additional_information:
						'fusce consequat nulla nisl nunc nisl duis bibendum felis sed',
				},
				{
					ICD10procedurecode: '0PH734Z',
					performed_by: 'Elysia Jancar',
					date: 1990,
					additional_information: null,
				},
			],
		},
		ssn: '657720820',
	},
	{
		id: 9,
		details: {
			first_name: 'Kandy',
			last_name: 'Lufkin',
			middle_name: 'klufkin8@trellian.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '9 International Pass',
			address_two: null,
			city: 'San Jose',
			state: 'CA',
			zip: '95108',
			date_of_birth: '1952-09-13T13:00:11Z',
			contact_methods: [
				{
					number: '259-162-7961',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
				},
				{ number: '240-954-9674', notes: null },
				{
					number: '463-362-0593',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
				{
					number: '984-506-4179',
					notes: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
				},
				{
					number: '638-819-9972',
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S330XXS',
					ICD10diagnosislongdescription:
						'Traumatic rupture of lumbar intervertebral disc, sequela',
					ICD10diagnosisshortdescription:
						'Traumatic rupture of lumbar intervertebral disc, sequela',
					medications: [
						{
							drugname: 'Oxazepam',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Linn Risborough',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Connie Foulgham',
						},
						{
							drugname: 'fluoxetine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Felice Ranahan',
						},
						{
							drugname:
								'Aliskiren Hemifumarate and Amlodipine Besylate and Hydrochlorothiazide',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Matthieu Stickel',
						},
						{
							drugname: 'amoxicillin',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Francene Dixcey',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Adriaens Leipoldt',
						},
						{
							drugname:
								'Arabica Coffee Bean, Silicon Dioxide, and Hypericum Perforatum',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Dana Rustich',
						},
						{
							drugname:
								'Agrimony, Aspen, Beech, Centaury, Cerato, Cherry Plum, Chestnut bud, Chicory, Clematis, Crab apple, Elm, Gentian, Gorse, Heather, Holly,',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Nicko Haskell',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92066P',
					ICD10diagnosislongdescription:
						'Nondisplaced intraarticular fracture of unspecified calcaneus, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Nondisp intartic fx unsp calcaneus, subs for fx w malunion',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'E518',
					ICD10diagnosislongdescription:
						'Other manifestations of thiamine deficiency',
					ICD10diagnosisshortdescription:
						'Other manifestations of thiamine deficiency',
					medications: [
						{
							drugname: 'Losartan Potassium',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Belle Boliver',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Avrit Ferron',
						},
						{
							drugname: 'NOT APPLICABLE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Granthem Gallagher',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Mabelle Capstake',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Logan Barnshaw',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Tasia Brian',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Whitman Bigglestone',
						},
						{
							drugname: 'CLINDAMYCIN PHOSPHATE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Arabella Tottle',
						},
						{
							drugname: 'prednisone',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Bert Disdel',
						},
						{
							drugname: 'Ceftriaxone Sodium',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Lora Attenbarrow',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V9181XD',
					ICD10diagnosislongdescription:
						'Other injury due to other accident to passenger ship, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Oth injury due to oth accident to passenger ship, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Stephanus Ayerst',
						},
						{
							drugname: 'ACETAMINOPHEN',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Tades Tomalin',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Sabrina Filewood',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z3A49',
					ICD10diagnosislongdescription:
						'Greater than 42 weeks gestation of pregnancy',
					ICD10diagnosisshortdescription:
						'Greater than 42 weeks gestation of pregnancy',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S66515',
					ICD10diagnosislongdescription:
						'Strain of intrinsic muscle, fascia and tendon of left ring finger at wrist and hand level',
					ICD10diagnosisshortdescription:
						'Strain of intrinsic musc/fasc/tend l rng fngr at wrs/hnd lv',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ketti Winsor',
						},
						{
							drugname: 'Tetrofosmin',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Ivett Glaister',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Wit McCathay',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S855',
					ICD10diagnosislongdescription: 'Injury of popliteal vein',
					ICD10diagnosisshortdescription: 'Injury of popliteal vein',
					medications: [
						{
							drugname: 'Escitalopram Oxalate',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Silvie Craker',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Wye Isacq',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Hernando Maddison',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Mariam Hurton',
						},
						{
							drugname: 'Diphenhydramine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: "Valeria O'Grada",
						},
						{
							drugname: 'ACETAMINOPHEN',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Rosalia Jemison',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lisha Blackstock',
						},
						{
							drugname: 'Oxygen',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Kermit Dennington',
						},
						{
							drugname: 'Menthol, Methyl Salicylate',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Catlin Senechell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ondrea Brownsell',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Y630',
					ICD10diagnosislongdescription:
						'Excessive amount of blood or other fluid given during transfusion or infusion',
					ICD10diagnosisshortdescription:
						'Excess amount of bld or oth fluid given dur tranfs or infusn',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Neill Tylor',
						},
						{
							drugname: 'Phenytoin Sodium',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Antoinette Jursch',
						},
						{
							drugname: 'Hydroxyzine',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Marabel Tschirschky',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S5010XD',
					ICD10diagnosislongdescription:
						'Contusion of unspecified forearm, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Contusion of unspecified forearm, subsequent encounter',
					medications: [
						{
							drugname: 'Simvastatin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Lorry Matiashvili',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Caron Gotmann',
						},
						{
							drugname: 'Epinastine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Carey Halahan',
						},
						{
							drugname: 'Box Elder',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Elnore Penswick',
						},
						{
							drugname: 'Cefoxitin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Athena Brecher',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Florie Tine',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L449',
					ICD10diagnosislongdescription:
						'Papulosquamous disorder, unspecified',
					ICD10diagnosisshortdescription:
						'Papulosquamous disorder, unspecified',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'L-2405263411',
					company: 'Kreiger, Bailey and Cruickshank',
					frontimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/246x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/08/1991',
					eligibiltybegan: '01/12/1997',
					eligibiltyexpired: '10/17/1979',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-7578307616',
					company: 'Kerluke-Dietrich',
					frontimage:
						'http://dummyimage.com/123x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/28/1987',
					eligibiltybegan: '01/01/2009',
					eligibiltyexpired: '07/03/1952',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-1025828516',
					company: 'Walker, Jaskolski and Hand',
					frontimage:
						'http://dummyimage.com/150x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/143x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/28/1954',
					eligibiltybegan: '08/31/1984',
					eligibiltyexpired: '08/08/1995',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-7159730333',
					company: 'Kuvalis, Fay and Klein',
					frontimage:
						'http://dummyimage.com/247x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/02/2005',
					eligibiltybegan: '03/10/1969',
					eligibiltyexpired: '05/04/2022',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-5553741420',
					company: 'Prohaska Group',
					frontimage:
						'http://dummyimage.com/135x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/26/1971',
					eligibiltybegan: '10/21/1980',
					eligibiltyexpired: '09/19/1989',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '061S0KY',
					performed_by: 'Candis Domanski',
					date: 2019,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'F08G5CZ',
					performed_by: 'Darren Hulls',
					date: 1994,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02724T6',
					performed_by: 'Brigitta Scutt',
					date: 1990,
					additional_information: null,
				},
			],
		},
		ssn: '553451327',
	},
	{
		id: 10,
		details: {
			first_name: 'Vinni',
			last_name: 'Gorgen',
			middle_name: 'vgorgen9@vinaora.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '0 Loeprich Road',
			address_two: null,
			city: 'San Antonio',
			state: 'TX',
			zip: '78265',
			date_of_birth: '1965-03-19T22:55:15Z',
			contact_methods: [
				{ number: '960-623-0036', notes: null },
				{ number: '938-235-6291', notes: null },
				{ number: '423-632-2486', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T3220',
					ICD10diagnosislongdescription:
						'Corrosions involving 20-29% of body surface with 0% to 9% third degree corrosion',
					ICD10diagnosisshortdescription:
						'Corros 20-29% of body surface w 0% to 9% third degree corros',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Garrott Vellden',
						},
						{
							drugname: 'Levofloxacin',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Benedikta Emerine',
						},
						{
							drugname: 'Water violet,',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Samuel Kemball',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S82026M',
					ICD10diagnosislongdescription:
						'Nondisplaced longitudinal fracture of unspecified patella, subsequent encounter for open fracture type I or II with nonunion',
					ICD10diagnosisshortdescription:
						'Nondisp longitud fx unsp patella, 7thM',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S72454',
					ICD10diagnosislongdescription:
						'Nondisplaced supracondylar fracture without intracondylar extension of lower end of right femur',
					ICD10diagnosisshortdescription:
						'Nondisp suprcndl fx w/o intrcndl extn lower end of r femur',
					medications: [
						{
							drugname: 'clobazam',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'See Athow',
						},
						{
							drugname:
								'galphimia glauca flowering top, histamine dihydrochloride, luffa operculata fruit, and sulfur',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Aurelia Gathercoal',
						},
						{
							drugname:
								'AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE, and OXYBENZONE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Fulton Glaum',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S728X1N',
					ICD10diagnosislongdescription:
						'Other fracture of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion',
					ICD10diagnosisshortdescription:
						'Oth fx right femur, subs for opn fx type 3A/B/C w nonunion',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Dorotea Shawdforth',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Alfonso Mugridge',
						},
						{
							drugname: 'Potassium Chloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Davey Jillins',
						},
						{
							drugname: 'Aspirin, Caffeine',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Elonore Nice',
						},
						{
							drugname: 'risperidone',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Selby Quirk',
						},
						{
							drugname:
								'Boron, Calcarea carbonica, Calcarea fluorica, Calcarea hypophosphorosa, Calcarea phosphorica, Hekla lava, Mezereum, Natrum phosphoricum, Silicea, Symphytum oficinale, Urtica dioica, Vanadium metallicum,',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Binky Russan',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Moishe Cutridge',
						},
						{
							drugname: 'Rifampin',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Marjorie Tabert',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C4442',
					ICD10diagnosislongdescription:
						'Squamous cell carcinoma of skin of scalp and neck',
					ICD10diagnosisshortdescription:
						'Squamous cell carcinoma of skin of scalp and neck',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'O34511',
					ICD10diagnosislongdescription:
						'Maternal care for incarceration of gravid uterus, first trimester',
					ICD10diagnosisshortdescription:
						'Maternal care for incarceration of gravid uterus, first tri',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Aimil Barling',
						},
						{
							drugname: 'First aid and Burn',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Rachelle Spaxman',
						},
						{
							drugname: 'Cetylpyridinium Chloride',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Shaw Laskey',
						},
						{
							drugname: 'Oxymorphone Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Todd Crofthwaite',
						},
						{
							drugname: 'ketorolac tromethamine',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Tonya Milley',
						},
						{
							drugname:
								'octinoxate, octocrylene, oxybenzone, zinc oxide',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Agosto Morena',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Claire Tilt',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Elita Tingley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Granville Bartolomeu',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T443X3',
					ICD10diagnosislongdescription:
						'Poisoning by other parasympatholytics [anticholinergics and antimuscarinics] and spasmolytics, assault',
					ICD10diagnosisshortdescription:
						'Poisoning by oth parasympath and spasmolytics, assault',
					medications: [
						{
							drugname: 'Lycopodium Clavatum, Ipecacuanha',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Christoforo Scrane',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Alvera MacGaughey',
						},
						{
							drugname: 'Natural Medicine',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Gerhardine Codlin',
						},
						{
							drugname: 'Torsemide',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Frankie Trever',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Cleveland Amiable',
						},
						{
							drugname: 'ATORVASTATIN CALCIUM',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Allayne Gillibrand',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z411',
					ICD10diagnosislongdescription:
						'Encounter for cosmetic surgery',
					ICD10diagnosisshortdescription:
						'Encounter for cosmetic surgery',
					medications: [
						{
							drugname:
								'Ferrous Fumarate and Polysacchride Iron Complex and Folic Acid',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Julianne Avard',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Max Girardengo',
						},
						{
							drugname: 'DIPHENHYDRAMINE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Marjory Leguay',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Helaine Deverose',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Denise Drinkall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S56113A',
					ICD10diagnosislongdescription:
						'Strain of flexor muscle, fascia and tendon of right middle finger at forearm level, initial encounter',
					ICD10diagnosisshortdescription:
						'Strain flexor musc/fasc/tend r mid finger at forarm lv, init',
					medications: [
						{
							drugname: 'alternaria alternata',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Auria Charrette',
						},
						{
							drugname: 'Sweet Vernal Grass, Standardized',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Grier Matveichev',
						},
						{
							drugname: 'Meclizine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Marne Campey',
						},
						{
							drugname:
								'Anthracinum, Pyrogenium, Aconitum nap., Aloe, Apis mel., Arnica, Arsenicum alb., Baptisia, Belladonna, Bryonia, Cantharis, Chelidonium majus, Crotalus horridus, Ferrum phosphoricum, Gaultheria procumbens, Hepar sulph. calc., Iodium, Lachesis, Nux vom., Phosphorus, Pulsatilla, Rhus toxicodendron, Veratrum viride, Verbascum, Echinacea',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Honoria Izhakov',
						},
						{
							drugname: 'octinoxate, oxybenzone and petrolatum',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Zulema Brash',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Laurette Legh',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Jourdain Stealy',
						},
						{
							drugname: 'povidone-iodine',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Damara Du Hamel',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'E-6279270364',
					company: 'Hudson LLC',
					frontimage:
						'http://dummyimage.com/214x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/22/2005',
					eligibiltybegan: '12/06/1953',
					eligibiltyexpired: '01/21/1971',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Y-7911404488',
					company: 'Erdman and Sons',
					frontimage:
						'http://dummyimage.com/189x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/26/1979',
					eligibiltybegan: '05/18/1981',
					eligibiltyexpired: '10/11/1953',
				},
				{
					primary: false,
					active: true,
					membernumber: 'B-9606656578',
					company: 'Brown Group',
					frontimage:
						'http://dummyimage.com/242x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/04/1958',
					eligibiltybegan: '10/07/2011',
					eligibiltyexpired: '06/23/1957',
				},
				{
					primary: false,
					active: true,
					membernumber: 'N-4677593304',
					company: 'Cassin, Gibson and Swaniawski',
					frontimage:
						'http://dummyimage.com/116x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/13/1993',
					eligibiltybegan: '02/10/2020',
					eligibiltyexpired: '12/27/1957',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-5627169874',
					company: 'Jaskolski-Gislason',
					frontimage:
						'http://dummyimage.com/145x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/181x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/26/1976',
					eligibiltybegan: '09/11/1970',
					eligibiltyexpired: '11/30/1966',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-9799913455',
					company: 'Emmerich and Sons',
					frontimage:
						'http://dummyimage.com/165x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/13/1985',
					eligibiltybegan: '01/30/1950',
					eligibiltyexpired: '04/09/1994',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Z-7123604191',
					company: 'Runolfsson LLC',
					frontimage:
						'http://dummyimage.com/148x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/187x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/17/1961',
					eligibiltybegan: '06/15/2011',
					eligibiltyexpired: '08/31/1987',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-2661370301',
					company: 'Kiehn, Bergnaum and Langworth',
					frontimage:
						'http://dummyimage.com/107x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/10/2008',
					eligibiltybegan: '11/25/2014',
					eligibiltyexpired: '11/23/1974',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '03VQ0DZ',
					performed_by: 'Sonni Logsdail',
					date: 1960,
					additional_information:
						'sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis',
				},
				{
					ICD10procedurecode: '0JC93ZZ',
					performed_by: 'Ranna Kinningley',
					date: 2003,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0QU30KZ',
					performed_by: 'Noemi Bleazard',
					date: 1953,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02T93ZZ',
					performed_by: 'Kissiah Conquest',
					date: 1971,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RPMX4Z',
					performed_by: 'Iona Foottit',
					date: 1964,
					additional_information:
						'volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus',
				},
				{
					ICD10procedurecode: '0K590ZZ',
					performed_by: 'Lian Cudiff',
					date: 1957,
					additional_information: null,
				},
			],
		},
		ssn: '719903575',
	},
	{
		id: 11,
		details: {
			first_name: 'Miltie',
			last_name: 'Jehaes',
			middle_name: 'mjehaesa@oracle.com',
			gender: 'Polygender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '76295 Sunbrook Trail',
			address_two: null,
			city: 'New Orleans',
			state: 'LA',
			zip: '70149',
			date_of_birth: '1954-01-03T21:13:41Z',
			contact_methods: [
				{ number: '459-806-6791', notes: null },
				{ number: '105-918-1604', notes: null },
				{
					number: '506-710-5446',
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
				},
				{
					number: '722-871-4737',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
				{
					allergy: null,
					notes: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
				},
				{
					allergy: null,
					notes: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				},
				{ allergy: 'peanut', notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S76809A',
					ICD10diagnosislongdescription:
						'Unspecified injury of other specified muscles, fascia and tendons at thigh level, unspecified thigh, initial encounter',
					ICD10diagnosisshortdescription:
						'Unsp injury of musc/fasc/tend at thi lev, unsp thigh, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Bancroft Prue',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Jackson Hollyer',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Bernadine Key',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Reena Van de Velde',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Phillie Butterick',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Una Porch',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63659S',
					ICD10diagnosislongdescription:
						'Sprain of metacarpophalangeal joint of unspecified finger, sequela',
					ICD10diagnosisshortdescription:
						'Sprain of metacarpophalangeal joint of unsp finger, sequela',
					medications: [
						{
							drugname: 'TITANIUM DIOXIDE, OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Jodie Gaunter',
						},
						{
							drugname: 'Miconazole Nitrate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Nanine Hayball',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Cass Tavener',
						},
						{
							drugname: 'Benzalkonium Chloride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Georgie Kingzett',
						},
						{
							drugname: 'Zinc oxide',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Stella Earengey',
						},
						{
							drugname:
								'AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE, OXYBENZONE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Caresa Straughan',
						},
						{
							drugname: 'cetirizine',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Xavier Batram',
						},
						{
							drugname: 'Pyrithione Zinc',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Fanchon Nerney',
						},
						{
							drugname: 'topiramate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Stephana Bausor',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O09822',
					ICD10diagnosislongdescription:
						'Supervision of pregnancy with history of in utero procedure during previous pregnancy, second trimester',
					ICD10diagnosisshortdescription:
						'Suprvsn of preg w hx of in utero proc dur prev preg, 2nd tri',
					medications: [
						{
							drugname:
								'Octocrylene, Ethylhexyl Methoxycinnamate, Zinc Oxide, Ethylhexyl Salicilate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Arden Mitkcov',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Codi Gatenby',
						},
						{
							drugname: 'Buspirone',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Kayne McComish',
						},
						{
							drugname: 'TOLNAFTATE',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Nicki Stillert',
						},
						{
							drugname: 'Doxycycline Hyclate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Helenka Thieme',
						},
						{
							drugname: 'CLINDAMYCIN PHOSPHATE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Garreth McGrath',
						},
						{
							drugname:
								'Carduus marianus e fruct. 6 Special Order',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Waverley Renison',
						},
						{
							drugname: 'Benzocaine,Isopropyl Alcohol',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Bryn Loffhead',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z30019',
					ICD10diagnosislongdescription:
						'Encounter for initial prescription of contraceptives, unspecified',
					ICD10diagnosisshortdescription:
						'Encounter for initial prescription of contraceptives, unsp',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S60049',
					ICD10diagnosislongdescription:
						'Contusion of unspecified ring finger without damage to nail',
					ICD10diagnosisshortdescription:
						'Contusion of unspecified ring finger without damage to nail',
					medications: [
						{
							drugname: 'Hydrochlorothiazide',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Clotilda Penning',
						},
						{
							drugname: 'Naproxen Sodium',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Gussy Feenan',
						},
						{
							drugname:
								'AVOBENZONE HOMOSALATE OCTISALATE OCTOCRYLENE OXYBENZONE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Flin Reye',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Revkah Dobney',
						},
						{
							drugname: 'ENALAPRIL MALEATE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Vivien Hustings',
						},
						{
							drugname: 'Meperidine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Emelita Keyworth',
						},
						{
							drugname: 'mannitol',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Angil Comben',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S35412',
					ICD10diagnosislongdescription:
						'Laceration of left renal artery',
					ICD10diagnosisshortdescription:
						'Laceration of left renal artery',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Ginger Englishby',
						},
						{
							drugname: 'Cetirizine HCl, Pseudoephedrine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Coletta Bonifazio',
						},
						{
							drugname:
								'Aceticum acidum, Colchicum autumnale, Lacticum acidum, Lycopodium clavatum, Phosphoricum acidum, Phosphorus, Syzgium jambolanum, Uranium nitricum',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kandy Pinwill',
						},
						{
							drugname: 'PREGABALIN',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lorin Stode',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Tallie Kittley',
						},
						{
							drugname: 'ETHYL ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Adelina Brien',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L651',
					ICD10diagnosislongdescription: 'Anagen effluvium',
					ICD10diagnosisshortdescription: 'Anagen effluvium',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T405X1',
					ICD10diagnosislongdescription:
						'Poisoning by cocaine, accidental (unintentional)',
					ICD10diagnosisshortdescription:
						'Poisoning by cocaine, accidental (unintentional)',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Lonny Purdy',
						},
						{
							drugname: 'MUCOR PLUMBEUS',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Rossy Jenkin',
						},
						{
							drugname: 'Benzoyl Peroxide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Conn Smeeth',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H21559',
					ICD10diagnosislongdescription:
						'Recession of chamber angle, unspecified eye',
					ICD10diagnosisshortdescription:
						'Recession of chamber angle, unspecified eye',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82124K',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of lateral condyle of right tibia, subsequent encounter for closed fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Nondisp fx of lateral condyle of r tibia, 7thK',
					medications: [
						{
							drugname:
								'Ammonium Chloride, Antimony Potassium Tartrate, Arsenic Trioxide, Oyster Shell Calcium Carbonate, Crude, Lobelia Inflata, Sodium Sulfate, Spongia Officinalis Skeleton, Roasted, Phosphorus',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Angelo Simkovitz',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Tabbatha Segebrecht',
						},
						{
							drugname: 'Hydroquinone',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Jayme Ferriday',
						},
						{
							drugname:
								'Aluminum Zirconium Tetrachlorohydrex GLY',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sam Stiff',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Artemas Syms',
						},
						{
							drugname: 'ONDANSETRON',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Francesco Moretto',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'T-9897103325',
					company: 'Kuhn Group',
					frontimage:
						'http://dummyimage.com/199x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/237x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/05/1963',
					eligibiltybegan: '03/19/2018',
					eligibiltyexpired: '10/29/1969',
				},
				{
					primary: false,
					active: true,
					membernumber: 'S-2677350443',
					company: 'Steuber, Beer and Kutch',
					frontimage:
						'http://dummyimage.com/148x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/06/2002',
					eligibiltybegan: '12/27/1952',
					eligibiltyexpired: '04/11/2006',
				},
				{
					primary: false,
					active: false,
					membernumber: 'G-9251886173',
					company: 'Rogahn, Beahan and Braun',
					frontimage:
						'http://dummyimage.com/246x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/139x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/25/1998',
					eligibiltybegan: '07/02/1988',
					eligibiltyexpired: '06/02/2014',
				},
				{
					primary: false,
					active: false,
					membernumber: 'P-8500432683',
					company: 'Kovacek, Klocko and Runolfsson',
					frontimage:
						'http://dummyimage.com/111x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/177x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/03/1956',
					eligibiltybegan: '11/05/1954',
					eligibiltyexpired: '09/26/1984',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-9048871548',
					company: 'Schroeder, Rohan and Bergstrom',
					frontimage:
						'http://dummyimage.com/156x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/211x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/20/1969',
					eligibiltybegan: '02/05/1968',
					eligibiltyexpired: '07/07/1985',
				},
				{
					primary: false,
					active: true,
					membernumber: 'A-8010403034',
					company: 'Harvey, Weber and Corkery',
					frontimage:
						'http://dummyimage.com/145x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/216x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/07/1978',
					eligibiltybegan: '03/28/1954',
					eligibiltyexpired: '06/09/1959',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-6249456445',
					company: 'Prohaska and Sons',
					frontimage:
						'http://dummyimage.com/120x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/238x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/18/2004',
					eligibiltybegan: '01/15/1950',
					eligibiltyexpired: '05/28/1960',
				},
				{
					primary: false,
					active: true,
					membernumber: 'S-1436822098',
					company: 'Johnston, Schaefer and Hartmann',
					frontimage:
						'http://dummyimage.com/192x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/216x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/04/1969',
					eligibiltybegan: '04/02/1977',
					eligibiltyexpired: '11/25/2013',
				},
			],
			surgicalhistory: null,
		},
		ssn: '029651338',
	},
	{
		id: 12,
		details: {
			first_name: 'Star',
			last_name: 'Ellph',
			middle_name: 'sellphb@ucsd.edu',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '18 Debra Terrace',
			address_two: null,
			city: 'Memphis',
			state: 'TN',
			zip: '38131',
			date_of_birth: '1965-10-20T23:09:22Z',
			contact_methods: [
				{ number: '385-491-8823', notes: null },
				{ number: '328-686-1608', notes: null },
				{ number: '984-379-4961', notes: null },
				{
					number: '907-686-3099',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
				{ number: '490-119-4560', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M70852',
					ICD10diagnosislongdescription:
						'Other soft tissue disorders related to use, overuse and pressure, left thigh',
					ICD10diagnosisshortdescription:
						'Oth soft tissue disord related to use/pressure, left thigh',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M06361',
					ICD10diagnosislongdescription:
						'Rheumatoid nodule, right knee',
					ICD10diagnosisshortdescription:
						'Rheumatoid nodule, right knee',
					medications: [
						{
							drugname: 'Fusarium compactum',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Whitby Pentecost',
						},
						{
							drugname: 'Hydrogen Peroxide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Aggie Conkling',
						},
						{
							drugname: 'Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Celesta Doward',
						},
						{
							drugname: 'Chlorpheniramine Maleate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Beatrice Glendenning',
						},
						{
							drugname: 'levetiracetam',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Elbertina Borman',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ramonda Di Carlo',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S91224A',
					ICD10diagnosislongdescription:
						'Laceration with foreign body of right lesser toe(s) with damage to nail, initial encounter',
					ICD10diagnosisshortdescription:
						'Lac w fb of right lesser toe(s) w damage to nail, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V4960XD',
					ICD10diagnosislongdescription:
						'Unspecified car occupant injured in collision with unspecified motor vehicles in traffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unsp car occupant injured in clsn w unsp mv in traf, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Rey Donkersley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Kenyon Druett',
						},
						{
							drugname: 'METHYL NICOTINATE, CAPSAICIN',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Paxon Dabnot',
						},
						{
							drugname: 'Triclosan',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Redd Karchewski',
						},
					],
				},
				{
					ICD10diagnosiscode: 'X3908',
					ICD10diagnosislongdescription:
						'Exposure to other natural radiation',
					ICD10diagnosisshortdescription:
						'Exposure to other natural radiation',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S92514',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of proximal phalanx of right lesser toe(s)',
					ICD10diagnosisshortdescription:
						'Nondisp fx of proximal phalanx of right lesser toe(s)',
					medications: [
						{
							drugname: 'atenolol',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Jenn McGuinness',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H0113',
					ICD10diagnosislongdescription:
						'Eczematous dermatitis of eyelid',
					ICD10diagnosisshortdescription:
						'Eczematous dermatitis of eyelid',
					medications: [
						{
							drugname: 'Titanium dioxide',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Kikelia Dregan',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Bertram Harpur',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Booth Baptista',
						},
						{
							drugname: 'famciclovir',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Chris Kirmond',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Alvera Coulbeck',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Thorsten Doy',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Orly Featenby',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V00188D',
					ICD10diagnosislongdescription:
						'Other accident on other rolling-type pedestrian conveyance, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Oth accident on oth rolling-type pedestrian conveyance, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Sindee Sheard',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lon Lidstone',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Corliss Gutteridge',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Alva Griston',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'M-9892185586',
					company: 'Morar, Lang and Carroll',
					frontimage:
						'http://dummyimage.com/198x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/133x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/12/1956',
					eligibiltybegan: '10/17/1965',
					eligibiltyexpired: '05/10/1989',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Y-0307722989',
					company: 'Spencer-Miller',
					frontimage:
						'http://dummyimage.com/126x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/104x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/07/1957',
					eligibiltybegan: '01/02/2000',
					eligibiltyexpired: '09/30/1954',
				},
				{
					primary: false,
					active: false,
					membernumber: 'L-3139664739',
					company: 'Stanton, Rolfson and Rogahn',
					frontimage:
						'http://dummyimage.com/177x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/145x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/23/1980',
					eligibiltybegan: '05/12/1978',
					eligibiltyexpired: '02/22/1983',
				},
				{
					primary: false,
					active: false,
					membernumber: 'L-2593528511',
					company: 'Langosh, Klein and Padberg',
					frontimage:
						'http://dummyimage.com/120x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/222x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/01/1976',
					eligibiltybegan: '09/02/1990',
					eligibiltyexpired: '06/30/1960',
				},
				{
					primary: true,
					active: true,
					membernumber: 'T-7280940411',
					company: 'Kirlin-Bahringer',
					frontimage:
						'http://dummyimage.com/123x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/01/2022',
					eligibiltybegan: '03/27/1996',
					eligibiltyexpired: '01/23/1976',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-4147972318',
					company: 'Sanford LLC',
					frontimage:
						'http://dummyimage.com/210x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/180x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/03/1991',
					eligibiltybegan: '06/04/1989',
					eligibiltyexpired: '04/01/1982',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0D9K7ZZ',
					performed_by: 'Conny Rubke',
					date: 1950,
					additional_information: null,
				},
				{
					ICD10procedurecode: '001',
					performed_by: 'Tabbie McClure',
					date: 1983,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0QUH07Z',
					performed_by: 'Olympia Steinhammer',
					date: 1961,
					additional_information: null,
				},
				{
					ICD10procedurecode: '03B13ZX',
					performed_by: 'Jacky Argile',
					date: 2016,
					additional_information: null,
				},
			],
		},
		ssn: '889403837',
	},
	{
		id: 13,
		details: {
			first_name: 'Cecilius',
			last_name: 'Brunone',
			middle_name: 'cbrunonec@slideshare.net',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '55608 Judy Road',
			address_two: null,
			city: 'Woburn',
			state: 'MA',
			zip: '01813',
			date_of_birth: '1988-03-08T10:49:43Z',
			contact_methods: [
				{ number: '574-872-3449', notes: null },
				{
					number: '270-846-9449',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
				{ number: '313-917-4772', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'Z3A2',
					ICD10diagnosislongdescription:
						'Weeks of gestation of pregnancy, weeks 20-29',
					ICD10diagnosisshortdescription:
						'Weeks of gestation of pregnancy, weeks 20-29',
					medications: [
						{
							drugname: 'Lorazepam',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Kristin Ferrers',
						},
						{
							drugname: 'Benzethonium chloride',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Lebbie Frawley',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Hadleigh McGrouther',
						},
						{
							drugname: 'Fluticasone Propionate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Tedi Jakubovicz',
						},
						{
							drugname:
								'Aconitum nap., Apis mel., Arum dracontium, Belladonna, Bryonia, Cajuputum, Ferrum phosphoricum, Glycyrrhiza glabra, Kali bic., Lachesis, Mentha piperita, Merc. viv., Naja, Nat. carb., Nat. sulphuricum, Nitricum ac., Nux vom., Phosphorus, Phytolacca, Pulsatilla, Spongia, Stannum met., Sticta, Thuja occ., Ulmus fulva, Verbascum, Echinacea',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Katleen Norker',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Chevy Gwilliams',
						},
						{
							drugname: 'ALUMINUM CHLOROHYDRATE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Aubrey Rois',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Packston Acarson',
						},
						{
							drugname: 'Fosinopril Sodium',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Sascha Blackster',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Dominik Vayro',
						},
					],
				},
				{
					ICD10diagnosiscode: 'W5582XA',
					ICD10diagnosislongdescription:
						'Struck by other mammals, initial encounter',
					ICD10diagnosisshortdescription:
						'Struck by other mammals, initial encounter',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S42293A',
					ICD10diagnosislongdescription:
						'Other displaced fracture of upper end of unspecified humerus, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Oth disp fx of upper end of unsp humerus, init for clos fx',
					medications: [
						{
							drugname:
								'Acetaminophen, Chlorpheniramine Maleate, Dextromethorphan Hydrobromide, and Phenylephrine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Jeralee Margaret',
						},
						{
							drugname: 'BELLIS PERENNIS',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Pietro Gaveltone',
						},
						{
							drugname: 'TERBINAFINE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Hamilton Fennessy',
						},
						{
							drugname: 'Acetaminophen, Diphenhydramine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Eleanora Nuzzi',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'See Killelay',
						},
						{
							drugname: 'Sodium Fluoride and Potassium Nitrate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Sullivan Russo',
						},
						{
							drugname: 'Flurbiprofen Sodium',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Harriott Rasor',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Lorenzo Eaklee',
						},
						{
							drugname: 'Montelukast Sodium',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Leia Swynfen',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V0412XD',
					ICD10diagnosislongdescription:
						'Pedestrian on skateboard injured in collision with heavy transport vehicle or bus in traffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Ped on sktbrd injured in collision w hv veh in traf, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Dorelle Segrave',
						},
						{
							drugname: 'Cichorium Stibium Special Order',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Deborah Pococke',
						},
						{
							drugname: 'Piperacillin and Tazobactam',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Janot Milesop',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Hale Ferrie',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan HBr, Doxylamine succinate, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Waylin Bowley',
						},
						{
							drugname: 'Alcohol',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Reagen McCreagh',
						},
						{
							drugname: 'Atomoxetine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Christian Nestoruk',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Aurie Urch',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S83212S',
					ICD10diagnosislongdescription:
						'Bucket-handle tear of medial meniscus, current injury, left knee, sequela',
					ICD10diagnosisshortdescription:
						'Bucket-hndl tear of medial mensc, crnt injury, l knee, sqla',
					medications: [
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Harwilll Warland',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Burg Kabisch',
						},
						{
							drugname:
								'acetaminophen, dextromethorphan hydrobromide and doxylamine succinate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Perkin Sitch',
						},
						{
							drugname: 'pioglitazone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Malinda Sherewood',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Odille Ioselevich',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Glenden Garnar',
						},
						{
							drugname: 'divalproex sodium',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Queenie Quibell',
						},
						{
							drugname: 'Menthol',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Joaquin Norman',
						},
						{
							drugname: 'Sodium Fluoride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Welch Midgely',
						},
						{
							drugname: 'TELMISARTAN',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Harv Laird',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S82301D',
					ICD10diagnosislongdescription:
						'Unspecified fracture of lower end of right tibia, subsequent encounter for closed fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Unsp fx lower end of r tibia, subs for clos fx w routn heal',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S66321S',
					ICD10diagnosislongdescription:
						'Laceration of extensor muscle, fascia and tendon of left index finger at wrist and hand level, sequela',
					ICD10diagnosisshortdescription:
						'Lacerat extn musc/fasc/tend l idx fngr at wrs/hnd lv, sqla',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T400X5D',
					ICD10diagnosislongdescription:
						'Adverse effect of opium, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Adverse effect of opium, subsequent encounter',
					medications: [
						{
							drugname: 'Salicylic Acid',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Gabriello Bembrigg',
						},
						{
							drugname: 'pravastatin sodium',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Fiann Burgoine',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Gal Birden',
						},
						{
							drugname: 'PICEA MARIANA RESIN',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Julius Cowgill',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Annis Denzilow',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'W-0504347653',
					company: 'Dach-McClure',
					frontimage:
						'http://dummyimage.com/100x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/12/1953',
					eligibiltybegan: '06/25/1975',
					eligibiltyexpired: '08/03/1974',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0U940ZZ',
					performed_by: 'Fremont Petrasso',
					date: 1998,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0NW0XSZ',
					performed_by: 'Farrell Semon',
					date: 2011,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05PY3DZ',
					performed_by: 'Dyann Levet',
					date: 1992,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05ST4ZZ',
					performed_by: 'Doretta Farfull',
					date: 2006,
					additional_information: null,
				},
				{
					ICD10procedurecode: '3E0G704',
					performed_by: 'Radcliffe Stapford',
					date: 2018,
					additional_information: null,
				},
			],
		},
		ssn: '177045620',
	},
	{
		id: 14,
		details: {
			first_name: 'Lucias',
			last_name: 'Gotter',
			middle_name: 'lgotterd@craigslist.org',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '26000 Mitchell Place',
			address_two: null,
			city: 'San Francisco',
			state: 'CA',
			zip: '94137',
			date_of_birth: '2019-05-14T20:27:59Z',
			contact_methods: [
				{ number: '609-728-6735', notes: null },
				{ number: '432-133-1834', notes: null },
				{ number: '603-729-2919', notes: null },
				{
					number: '590-376-2620',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T56891A',
					ICD10diagnosislongdescription:
						'Toxic effect of other metals, accidental (unintentional), initial encounter',
					ICD10diagnosisshortdescription:
						'Toxic effect of oth metals, accidental (unintentional), init',
					medications: [
						{
							drugname: 'lactulose',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Bond Hazelgreave',
						},
						{
							drugname: 'Loratadine, Pseudoephedrine',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Goldy Caldaro',
						},
						{
							drugname: 'CAFFEINE CITRATE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Scarface Summerside',
						},
						{
							drugname: 'Guaifenesin',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Skye Hanfrey',
						},
						{
							drugname: 'carbidopa and levodopa',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Benji Stoate',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Karita Sallan',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Damon Eliot',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Trumaine Pixton',
						},
						{
							drugname: 'Ceftriaxone',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Dal Pryce',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'Q-8959810502',
					company: 'Donnelly-Ernser',
					frontimage:
						'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/137x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/08/1959',
					eligibiltybegan: '10/19/2014',
					eligibiltyexpired: '02/29/1992',
				},
				{
					primary: false,
					active: true,
					membernumber: 'U-7146160882',
					company: 'Hirthe-Weber',
					frontimage:
						'http://dummyimage.com/230x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/145x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/04/2005',
					eligibiltybegan: '04/20/2011',
					eligibiltyexpired: '06/07/1963',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-5865531982',
					company: 'Hahn LLC',
					frontimage:
						'http://dummyimage.com/139x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/14/1958',
					eligibiltybegan: '07/25/2017',
					eligibiltyexpired: '10/23/1996',
				},
				{
					primary: false,
					active: false,
					membernumber: 'P-3149514615',
					company: 'MacGyver-Mraz',
					frontimage:
						'http://dummyimage.com/160x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/183x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/05/1959',
					eligibiltybegan: '12/21/2001',
					eligibiltyexpired: '08/21/1951',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-4335294224',
					company: 'Quitzon-Kessler',
					frontimage:
						'http://dummyimage.com/175x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/231x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/26/2003',
					eligibiltybegan: '08/30/1968',
					eligibiltyexpired: '04/16/1985',
				},
				{
					primary: false,
					active: false,
					membernumber: 'T-0336788067',
					company: 'Kuhic-DuBuque',
					frontimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/28/1952',
					eligibiltybegan: '12/07/1977',
					eligibiltyexpired: '04/20/1962',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-0932780355',
					company: 'Flatley, Treutel and Johnson',
					frontimage:
						'http://dummyimage.com/236x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/108x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/08/1966',
					eligibiltybegan: '11/16/1983',
					eligibiltyexpired: '12/16/1957',
				},
				{
					primary: true,
					active: false,
					membernumber: 'O-2144204860',
					company: 'Quitzon and Sons',
					frontimage:
						'http://dummyimage.com/225x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/141x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/05/1960',
					eligibiltybegan: '06/03/1983',
					eligibiltyexpired: '04/24/2011',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0D118K6',
					performed_by: 'Avie Vaudrey',
					date: 1977,
					additional_information:
						'hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
				},
				{
					ICD10procedurecode: '0WHJ41Z',
					performed_by: 'Bibby Hardstaff',
					date: 1953,
					additional_information: null,
				},
				{
					ICD10procedurecode: '035M4ZZ',
					performed_by: 'Glen de la Tremoille',
					date: 1981,
					additional_information:
						'phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu',
				},
				{
					ICD10procedurecode: '0K980ZX',
					performed_by: 'Gaynor Hallede',
					date: 1978,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B3120ZZ',
					performed_by: 'Nora Poone',
					date: 1995,
					additional_information:
						'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl',
				},
				{
					ICD10procedurecode: '037G3Z6',
					performed_by: 'Stan Ilyushkin',
					date: 2011,
					additional_information:
						'lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo',
				},
				{
					ICD10procedurecode: '08N8XZZ',
					performed_by: 'Stacy Pointing',
					date: 1960,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0NRF07Z',
					performed_by: 'Adria Edlington',
					date: 2021,
					additional_information:
						'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien',
				},
				{
					ICD10procedurecode: '0U16076',
					performed_by: 'Yorgos Rous',
					date: 1963,
					additional_information:
						'sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis',
				},
				{
					ICD10procedurecode: '0P563ZZ',
					performed_by: 'Theodosia Heminsley',
					date: 1957,
					additional_information:
						'faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec',
				},
			],
		},
		ssn: '446495528',
	},
	{
		id: 15,
		details: {
			first_name: 'Ivy',
			last_name: 'Sayburn',
			middle_name: 'isayburne@thetimes.co.uk',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '08874 Moulton Street',
			address_two: null,
			city: 'Ventura',
			state: 'CA',
			zip: '93005',
			date_of_birth: '1958-10-23T04:32:41Z',
			contact_methods: [
				{ number: '318-466-7086', notes: null },
				{
					number: '196-755-3662',
					notes: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
				},
				{ number: '331-601-5192', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [{ allergy: 'insects', notes: null }],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S82891K',
					ICD10diagnosislongdescription:
						'Other fracture of right lower leg, subsequent encounter for closed fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Oth fracture of right lower leg, subs for clos fx w nonunion',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82262K',
					ICD10diagnosislongdescription:
						'Displaced segmental fracture of shaft of left tibia, subsequent encounter for closed fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Displ seg fx shaft of l tibia, subs for clos fx w nonunion',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Kasey Devonshire',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Jobie Boomes',
						},
						{
							drugname: 'Temazepam',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Lorette Cabrara',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Ruy Purkiss',
						},
						{
							drugname: 'HYDROQUINONE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Jackie Tupper',
						},
						{
							drugname: 'oxygen',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Reiko Mace',
						},
						{
							drugname: 'zoledronic acid',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Lanette Scrinage',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Val Billin',
						},
						{
							drugname: 'Hydrochlorothiazide',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Phaedra Timmermann',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Y24',
					ICD10diagnosislongdescription:
						'Other and unspecified firearm discharge, undetermined intent',
					ICD10diagnosisshortdescription:
						'Other and unspecified firearm discharge, undetermined intent',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'K717',
					ICD10diagnosislongdescription:
						'Toxic liver disease with fibrosis and cirrhosis of liver',
					ICD10diagnosisshortdescription:
						'Toxic liver disease with fibrosis and cirrhosis of liver',
					medications: [
						{
							drugname: 'Titanium Dioxide and Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Valaria Tamsett',
						},
						{
							drugname: 'Horse Epithelium',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Aguie Bibby',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Debera Cardno',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kyle Boyes',
						},
						{
							drugname: 'Nystatin',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Petra Essel',
						},
						{
							drugname:
								'Octinoxate, Octocrylene, Oxybenzone, and Zinc oxide',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Windy Purbrick',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Case Devote',
						},
						{
							drugname: 'Simethicone',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Olivier Hlavac',
						},
						{
							drugname: 'Metoprolol Tartrate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Tarrance Leavey',
						},
						{
							drugname: 'Zinc Oxide, Titanium Dioxide',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Mollie Summerskill',
						},
					],
				},
				{
					ICD10diagnosiscode: 'I70531',
					ICD10diagnosislongdescription:
						'Atherosclerosis of nonautologous biological bypass graft(s) of the right leg with ulceration of thigh',
					ICD10diagnosisshortdescription:
						'Athscl nonaut bio bypass of the right leg w ulcer of thigh',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'E103531',
					ICD10diagnosislongdescription:
						'Type 1 diabetes mellitus with proliferative diabetic retinopathy with traction retinal detachment not involving the macula, right eye',
					ICD10diagnosisshortdescription:
						'Type 1 diab w prolif diab rtnop w trctn dtch n-mcla, r eye',
					medications: [
						{
							drugname:
								'Baptisia tinctoria, Berberis vulgaris, Echinacea, Glycyrrhiza glabra, Hydrastis canadensis, Lappa major, Phytolacca decandra, Rhamnus frangula Lappa major, Phytolacca decandra, Rhamnus frangula, Rhamn',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Maximilian Molineaux',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S82169S',
					ICD10diagnosislongdescription:
						'Torus fracture of upper end of unspecified tibia, sequela',
					ICD10diagnosisshortdescription:
						'Torus fracture of upper end of unspecified tibia, sequela',
					medications: [
						{
							drugname: 'Chlorpheniramine Maleate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Aleda Trevithick',
						},
						{
							drugname: 'ETHOSUXIMIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Di Gianiello',
						},
						{
							drugname: 'dimethicone, octinoxate, oxybenzone',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Drusie Kirckman',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S728X9C',
					ICD10diagnosislongdescription:
						'Other fracture of unspecified femur, initial encounter for open fracture type IIIA, IIIB, or IIIC',
					ICD10diagnosisshortdescription:
						'Oth fracture of unsp femur, init for opn fx type 3A/B/C',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'B-6429012888',
					company: 'Rohan LLC',
					frontimage:
						'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/120x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/06/2010',
					eligibiltybegan: '03/31/1997',
					eligibiltyexpired: '11/09/1986',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-4377136319',
					company: 'Kiehn Inc',
					frontimage:
						'http://dummyimage.com/195x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/18/1967',
					eligibiltybegan: '08/19/1961',
					eligibiltyexpired: '03/18/2015',
				},
				{
					primary: false,
					active: true,
					membernumber: 'D-8319270974',
					company: 'Brakus Inc',
					frontimage:
						'http://dummyimage.com/156x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/244x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/18/1985',
					eligibiltybegan: '09/16/1952',
					eligibiltyexpired: '10/30/1985',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-5846863256',
					company: 'Krajcik-Lockman',
					frontimage:
						'http://dummyimage.com/212x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/104x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '06/05/1998',
					eligibiltybegan: '01/31/1964',
					eligibiltyexpired: '03/02/1951',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0TL70CZ',
					performed_by: 'Mickey Farnes',
					date: 1974,
					additional_information: null,
				},
				{
					ICD10procedurecode: '067D3DZ',
					performed_by: 'Gaspar McHenry',
					date: 1970,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0UM24ZZ',
					performed_by: 'Sully Wurst',
					date: 1992,
					additional_information:
						'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
				},
				{
					ICD10procedurecode: '0DMG4ZZ',
					performed_by: 'Horton Dudny',
					date: 1995,
					additional_information:
						'convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero',
				},
				{
					ICD10procedurecode: '0CSWXZ2',
					performed_by: 'Devora Hunnicot',
					date: 2006,
					additional_information:
						'amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel',
				},
				{
					ICD10procedurecode: '04HC4DZ',
					performed_by: 'Anabel Watkinson',
					date: 1977,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DUM4KZ',
					performed_by: 'Tildi Bandt',
					date: 1974,
					additional_information:
						'vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
				},
				{
					ICD10procedurecode: '0L850ZZ',
					performed_by: 'Thomasin McKinstry',
					date: 1996,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0210493',
					performed_by: 'Hynda Noyes',
					date: 1983,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0T984ZX',
					performed_by: 'Kerwin Paik',
					date: 1954,
					additional_information:
						'eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci',
				},
			],
		},
		ssn: '120879296',
	},
	{
		id: 16,
		details: {
			first_name: 'Bonita',
			last_name: 'Jorioz',
			middle_name: 'bjoriozf@google.es',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '6 Haas Road',
			address_two: null,
			city: 'San Antonio',
			state: 'TX',
			zip: '78230',
			date_of_birth: '1999-12-14T20:54:53Z',
			contact_methods: [{ number: '680-683-0430', notes: null }],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'V9530XD',
					ICD10diagnosislongdescription:
						'Unspecified accident to commercial fixed-wing aircraft injuring occupant, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unsp acc to commrcl fix-wing arcrft injuring occupant, subs',
					medications: [
						{
							drugname: 'salmeterol xinafoate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Danette Crotty',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Lyn Gayton',
						},
						{
							drugname:
								'mineral oil and phenylephrine hcl and shark liver oil and white petrolatum',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Arvy Varnam',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Bernita Knellen',
						},
						{
							drugname: 'Octinoxate, Octisalate, Avobenzone',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Jayne Balcombe',
						},
						{
							drugname: 'Ethambutol Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Berti Coverlyn',
						},
						{
							drugname: 'Metoprolol succinate',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Dynah Gerrey',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H1822',
					ICD10diagnosislongdescription: 'Idiopathic corneal edema',
					ICD10diagnosisshortdescription: 'Idiopathic corneal edema',
					medications: [
						{
							drugname:
								'Acetaminophen, Chlorpheniramine maleate, Dextromethorphan HBr, Phenylephrine HCl',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Abagail Chessil',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Mathian Gertz',
						},
						{
							drugname:
								'Alfalfa, Avena sativa, Fucus vesiculosus, Symphytum officinale, Agate, Calcarea carbonica, Ferrum metallicum, Phosphorus, Quartz, Silicea, Cuprum metallicum, Tarentula hispana,',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Curry Tregona',
						},
						{
							drugname: 'Sodium Monofluorophosphate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Marylinda Dorow',
						},
						{
							drugname:
								'Surgical Hand Scrub/General Skin Cleanser',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Lea Doddrell',
						},
						{
							drugname: 'colesevelam hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Ophelia Coleridge',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Gabbie McLae',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Z-9811999702',
					company: 'Lakin, Pacocha and Koch',
					frontimage:
						'http://dummyimage.com/111x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/204x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/15/1992',
					eligibiltybegan: '08/07/1974',
					eligibiltyexpired: '04/24/1961',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-3143668732',
					company: 'Jerde-Mayer',
					frontimage:
						'http://dummyimage.com/146x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/173x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/06/2014',
					eligibiltybegan: '01/09/1950',
					eligibiltyexpired: '12/29/1973',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-8063286773',
					company: 'Leuschke, Konopelski and Schaden',
					frontimage:
						'http://dummyimage.com/151x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/01/1983',
					eligibiltybegan: '06/01/1951',
					eligibiltyexpired: '03/16/1981',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-7360120028',
					company: 'Beer-Nader',
					frontimage:
						'http://dummyimage.com/106x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/116x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/26/1955',
					eligibiltybegan: '09/30/1985',
					eligibiltyexpired: '06/29/2019',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-9123677816',
					company: 'Kovacek-Thiel',
					frontimage:
						'http://dummyimage.com/245x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/09/1970',
					eligibiltybegan: '11/21/2005',
					eligibiltyexpired: '01/01/2005',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-5276714382',
					company: "O'Conner-Wiza",
					frontimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/122x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/21/1959',
					eligibiltybegan: '02/09/1997',
					eligibiltyexpired: '11/06/1988',
				},
				{
					primary: false,
					active: true,
					membernumber: 'A-6086816173',
					company: 'Metz LLC',
					frontimage:
						'http://dummyimage.com/179x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/126x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/15/1993',
					eligibiltybegan: '05/10/1989',
					eligibiltyexpired: '10/24/2005',
				},
			],
			surgicalhistory: null,
		},
		ssn: '391667207',
	},
	{
		id: 17,
		details: {
			first_name: 'Elmer',
			last_name: 'Orrice',
			middle_name: 'eorriceg@google.ca',
			gender: 'Non-binary',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '34527 Oak Parkway',
			address_two: null,
			city: 'Portland',
			state: 'OR',
			zip: '97201',
			date_of_birth: '1967-07-22T00:08:02Z',
			contact_methods: [
				{
					number: '684-151-3102',
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
				},
				{ number: '403-165-0901', notes: null },
				{
					number: '461-796-1670',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
				},
				{ number: '531-459-0653', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S82499D',
					ICD10diagnosislongdescription:
						'Other fracture of shaft of unspecified fibula, subsequent encounter for closed fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Oth fx shaft of unsp fibula, subs for clos fx w routn heal',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Jeanna Hardwicke',
						},
						{
							drugname: 'Docusate sodium',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Gertruda Tellenbroker',
						},
						{
							drugname: 'Rosuvastatin calcium',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Jaquenetta Brookwood',
						},
						{
							drugname: 'Broccoli',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Lothaire Tomowicz',
						},
						{
							drugname: 'buprenorphine',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Robbyn Goaks',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M89071',
					ICD10diagnosislongdescription:
						'Algoneurodystrophy, right ankle and foot',
					ICD10diagnosisshortdescription:
						'Algoneurodystrophy, right ankle and foot',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S12350G',
					ICD10diagnosislongdescription:
						'Other traumatic displaced spondylolisthesis of fourth cervical vertebra, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Oth traum displ spondylolysis of 4th cervcal vert, 7thG',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S5292XB',
					ICD10diagnosislongdescription:
						'Unspecified fracture of left forearm, initial encounter for open fracture type I or II',
					ICD10diagnosisshortdescription:
						'Unsp fracture of left forearm, init for opn fx type I/2',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S73025S',
					ICD10diagnosislongdescription:
						'Obturator dislocation of left hip, sequela',
					ICD10diagnosisshortdescription:
						'Obturator dislocation of left hip, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Melanie Bickardike',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Marna Schutt',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Vicky Magarrell',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L0203',
					ICD10diagnosislongdescription: 'Carbuncle of face',
					ICD10diagnosisshortdescription: 'Carbuncle of face',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Y071',
					ICD10diagnosislongdescription:
						'Parent (adoptive) (biological), perpetrator of maltreatment and neglect',
					ICD10diagnosisshortdescription:
						'Parent (adoptive) (biological), perp of maltreat and neglect',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'T-7185163186',
					company: 'Kassulke-Lesch',
					frontimage:
						'http://dummyimage.com/108x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/221x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/31/2009',
					eligibiltybegan: '07/30/2002',
					eligibiltyexpired: '03/10/1974',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-1029075079',
					company: 'Dietrich-Barton',
					frontimage:
						'http://dummyimage.com/120x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/133x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/29/1978',
					eligibiltybegan: '06/06/2005',
					eligibiltyexpired: '08/24/2010',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-3832663344',
					company: 'Powlowski and Sons',
					frontimage:
						'http://dummyimage.com/132x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/185x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/19/1950',
					eligibiltybegan: '11/04/1963',
					eligibiltyexpired: '03/11/2006',
				},
				{
					primary: true,
					active: true,
					membernumber: 'X-0296211626',
					company: 'Hessel-Heaney',
					frontimage:
						'http://dummyimage.com/197x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/226x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/05/1974',
					eligibiltybegan: '08/20/1956',
					eligibiltyexpired: '09/13/1968',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-0044348105',
					company: 'Hettinger, Hauck and Gislason',
					frontimage:
						'http://dummyimage.com/224x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/101x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/07/1990',
					eligibiltybegan: '01/05/2015',
					eligibiltyexpired: '07/05/1985',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-8105038708',
					company: 'Goldner and Sons',
					frontimage:
						'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/144x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/28/2004',
					eligibiltybegan: '10/27/1994',
					eligibiltyexpired: '08/06/1984',
				},
				{
					primary: false,
					active: false,
					membernumber: 'T-8956367936',
					company: 'Kirlin LLC',
					frontimage:
						'http://dummyimage.com/128x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/152x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/01/2015',
					eligibiltybegan: '10/09/1953',
					eligibiltyexpired: '11/26/2020',
				},
				{
					primary: true,
					active: false,
					membernumber: 'U-0408215749',
					company: 'Ledner-Crona',
					frontimage:
						'http://dummyimage.com/160x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/14/1988',
					eligibiltybegan: '05/15/1969',
					eligibiltyexpired: '12/07/1953',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '009X4ZZ',
					performed_by: 'Polly Borgesio',
					date: 2013,
					additional_information:
						'vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean',
				},
				{
					ICD10procedurecode: '09M',
					performed_by: 'Kerwinn Hosten',
					date: 2001,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'DBY8KZZ',
					performed_by: 'Melinda Gaddes',
					date: 1994,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06740DZ',
					performed_by: 'Byron Keysall',
					date: 2015,
					additional_information:
						'vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique',
				},
			],
		},
		ssn: '874966828',
	},
	{
		id: 18,
		details: {
			first_name: 'Morey',
			last_name: 'Marsie',
			middle_name: 'mmarsieh@google.cn',
			gender: 'Bigender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '93218 Coleman Avenue',
			address_two: null,
			city: 'Lancaster',
			state: 'CA',
			zip: '93584',
			date_of_birth: '1967-04-14T06:23:44Z',
			contact_methods: [
				{
					number: '767-211-9099',
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
				},
				{ allergy: null, notes: null },
				{ allergy: null, notes: null },
				{ allergy: 'medication', notes: null },
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'O42119',
					ICD10diagnosislongdescription:
						'Preterm premature rupture of membranes, onset of labor more than 24 hours following rupture, unspecified trimester',
					ICD10diagnosisshortdescription:
						'Pretrm prem ROM, onset labor > 24 hours fol rupt, unsp tri',
					medications: [
						{
							drugname: 'ALUMINUM CHLOROHYDRATE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Maryl Presslee',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ginger Hoggan',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Gus Jurczik',
						},
						{
							drugname: 'zolpidem tartrate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Sophie Skelington',
						},
						{
							drugname: 'Lorazepam',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Arden Bailes',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'R-3221120829',
					company: 'Kemmer-Hartmann',
					frontimage:
						'http://dummyimage.com/111x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/141x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/02/1964',
					eligibiltybegan: '01/21/1977',
					eligibiltyexpired: '03/08/1961',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-2732359092',
					company: 'Becker LLC',
					frontimage:
						'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/245x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/06/2008',
					eligibiltybegan: '04/23/1985',
					eligibiltyexpired: '05/11/1960',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-9103677704',
					company: 'Lemke and Sons',
					frontimage:
						'http://dummyimage.com/207x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/125x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/30/2014',
					eligibiltybegan: '10/21/2003',
					eligibiltyexpired: '10/08/1967',
				},
				{
					primary: true,
					active: true,
					membernumber: 'U-6015162951',
					company: 'Hauck and Sons',
					frontimage:
						'http://dummyimage.com/187x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/114x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/18/1972',
					eligibiltybegan: '02/27/1995',
					eligibiltyexpired: '03/23/1999',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0WCBXZZ',
					performed_by: 'Leisha Quarton',
					date: 2017,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0NR347Z',
					performed_by: 'Cory Fawlo',
					date: 1971,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0TV73DZ',
					performed_by: 'Talya Toller',
					date: 1957,
					additional_information:
						'etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst',
				},
				{
					ICD10procedurecode: '0CMXXZ0',
					performed_by: 'Kellyann Laughton',
					date: 1987,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'F07G6UZ',
					performed_by: 'Jimmie Jehaes',
					date: 1970,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05RA4KZ',
					performed_by: 'Deborah Dillicate',
					date: 2015,
					additional_information:
						'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis',
				},
				{
					ICD10procedurecode: '0QPS37Z',
					performed_by: 'Dud Dispencer',
					date: 1981,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SSM04Z',
					performed_by: 'Charla Kinnear',
					date: 2005,
					additional_information: null,
				},
				{
					ICD10procedurecode: '3E00XKZ',
					performed_by: 'Diannne Folke',
					date: 1973,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DUC8JZ',
					performed_by: 'Shelley Edge',
					date: 1997,
					additional_information: null,
				},
			],
		},
		ssn: '131381236',
	},
	{
		id: 19,
		details: {
			first_name: 'Sal',
			last_name: 'Gyse',
			middle_name: 'sgysei@soup.io',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '40061 Portage Hill',
			address_two: null,
			city: 'Anchorage',
			state: 'AK',
			zip: '99599',
			date_of_birth: '2014-12-18T10:37:52Z',
			contact_methods: [
				{
					number: '890-738-2048',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				},
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
				{
					allergy: null,
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S82246B',
					ICD10diagnosislongdescription:
						'Nondisplaced spiral fracture of shaft of unspecified tibia, initial encounter for open fracture type I or II',
					ICD10diagnosisshortdescription:
						'Nondisp spiral fx shaft of unsp tibia, 7thB',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Hirsch Beetlestone',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Jewell Head',
						},
						{
							drugname: 'Sodium Fluoride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Arleen Prendeville',
						},
						{
							drugname: 'Triamcinolone Hexacetonide',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Jeremy Clohissy',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Paulita Beran',
						},
						{
							drugname: 'calcium carbonate',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Debera Timbrell',
						},
						{
							drugname: 'MIDAZOLAM HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ivan Leatham',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Iain Annes',
						},
						{
							drugname: 'Fluoride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Mendel Assender',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S72023S',
					ICD10diagnosislongdescription:
						'Displaced fracture of epiphysis (separation) (upper) of unspecified femur, sequela',
					ICD10diagnosisshortdescription:
						'Disp fx of epiphy (separation) (upper) of unsp femur, sqla',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Q892',
					ICD10diagnosislongdescription:
						'Congenital malformations of other endocrine glands',
					ICD10diagnosisshortdescription:
						'Congenital malformations of other endocrine glands',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Y3791',
					ICD10diagnosislongdescription:
						'Military operations involving unspecified weapon of mass destruction [WMD]',
					ICD10diagnosisshortdescription:
						'Milt op involving unsp weapon of mass destruction',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Yasmeen Drewry',
						},
						{
							drugname: 'Witch Hazel',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ikey Sherrott',
						},
						{
							drugname: 'OLANZAPINE',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Nicolle Bracey',
						},
						{
							drugname: 'WHITE PETROLEUM',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Kilian Schulkins',
						},
						{
							drugname: 'Olanzapine',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Henriette Kerswell',
						},
						{
							drugname: 'Cefprozil',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Padget Byas',
						},
						{
							drugname:
								'Energizing Multi-Protection Healthy Glow Fluid',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Amanda Woollin',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'F-3789495723',
					company: 'Larson-Turner',
					frontimage:
						'http://dummyimage.com/154x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/245x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/24/1958',
					eligibiltybegan: '08/09/1969',
					eligibiltyexpired: '09/10/2015',
				},
			],
			surgicalhistory: null,
		},
		ssn: '816278010',
	},
	{
		id: 20,
		details: {
			first_name: 'Hogan',
			last_name: 'Dyter',
			middle_name: 'hdyterj@google.de',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '1137 Thackeray Crossing',
			address_two: null,
			city: 'Sacramento',
			state: 'CA',
			zip: '95828',
			date_of_birth: '1959-05-08T16:15:47Z',
			contact_methods: [
				{ number: '936-217-4015', notes: null },
				{ number: '210-831-7459', notes: null },
				{
					number: '333-377-8269',
					notes: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: 'medication', notes: null },
				{
					allergy: null,
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'M85829',
					ICD10diagnosislongdescription:
						'Other specified disorders of bone density and structure, unspecified upper arm',
					ICD10diagnosisshortdescription:
						'Oth disrd of bone density and structure, unsp upper arm',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'F16950',
					ICD10diagnosislongdescription:
						'Hallucinogen use, unspecified with hallucinogen-induced psychotic disorder with delusions',
					ICD10diagnosisshortdescription:
						'Hallucinogen use, unsp w psychotic disorder w delusions',
					medications: [
						{
							drugname: 'METHADONE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Scot MacDowall',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Gerri Weedon',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S34115A',
					ICD10diagnosislongdescription:
						'Complete lesion of L5 level of lumbar spinal cord, initial encounter',
					ICD10diagnosisshortdescription:
						'Complete lesion of L5 level of lumbar spinal cord, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T380X3D',
					ICD10diagnosislongdescription:
						'Poisoning by glucocorticoids and synthetic analogues, assault, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by glucocort/synth analog, assault, subs',
					medications: [
						{
							drugname: 'Lamivudine',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Glen Birts',
						},
						{
							drugname: 'Alcohol',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Rosalyn Este',
						},
						{
							drugname: 'Loratadine',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Clemente Spaducci',
						},
						{
							drugname: 'olmesartan medoxomil',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Guy Riedel',
						},
						{
							drugname: 'Nisoldipine',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Sebastian Brownsell',
						},
						{
							drugname: 'Pioglitazone Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Cecilius Omand',
						},
						{
							drugname: 'OXYCODONE HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Neils Antonikov',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T201',
					ICD10diagnosislongdescription:
						'Burn of first degree of head, face, and neck',
					ICD10diagnosisshortdescription:
						'Burn of first degree of head, face, and neck',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'F18288',
					ICD10diagnosislongdescription:
						'Inhalant dependence with other inhalant-induced disorder',
					ICD10diagnosisshortdescription:
						'Inhalant dependence with other inhalant-induced disorder',
					medications: [
						{
							drugname: 'Tretinoin',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Kimberlee Bunyan',
						},
						{
							drugname: 'Naproxen Sodium',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Winny Haysey',
						},
						{
							drugname: 'minocycline hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Lockwood Sutheran',
						},
						{
							drugname: 'LISINOPRIL',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Alysia Cramer',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Rubi Veazey',
						},
						{
							drugname: 'chloroxylenol',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Euphemia Ashall',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Helaine Vuitte',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Minda Stollmeier',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'G-2155395446',
					company: 'Feil-Ondricka',
					frontimage:
						'http://dummyimage.com/157x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/09/1954',
					eligibiltybegan: '06/24/1961',
					eligibiltyexpired: '01/28/1957',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-8686315013',
					company: 'Rempel Group',
					frontimage:
						'http://dummyimage.com/226x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/30/1987',
					eligibiltybegan: '03/23/1953',
					eligibiltyexpired: '12/25/2013',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Z-8823366857',
					company: 'Turcotte and Sons',
					frontimage:
						'http://dummyimage.com/175x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/193x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/13/1968',
					eligibiltybegan: '09/11/1998',
					eligibiltyexpired: '05/22/1958',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-8687962388',
					company: 'Reichel-Schmeler',
					frontimage:
						'http://dummyimage.com/148x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/113x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/05/2017',
					eligibiltybegan: '01/09/1967',
					eligibiltyexpired: '05/01/2015',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '30240M1',
					performed_by: 'Bendick Oager',
					date: 1964,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RGD37Z',
					performed_by: 'Levon Atmore',
					date: 2013,
					additional_information: null,
				},
				{
					ICD10procedurecode: '08T0XZZ',
					performed_by: 'Gwendolen Cremer',
					date: 1961,
					additional_information: null,
				},
				{
					ICD10procedurecode: '07B34ZZ',
					performed_by: 'Marcel Durgan',
					date: 1968,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D1H0KK',
					performed_by: 'Ailyn Verity',
					date: 2007,
					additional_information: null,
				},
				{
					ICD10procedurecode: '041E0KC',
					performed_by: 'Edin Gatfield',
					date: 2011,
					additional_information:
						'magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus',
				},
				{
					ICD10procedurecode: '04C34Z6',
					performed_by: 'Jarret Finlay',
					date: 1987,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06914ZX',
					performed_by: 'Aylmer Purvis',
					date: 1950,
					additional_information:
						'quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea',
				},
				{
					ICD10procedurecode: '04BD3ZX',
					performed_by: 'Regan Held',
					date: 1967,
					additional_information:
						'eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante',
				},
				{
					ICD10procedurecode: '09DU4ZZ',
					performed_by: 'Law Gillon',
					date: 1990,
					additional_information:
						'posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi',
				},
			],
		},
		ssn: '961836816',
	},
	{
		id: 21,
		details: {
			first_name: 'Justina',
			last_name: 'Carriage',
			middle_name: 'jcarriagek@usa.gov',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '077 Bunting Center',
			address_two: null,
			city: 'Saint Paul',
			state: 'MN',
			zip: '55115',
			date_of_birth: '1953-01-03T12:57:32Z',
			contact_methods: [
				{ number: '436-456-4783', notes: null },
				{
					number: '415-239-8509',
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
				{
					number: '542-519-9514',
					notes: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
				{ number: '667-130-4769', notes: null },
				{ number: '218-946-9241', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S21042S',
					ICD10diagnosislongdescription:
						'Puncture wound with foreign body of left breast, sequela',
					ICD10diagnosisshortdescription:
						'Puncture wound with foreign body of left breast, sequela',
					medications: [
						{
							drugname: 'mechlorethamine hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Audre Woodson',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Ebenezer Hinks',
						},
						{
							drugname: 'atorvastatin calcium',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Karisa Kirtley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Dacy Boughey',
						},
						{
							drugname: 'dextroamphetamine sulfate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Gasparo Illwell',
						},
						{
							drugname: 'Octinoxate and Titanium dioxide',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Ansley Upward',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Innis Elman',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C50519',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of lower-outer quadrant of unspecified female breast',
					ICD10diagnosisshortdescription:
						'Malig neoplasm of lower-outer quadrant of unsp female breast',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S59211S',
					ICD10diagnosislongdescription:
						'Salter-Harris Type I physeal fracture of lower end of radius, right arm, sequela',
					ICD10diagnosisshortdescription:
						'Sltr-haris Type I physl fx lower end radius, right arm, sqla',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'F-3646170629',
					company: 'Bartoletti, Cruickshank and Bashirian',
					frontimage:
						'http://dummyimage.com/101x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/218x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/18/1955',
					eligibiltybegan: '01/03/2012',
					eligibiltyexpired: '11/21/1957',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-2293472159',
					company: 'Cole Inc',
					frontimage:
						'http://dummyimage.com/177x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/24/1985',
					eligibiltybegan: '02/13/1993',
					eligibiltyexpired: '05/08/2022',
				},
				{
					primary: true,
					active: false,
					membernumber: 'U-5494720672',
					company: 'Kulas Group',
					frontimage:
						'http://dummyimage.com/144x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/126x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/15/1954',
					eligibiltybegan: '01/23/1991',
					eligibiltyexpired: '05/27/1966',
				},
				{
					primary: false,
					active: true,
					membernumber: 'L-7303254884',
					company: 'Emard, Dicki and Hoppe',
					frontimage:
						'http://dummyimage.com/250x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/07/1994',
					eligibiltybegan: '09/29/1993',
					eligibiltyexpired: '08/26/1966',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '09PJ3KZ',
					performed_by: 'Zsazsa Easun',
					date: 1966,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B30P0ZZ',
					performed_by: 'Barb Ivanilov',
					date: 1976,
					additional_information: null,
				},
			],
		},
		ssn: '063194516',
	},
	{
		id: 22,
		details: {
			first_name: 'Holly',
			last_name: 'Sturr',
			middle_name: 'hsturrl@altervista.org',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '382 Summit Lane',
			address_two: null,
			city: 'Philadelphia',
			state: 'PA',
			zip: '19184',
			date_of_birth: '1987-12-11T09:58:07Z',
			contact_methods: [
				{ number: '994-264-3787', notes: null },
				{
					number: '860-887-7831',
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
				{
					allergy: null,
					notes: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
				},
				{
					allergy: 'medication',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
				},
				{
					allergy: 'insects',
					notes: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S62034D',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of proximal third of navicular [scaphoid] bone of right wrist, subsequent encounter for fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Nondisp fx of prox 3rd of navic bone of r wrs, 7thD',
					medications: [
						{
							drugname: 'Rizatriptan benzoate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Kelly Merwe',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Lorne Rockwell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Nedda Cheshire',
						},
						{
							drugname: 'Glycerin',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Margie Turpie',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Christopher Askie',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Rufe Sprott',
						},
						{
							drugname: 'petrolatum',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Haley Zamudio',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S14129D',
					ICD10diagnosislongdescription:
						'Central cord syndrome at unspecified level of cervical spinal cord, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Central cord synd at unsp level of cerv spinal cord, subs',
					medications: [
						{
							drugname: 'Serotonin',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Ardys Blasik',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Ford Brayford',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sarina Hartridge',
						},
						{
							drugname:
								'Avobenzone, Octisalate, Zinc Oxide, Octinoxate, and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Amerigo De Rechter',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Trish Pashler',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Opaline Jacobowicz',
						},
						{
							drugname: 'Naproxen',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Dirk Atchly',
						},
						{
							drugname: 'Sodium Fluoride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sandy Blanket',
						},
						{
							drugname: 'Carbidopa, Levodopa and Entacapone',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Moritz Yalden',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'E-2911561229',
					company: 'Fay, Stanton and Towne',
					frontimage:
						'http://dummyimage.com/177x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/158x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/30/1961',
					eligibiltybegan: '05/11/1980',
					eligibiltyexpired: '10/07/1958',
				},
				{
					primary: true,
					active: true,
					membernumber: 'R-4245839410',
					company: 'Ledner Inc',
					frontimage:
						'http://dummyimage.com/142x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/127x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/18/1989',
					eligibiltybegan: '03/07/1980',
					eligibiltyexpired: '01/16/2004',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-2364573631',
					company: 'Witting, Marks and Buckridge',
					frontimage:
						'http://dummyimage.com/203x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/123x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/26/1984',
					eligibiltybegan: '03/10/1991',
					eligibiltyexpired: '06/21/1991',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-2516292348',
					company: 'Konopelski, Mann and Mante',
					frontimage:
						'http://dummyimage.com/153x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/187x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/26/1987',
					eligibiltybegan: '04/09/1952',
					eligibiltyexpired: '03/27/2011',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-3837267582',
					company: 'Terry, Crooks and Swift',
					frontimage:
						'http://dummyimage.com/232x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/230x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/17/1965',
					eligibiltybegan: '06/17/2020',
					eligibiltyexpired: '10/16/2021',
				},
				{
					primary: true,
					active: true,
					membernumber: 'I-5627553300',
					company: 'Marks, Stracke and Jacobson',
					frontimage:
						'http://dummyimage.com/179x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/174x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/06/1995',
					eligibiltybegan: '04/09/1979',
					eligibiltyexpired: '05/30/1991',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-0554852103',
					company: 'Labadie and Sons',
					frontimage:
						'http://dummyimage.com/182x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/195x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/20/1966',
					eligibiltybegan: '01/17/2014',
					eligibiltyexpired: '07/07/1957',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '037F3D6',
					performed_by: 'Brooks Danielsky',
					date: 1952,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B92F1ZZ',
					performed_by: 'Cy Endle',
					date: 1960,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0F1D0ZB',
					performed_by: 'Gratiana Reglar',
					date: 1969,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0FV98ZZ',
					performed_by: 'Bruis Bessey',
					date: 2021,
					additional_information: null,
				},
				{
					ICD10procedurecode: '30240S0',
					performed_by: 'Montague Murra',
					date: 1991,
					additional_information:
						'felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
				},
				{
					ICD10procedurecode: '0RWH34Z',
					performed_by: 'Hoyt Ungerechts',
					date: 1960,
					additional_information: null,
				},
				{
					ICD10procedurecode: '03RA07Z',
					performed_by: 'Guendolen Collcott',
					date: 2020,
					additional_information:
						'ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit',
				},
			],
		},
		ssn: '710728900',
	},
	{
		id: 23,
		details: {
			first_name: 'Clayborne',
			last_name: 'Ridpath',
			middle_name: 'cridpathm@wix.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '9 Laurel Crossing',
			address_two: null,
			city: 'Little Rock',
			state: 'AR',
			zip: '72209',
			date_of_birth: '2018-06-30T01:23:48Z',
			contact_methods: [
				{
					number: '629-793-4398',
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
				{ allergy: 'animals', notes: null },
				{
					allergy: null,
					notes: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T83193',
					ICD10diagnosislongdescription:
						'Other mechanical complication of other urinary stent',
					ICD10diagnosisshortdescription:
						'Other mechanical complication of other urinary stent',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'I70618',
					ICD10diagnosislongdescription:
						'Atherosclerosis of nonbiological bypass graft(s) of the extremities with intermittent claudication, other extremity',
					ICD10diagnosisshortdescription:
						'Athscl nonbiol bypass of the extrm w intrmt claud, oth extrm',
					medications: [
						{
							drugname: 'Oxcarbazepine',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Leona Coyish',
						},
						{
							drugname: 'ampicillin and sulbactam',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Shannon Motto',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kristy Casini',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Jayne Thomton',
						},
						{
							drugname: 'Tacrolimus',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Dru Sulland',
						},
						{
							drugname:
								'BLACK COHOSH - COLCHICUM AUTUMNALE BULB - POTASSIUM IODIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Veronica Brymner',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Florri Carville',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Stinky Smartman',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Hulda Pakeman',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Ambrosius Waterhowse',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T23262',
					ICD10diagnosislongdescription:
						'Burn of second degree of back of left hand',
					ICD10diagnosisshortdescription:
						'Burn of second degree of back of left hand',
					medications: [
						{
							drugname: 'Sodium Bicarbonate',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Tallulah Bitten',
						},
						{
							drugname: 'OXYGEN',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Ode Wheble',
						},
						{
							drugname: 'FELODIPINE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Rogerio Swadling',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Winifred McSkin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Fabe Milleton',
						},
						{
							drugname:
								'Norethindrone Acetate and Ethinyl Estradiol',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Kandace Oulet',
						},
						{
							drugname: 'Dicyclomine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Delano McLane',
						},
						{
							drugname: 'Avobenzone, Octisalate and Octocrylene',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Innis Hallagan',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'S-9263578555',
					company: 'Rau LLC',
					frontimage:
						'http://dummyimage.com/110x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/25/1987',
					eligibiltybegan: '11/10/1968',
					eligibiltyexpired: '07/13/1995',
				},
				{
					primary: true,
					active: false,
					membernumber: 'L-1453437756',
					company: 'Cronin-Beatty',
					frontimage:
						'http://dummyimage.com/204x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/192x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/17/1966',
					eligibiltybegan: '08/13/1959',
					eligibiltyexpired: '01/22/1981',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0WFQ3ZZ',
					performed_by: 'Nickolai Ainley',
					date: 1985,
					additional_information:
						'nulla quisque arcu libero rutrum ac lobortis vel dapibus at',
				},
				{
					ICD10procedurecode: '0PCM3ZZ',
					performed_by: 'Harmony Churchouse',
					date: 1995,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0UUF7JZ',
					performed_by: 'Friedrich Jaray',
					date: 1958,
					additional_information:
						'luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio',
				},
				{
					ICD10procedurecode: '0FUC07Z',
					performed_by: 'Selina Estable',
					date: 1954,
					additional_information:
						'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris',
				},
				{
					ICD10procedurecode: '0QTS0ZZ',
					performed_by: 'Eddy Janda',
					date: 2013,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0XUM0JZ',
					performed_by: 'Anthia Cardoo',
					date: 2010,
					additional_information:
						'leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor',
				},
				{
					ICD10procedurecode: '090K4KZ',
					performed_by: 'Calvin Woloschin',
					date: 2000,
					additional_information:
						'aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus',
				},
			],
		},
		ssn: '678734508',
	},
	{
		id: 24,
		details: {
			first_name: 'Daryn',
			last_name: 'Ritchman',
			middle_name: 'dritchmann@blogger.com',
			gender: 'Non-binary',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '4 6th Hill',
			address_two: null,
			city: 'Louisville',
			state: 'KY',
			zip: '40266',
			date_of_birth: '1999-07-25T09:36:43Z',
			contact_methods: [
				{ number: '993-553-5865', notes: null },
				{
					number: '473-976-6479',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
				{ number: '317-224-7360', notes: null },
				{ number: '185-303-6468', notes: null },
				{
					number: '900-272-6000',
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S2732',
					ICD10diagnosislongdescription: 'Contusion of lung',
					ICD10diagnosisshortdescription: 'Contusion of lung',
					medications: [
						{
							drugname: 'Diclofenac Sodium',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Shanta Cretney',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Kay Brevetor',
						},
						{
							drugname: 'Oak Mixture',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Pamelina Ionesco',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Sully Ruzicka',
						},
						{
							drugname: 'MORPHINE SULFATE',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Byrle Ridgeway',
						},
						{
							drugname: 'octinoxate, octisalate, avobenzone',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Kit Servante',
						},
						{
							drugname: 'Antiseptic handwash',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Lon Poone',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S62346D',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of base of fifth metacarpal bone, right hand, subsequent encounter for fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Nondisp fx of base of 5th MC bone, r hand, 7thD',
					medications: [
						{
							drugname: 'Zinc Oxide, Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Willy Dorsett',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Caressa Tipple',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63267D',
					ICD10diagnosislongdescription:
						'Dislocation of metacarpophalangeal joint of left little finger, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Dislocation of MCP joint of left little finger, subs',
					medications: [
						{
							drugname: 'ALUMINUM CHLOROHYDRATE',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Cally Colcutt',
						},
						{
							drugname: 'Salicylic Acid',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Artur Pemberton',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Elvis Peacop',
						},
						{
							drugname: 'CARBOXYMETHYLCELLULOSE SODIUM',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Melisse Lindmark',
						},
						{
							drugname: 'Gabapentin',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Rurik Borthe',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Roshelle Franey',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Letta Mityushkin',
						},
						{
							drugname: 'Simvastatin',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Tallie Tuckey',
						},
						{
							drugname: 'risperidone',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Vally Thompstone',
						},
						{
							drugname: 'Venlafaxine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Lorri Ruilton',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42124',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of acromial process, right shoulder',
					ICD10diagnosisshortdescription:
						'Nondisplaced fracture of acromial process, right shoulder',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S42214P',
					ICD10diagnosislongdescription:
						'Unspecified nondisplaced fracture of surgical neck of right humerus, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Unsp nondisp fx of surg nk of r humer, 7thP',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S72454',
					ICD10diagnosislongdescription:
						'Nondisplaced supracondylar fracture without intracondylar extension of lower end of right femur',
					ICD10diagnosisshortdescription:
						'Nondisp suprcndl fx w/o intrcndl extn lower end of r femur',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'M-8304341067',
					company: 'Mayert LLC',
					frontimage:
						'http://dummyimage.com/116x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/21/1994',
					eligibiltybegan: '07/09/1970',
					eligibiltyexpired: '10/02/2015',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Q-7205172492',
					company: 'Jaskolski-Kris',
					frontimage:
						'http://dummyimage.com/137x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/115x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/02/2021',
					eligibiltybegan: '04/08/2009',
					eligibiltyexpired: '09/06/1991',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-0005053742',
					company: 'Morar, Williamson and Daniel',
					frontimage:
						'http://dummyimage.com/104x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/114x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/24/1953',
					eligibiltybegan: '02/10/1995',
					eligibiltyexpired: '09/12/1976',
				},
				{
					primary: true,
					active: false,
					membernumber: 'L-7593811175',
					company: 'Hauck, Hayes and Feeney',
					frontimage:
						'http://dummyimage.com/162x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/149x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/23/2022',
					eligibiltybegan: '12/24/1964',
					eligibiltyexpired: '11/02/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'D-2433819620',
					company: 'Senger, Botsford and Lubowitz',
					frontimage:
						'http://dummyimage.com/211x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/132x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/03/1990',
					eligibiltybegan: '02/04/1950',
					eligibiltyexpired: '08/29/2015',
				},
				{
					primary: false,
					active: false,
					membernumber: 'U-5041733624',
					company: 'Kuhn and Sons',
					frontimage:
						'http://dummyimage.com/116x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/112x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/07/1965',
					eligibiltybegan: '02/26/1967',
					eligibiltyexpired: '04/04/1950',
				},
				{
					primary: true,
					active: true,
					membernumber: 'X-2790772452',
					company: 'Abbott-Rath',
					frontimage:
						'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/03/2001',
					eligibiltybegan: '02/16/2006',
					eligibiltyexpired: '08/31/1984',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-2943805989',
					company: 'Bednar and Sons',
					frontimage:
						'http://dummyimage.com/161x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/244x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/03/1961',
					eligibiltybegan: '03/24/1995',
					eligibiltyexpired: '09/04/2011',
				},
				{
					primary: true,
					active: false,
					membernumber: 'O-8540054894',
					company: 'Haag, Sauer and Raynor',
					frontimage:
						'http://dummyimage.com/217x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/11/1950',
					eligibiltybegan: '01/25/1999',
					eligibiltyexpired: '08/25/1988',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0HCFXZZ',
					performed_by: 'Keven Carnegie',
					date: 1991,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0C9500Z',
					performed_by: 'Marita Feaster',
					date: 1980,
					additional_information: null,
				},
				{
					ICD10procedurecode: '08LX8DZ',
					performed_by: 'Milicent Spurdon',
					date: 2014,
					additional_information:
						'nulla ac enim in tempor turpis nec euismod scelerisque quam turpis',
				},
				{
					ICD10procedurecode: '0UUM07Z',
					performed_by: 'Bibby Loftin',
					date: 1959,
					additional_information: null,
				},
				{
					ICD10procedurecode: '07WK3DZ',
					performed_by: 'Temple Ipsly',
					date: 1952,
					additional_information:
						'fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus',
				},
			],
		},
		ssn: '813320569',
	},
	{
		id: 25,
		details: {
			first_name: 'Henryetta',
			last_name: 'Rippon',
			middle_name: 'hrippono@home.pl',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '8 Moose Junction',
			address_two: null,
			city: 'Phoenix',
			state: 'AZ',
			zip: '85045',
			date_of_birth: '1995-11-27T18:23:27Z',
			contact_methods: [
				{
					number: '184-254-2742',
					notes: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
				},
				{ number: '760-432-0531', notes: null },
				{ number: '328-783-2191', notes: null },
				{ number: '425-935-9238', notes: null },
				{ number: '855-866-9220', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T484X4S',
					ICD10diagnosislongdescription:
						'Poisoning by expectorants, undetermined, sequela',
					ICD10diagnosisshortdescription:
						'Poisoning by expectorants, undetermined, sequela',
					medications: [
						{
							drugname: 'PANCRELIPASE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Martina Mercer',
						},
						{
							drugname: 'ESTRADIOL VALERATE',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Elmer Buckell',
						},
						{
							drugname: 'Pyrithione Zinc',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Kimbell Dransfield',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Kayla Freeburn',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Gus MacIver',
						},
						{
							drugname: 'Chlorhexidine Gluconate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Adriaens Blazeby',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Cesya Baseggio',
						},
						{
							drugname: 'Famciclovir',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Zara Raraty',
						},
						{
							drugname: 'Lamivudine and Zidovudine',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Germaine Crickett',
						},
						{
							drugname: 'BENZALKONIUM CHLORIDE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Kurtis Neathway',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H00011',
					ICD10diagnosislongdescription:
						'Hordeolum externum right upper eyelid',
					ICD10diagnosisshortdescription:
						'Hordeolum externum right upper eyelid',
					medications: [
						{
							drugname: 'Orris Root',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Kip Lammert',
						},
						{
							drugname: 'Phenazopyridine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Dacie Janeczek',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Denni Carme',
						},
						{
							drugname: 'Desmopressin Acetate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Samson Dessaur',
						},
						{
							drugname: 'vancomycin hydrochloride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Brande Poundford',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T370X3A',
					ICD10diagnosislongdescription:
						'Poisoning by sulfonamides, assault, initial encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by sulfonamides, assault, initial encounter',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Markus Londer',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan HBr, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Jewelle De Lisle',
						},
						{
							drugname: 'Pyrithione zinc',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Grace Brouwer',
						},
						{
							drugname: 'Oxygen',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Rachele Littlekit',
						},
					],
				},
				{
					ICD10diagnosiscode: 'A8181',
					ICD10diagnosislongdescription: 'Kuru',
					ICD10diagnosisshortdescription: 'Kuru',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Stephani Retchford',
						},
						{
							drugname: 'SULINDAC',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Monika Ricciardiello',
						},
						{
							drugname: 'Beef Bovine spp.',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Stanislaus McKune',
						},
						{
							drugname:
								'Amlodipine Besylate and Benazepril Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Bekki Buzek',
						},
						{
							drugname: 'Acetaminophen, Diphenhydramine HCl',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Cosetta Bolt',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Gaye Torrejon',
						},
					],
				},
				{
					ICD10diagnosiscode: 'I7035',
					ICD10diagnosislongdescription:
						'Atherosclerosis of unspecified type of bypass graft(s) of other extremity with ulceration',
					ICD10diagnosisshortdescription:
						'Athscl unsp type bypass graft(s) of extremity w ulceration',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S60342S',
					ICD10diagnosislongdescription:
						'External constriction of left thumb, sequela',
					ICD10diagnosisshortdescription:
						'External constriction of left thumb, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Osmund Cavaney',
						},
						{
							drugname: 'DEXTRAN, HYPROMELLOSE 2910',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Zandra Blazy',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Hersch Endrici',
						},
						{
							drugname: 'Levonorgestrel and Ethinyl Estradiol',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Benoite Bunkle',
						},
						{
							drugname: 'Prednisone',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Chico Dykins',
						},
						{
							drugname: 'Pyrithione Zince',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Eziechiele Bonhan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S60420D',
					ICD10diagnosislongdescription:
						'Blister (nonthermal) of right index finger, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Blister (nonthermal) of right index finger, subs encntr',
					medications: [
						{
							drugname: 'HYDROGEN PEROXIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Lyell Calven',
						},
						{
							drugname: 'Oxymorphone Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Hadria Pirazzi',
						},
						{
							drugname: 'Diphenhydramine HCl, Zinc Acetate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ashlan Valentelli',
						},
						{
							drugname: 'pindolol',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Concettina Twycross',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Jone Durban',
						},
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Alanson Borges',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Lewie Smelley',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S20309',
					ICD10diagnosislongdescription:
						'Unspecified superficial injuries of unspecified front wall of thorax',
					ICD10diagnosisshortdescription:
						'Unsp superficial injuries of unsp front wall of thorax',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S66396A',
					ICD10diagnosislongdescription:
						'Other injury of extensor muscle, fascia and tendon of right little finger at wrist and hand level, initial encounter',
					ICD10diagnosisshortdescription:
						'Inj extn musc/fasc/tend r little finger at wrs/hnd lv, init',
					medications: [
						{
							drugname: 'Calcium Carbonate',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Chryste Crowne',
						},
						{
							drugname: 'Esomeprazole magnesium',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Frazer Dillingston',
						},
						{
							drugname: 'potassium chloride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Chery Arkow',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Bryna Cadwallader',
						},
						{
							drugname: 'HUMAN IMMUNOGLOBULIN G',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Sabrina Deeble',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Esdras Hubert',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Findlay Dirkin',
						},
						{
							drugname: 'salicylic acid',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Christiane Espada',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H158',
					ICD10diagnosislongdescription: 'Other disorders of sclera',
					ICD10diagnosisshortdescription: 'Other disorders of sclera',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Gayleen Broadnicke',
						},
						{
							drugname: 'Acetic Acid',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Bianka Dmisek',
						},
						{
							drugname: 'Lisinopril and Hydrochlorothiazide',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Sallyann Kiddell',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'K-5555944558',
					company: 'Hartmann-Bergstrom',
					frontimage:
						'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/241x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/03/1958',
					eligibiltybegan: '02/25/1966',
					eligibiltyexpired: '01/03/1989',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0JP',
					performed_by: 'Kellie Jeary',
					date: 1989,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SWN38Z',
					performed_by: 'Nettie Wickens',
					date: 1976,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0J9G3ZZ',
					performed_by: 'Gilda Stairs',
					date: 2015,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'DFY38ZZ',
					performed_by: 'Stace McBrearty',
					date: 1963,
					additional_information:
						'nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus',
				},
				{
					ICD10procedurecode: '0RWR00Z',
					performed_by: 'Trixi Bannester',
					date: 2019,
					additional_information:
						'ut at dolor quis odio consequat varius integer ac leo pellentesque',
				},
				{
					ICD10procedurecode: '0LBW3ZX',
					performed_by: 'Sada Barrs',
					date: 2015,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B54JZZZ',
					performed_by: 'Cello Alleyn',
					date: 2003,
					additional_information:
						'sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio',
				},
				{
					ICD10procedurecode: '07UK4JZ',
					performed_by: 'Manny Cafe',
					date: 2012,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0PWKXJZ',
					performed_by: 'Jess Hambribe',
					date: 2021,
					additional_information: null,
				},
			],
		},
		ssn: '772975125',
	},
	{
		id: 26,
		details: {
			first_name: 'Zena',
			last_name: 'Mitton',
			middle_name: 'zmittonp@slate.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '7045 Wayridge Parkway',
			address_two: null,
			city: 'Toledo',
			state: 'OH',
			zip: '43699',
			date_of_birth: '1961-04-24T13:24:21Z',
			contact_methods: [
				{ number: '193-959-8646', notes: null },
				{
					number: '353-416-7202',
					notes: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
				{
					number: '245-107-2972',
					notes: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S63121S',
					ICD10diagnosislongdescription:
						'Subluxation of unspecified interphalangeal joint of right thumb, sequela',
					ICD10diagnosisshortdescription:
						'Subluxation of unsp interphaln joint of right thumb, sequela',
					medications: [
						{
							drugname: 'olopatadine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Betteann Gouldthorp',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Mae Tupman',
						},
						{
							drugname: 'Chlordiazepoxide Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Wendi Widdowson',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Vikky McKnish',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Mechelle Murtagh',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M90651',
					ICD10diagnosislongdescription:
						'Osteitis deformans in neoplastic diseases, right thigh',
					ICD10diagnosisshortdescription:
						'Osteitis deformans in neoplastic diseases, right thigh',
					medications: [
						{
							drugname: 'Prednisone',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Jesse Axon',
						},
						{
							drugname: 'TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Delcine Yitzhak',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Kristin Streight',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Pieter Siman',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Odo Hankey',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S37099S',
					ICD10diagnosislongdescription:
						'Other injury of unspecified kidney, sequela',
					ICD10diagnosisshortdescription:
						'Other injury of unspecified kidney, sequela',
					medications: [
						{
							drugname:
								'Acetaminophen, Phenylephrine HCl, Dextromethorphan HBr, Chlorpheniramine maleate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Sande Kield',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L930',
					ICD10diagnosislongdescription:
						'Discoid lupus erythematosus',
					ICD10diagnosisshortdescription:
						'Discoid lupus erythematosus',
					medications: [
						{
							drugname: 'MISOPROSTOL',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Verge Dutnall',
						},
						{
							drugname: 'cephalexin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Nara Sheer',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Kelsey Mingus',
						},
						{
							drugname: 'cyanocobalamin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Yolanda Rathe',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42494P',
					ICD10diagnosislongdescription:
						'Other nondisplaced fracture of lower end of right humerus, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Oth nondisp fx of lower end r humer, subs for fx w malunion',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Normy Harborow',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Samaria Blachford',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Nalani Querree',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Bonny Bowkett',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Darline Valenti',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kaleena Stollhofer',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Cyril Mardling',
						},
						{
							drugname:
								'Bacitracin Zinc, Neomycin Sulfate, Polymyxin B Sulfate, and Pramoxine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Cori Witherdon',
						},
						{
							drugname: 'Nux vomica',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Mateo Benoy',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92355K',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of fifth metatarsal bone, left foot, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Nondisp fx of 5th metatarsal bone, l ft, 7thK',
					medications: [
						{
							drugname: 'pioglitazone',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Artemis Jimpson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z48298',
					ICD10diagnosislongdescription:
						'Encounter for aftercare following other organ transplant',
					ICD10diagnosisshortdescription:
						'Encounter for aftercare following other organ transplant',
					medications: [
						{
							drugname: 'Benzphetamine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Joachim Ericssen',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Amerigo Ravenhills',
						},
						{
							drugname: 'PreNatal Vitamins Plus',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ingamar Lillee',
						},
						{
							drugname: 'morphine sulfate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Derrik Seatter',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42256P',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of greater tuberosity of unspecified humerus, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Nondisp fx of greater tuberosity of unsp humer, 7thP',
					medications: [
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Alphonso Winfrey',
						},
						{
							drugname: 'Terbinafine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Alene Bindley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Carl Dolton',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lynn Mauser',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan Hydrobromide, Guaifenesin, and Phenylephrine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Jacques Backsal',
						},
						{
							drugname: 'Liquid Wart Remover',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Evan Johanchon',
						},
						{
							drugname:
								'Aluminum Zirconium Tetrachlorohydrex Gly',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Carmen Fremantle',
						},
						{
							drugname: 'Sodium Fluoride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Shirlene Staniland',
						},
						{
							drugname: 'glipizide',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Laney Hayen',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Hally Gopsall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T3993XS',
					ICD10diagnosislongdescription:
						'Poisoning by unspecified nonopioid analgesic, antipyretic and antirheumatic, assault, sequela',
					ICD10diagnosisshortdescription:
						'Poisn by unsp nonopi analgs/antipyr/antirheu, asslt, sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T8551',
					ICD10diagnosislongdescription:
						'Breakdown (mechanical) of gastrointestinal prosthetic devices, implants and grafts',
					ICD10diagnosisshortdescription:
						'Breakdown (mechanical) of gastrointestinal prosth dev/grft',
					medications: [
						{
							drugname: 'Risperidone',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Hilly Pattenden',
						},
						{
							drugname:
								'Brompheniramine maleate, Dextromethorphan HBr, Phenylephrine HCl',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Genevieve Tyer',
						},
						{
							drugname: 'ENALAPRIL MALEATE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Harland Mateja',
						},
						{
							drugname: 'OCTINOXATE, TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Cecily Hartgill',
						},
						{
							drugname: 'Protriptyline Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Dane Tockell',
						},
						{
							drugname: 'COAGULATION FACTOR IX (HUMAN)',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: "Odie L'Hommeau",
						},
						{
							drugname:
								'Anticoagulant Citrate Phosphate Dextrose (CPD) Solution and ADSOL Preservation Solution',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Thorn Hindmore',
						},
						{
							drugname: 'SODIUM MONOFLUOROPHOSPHATE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Zuzana Augie',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'W-7963750724',
					company: 'Beer, Muller and Kemmer',
					frontimage:
						'http://dummyimage.com/211x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/26/2015',
					eligibiltybegan: '04/06/2013',
					eligibiltyexpired: '07/13/1983',
				},
				{
					primary: true,
					active: false,
					membernumber: 'J-6794819689',
					company: 'Kerluke, Luettgen and Frami',
					frontimage:
						'http://dummyimage.com/194x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/227x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/09/1992',
					eligibiltybegan: '07/11/2004',
					eligibiltyexpired: '08/26/1969',
				},
				{
					primary: true,
					active: false,
					membernumber: 'F-0275273711',
					company: 'Medhurst, Labadie and Hills',
					frontimage:
						'http://dummyimage.com/183x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/169x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/10/2007',
					eligibiltybegan: '08/07/1954',
					eligibiltyexpired: '03/05/1953',
				},
				{
					primary: true,
					active: false,
					membernumber: 'O-4340812364',
					company: 'Turcotte Group',
					frontimage:
						'http://dummyimage.com/143x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/159x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/22/2017',
					eligibiltybegan: '05/11/1950',
					eligibiltyexpired: '03/05/1955',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '03934ZX',
					performed_by: 'Vin Scouse',
					date: 2002,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WJ03ZZ',
					performed_by: 'Johna Burling',
					date: 2021,
					additional_information:
						'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque',
				},
				{
					ICD10procedurecode: '0F5D7ZZ',
					performed_by: 'Ardath Pickervance',
					date: 2007,
					additional_information:
						'mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus',
				},
				{
					ICD10procedurecode: '0FPG00Z',
					performed_by: 'Ginni Easterfield',
					date: 1984,
					additional_information:
						'est risus auctor sed tristique in tempus sit amet sem fusce consequat',
				},
				{
					ICD10procedurecode: '0HRDXK4',
					performed_by: 'Moises Antcliffe',
					date: 2020,
					additional_information:
						'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus',
				},
				{
					ICD10procedurecode: '0G9430Z',
					performed_by: 'Silvano Lathe',
					date: 2011,
					additional_information:
						'potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis',
				},
				{
					ICD10procedurecode: '09BN8ZX',
					performed_by: 'Nichols Casterton',
					date: 2004,
					additional_information: null,
				},
				{
					ICD10procedurecode: '08R437Z',
					performed_by: 'Jonathan Pursehouse',
					date: 1968,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0BC50ZZ',
					performed_by: 'Jessalyn Krale',
					date: 1994,
					additional_information: null,
				},
			],
		},
		ssn: '249937597',
	},
	{
		id: 27,
		details: {
			first_name: 'Aloin',
			last_name: 'Szwandt',
			middle_name: 'aszwandtq@aol.com',
			gender: 'Male',
			preffered_name: null,
			address_one: '77250 Karstens Terrace',
			address_two: null,
			city: 'Louisville',
			state: 'KY',
			zip: '40215',
			date_of_birth: '2004-11-17T11:30:45Z',
			contact_methods: [
				{ number: '120-793-3539', notes: null },
				{ number: '231-828-5857', notes: null },
				{
					number: '592-557-0816',
					notes: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				},
				{ number: '936-508-2152', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
			],
			diagnoses: null,
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'F-1402986019',
					company: "Moen-O'Hara",
					frontimage:
						'http://dummyimage.com/243x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/116x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/29/2021',
					eligibiltybegan: '04/13/1951',
					eligibiltyexpired: '07/04/2010',
				},
				{
					primary: false,
					active: true,
					membernumber: 'T-3841944615',
					company: 'Rau Inc',
					frontimage:
						'http://dummyimage.com/151x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/104x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/24/2021',
					eligibiltybegan: '02/07/2016',
					eligibiltyexpired: '11/03/1998',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-6952580161',
					company: 'Wisozk-Mosciski',
					frontimage:
						'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/27/2002',
					eligibiltybegan: '01/18/2007',
					eligibiltyexpired: '04/18/1954',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '05190KY',
					performed_by: 'Rory Videler',
					date: 1993,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'F08Z3DZ',
					performed_by: 'Hilly Robins',
					date: 1956,
					additional_information:
						'vel nisl duis ac nibh fusce lacus purus aliquet at feugiat',
				},
				{
					ICD10procedurecode: '02WJ08Z',
					performed_by: 'Kristi Ellerby',
					date: 2016,
					additional_information:
						'tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec',
				},
				{
					ICD10procedurecode: '0S994ZX',
					performed_by: 'Guendolen Tomsa',
					date: 1979,
					additional_information:
						'vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et',
				},
				{
					ICD10procedurecode: '0MXT4ZZ',
					performed_by: 'Rubin Gatland',
					date: 1965,
					additional_information:
						'quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi',
				},
				{
					ICD10procedurecode: '00BC0ZZ',
					performed_by: 'Panchito Danjoie',
					date: 1996,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'DH091ZZ',
					performed_by: 'Elle De Paoli',
					date: 1976,
					additional_information: null,
				},
			],
		},
		ssn: '312139607',
	},
	{
		id: 28,
		details: {
			first_name: 'Glynn',
			last_name: 'Klaes',
			middle_name: 'gklaesr@prweb.com',
			gender: 'Male',
			preffered_name: null,
			address_one: '58 Packers Court',
			address_two: null,
			city: 'Saint Petersburg',
			state: 'FL',
			zip: '33737',
			date_of_birth: '1969-11-29T00:52:12Z',
			contact_methods: [
				{ number: '958-956-4663', notes: null },
				{ number: '583-329-1687', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
				},
				{
					allergy: 'peanut',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
				{ allergy: null, notes: null },
				{
					allergy: 'animals',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				},
			],
			diagnoses: null,
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'L-7708036348',
					company: 'Bernier-Wilderman',
					frontimage:
						'http://dummyimage.com/134x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/131x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/08/2016',
					eligibiltybegan: '05/03/2012',
					eligibiltyexpired: '09/04/1964',
				},
				{
					primary: true,
					active: true,
					membernumber: 'W-1690473488',
					company: 'Graham, Christiansen and Volkman',
					frontimage:
						'http://dummyimage.com/131x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/116x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/15/1997',
					eligibiltybegan: '03/12/1991',
					eligibiltyexpired: '03/30/2017',
				},
			],
			surgicalhistory: null,
		},
		ssn: '766555023',
	},
	{
		id: 29,
		details: {
			first_name: 'Horten',
			last_name: 'Buckel',
			middle_name: 'hbuckels@redcross.org',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '47099 Beilfuss Parkway',
			address_two: null,
			city: 'Los Angeles',
			state: 'CA',
			zip: '90040',
			date_of_birth: '1975-07-06T07:47:02Z',
			contact_methods: [
				{ number: '986-340-5624', notes: null },
				{
					number: '785-948-9334',
					notes: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
				},
				{
					number: '166-909-5463',
					notes: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M2505',
					ICD10diagnosislongdescription: 'Hemarthrosis, hip',
					ICD10diagnosisshortdescription: 'Hemarthrosis, hip',
					medications: [
						{
							drugname: 'Meclizine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Calv Bartul',
						},
						{
							drugname: 'not applicable',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Arny Flay',
						},
						{
							drugname: 'Famciclovir',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Leelah Cobbold',
						},
						{
							drugname:
								'HYDROCODONE BITARTRATE AND ACETAMINOPHEN',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Aurelia Street',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Hazel Matonin',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S21352A',
					ICD10diagnosislongdescription:
						'Open bite of left front wall of thorax with penetration into thoracic cavity, initial encounter',
					ICD10diagnosisshortdescription:
						'Open bite of l frnt wl of thorax w penet thor cavity, init',
					medications: [
						{
							drugname: 'Acetaminophen, Aspirin, Caffeine',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Stacy Lergan',
						},
						{
							drugname: 'Western Juniper',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Skyler Refford',
						},
						{
							drugname: 'Dipyridamole',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Deane Witt',
						},
						{
							drugname:
								'Benzocaine, Butamben, and Tetracaine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Carlina Raleston',
						},
						{
							drugname:
								'Hydrocodone Bitartrate And Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Filippo Chinnery',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Kassi Semmence',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63054D',
					ICD10diagnosislongdescription:
						'Dislocation of other carpometacarpal joint of right hand, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Dislocation of oth carpometacarpal joint of right hand, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M8548',
					ICD10diagnosislongdescription:
						'Solitary bone cyst, other site',
					ICD10diagnosisshortdescription:
						'Solitary bone cyst, other site',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Constantino Buggy',
						},
						{
							drugname: 'Olive Pollen',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ulrika Powe',
						},
						{
							drugname: 'Salicylic acid',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Bobby Addicott',
						},
						{
							drugname: 'Trandolapril',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Adelaide Shyre',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Garvy MacTavish',
						},
						{
							drugname:
								'Arnica montana, Calcarea fluorica, Calcarea phosphorica, Calendula officinalis, Graphites, Hydrofluoricum acidum, Phytolacca decandra, Sabina, Silicea, Thiosinaminum, Thuja occidentalis',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Alfred Blaxter',
						},
						{
							drugname: 'Triclosan',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Nickola Morecomb',
						},
						{
							drugname: 'famotidine',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Ashton Oak',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z3A29',
					ICD10diagnosislongdescription:
						'29 weeks gestation of pregnancy',
					ICD10diagnosisshortdescription:
						'29 weeks gestation of pregnancy',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T362X6S',
					ICD10diagnosislongdescription:
						'Underdosing of chloramphenicol group, sequela',
					ICD10diagnosisshortdescription:
						'Underdosing of chloramphenicol group, sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'I4581',
					ICD10diagnosislongdescription: 'Long QT syndrome',
					ICD10diagnosisshortdescription: 'Long QT syndrome',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S15109A',
					ICD10diagnosislongdescription:
						'Unspecified injury of unspecified vertebral artery, initial encounter',
					ICD10diagnosisshortdescription:
						'Unsp injury of unspecified vertebral artery, init encntr',
					medications: [
						{
							drugname: 'Quetiapine fumarate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Felipa Gingedale',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Shaina Seint',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Franklyn Costelow',
						},
						{
							drugname: 'Triple Antibiotic',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Rhett Prodrick',
						},
						{
							drugname:
								'avobenzone, homosalate, octisalate, octocrylene',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Nicholas Millwater',
						},
						{
							drugname: 'sulfur',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Tiertza Whitcher',
						},
					],
				},
				{
					ICD10diagnosiscode: 'E136',
					ICD10diagnosislongdescription:
						'Other specified diabetes mellitus with other specified complications',
					ICD10diagnosisshortdescription:
						'Oth diabetes mellitus with other specified complications',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Vicki Fortye',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'B-2874842275',
					company: 'Parisian Inc',
					frontimage:
						'http://dummyimage.com/131x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/156x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/04/1951',
					eligibiltybegan: '01/05/2012',
					eligibiltyexpired: '08/22/2002',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-9677964223',
					company: 'Hickle, McClure and Kuhic',
					frontimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/112x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/29/1953',
					eligibiltybegan: '05/01/1961',
					eligibiltyexpired: '11/19/2003',
				},
				{
					primary: true,
					active: true,
					membernumber: 'P-9778389239',
					company: 'Ankunding, Bailey and Kulas',
					frontimage:
						'http://dummyimage.com/136x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/107x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/25/1956',
					eligibiltybegan: '04/19/1990',
					eligibiltyexpired: '03/09/2010',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-6455792231',
					company: 'Pacocha, Lockman and Stark',
					frontimage:
						'http://dummyimage.com/151x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/229x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/09/1952',
					eligibiltybegan: '12/09/1984',
					eligibiltyexpired: '10/18/1953',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-2165858822',
					company: 'Tromp-Conroy',
					frontimage:
						'http://dummyimage.com/145x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/15/2016',
					eligibiltybegan: '07/07/1971',
					eligibiltyexpired: '10/12/1997',
				},
				{
					primary: false,
					active: false,
					membernumber: 'G-2979498961',
					company: 'Kulas-Senger',
					frontimage:
						'http://dummyimage.com/130x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/214x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/17/1976',
					eligibiltybegan: '11/07/1956',
					eligibiltyexpired: '01/04/2010',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Q-3448027504',
					company: 'Douglas, Turner and Weimann',
					frontimage:
						'http://dummyimage.com/220x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/106x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/01/1976',
					eligibiltybegan: '10/25/2004',
					eligibiltyexpired: '08/16/2005',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Y-7182837810',
					company: "O'Hara-Abbott",
					frontimage:
						'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/239x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/03/1985',
					eligibiltybegan: '08/26/1961',
					eligibiltyexpired: '04/05/2005',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-5639558374',
					company: 'Sporer Inc',
					frontimage:
						'http://dummyimage.com/237x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/04/2008',
					eligibiltybegan: '06/25/1951',
					eligibiltyexpired: '01/04/1964',
				},
			],
			surgicalhistory: null,
		},
		ssn: '696506465',
	},
	{
		id: 30,
		details: {
			first_name: 'Cart',
			last_name: 'Rodgier',
			middle_name: 'crodgiert@etsy.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '8 Wayridge Point',
			address_two: null,
			city: 'New York City',
			state: 'NY',
			zip: '10270',
			date_of_birth: '1983-05-21T21:49:45Z',
			contact_methods: [
				{ number: '731-894-5415', notes: null },
				{
					number: '822-115-2511',
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
				{ number: '884-596-3232', notes: null },
				{ number: '298-556-7377', notes: null },
				{
					number: '135-105-0858',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				},
				{
					allergy: 'medication',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'W2104',
					ICD10diagnosislongdescription: 'Struck by golf ball',
					ICD10diagnosisshortdescription: 'Struck by golf ball',
					medications: [
						{
							drugname: 'Penicillin V Potassium',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Guthrey Aharoni',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92223S',
					ICD10diagnosislongdescription:
						'Displaced fracture of lateral cuneiform of unspecified foot, sequela',
					ICD10diagnosisshortdescription:
						'Disp fx of lateral cuneiform of unspecified foot, sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82246R',
					ICD10diagnosislongdescription:
						'Nondisplaced spiral fracture of shaft of unspecified tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion',
					ICD10diagnosisshortdescription:
						'Nondisp spiral fx shaft of unsp tibia, 7thR',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M80851A',
					ICD10diagnosislongdescription:
						'Other osteoporosis with current pathological fracture, right femur, initial encounter for fracture',
					ICD10diagnosisshortdescription:
						'Oth osteopor w current path fracture, right femur, init',
					medications: [
						{
							drugname: 'Isopropyl Alcohol',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Kimmy Gonthard',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Taddeo Evetts',
						},
						{
							drugname: 'diltiazem hydrochloride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Clare Geering',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Jilleen McDonnell',
						},
						{
							drugname: 'CEFTRIAXONE',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Charity Shute',
						},
						{
							drugname: 'isotretinoin',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Chaunce Chatteris',
						},
						{
							drugname: 'Corn Starch',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Bernadette Farrent',
						},
						{
							drugname: 'CETYLPYRIDINIUM CHLORIDE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ringo Hudel',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Haven Croy',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Dorthea Beale',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52022Q',
					ICD10diagnosislongdescription:
						'Displaced fracture of olecranon process without intraarticular extension of left ulna, subsequent encounter for open fracture type I or II with malunion',
					ICD10diagnosisshortdescription:
						'Disp fx of olecran pro w/o intartic extn l ulna, 7thQ',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Ophelie Magnar',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Marrissa Urry',
						},
						{
							drugname:
								'Dextromethorphan Hydrobromide and Menthol',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Konstance Chelam',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Scarface Adran',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Mag Illem',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Kevon Redmille',
						},
						{
							drugname: 'Benzocaine',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Rasia Campana',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Vincenz Dobrovsky',
						},
						{
							drugname: 'stavudine',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Abraham Hindes',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'P-9749850919',
					company: 'Herzog, Haley and Jakubowski',
					frontimage:
						'http://dummyimage.com/155x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/12/1991',
					eligibiltybegan: '11/01/2018',
					eligibiltyexpired: '05/05/1981',
				},
				{
					primary: false,
					active: false,
					membernumber: 'V-4505008185',
					company: 'Bechtelar-Bergnaum',
					frontimage:
						'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/154x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/09/2018',
					eligibiltybegan: '07/02/1962',
					eligibiltyexpired: '03/20/1958',
				},
				{
					primary: true,
					active: true,
					membernumber: 'P-5238042418',
					company: 'Nienow Group',
					frontimage:
						'http://dummyimage.com/132x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/132x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/28/1953',
					eligibiltybegan: '02/15/1991',
					eligibiltyexpired: '03/02/2022',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Y-5013839865',
					company: 'Rath, Gleason and Leannon',
					frontimage:
						'http://dummyimage.com/241x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/133x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/30/1972',
					eligibiltybegan: '05/12/1985',
					eligibiltyexpired: '05/22/1960',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-6228833753',
					company: 'Hudson Group',
					frontimage:
						'http://dummyimage.com/106x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/14/1958',
					eligibiltybegan: '12/15/1987',
					eligibiltyexpired: '10/14/2006',
				},
				{
					primary: true,
					active: true,
					membernumber: 'A-7958357013',
					company: 'Hoeger-Becker',
					frontimage:
						'http://dummyimage.com/214x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/29/1972',
					eligibiltybegan: '10/11/2012',
					eligibiltyexpired: '01/30/2014',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-1646318883',
					company: 'Ortiz and Sons',
					frontimage:
						'http://dummyimage.com/236x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/224x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/04/1997',
					eligibiltybegan: '10/18/1994',
					eligibiltyexpired: '09/04/2020',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Y-4223215198',
					company: 'Bernier, Blanda and Klocko',
					frontimage:
						'http://dummyimage.com/148x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/04/1995',
					eligibiltybegan: '05/29/2014',
					eligibiltyexpired: '12/29/1951',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '02SR0ZZ',
					performed_by: 'Ashley Boots',
					date: 1952,
					additional_information: null,
				},
				{
					ICD10procedurecode: '04UB37Z',
					performed_by: 'Clem Cassedy',
					date: 2000,
					additional_information: null,
				},
				{
					ICD10procedurecode: '09P880Z',
					performed_by: 'Carlita Plevey',
					date: 2021,
					additional_information: null,
				},
			],
		},
		ssn: '013023283',
	},
	{
		id: 31,
		details: {
			first_name: 'Mateo',
			last_name: 'McLeoid',
			middle_name: 'mmcleoidu@prnewswire.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '683 Surrey Trail',
			address_two: null,
			city: 'Winston Salem',
			state: 'NC',
			zip: '27157',
			date_of_birth: '1967-11-25T09:20:15Z',
			contact_methods: [{ number: '667-276-3212', notes: null }],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'Y37021',
					ICD10diagnosislongdescription:
						'Military operations involving explosion of marine mine, civilian',
					ICD10diagnosisshortdescription:
						'Milt op involving explosion of marine mine, civilian',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S89199A',
					ICD10diagnosislongdescription:
						'Other physeal fracture of lower end of unspecified tibia, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Oth physeal fracture of lower end of unsp tibia, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'F13151',
					ICD10diagnosislongdescription:
						'Sedative, hypnotic or anxiolytic abuse with sedative, hypnotic or anxiolytic-induced psychotic disorder with hallucinations',
					ICD10diagnosisshortdescription:
						'Sedatv/hyp/anxiolytc abuse w psychotic disorder w hallucin',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Nancee Lukock',
						},
						{
							drugname: 'ECBALLIUM ELATERIUM SOLUTION',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Seline Benthall',
						},
						{
							drugname: 'Pistachio Nut',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Dita Dows',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Matias Trent',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Feliks Gillogley',
						},
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate and Octocrylene',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Meier Clapston',
						},
						{
							drugname: 'Norethindrone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Reilly McGlashan',
						},
						{
							drugname: 'Minocycline Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Beret Steele',
						},
						{
							drugname: 'Simvastatin',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Cris Arnaldy',
						},
					],
				},
				{
					ICD10diagnosiscode: 'X141',
					ICD10diagnosislongdescription:
						'Other contact with hot air and other hot gases',
					ICD10diagnosisshortdescription:
						'Other contact with hot air and other hot gases',
					medications: [
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Nerta Machan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V8613XA',
					ICD10diagnosislongdescription:
						'Passenger of dune buggy injured in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Passenger of dune buggy injured in traffic accident, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T8289',
					ICD10diagnosislongdescription:
						'Other specified complication of cardiac and vascular prosthetic devices, implants and grafts',
					ICD10diagnosisshortdescription:
						'Oth complication of cardiac and vascular prosth dev/grft',
					medications: [
						{
							drugname: 'trifluoperazine hydrochloride',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Rickie Load',
						},
						{
							drugname: 'Ondansetron',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Alayne Woods',
						},
						{
							drugname: 'Titanium Dioxide and Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Josie Cayle',
						},
						{
							drugname: 'alcohol',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Quintin Essex',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Olivette Tarbert',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: "Doralia O'Brien",
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Marlin Jaume',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S80211A',
					ICD10diagnosislongdescription:
						'Abrasion, right knee, initial encounter',
					ICD10diagnosisshortdescription:
						'Abrasion, right knee, initial encounter',
					medications: [
						{
							drugname: 'Carvedilol',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Rhetta Pettipher',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Agnese Goeff',
						},
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Sax Rozenzweig',
						},
						{
							drugname: 'Amoxicillin and Clavulanate Potassium',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Sheila MacKee',
						},
					],
				},
				{
					ICD10diagnosiscode: 'A282',
					ICD10diagnosislongdescription:
						'Extraintestinal yersiniosis',
					ICD10diagnosisshortdescription:
						'Extraintestinal yersiniosis',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M0012',
					ICD10diagnosislongdescription:
						'Pneumococcal arthritis, elbow',
					ICD10diagnosisshortdescription:
						'Pneumococcal arthritis, elbow',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Godfree Godsal',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Roshelle Gawn',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'R-4190319604',
					company: 'Graham, Boehm and Emmerich',
					frontimage:
						'http://dummyimage.com/143x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/197x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/10/1987',
					eligibiltybegan: '01/19/2012',
					eligibiltyexpired: '12/21/1980',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-5070256025',
					company: 'Rowe and Sons',
					frontimage:
						'http://dummyimage.com/134x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/209x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/28/2010',
					eligibiltybegan: '05/23/1971',
					eligibiltyexpired: '08/01/2005',
				},
				{
					primary: true,
					active: false,
					membernumber: 'F-4917371727',
					company: 'Monahan Inc',
					frontimage:
						'http://dummyimage.com/208x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/110x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/06/1989',
					eligibiltybegan: '08/06/1979',
					eligibiltyexpired: '05/27/1991',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-4360879800',
					company: 'Bogan-Berge',
					frontimage:
						'http://dummyimage.com/139x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/250x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/18/2018',
					eligibiltybegan: '07/28/1998',
					eligibiltyexpired: '08/20/1971',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-4429443775',
					company: 'Windler-Toy',
					frontimage:
						'http://dummyimage.com/157x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/18/1981',
					eligibiltybegan: '08/12/1957',
					eligibiltyexpired: '03/29/1986',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-6836823557',
					company: 'Schamberger-Pacocha',
					frontimage:
						'http://dummyimage.com/210x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/10/2021',
					eligibiltybegan: '03/17/1997',
					eligibiltyexpired: '06/05/1984',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '02PA0RZ',
					performed_by: 'Spence McCollum',
					date: 1953,
					additional_information:
						'interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue',
				},
				{
					ICD10procedurecode: '031A09F',
					performed_by: 'Kelci Scawton',
					date: 1994,
					additional_information:
						'praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede',
				},
				{
					ICD10procedurecode: '0RJS0ZZ',
					performed_by: 'Alex Moller',
					date: 2008,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0YU947Z',
					performed_by: 'Albertine Reeveley',
					date: 2009,
					additional_information: null,
				},
			],
		},
		ssn: '360009757',
	},
	{
		id: 32,
		details: {
			first_name: 'Tabbitha',
			last_name: 'Olman',
			middle_name: 'tolmanv@nsw.gov.au',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '8014 Pawling Hill',
			address_two: null,
			city: 'New Orleans',
			state: 'LA',
			zip: '70142',
			date_of_birth: '2012-12-09T10:58:14Z',
			contact_methods: [{ number: '510-185-1637', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
				},
				{
					allergy: null,
					notes: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
				},
				{
					allergy: 'animals',
					notes: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				},
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S72034B',
					ICD10diagnosislongdescription:
						'Nondisplaced midcervical fracture of right femur, initial encounter for open fracture type I or II',
					ICD10diagnosisshortdescription:
						'Nondisp midcervical fx right femur, init for opn fx type I/2',
					medications: [
						{
							drugname: 'Hydrocortisone Acetate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Rhys Robey',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S62602S',
					ICD10diagnosislongdescription:
						'Fracture of unspecified phalanx of right middle finger, sequela',
					ICD10diagnosisshortdescription:
						'Fracture of unsp phalanx of right middle finger, sequela',
					medications: [
						{
							drugname:
								'MAGNESIUM PHOSPHATE, DIBASIC TRIHYDRATE, CITRULLUS COLOCYNTHIS FRUIT PULP, BLACK COHOSH, and PULSATILLA VULGARIS',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Reese Cammidge',
						},
						{
							drugname:
								'Cocoa butter, Phenylephrine HCl, Shark liver oil',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Kat McAughtry',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Dulcea Onge',
						},
						{
							drugname: 'White Oak',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Angeli Sowray',
						},
						{
							drugname: 'ZINC OXIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Durant Sabberton',
						},
						{
							drugname: 'Lobelia Quercus',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Teodoor Folomkin',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T863',
					ICD10diagnosislongdescription:
						'Complications of heart-lung transplant',
					ICD10diagnosisshortdescription:
						'Complications of heart-lung transplant',
					medications: [
						{
							drugname: 'PredniSONE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Brooke Benam',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Tove Sheircliffe',
						},
						{
							drugname: 'Minoxidil',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Finley Christophe',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Audra Weedall',
						},
						{
							drugname: 'Alendronate Sodium',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Tedman Toffolo',
						},
						{
							drugname: 'Ciprofloxacin',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Nicky Salterne',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Stephen Brim',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Sterne Bestman',
						},
						{
							drugname: 'Castor Oil',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Casar Titmarsh',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Y37191D',
					ICD10diagnosislongdescription:
						'Military operations involving other destruction of aircraft, civilian, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Milt op involving oth dest arcrft, civilian, subs',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Q-4581159712',
					company: 'Roob-Kuhlman',
					frontimage:
						'http://dummyimage.com/141x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/164x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/19/1970',
					eligibiltybegan: '05/07/2022',
					eligibiltyexpired: '07/29/2021',
				},
				{
					primary: true,
					active: true,
					membernumber: 'W-7664674903',
					company: 'Runte LLC',
					frontimage:
						'http://dummyimage.com/129x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/199x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/06/2003',
					eligibiltybegan: '08/08/1988',
					eligibiltyexpired: '01/17/1951',
				},
				{
					primary: true,
					active: true,
					membernumber: 'E-2269388777',
					company: 'Jacobson-Kassulke',
					frontimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/197x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/15/2020',
					eligibiltybegan: '03/10/1990',
					eligibiltyexpired: '11/04/1972',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-1481646312',
					company: 'VonRueden-Kuvalis',
					frontimage:
						'http://dummyimage.com/250x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/196x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/09/1953',
					eligibiltybegan: '12/28/1952',
					eligibiltyexpired: '10/24/2017',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-5986808027',
					company: 'Zemlak-Bergstrom',
					frontimage:
						'http://dummyimage.com/117x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/26/1981',
					eligibiltybegan: '01/03/1957',
					eligibiltyexpired: '11/14/2008',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-3189747458',
					company: 'Wintheiser, Zieme and Herzog',
					frontimage:
						'http://dummyimage.com/250x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/231x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/18/1960',
					eligibiltybegan: '02/29/1992',
					eligibiltyexpired: '12/03/2019',
				},
				{
					primary: true,
					active: true,
					membernumber: 'V-5615218190',
					company: 'Crooks-Ritchie',
					frontimage:
						'http://dummyimage.com/228x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/23/1953',
					eligibiltybegan: '11/15/1967',
					eligibiltyexpired: '12/27/2015',
				},
				{
					primary: true,
					active: false,
					membernumber: 'F-5402078354',
					company: 'Hermiston and Sons',
					frontimage:
						'http://dummyimage.com/184x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/218x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/05/2007',
					eligibiltybegan: '04/01/1985',
					eligibiltyexpired: '10/05/1966',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-1326983609',
					company: 'Anderson, Halvorson and Ziemann',
					frontimage:
						'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/185x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/11/2012',
					eligibiltybegan: '11/12/1995',
					eligibiltyexpired: '07/10/1964',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0RP63JZ',
					performed_by: 'Ivan Maynard',
					date: 2016,
					additional_information:
						'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis',
				},
				{
					ICD10procedurecode: '0Y6S0Z0',
					performed_by: 'Jamil Heditch',
					date: 1966,
					additional_information: null,
				},
				{
					ICD10procedurecode: '03950ZX',
					performed_by: 'Johnathan Bowry',
					date: 1958,
					additional_information:
						'varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi',
				},
				{
					ICD10procedurecode: '0JWT32Z',
					performed_by: 'Louie Kensit',
					date: 1961,
					additional_information:
						'amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper',
				},
			],
		},
		ssn: '082191157',
	},
	{
		id: 33,
		details: {
			first_name: 'Malvin',
			last_name: 'Bernaert',
			middle_name: 'mbernaertw@amazonaws.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '38 Dryden Street',
			address_two: null,
			city: 'Fullerton',
			state: 'CA',
			zip: '92640',
			date_of_birth: '1981-03-28T03:54:30Z',
			contact_methods: [
				{
					number: '599-222-9335',
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
				},
				{ number: '414-253-2118', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'K358',
					ICD10diagnosislongdescription:
						'Other and unspecified acute appendicitis',
					ICD10diagnosisshortdescription:
						'Other and unspecified acute appendicitis',
					medications: [
						{
							drugname: 'English Walnut Pollen',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Cherianne Calken',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S8490XS',
					ICD10diagnosislongdescription:
						'Injury of unspecified nerve at lower leg level, unspecified leg, sequela',
					ICD10diagnosisshortdescription:
						'Injury of unsp nerve at lower leg level, unsp leg, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Loree Jakobssen',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Gianina Breewood',
						},
						{
							drugname:
								'Aluminum Zirconium Tetrachlorohydrex GLY',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Chalmers Dyas',
						},
						{
							drugname: 'Risperidone',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Jordain Sisey',
						},
						{
							drugname: 'Thuja Occidentalis',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Rhett Garlicke',
						},
						{
							drugname: 'Warfarin Sodium',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Rheba Skydall',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Wash Garbert',
						},
						{
							drugname: 'Acetaminophen, Aspirin and caffeine',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Bartolomeo Shields',
						},
						{
							drugname: 'Chicken Meat',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Wynny Wallen',
						},
					],
				},
				{
					ICD10diagnosiscode: 'F1026',
					ICD10diagnosislongdescription:
						'Alcohol dependence with alcohol-induced persisting amnestic disorder',
					ICD10diagnosisshortdescription:
						'Alcohol depend w alcoh-induce persisting amnestic disorder',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Erinna Bielfelt',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Diahann Jaye',
						},
						{
							drugname: 'Entacapone',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Raymund Matthewman',
						},
						{
							drugname: 'Etodolac',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Toby Harrell',
						},
						{
							drugname:
								'Calcarea carbonica, Calcarea Fluorica, Calcarea phosphorica, Hekla lava, Hydrofluoricum acidum, Magnesia phosphorica Rhus toxicodendron, Ruta graveolens, Silicea, Symphytum officinale',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Lennard Rock',
						},
						{
							drugname: 'Etodolac',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Bridgette Alennikov',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T466X1D',
					ICD10diagnosislongdescription:
						'Poisoning by antihyperlipidemic and antiarteriosclerotic drugs, accidental (unintentional), subsequent encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by antihyperlip and antiarterio drugs, acc, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V705XXD',
					ICD10diagnosislongdescription:
						'Driver of bus injured in collision with pedestrian or animal in traffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Driver of bus injured in collision w ped/anml in traf, subs',
					medications: [
						{
							drugname: 'Ziprasidone Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Indira Raynard',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Merline Passby',
						},
						{
							drugname: 'Glyburide',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Kendra Doblin',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z375',
					ICD10diagnosislongdescription:
						'Other multiple births, all liveborn',
					ICD10diagnosisshortdescription:
						'Other multiple births, all liveborn',
					medications: [
						{
							drugname: 'prednisolone acetate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Roscoe Healy',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Arleta Faulks',
						},
						{
							drugname: 'Phentermine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Nealy Ivanets',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Maison Conway',
						},
						{
							drugname: 'Doxylamine succinate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Liliane Rawsthorn',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Gottfried Riordan',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Rustin Ziems',
						},
						{
							drugname: 'Famciclovir',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Indira Budden',
						},
						{
							drugname: 'Diphenhydramine HCl',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Daloris Park',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sisely Jachimiak',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H958',
					ICD10diagnosislongdescription:
						'Other intraoperative and postprocedural complications and disorders of the ear and mastoid process, not elsewhere classified',
					ICD10diagnosisshortdescription:
						'Oth intraop and postproc comp and disord of ear/mastd, NEC',
					medications: [
						{
							drugname:
								'Argentium nitricum, Kali carbonicum, Glycirrhiza glabra',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Christabella Goater',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V00131A',
					ICD10diagnosislongdescription:
						'Fall from skateboard, initial encounter',
					ICD10diagnosisshortdescription:
						'Fall from skateboard, initial encounter',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Cord Cheine',
						},
						{
							drugname: 'Glycerin, Dimethicone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Matthieu Finder',
						},
						{
							drugname: 'CAMPHOR',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Kennan Pirelli',
						},
						{
							drugname:
								'Homosalate, Octinoxate, Octocrylene, Zinc Oxide',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Cristiano De Lacey',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Christiana Dandie',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Kari Wyd',
						},
						{
							drugname: 'Tag Alder',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Anthiathia Goldes',
						},
						{
							drugname: 'estradiol',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Tersina Gallahue',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Artemas Canty',
						},
						{
							drugname:
								'Pulex irritans, Tarentula cubensis, Apis mel., Aranea diadema, Arnica, Formica, Grindelia, Hypericum, Lachesis, Latrodectus mactans, Ledum, Lycopodium, Mezereum, Rhus toxicodendron, Tarentula hispana, Theridion, Vespa crabro, Calendula, Echinacea, Hamamelis, Solidago',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Fredericka Gonnelly',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'A-5586816120',
					company: 'Kulas-Rutherford',
					frontimage:
						'http://dummyimage.com/133x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/25/1992',
					eligibiltybegan: '07/15/1958',
					eligibiltyexpired: '04/21/1978',
				},
				{
					primary: true,
					active: false,
					membernumber: 'X-6574966396',
					company: 'Emard-Considine',
					frontimage:
						'http://dummyimage.com/166x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/138x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/20/1951',
					eligibiltybegan: '03/26/1980',
					eligibiltyexpired: '07/08/1998',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '08SL3ZZ',
					performed_by: 'Elset Breed',
					date: 1993,
					additional_information: null,
				},
				{
					ICD10procedurecode: '01NL4ZZ',
					performed_by: 'Janenna de Merida',
					date: 1980,
					additional_information: null,
				},
				{
					ICD10procedurecode: '04SJ3ZZ',
					performed_by: 'Minnaminnie Gavrielli',
					date: 1960,
					additional_information:
						'in eleifend quam a odio in hac habitasse platea dictumst',
				},
				{
					ICD10procedurecode: '04UN0KZ',
					performed_by: 'Marin Laraway',
					date: 1980,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0NRX4JZ',
					performed_by: 'Gerianne Skim',
					date: 2020,
					additional_information:
						'fermentum donec ut mauris eget massa tempor convallis nulla neque libero',
				},
				{
					ICD10procedurecode: '0NUG3JZ',
					performed_by: 'Taddeusz Goulbourne',
					date: 1975,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06B00ZX',
					performed_by: 'Fidelia Bortolozzi',
					date: 2019,
					additional_information: null,
				},
				{
					ICD10procedurecode: '099B3ZX',
					performed_by: 'Euphemia Wolfenden',
					date: 1989,
					additional_information:
						'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu',
				},
			],
		},
		ssn: '322562285',
	},
	{
		id: 34,
		details: {
			first_name: 'Barth',
			last_name: 'Obee',
			middle_name: 'bobeex@webmd.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '46359 Elgar Way',
			address_two: null,
			city: 'San Antonio',
			state: 'TX',
			zip: '78291',
			date_of_birth: '1957-06-11T05:57:37Z',
			contact_methods: [
				{
					number: '326-658-1740',
					notes: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S53016',
					ICD10diagnosislongdescription:
						'Anterior dislocation of unspecified radial head',
					ICD10diagnosisshortdescription:
						'Anterior dislocation of unspecified radial head',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'D4622',
					ICD10diagnosislongdescription:
						'Refractory anemia with excess of blasts 2',
					ICD10diagnosisshortdescription:
						'Refractory anemia with excess of blasts 2',
					medications: [
						{
							drugname: 'Nitrogen',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Hyacinthie Crenshaw',
						},
						{
							drugname:
								'Avobenzone Homosalate Octisalate Octocrylene Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Johannah Ourtic',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Yves Clail',
						},
						{
							drugname: 'Permethrin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Heda Yitzovitz',
						},
						{
							drugname: 'Divalproex Sodium',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Elianora Silver',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Rodie Moffet',
						},
						{
							drugname: 'Quetiapine Fumarate',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Augustin Glidder',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'E-8992600705',
					company: 'Kunde and Sons',
					frontimage:
						'http://dummyimage.com/222x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/27/1971',
					eligibiltybegan: '02/23/2004',
					eligibiltyexpired: '11/16/1950',
				},
				{
					primary: true,
					active: false,
					membernumber: 'J-6745940407',
					company: 'Johns, Schmitt and Crona',
					frontimage:
						'http://dummyimage.com/171x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/115x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/14/2003',
					eligibiltybegan: '08/13/1970',
					eligibiltyexpired: '02/19/1969',
				},
				{
					primary: false,
					active: false,
					membernumber: 'D-9110098399',
					company: 'Runolfsson Inc',
					frontimage:
						'http://dummyimage.com/177x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/218x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/20/2002',
					eligibiltybegan: '02/18/1981',
					eligibiltyexpired: '01/09/2010',
				},
				{
					primary: true,
					active: true,
					membernumber: 'I-5354950075',
					company: 'Stoltenberg LLC',
					frontimage:
						'http://dummyimage.com/123x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/147x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/07/2013',
					eligibiltybegan: '03/17/1951',
					eligibiltyexpired: '02/10/1959',
				},
				{
					primary: false,
					active: true,
					membernumber: 'U-7698156818',
					company: 'Donnelly, Sipes and Denesik',
					frontimage:
						'http://dummyimage.com/127x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/154x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/29/2014',
					eligibiltybegan: '09/22/2000',
					eligibiltyexpired: '07/27/1958',
				},
				{
					primary: true,
					active: true,
					membernumber: 'W-7540492961',
					company: 'Langworth and Sons',
					frontimage:
						'http://dummyimage.com/164x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/132x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/04/1958',
					eligibiltybegan: '07/18/1996',
					eligibiltyexpired: '01/28/1989',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-5425226216',
					company: 'Huel-Rau',
					frontimage:
						'http://dummyimage.com/236x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/103x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '03/20/1978',
					eligibiltybegan: '04/26/1952',
					eligibiltyexpired: '06/16/2006',
				},
				{
					primary: false,
					active: true,
					membernumber: 'S-8764376712',
					company: "D'Amore Group",
					frontimage:
						'http://dummyimage.com/135x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/16/1990',
					eligibiltybegan: '03/31/1962',
					eligibiltyexpired: '12/19/1968',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0RWN45Z',
					performed_by: 'Peggi Gath',
					date: 2021,
					additional_information:
						'lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
				},
				{
					ICD10procedurecode: '0GNB0ZZ',
					performed_by: 'Remington Lush',
					date: 2022,
					additional_information:
						'vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel',
				},
				{
					ICD10procedurecode: '0WY20Z1',
					performed_by: 'Lorilee Kelberer',
					date: 1991,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0U758DZ',
					performed_by: 'Gilbertine Popplewell',
					date: 1964,
					additional_information:
						'nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo',
				},
				{
					ICD10procedurecode: '0PSL06Z',
					performed_by: 'Moyra Dilkes',
					date: 2009,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DFB0ZZ',
					performed_by: 'Saw Paulusch',
					date: 1952,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SBG0ZZ',
					performed_by: 'Rania List',
					date: 1950,
					additional_information:
						'eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed',
				},
				{
					ICD10procedurecode: '0SGF0KZ',
					performed_by: 'Simeon Drillingcourt',
					date: 2017,
					additional_information: null,
				},
				{
					ICD10procedurecode: '3E0Q7SF',
					performed_by: 'Ardys Giddens',
					date: 1995,
					additional_information:
						'sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis',
				},
				{
					ICD10procedurecode: '0CBN3ZZ',
					performed_by: 'Wood Legerton',
					date: 2022,
					additional_information:
						'magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus',
				},
			],
		},
		ssn: '342375788',
	},
	{
		id: 35,
		details: {
			first_name: 'Jedd',
			last_name: 'Penny',
			middle_name: 'jpennyy@wiley.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '318 Sloan Terrace',
			address_two: null,
			city: 'Miami',
			state: 'FL',
			zip: '33233',
			date_of_birth: '1995-08-03T21:44:07Z',
			contact_methods: [
				{
					number: '105-454-0848',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
				{ number: '456-429-8357', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'O690XX5',
					ICD10diagnosislongdescription:
						'Labor and delivery complicated by prolapse of cord, fetus 5',
					ICD10diagnosisshortdescription:
						'Labor and delivery complicated by prolapse of cord, fetus 5',
					medications: [
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Lucretia Skipping',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Giselbert Clendinning',
						},
						{
							drugname:
								'anti-interleukin-1.alpha. immunoglobulin g rabbit, ascorbic acid, metenkefalin, ersofermin, bos taurus cartilage, sus scrofa cartilage, pork collagen, bos taurus red blood cell, sus scrofa red blood cell, interleukin-3, interleukin-3, beef liver, pork liver, beef, pork, bos taurus tendon, sus scrofa tendon, cetermin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Israel Brigham',
						},
						{
							drugname: 'Pecan Nut',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Miguela Parzizek',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Culver Rapinett',
						},
						{
							drugname: 'RIFAXIMIN',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Birgit Prin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Flint Cowpe',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Fairfax Piken',
						},
						{
							drugname: 'Daily Moistruizing',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Rebbecca Spinks',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S06812A',
					ICD10diagnosislongdescription:
						'Injury of right internal carotid artery, intracranial portion, not elsewhere classified with loss of consciousness of 31 minutes to 59 minutes, initial encounter',
					ICD10diagnosisshortdescription:
						'Injury of r int carotid, intcr w LOC of 31-59 min, init',
					medications: [
						{
							drugname: 'Haloperidol',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Coralie Wildey',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Freedman Runcieman',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Khalil Woodrooffe',
						},
						{
							drugname: 'Mirtazapine',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Vernen Kedward',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M9192',
					ICD10diagnosislongdescription:
						'Juvenile osteochondrosis of hip and pelvis, unspecified, left leg',
					ICD10diagnosisshortdescription:
						'Juvenile osteochondrosis of hip and pelvis, unsp, left leg',
					medications: [
						{
							drugname:
								'Octinoxate, Octisalate, and Titanium Dioxide',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Vladimir Nottram',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Carlos Escalera',
						},
						{
							drugname: 'GLYCERIN',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Agosto Malster',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Lira Sharratt',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Seward Bricksey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Law Ferri',
						},
						{
							drugname: 'ALUMINUM CHLOROHYDRATE',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Renata Coldtart',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Lorena Hardinge',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Collette Gladwin',
						},
						{
							drugname: 'Doxazosin',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Kristen Exelby',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L02224',
					ICD10diagnosislongdescription: 'Furuncle of groin',
					ICD10diagnosisshortdescription: 'Furuncle of groin',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'N3091',
					ICD10diagnosislongdescription:
						'Cystitis, unspecified with hematuria',
					ICD10diagnosisshortdescription:
						'Cystitis, unspecified with hematuria',
					medications: [
						{
							drugname: 'apium graveolens, arnica montana',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Bree Bodker',
						},
						{
							drugname:
								'homosalate, octisalate, avobenzone, octocrylene',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Reagan Bilton',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Cobby Tumayan',
						},
						{
							drugname:
								'Dextromethorphan Hydrobromide, Guaifenesin',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Gael Steely',
						},
						{
							drugname:
								'Activated Charcoal, Copper, Drosera Rotundifolia, Ipecac, Lachesis Muta Venom, Lobelia Inflata, Phosphorus, Pulsatilla Vulgaris, Rumex Crispus Root, Spongia Officinalis Skeleton, Roasted',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Giusto Hully',
						},
						{
							drugname:
								'Fucus Vesiculosus, Spongia Tosta, Glandula Suprarenalis Suis, Pituitaria Glandula (Suis), Thyroidinum (Suis), Bromium, Calcarea Carbonica',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Yettie Kubiczek',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'K-3171650934',
					company: 'Hayes-Padberg',
					frontimage:
						'http://dummyimage.com/219x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/248x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/25/2021',
					eligibiltybegan: '02/13/2018',
					eligibiltyexpired: '05/14/1998',
				},
				{
					primary: false,
					active: false,
					membernumber: 'U-2091194273',
					company: 'Jacobson-Heathcote',
					frontimage:
						'http://dummyimage.com/133x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/199x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/16/1959',
					eligibiltybegan: '05/21/1968',
					eligibiltyexpired: '02/20/1986',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Y-8201827003',
					company: 'Armstrong-Rath',
					frontimage:
						'http://dummyimage.com/223x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/03/1953',
					eligibiltybegan: '03/22/1951',
					eligibiltyexpired: '08/11/2015',
				},
				{
					primary: false,
					active: true,
					membernumber: 'G-6714223526',
					company: 'Predovic, Trantow and Howell',
					frontimage:
						'http://dummyimage.com/136x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/244x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/16/1986',
					eligibiltybegan: '05/28/1973',
					eligibiltyexpired: '09/14/1987',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-0270726335',
					company: 'Franecki-Nienow',
					frontimage:
						'http://dummyimage.com/215x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/235x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/06/1969',
					eligibiltybegan: '11/20/1962',
					eligibiltyexpired: '01/14/1989',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'F08Z1UZ',
					performed_by: 'Diane-marie Corless',
					date: 1954,
					additional_information:
						'in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl',
				},
				{
					ICD10procedurecode: '0B770ZZ',
					performed_by: 'Noni Meecher',
					date: 1989,
					additional_information: null,
				},
				{
					ICD10procedurecode: '07LK3DZ',
					performed_by: 'Reggis Luther',
					date: 1954,
					additional_information: null,
				},
				{
					ICD10procedurecode: '03N34ZZ',
					performed_by: 'Ericka Gravestone',
					date: 2000,
					additional_information:
						'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at',
				},
				{
					ICD10procedurecode: 'B51MYZZ',
					performed_by: 'Cathee Gibling',
					date: 1988,
					additional_information:
						'ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
				},
				{
					ICD10procedurecode: '0DL50CZ',
					performed_by: 'Natala Godmar',
					date: 1951,
					additional_information:
						'elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
				},
			],
		},
		ssn: '906043470',
	},
	{
		id: 36,
		details: {
			first_name: 'Patty',
			last_name: 'Boules',
			middle_name: 'pboulesz@indiatimes.com',
			gender: 'Polygender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '68354 Brickson Park Street',
			address_two: null,
			city: 'Minneapolis',
			state: 'MN',
			zip: '55402',
			date_of_birth: '2006-08-09T23:13:43Z',
			contact_methods: [
				{
					number: '277-789-4090',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S22030',
					ICD10diagnosislongdescription:
						'Wedge compression fracture of third thoracic vertebra',
					ICD10diagnosisshortdescription:
						'Wedge compression fracture of third thoracic vertebra',
					medications: [
						{
							drugname: 'NITROGEN',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Hebert Larkkem',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Torrin Eastlake',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M775',
					ICD10diagnosislongdescription: 'Other enthesopathy of foot',
					ICD10diagnosisshortdescription:
						'Other enthesopathy of foot',
					medications: [
						{
							drugname: 'Warfarin Sodium',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Boonie Jerson',
						},
						{
							drugname: 'Cefadroxil',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Cody Smithson',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Amberly Wycliff',
						},
						{
							drugname:
								'ARSENIC TRIOXIDE - CALCIUM SULFATE ANHYDROUS - SODIUM PHOSPHATE, DIBASIC ANHYDROUS - SILICON DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Adolph Geibel',
						},
						{
							drugname:
								'Cochlearia officinalis, Echinacea angustifolia, Hydrastis canadensis, Lomatium, Tabebuia impetiginosa, Propolis, Glandula suprarenalis, Thymus, Aranea diadema,',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Farah Franz-Schoninger',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Wright Kingman',
						},
						{
							drugname: 'Aspirin',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Franni Davydoch',
						},
						{
							drugname: 'Warfarin Sodium',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Suzie Oakhill',
						},
						{
							drugname:
								'ACONITUM NAPELLUS and AMMONIUM BROMIDE and CITRULLUS COLOCYNTHIS FRUIT PULP and ATROPINE SULFATE and GELSEMIUM SEMPERVIRENS ROOT and MAGNESIUM PHOSPHATE, DIBASIC TRIHYDRATE and VERATRUM ALBUM ROOT and',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Naomi Pearde',
						},
						{
							drugname: 'METOPROLOL TARTRATE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Neilla Cardinal',
						},
					],
				},
				{
					ICD10diagnosiscode: 'X810XXS',
					ICD10diagnosislongdescription:
						'Intentional self-harm by jumping or lying in front of motor vehicle, sequela',
					ICD10diagnosisshortdescription:
						'Self-harm by jumping or lying in front of mtr veh, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Gustavus De Coursey',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V4341',
					ICD10diagnosislongdescription:
						'Person boarding or alighting a car injured in collision with sport utility vehicle',
					ICD10diagnosisshortdescription:
						'Prsn brd/alit a car injured in collision w SUV',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Maegan Fennelow',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Dedra Ryce',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Kerwinn Culmer',
						},
						{
							drugname: 'Acacia',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Vivyan Calwell',
						},
						{
							drugname: 'Venlafaxine',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Brande Terrey',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H3411',
					ICD10diagnosislongdescription:
						'Central retinal artery occlusion, right eye',
					ICD10diagnosisshortdescription:
						'Central retinal artery occlusion, right eye',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T25412A',
					ICD10diagnosislongdescription:
						'Corrosion of unspecified degree of left ankle, initial encounter',
					ICD10diagnosisshortdescription:
						'Corrosion of unspecified degree of left ankle, init encntr',
					medications: [
						{
							drugname: 'Diphenhydramine HCl',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Vanni Nehl',
						},
						{
							drugname: 'OXYGEN, NITROGEN, CARBON DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Korney Dilliston',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V732',
					ICD10diagnosislongdescription:
						'Person on outside of bus injured in collision with car, pick-up truck or van in nontraffic accident',
					ICD10diagnosisshortdescription:
						'Person outside bus injured pick-up truck, pk-up/van nontraf',
					medications: [
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Lloyd MacCorley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ethan Trighton',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan HBr, Doxylamine succinate, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Mayor Morrel',
						},
						{
							drugname: 'METFORMIN HYDROCHLORIDE, TYROSINE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Morgun Weagener',
						},
						{
							drugname:
								'ANTIMONY POTASSIUM TARTRATE,ATROPA BELLADONNA,BRYONIA ALBA ROOT,ANEMONE AMERICANA,HYOSCYAMUS NIGER,IPECAC,LOBELIA INFLATA,HUMAN SPUTUM, BORDETELLA PERTUSSIS INFECTED, and LOBARIA PULMONARIA',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Anya Radki',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Quinn Martyns',
						},
						{
							drugname: 'Nateglinide',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Ivor Dyte',
						},
						{
							drugname: 'carbinoxamine maleate',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Nikolai McTrustam',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S24143A',
					ICD10diagnosislongdescription:
						'Brown-Sequard syndrome at T7-T10 level of thoracic spinal cord, initial encounter',
					ICD10diagnosisshortdescription:
						'Brown-Sequard syndrome at T7-T10, init',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'Z-3464038873',
					company: "Green, Murazik and O'Keefe",
					frontimage:
						'http://dummyimage.com/136x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/26/2006',
					eligibiltybegan: '04/15/1980',
					eligibiltyexpired: '09/08/1988',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Z-1518884885',
					company: 'Koelpin-McLaughlin',
					frontimage:
						'http://dummyimage.com/207x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/127x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/26/1966',
					eligibiltybegan: '11/30/1970',
					eligibiltyexpired: '06/17/2007',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-9977258082',
					company: 'Torp LLC',
					frontimage:
						'http://dummyimage.com/174x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/14/2003',
					eligibiltybegan: '10/19/1981',
					eligibiltyexpired: '05/25/2017',
				},
				{
					primary: false,
					active: false,
					membernumber: 'G-2752618983',
					company: 'White-Watsica',
					frontimage:
						'http://dummyimage.com/165x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/125x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/01/1954',
					eligibiltybegan: '12/23/1981',
					eligibiltyexpired: '01/10/1967',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-5170919548',
					company: 'Kertzmann-Dickens',
					frontimage:
						'http://dummyimage.com/156x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/213x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '03/13/1962',
					eligibiltybegan: '07/13/1950',
					eligibiltyexpired: '07/26/1990',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-1196119278',
					company: 'Kulas-Dooley',
					frontimage:
						'http://dummyimage.com/225x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/219x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/21/1968',
					eligibiltybegan: '09/10/2020',
					eligibiltyexpired: '05/12/1971',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '7W08X1Z',
					performed_by: 'Valentina Slafford',
					date: 1950,
					additional_information:
						'massa tempor convallis nulla neque libero convallis eget eleifend luctus',
				},
			],
		},
		ssn: '076446491',
	},
	{
		id: 37,
		details: {
			first_name: 'Giavani',
			last_name: 'Ricardot',
			middle_name: 'gricardot10@dell.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '63 Susan Lane',
			address_two: null,
			city: 'Manassas',
			state: 'VA',
			zip: '22111',
			date_of_birth: '1968-02-13T19:12:06Z',
			contact_methods: [
				{ number: '291-429-4932', notes: null },
				{ number: '608-814-9876', notes: null },
				{ number: '434-348-1582', notes: null },
				{ number: '818-398-8893', notes: null },
				{ number: '563-384-8123', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'B661',
					ICD10diagnosislongdescription: 'Clonorchiasis',
					ICD10diagnosisshortdescription: 'Clonorchiasis',
					medications: [
						{
							drugname: 'Soybean',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Murdock Sandford',
						},
						{
							drugname:
								'Amlodipine besylate and Atorvastatin calcium',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Dore Willett',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Lonnard Challener',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Alexia Ferebee',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'V-0014028892',
					company: 'Grimes-Marks',
					frontimage:
						'http://dummyimage.com/222x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/126x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/26/1968',
					eligibiltybegan: '10/25/1985',
					eligibiltyexpired: '03/21/1995',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-6409880692',
					company: 'Kertzmann, Stiedemann and Moore',
					frontimage:
						'http://dummyimage.com/234x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/232x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/14/1998',
					eligibiltybegan: '07/03/1958',
					eligibiltyexpired: '05/03/1974',
				},
				{
					primary: false,
					active: true,
					membernumber: 'T-9453553957',
					company: "Fadel-O'Conner",
					frontimage:
						'http://dummyimage.com/204x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/109x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/01/1962',
					eligibiltybegan: '09/16/1980',
					eligibiltyexpired: '04/19/1998',
				},
				{
					primary: true,
					active: true,
					membernumber: 'U-7778729575',
					company: 'Gaylord Group',
					frontimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/195x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/28/2020',
					eligibiltybegan: '10/03/2002',
					eligibiltyexpired: '10/09/1990',
				},
				{
					primary: true,
					active: false,
					membernumber: 'E-5274792852',
					company: 'Fadel-Champlin',
					frontimage:
						'http://dummyimage.com/211x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/131x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/31/2021',
					eligibiltybegan: '06/13/2003',
					eligibiltyexpired: '06/13/2020',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-5435794719',
					company: 'Cummings, Lehner and Mills',
					frontimage:
						'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/08/1951',
					eligibiltybegan: '07/19/1995',
					eligibiltyexpired: '09/21/2001',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-5182526082',
					company: 'Schimmel, Funk and Nicolas',
					frontimage:
						'http://dummyimage.com/241x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/241x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/24/1983',
					eligibiltybegan: '03/12/1954',
					eligibiltyexpired: '12/04/1955',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0Q903ZX',
					performed_by: 'Robinet Santo',
					date: 1956,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DUV4KZ',
					performed_by: 'Fernanda Pilbury',
					date: 1978,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0LRG47Z',
					performed_by: 'Cynthia Tew',
					date: 2004,
					additional_information:
						'imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce',
				},
				{
					ICD10procedurecode: 'F06Z9PZ',
					performed_by: 'Raymund Kilfeather',
					date: 2007,
					additional_information:
						'a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet',
				},
				{
					ICD10procedurecode: '05H03DZ',
					performed_by: 'Kathye Durham',
					date: 1957,
					additional_information:
						'aenean sit amet justo morbi ut odio cras mi pede malesuada in',
				},
				{
					ICD10procedurecode: '0F9C8ZX',
					performed_by: 'Sterne Wansbury',
					date: 1975,
					additional_information:
						'ipsum integer a nibh in quis justo maecenas rhoncus aliquam',
				},
			],
		},
		ssn: '089050650',
	},
	{
		id: 38,
		details: {
			first_name: 'Annalee',
			last_name: 'Fallows',
			middle_name: 'afallows11@census.gov',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '6 South Plaza',
			address_two: null,
			city: 'El Paso',
			state: 'TX',
			zip: '79928',
			date_of_birth: '2014-10-04T15:32:11Z',
			contact_methods: [
				{ number: '391-929-7698', notes: null },
				{ number: '339-118-5256', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'H04143',
					ICD10diagnosislongdescription:
						'Primary lacrimal gland atrophy, bilateral lacrimal glands',
					ICD10diagnosisshortdescription:
						'Primary lacrimal gland atrophy, bilateral lacrimal glands',
					medications: [
						{
							drugname: 'ruxolitinib',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Mel Stenhouse',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Mallorie De Vaan',
						},
						{
							drugname: 'Triclosan',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Ragnar Le feuvre',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Frederico McGuiness',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Rosy Petchell',
						},
						{
							drugname: 'Tolnaftate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: "Cathee O'Shields",
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Rakel MacMarcuis',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Cleopatra Stanfield',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H44533',
					ICD10diagnosislongdescription: 'Leucocoria, bilateral',
					ICD10diagnosisshortdescription: 'Leucocoria, bilateral',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T620X2',
					ICD10diagnosislongdescription:
						'Toxic effect of ingested mushrooms, intentional self-harm',
					ICD10diagnosisshortdescription:
						'Toxic effect of ingested mushrooms, intentional self-harm',
					medications: [
						{
							drugname: 'Paroxetine',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Dosi Lovatt',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Morly Matonin',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Wilone Ferrucci',
						},
						{
							drugname: 'Cetirizine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Andrus Alvarado',
						},
						{
							drugname: 'Brewers Yeast',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Kathlin Rous',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Tabbitha Casperri',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: "Dehlia O'Dunneen",
						},
						{
							drugname: 'METFORMIN HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Baron Campo',
						},
						{
							drugname: 'Water',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Clem Juza',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Simmonds Sollner',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S49029K',
					ICD10diagnosislongdescription:
						'Salter-Harris Type II physeal fracture of upper end of humerus, unspecified arm, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Sltr-haris Type II physl fx upr end humer, unsp arm, 7thK',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Q105',
					ICD10diagnosislongdescription:
						'Congenital stenosis and stricture of lacrimal duct',
					ICD10diagnosisshortdescription:
						'Congenital stenosis and stricture of lacrimal duct',
					medications: [
						{
							drugname: 'hydrogen peroxide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Eleonora McKinnon',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Elsworth Kenworthey',
						},
						{
							drugname: 'Ropinirole Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Dru Mattussevich',
						},
						{
							drugname:
								'DIPHENHYDRAMINE HYDROCHLORIDE, PHENYLEPHRINE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Sumner Freezor',
						},
						{
							drugname:
								'ALUMINUM ZIRCONIUM TETRACHLOROHYDREX GLY',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Magnum Keeltagh',
						},
						{
							drugname: 'AVOBENZONE, OCTINOXATE, OCTOCRYLENE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ody Jurek',
						},
						{
							drugname: 'Dextromethorphan HBr',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Iris Redsell',
						},
						{
							drugname: 'CARBAMAZEPINE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ellette Juste',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S72041N',
					ICD10diagnosislongdescription:
						'Displaced fracture of base of neck of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion',
					ICD10diagnosisshortdescription:
						'Disp fx of base of nk of r femr, 7thN',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T63613',
					ICD10diagnosislongdescription:
						'Toxic effect of contact with Portugese Man-o-war, assault',
					ICD10diagnosisshortdescription:
						'Toxic effect of contact with Portugese Man-o-war, assault',
					medications: [
						{
							drugname: 'Pyrantel Pamoate',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Franky Hallibone',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52124N',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of head of right radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion',
					ICD10diagnosisshortdescription:
						'Nondisp fx of head of r rad, 7thN',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'W-1993771750',
					company: 'Schiller-Bailey',
					frontimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/229x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/06/1978',
					eligibiltybegan: '10/09/1985',
					eligibiltyexpired: '03/12/2017',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-4696477037',
					company: 'Predovic-Braun',
					frontimage:
						'http://dummyimage.com/220x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/215x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/03/1994',
					eligibiltybegan: '10/31/2004',
					eligibiltyexpired: '05/25/1962',
				},
				{
					primary: true,
					active: true,
					membernumber: 'X-8816180646',
					company: 'Gusikowski-Brakus',
					frontimage:
						'http://dummyimage.com/151x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/22/1963',
					eligibiltybegan: '03/18/2009',
					eligibiltyexpired: '05/06/2002',
				},
				{
					primary: false,
					active: true,
					membernumber: 'I-4950155530',
					company: 'Welch, Turcotte and Shields',
					frontimage:
						'http://dummyimage.com/159x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/124x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/02/1982',
					eligibiltybegan: '01/19/1983',
					eligibiltyexpired: '06/16/2016',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-2625756345',
					company: 'Greenholt Inc',
					frontimage:
						'http://dummyimage.com/233x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/211x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/28/1954',
					eligibiltybegan: '06/20/2021',
					eligibiltyexpired: '04/11/2002',
				},
				{
					primary: true,
					active: true,
					membernumber: 'N-2075972488',
					company: 'Stoltenberg, Funk and Koss',
					frontimage:
						'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/241x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/03/2001',
					eligibiltybegan: '03/17/2021',
					eligibiltyexpired: '10/04/2000',
				},
				{
					primary: true,
					active: false,
					membernumber: 'N-4001537037',
					company: 'Von Inc',
					frontimage:
						'http://dummyimage.com/156x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/193x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/02/2012',
					eligibiltybegan: '01/06/1983',
					eligibiltyexpired: '06/17/2019',
				},
				{
					primary: true,
					active: false,
					membernumber: 'S-4270616335',
					company: 'Christiansen-Bechtelar',
					frontimage:
						'http://dummyimage.com/222x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/236x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/16/1974',
					eligibiltybegan: '09/07/2006',
					eligibiltyexpired: '08/22/1994',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-3424894372',
					company: 'Ward and Sons',
					frontimage:
						'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/07/1965',
					eligibiltybegan: '07/29/1968',
					eligibiltyexpired: '01/01/1963',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-6130092996',
					company: 'Stiedemann-Hauck',
					frontimage:
						'http://dummyimage.com/119x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/191x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/03/1983',
					eligibiltybegan: '02/12/1996',
					eligibiltyexpired: '06/04/2014',
				},
			],
			surgicalhistory: null,
		},
		ssn: '181022020',
	},
	{
		id: 39,
		details: {
			first_name: 'Cart',
			last_name: 'Coopper',
			middle_name: 'ccoopper12@digg.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2 Susan Place',
			address_two: null,
			city: 'New Orleans',
			state: 'LA',
			zip: '70149',
			date_of_birth: '1952-06-06T15:38:53Z',
			contact_methods: [
				{
					number: '893-410-4016',
					notes: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H35319',
					ICD10diagnosislongdescription:
						'Nonexudative age-related macular degeneration, unspecified eye',
					ICD10diagnosisshortdescription:
						'Nonexudative age-related mclr degn, unspecified eye',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V181XXD',
					ICD10diagnosislongdescription:
						'Pedal cycle passenger injured in noncollision transport accident in nontraffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Pedl cyc pasngr injured in nonclsn trnsp acc nontraf, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M21531',
					ICD10diagnosislongdescription:
						'Acquired clawfoot, right foot',
					ICD10diagnosisshortdescription:
						'Acquired clawfoot, right foot',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Duncan Cruess',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Leigha Beacock',
						},
						{
							drugname: 'GLYCERIN',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Malynda Leupoldt',
						},
						{
							drugname: 'Glycopyrrolate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Bart Lassen',
						},
						{
							drugname: 'Meclizine HCl',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Daniella Matoshin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Odilia Byre',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Lorna Archambault',
						},
						{
							drugname:
								'CALENDULA OFFICINALIS FLOWERING TOP and HAMAMELIS VIRGINIANA ROOT BARK/STEM BARK and ARNICA MONTANA ROOT and ACONITUM NAPELLUS and ATROPA BELLADONNA and BELLIS PERENNIS and MATRICARIA RECUTITA and ECHINACEA, UNSPECIFIED and ECHINACEA PURPUREA and ACHILLEA MILLEFOLIUM and CALCIUM SULFIDE and MERCURIUS SOLUBILIS and COMFREY ROOT and HYPERICUM PERFORATUM and',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Dennie Doey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Hesther Haffner',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S36262',
					ICD10diagnosislongdescription:
						'Major laceration of tail of pancreas',
					ICD10diagnosisshortdescription:
						'Major laceration of tail of pancreas',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T471X3S',
					ICD10diagnosislongdescription:
						'Poisoning by other antacids and anti-gastric-secretion drugs, assault, sequela',
					ICD10diagnosisshortdescription:
						'Poisn by oth antacids and anti-gstrc-sec drugs, asslt, sqla',
					medications: [
						{
							drugname: 'Black Locust',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Joya Fenich',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Marmaduke Gonsalvo',
						},
						{
							drugname: 'Ambrosia dumosa',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Bernardo Pickrell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Arvy Hemerijk',
						},
						{
							drugname: 'Esomeprazole magnesium',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Johnathon Pierce',
						},
						{
							drugname: 'atovaquone and proguanil hydrochloride',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Cari De la Barre',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V444XXA',
					ICD10diagnosislongdescription:
						'Person boarding or alighting a car injured in collision with heavy transport vehicle or bus, initial encounter',
					ICD10diagnosisshortdescription:
						'Prsn brd/alit a car injured in collision w hv veh, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Averill Lippini',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S72136R',
					ICD10diagnosislongdescription:
						'Nondisplaced apophyseal fracture of unspecified femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion',
					ICD10diagnosisshortdescription:
						'Nondisp apophyseal fx unsp femr, 7thR',
					medications: [
						{
							drugname: 'Cultivated Oat',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Gaynor Leadbetter',
						},
						{
							drugname:
								'Chlorpheniramine Maleate and Dextromethorphan Hydrobromide',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Irina Baxandall',
						},
						{
							drugname: 'phendimetrazine tartrate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Raimundo Frankema',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Dinny Clawson',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Joby Blackhall',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Renae Adamowitz',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Mickie Rickeard',
						},
						{
							drugname: 'Felodipine',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Wake Mully',
						},
						{
							drugname: 'Titanium Dioxide and Zinc Oxide',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Suellen Sparrowhawk',
						},
						{
							drugname: 'INTERLEUKIN-12 HUMAN RECOMBINANT',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Tanny Bleckly',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Q-0096346311',
					company: 'Sporer, Kiehn and Balistreri',
					frontimage:
						'http://dummyimage.com/205x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/245x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/16/1991',
					eligibiltybegan: '06/05/1966',
					eligibiltyexpired: '07/06/1981',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-5951375739',
					company: 'Gibson Inc',
					frontimage:
						'http://dummyimage.com/245x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/01/2002',
					eligibiltybegan: '01/06/1962',
					eligibiltyexpired: '09/06/1964',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-7338605890',
					company: 'Beier Inc',
					frontimage:
						'http://dummyimage.com/159x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/03/1956',
					eligibiltybegan: '09/24/2013',
					eligibiltyexpired: '02/29/2008',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-5238494276',
					company: 'Hintz Group',
					frontimage:
						'http://dummyimage.com/202x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/193x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/07/2014',
					eligibiltybegan: '06/29/1954',
					eligibiltyexpired: '05/11/2021',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0B9M4ZX',
					performed_by: 'Berry Ruppeli',
					date: 1960,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0JH70CZ',
					performed_by: 'Naoma Stembridge',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '00P000Z',
					performed_by: 'Linette Ibbett',
					date: 1976,
					additional_information:
						'mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem',
				},
				{
					ICD10procedurecode: '041N49S',
					performed_by: 'Lazar Kenealy',
					date: 1983,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SGD44Z',
					performed_by: 'Murry Seville',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0GTC4ZZ',
					performed_by: 'Leopold Weedon',
					date: 1971,
					additional_information:
						'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin',
				},
				{
					ICD10procedurecode: '08U03JZ',
					performed_by: 'Lina Voice',
					date: 1962,
					additional_information:
						'proin at turpis a pede posuere nonummy integer non velit donec diam neque',
				},
				{
					ICD10procedurecode: '0RGW3JZ',
					performed_by: 'Lotte Scoterbosh',
					date: 1963,
					additional_information: null,
				},
			],
		},
		ssn: '546398735',
	},
	{
		id: 40,
		details: {
			first_name: 'Woody',
			last_name: 'MacGrath',
			middle_name: 'wmacgrath13@51.la',
			gender: 'Genderfluid',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '14871 Cardinal Hill',
			address_two: null,
			city: 'El Paso',
			state: 'TX',
			zip: '79945',
			date_of_birth: '1996-02-02T15:22:55Z',
			contact_methods: [
				{
					number: '658-405-3230',
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				},
				{ number: '416-122-0725', notes: null },
				{ number: '936-657-4276', notes: null },
				{ number: '989-755-2652', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S89049G',
					ICD10diagnosislongdescription:
						'Salter-Harris Type IV physeal fracture of upper end of unspecified tibia, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Sltr-haris Type IV physl fx upr end unsp tibia, 7thG',
					medications: [
						{
							drugname:
								'TETRAHYDROZOLINE HYDROCHLORIDE AND ZINC SULFATE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Andriana Ostler',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Edita Kynston',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Marilee Carr',
						},
						{
							drugname: 'LOVASTATIN',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Kial Deinhardt',
						},
						{
							drugname: 'Haloperidol Decanoate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Casper Richter',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Gianni Torrijos',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Cahra Trousdell',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T375X2D',
					ICD10diagnosislongdescription:
						'Poisoning by antiviral drugs, intentional self-harm, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by antiviral drugs, intentional self-harm, subs',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'O-6320079942',
					company: 'Predovic LLC',
					frontimage:
						'http://dummyimage.com/124x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/232x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/19/1976',
					eligibiltybegan: '05/15/1962',
					eligibiltyexpired: '02/15/1968',
				},
				{
					primary: true,
					active: false,
					membernumber: 'D-5508206366',
					company: 'Greenholt-Lynch',
					frontimage:
						'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/229x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/30/1967',
					eligibiltybegan: '05/12/2015',
					eligibiltyexpired: '08/02/1988',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Z-2314510866',
					company: 'Bosco Inc',
					frontimage:
						'http://dummyimage.com/167x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/129x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/14/1985',
					eligibiltybegan: '06/03/1975',
					eligibiltyexpired: '08/20/1954',
				},
				{
					primary: true,
					active: true,
					membernumber: 'T-8281749208',
					company: 'Jenkins, Jacobson and Wiza',
					frontimage:
						'http://dummyimage.com/234x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/23/1986',
					eligibiltybegan: '02/23/1961',
					eligibiltyexpired: '05/09/1996',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Z-7848569401',
					company: 'Parisian, Erdman and Smith',
					frontimage:
						'http://dummyimage.com/157x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/226x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/14/2005',
					eligibiltybegan: '04/11/1981',
					eligibiltyexpired: '05/12/1953',
				},
				{
					primary: false,
					active: true,
					membernumber: 'O-6231490793',
					company: 'Anderson, Wilkinson and Cartwright',
					frontimage:
						'http://dummyimage.com/248x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/207x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/08/1971',
					eligibiltybegan: '11/14/2016',
					eligibiltyexpired: '01/19/1988',
				},
				{
					primary: true,
					active: true,
					membernumber: 'W-6483034234',
					company: 'Nitzsche, Stokes and Ferry',
					frontimage:
						'http://dummyimage.com/117x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/230x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/17/1958',
					eligibiltybegan: '08/18/1953',
					eligibiltyexpired: '05/02/2009',
				},
				{
					primary: true,
					active: true,
					membernumber: 'V-3872657371',
					company: 'Glover LLC',
					frontimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/03/1991',
					eligibiltybegan: '11/11/1965',
					eligibiltyexpired: '01/03/1982',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-5249875617',
					company: 'Roberts LLC',
					frontimage:
						'http://dummyimage.com/201x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/10/1998',
					eligibiltybegan: '08/16/1998',
					eligibiltyexpired: '12/01/2008',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-9874933962',
					company: 'Sawayn Inc',
					frontimage:
						'http://dummyimage.com/245x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/221x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/13/2013',
					eligibiltybegan: '04/28/1995',
					eligibiltyexpired: '08/14/1977',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0K9V30Z',
					performed_by: 'Darla Seage',
					date: 1952,
					additional_information:
						'turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem',
				},
			],
		},
		ssn: '301781152',
	},
	{
		id: 41,
		details: {
			first_name: 'Milty',
			last_name: 'Mc Mechan',
			middle_name: 'mmcmechan14@bbc.co.uk',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '87 Cordelia Center',
			address_two: null,
			city: 'Springfield',
			state: 'IL',
			zip: '62723',
			date_of_birth: '1978-07-22T06:35:08Z',
			contact_methods: [
				{
					number: '576-380-2596',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
				{ number: '948-620-0242', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M80842',
					ICD10diagnosislongdescription:
						'Other osteoporosis with current pathological fracture, left hand',
					ICD10diagnosisshortdescription:
						'Oth osteoporosis w current pathological fracture, left hand',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Gayler Ioselev',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'D-8539104480',
					company: 'Yundt, Cummerata and Boehm',
					frontimage:
						'http://dummyimage.com/188x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/227x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/16/1996',
					eligibiltybegan: '05/26/2007',
					eligibiltyexpired: '12/27/2008',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Z-2976102990',
					company: 'Barton-Bernhard',
					frontimage:
						'http://dummyimage.com/219x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/246x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/12/1999',
					eligibiltybegan: '09/14/2003',
					eligibiltyexpired: '06/04/1986',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-8511501909',
					company: 'Beahan LLC',
					frontimage:
						'http://dummyimage.com/188x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/185x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/18/2006',
					eligibiltybegan: '11/11/1956',
					eligibiltyexpired: '12/24/1988',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-8553846380',
					company: 'Fadel, Tremblay and Kuphal',
					frontimage:
						'http://dummyimage.com/250x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/111x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/13/1989',
					eligibiltybegan: '08/27/1952',
					eligibiltyexpired: '11/19/2008',
				},
				{
					primary: false,
					active: true,
					membernumber: 'L-6646140306',
					company: 'Pagac and Sons',
					frontimage:
						'http://dummyimage.com/163x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/106x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/19/2004',
					eligibiltybegan: '01/28/1963',
					eligibiltyexpired: '02/08/1992',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-8905936800',
					company: 'Schulist-Huels',
					frontimage:
						'http://dummyimage.com/234x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/221x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/24/2011',
					eligibiltybegan: '08/23/1994',
					eligibiltyexpired: '02/19/2011',
				},
				{
					primary: false,
					active: true,
					membernumber: 'R-3817757062',
					company: "Stehr-O'Keefe",
					frontimage:
						'http://dummyimage.com/189x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/186x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/26/1985',
					eligibiltybegan: '12/31/1971',
					eligibiltyexpired: '02/18/2015',
				},
				{
					primary: false,
					active: true,
					membernumber: 'G-0040710503',
					company: "O'Keefe Group",
					frontimage:
						'http://dummyimage.com/138x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/01/1992',
					eligibiltybegan: '09/23/1976',
					eligibiltyexpired: '02/16/1981',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-6513391036',
					company: 'Zemlak-Purdy',
					frontimage:
						'http://dummyimage.com/217x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/241x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/15/1952',
					eligibiltybegan: '09/05/1959',
					eligibiltyexpired: '12/31/2013',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '05B04ZX',
					performed_by: 'Royce Middle',
					date: 1972,
					additional_information:
						'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat',
				},
				{
					ICD10procedurecode: '0B9F30Z',
					performed_by: 'Brunhilda Krysztofiak',
					date: 2004,
					additional_information:
						'tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis',
				},
				{
					ICD10procedurecode: '021K0KP',
					performed_by: 'Anica Smedmore',
					date: 2015,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0LCG4ZZ',
					performed_by: 'Tybie Allibon',
					date: 2007,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0PNV0ZZ',
					performed_by: 'Fredericka Lovel',
					date: 2009,
					additional_information:
						'semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero',
				},
				{
					ICD10procedurecode: '0FPB7DZ',
					performed_by: 'Royal Etherton',
					date: 1992,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RWN45Z',
					performed_by: 'Emma Blakeley',
					date: 1995,
					additional_information:
						'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est',
				},
				{
					ICD10procedurecode: '0G9P0ZX',
					performed_by: 'Mallory Vinnicombe',
					date: 1958,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SG00A0',
					performed_by: 'Janos Pencott',
					date: 2019,
					additional_information:
						'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non',
				},
			],
		},
		ssn: '710213423',
	},
	{
		id: 42,
		details: {
			first_name: 'Stacee',
			last_name: 'Hymans',
			middle_name: 'shymans15@illinois.edu',
			gender: 'Polygender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '29 Karstens Place',
			address_two: null,
			city: 'San Bernardino',
			state: 'CA',
			zip: '92424',
			date_of_birth: '1995-12-22T18:52:09Z',
			contact_methods: [
				{
					number: '847-588-3819',
					notes: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
				},
				{
					number: '708-829-8044',
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
				},
				{
					allergy: 'insects',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
				{
					allergy: 'insects',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S66891S',
					ICD10diagnosislongdescription:
						'Other injury of other specified muscles, fascia and tendons at wrist and hand level, right hand, sequela',
					ICD10diagnosisshortdescription:
						'Inj musc/fasc/tend at wrs/hnd lv, right hand, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Brita Reape',
						},
						{
							drugname: 'Aluminum hydroxide, Magnesium carbonate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Reynolds Vevers',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Roxy Mac Geaney',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Dani Bengefield',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Case Cotsford',
						},
						{
							drugname:
								'Aluminum zirconium tetrachlorohydrex gly',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Cristal Norley',
						},
						{
							drugname: 'Wheat Bunt',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Meghann McCaffrey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Liam Keywood',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T24209',
					ICD10diagnosislongdescription:
						'Burn of second degree of unspecified site of unspecified lower limb, except ankle and foot',
					ICD10diagnosisshortdescription:
						'Burn second deg of unsp site unsp lower limb, except ank/ft',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S31129A',
					ICD10diagnosislongdescription:
						'Laceration of abdominal wall with foreign body, unspecified quadrant without penetration into peritoneal cavity, initial encounter',
					ICD10diagnosisshortdescription:
						'Lacerat abd wall w fb, unsp q w/o penet perit cav, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M65079',
					ICD10diagnosislongdescription:
						'Abscess of tendon sheath, unspecified ankle and foot',
					ICD10diagnosisshortdescription:
						'Abscess of tendon sheath, unspecified ankle and foot',
					medications: [
						{
							drugname: 'Atorvastatin Calcium',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Annetta Reinger',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Reinald Beades',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T43291D',
					ICD10diagnosislongdescription:
						'Poisoning by other antidepressants, accidental (unintentional), subsequent encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by oth antidepressants, accidental, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Marci Hestrop',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Mercy Carmichael',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L97802',
					ICD10diagnosislongdescription:
						'Non-pressure chronic ulcer of other part of unspecified lower leg with fat layer exposed',
					ICD10diagnosisshortdescription:
						'Non-prs chr ulcer oth prt unsp low leg w fat layer exposed',
					medications: [
						{
							drugname: 'Fentanyl',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Alyda Oldfield-Cherry',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Antonella Gellately',
						},
						{
							drugname: 'verapamil hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Pepito Kermannes',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Leigha Trengrove',
						},
						{
							drugname: 'Sulfamethoxazole and Trimethoprim',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Terry Pauer',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Cosetta Huckstepp',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Wyn Holliar',
						},
						{
							drugname: 'Yeast, Brewer Saccharomyces cerevisiae',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Florance Sollom',
						},
						{
							drugname: 'Quetiapine Fumarate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Dell Peinke',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52592D',
					ICD10diagnosislongdescription:
						'Other fractures of lower end of left radius, subsequent encounter for closed fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Oth fx of lower end left rad, subs for clos fx w routn heal',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Jeramie Chessel',
						},
						{
							drugname: 'GLYCERIN',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Wake McElhinney',
						},
						{
							drugname: 'ETHYL ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Blithe Dilley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Bernice Corfield',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S80229S',
					ICD10diagnosislongdescription:
						'Blister (nonthermal), unspecified knee, sequela',
					ICD10diagnosisshortdescription:
						'Blister (nonthermal), unspecified knee, sequela',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'W-0482931900',
					company: 'Treutel Group',
					frontimage:
						'http://dummyimage.com/137x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/192x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/17/1961',
					eligibiltybegan: '01/28/2009',
					eligibiltyexpired: '08/04/1964',
				},
				{
					primary: true,
					active: true,
					membernumber: 'R-8482003736',
					company: 'Schroeder-Ziemann',
					frontimage:
						'http://dummyimage.com/235x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/166x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/17/1997',
					eligibiltybegan: '05/28/2009',
					eligibiltyexpired: '01/02/1990',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'BP291ZZ',
					performed_by: 'Belinda Casoni',
					date: 2016,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0G9830Z',
					performed_by: 'Joye Rickeard',
					date: 1989,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0MSN0ZZ',
					performed_by: 'Chandal Kissack',
					date: 2006,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0HQX8ZZ',
					performed_by: 'Lindy Winterflood',
					date: 1961,
					additional_information: null,
				},
			],
		},
		ssn: '211955538',
	},
	{
		id: 43,
		details: {
			first_name: 'Eugen',
			last_name: 'Bazeley',
			middle_name: 'ebazeley16@joomla.org',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '35 Kinsman Crossing',
			address_two: null,
			city: 'Orlando',
			state: 'FL',
			zip: '32813',
			date_of_birth: '2012-02-24T12:16:49Z',
			contact_methods: [{ number: '727-374-3983', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				},
				{
					allergy: 'animals',
					notes: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
				{
					allergy: 'peanut',
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
				},
				{
					allergy: 'insects',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
				{ allergy: 'peanut', notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T58',
					ICD10diagnosislongdescription:
						'Toxic effect of carbon monoxide',
					ICD10diagnosisshortdescription:
						'Toxic effect of carbon monoxide',
					medications: [
						{
							drugname: 'Phentermine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Graham Kee',
						},
						{
							drugname: 'House Dust',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Curtice Haggidon',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Con Meuse',
						},
						{
							drugname: 'Quetiapine fumarate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Chad Trineman',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Inger De Biaggi',
						},
						{
							drugname: 'topiramate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Anjanette Whitebrook',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T23549',
					ICD10diagnosislongdescription:
						'Corrosion of first degree of unspecified multiple fingers (nail), including thumb',
					ICD10diagnosisshortdescription:
						'Corros first degree of unsp mult fingers (nail), inc thumb',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82391F',
					ICD10diagnosislongdescription:
						'Other fracture of lower end of right tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing',
					ICD10diagnosisshortdescription:
						'Oth fx low end r tibia, 7thF',
					medications: [
						{
							drugname: 'Cetirizine HCl',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Jeremy Hunsworth',
						},
						{
							drugname: 'Aluminum chlorohydrate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Urbain Chittleburgh',
						},
						{
							drugname: 'Benzalkonium Chloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Winni Player',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Malina Stienton',
						},
						{
							drugname:
								'Arnica montana, Lilium tigrinum, Aurum muriaticum, Cactus grandiflorus, Digitalis purpurea, Glonoinum, Nux vomica, Veratrum album,',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Deck Davitt',
						},
						{
							drugname: 'sumatriptan succinate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Bonnee Pelerin',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S83202S',
					ICD10diagnosislongdescription:
						'Bucket-handle tear of unspecified meniscus, current injury, unspecified knee, sequela',
					ICD10diagnosisshortdescription:
						'Bucket-hndl tear of unsp mensc, crnt injury, unsp knee, sqla',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'F318',
					ICD10diagnosislongdescription: 'Other bipolar disorders',
					ICD10diagnosisshortdescription: 'Other bipolar disorders',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'G-2688748139',
					company: "O'Hara, Rippin and Hane",
					frontimage:
						'http://dummyimage.com/150x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/216x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/24/1985',
					eligibiltybegan: '08/14/2018',
					eligibiltyexpired: '10/31/1985',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-0951269993',
					company: 'Ratke Inc',
					frontimage:
						'http://dummyimage.com/208x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/215x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/25/2022',
					eligibiltybegan: '10/07/1993',
					eligibiltyexpired: '02/12/1962',
				},
				{
					primary: false,
					active: false,
					membernumber: 'T-0867442203',
					company: 'Wisoky Group',
					frontimage:
						'http://dummyimage.com/116x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/125x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/08/2017',
					eligibiltybegan: '02/01/1983',
					eligibiltyexpired: '11/15/1996',
				},
				{
					primary: false,
					active: false,
					membernumber: 'V-4522930274',
					company: 'Kihn-Moen',
					frontimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/175x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/27/1983',
					eligibiltybegan: '03/10/1974',
					eligibiltyexpired: '04/11/1999',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0Y994ZX',
					performed_by: 'Moritz Guthrie',
					date: 2022,
					additional_information:
						'duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel',
				},
				{
					ICD10procedurecode: '037V446',
					performed_by: 'Spike Phipard-Shears',
					date: 2003,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0LBB4ZX',
					performed_by: 'Nixie Hedau',
					date: 2004,
					additional_information:
						'diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut',
				},
				{
					ICD10procedurecode: 'BP2F1ZZ',
					performed_by: 'Kareem Haselwood',
					date: 2011,
					additional_information:
						'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio',
				},
				{
					ICD10procedurecode: '0902X7Z',
					performed_by: 'Fionnula Lillyman',
					date: 2006,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SSJX5Z',
					performed_by: 'Stacia Knapton',
					date: 2003,
					additional_information:
						'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien',
				},
				{
					ICD10procedurecode: '0LR30KZ',
					performed_by: 'Kippar Belcher',
					date: 1955,
					additional_information:
						'nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus',
				},
				{
					ICD10procedurecode: '08NNXZZ',
					performed_by: 'Louella Beaze',
					date: 1974,
					additional_information:
						'morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
				},
				{
					ICD10procedurecode: '00XP4ZS',
					performed_by: 'Brent Crickett',
					date: 1993,
					additional_information:
						'quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam',
				},
				{
					ICD10procedurecode: '0VC90ZZ',
					performed_by: 'Maxie Poundford',
					date: 2006,
					additional_information: null,
				},
			],
		},
		ssn: '274843015',
	},
	{
		id: 44,
		details: {
			first_name: 'Milli',
			last_name: 'Hartless',
			middle_name: 'mhartless17@bloglines.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '91 Fulton Street',
			address_two: null,
			city: 'Pittsburgh',
			state: 'PA',
			zip: '15266',
			date_of_birth: '1968-08-15T07:05:04Z',
			contact_methods: [
				{ number: '350-735-6123', notes: null },
				{
					number: '215-687-7358',
					notes: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
				},
				{
					number: '786-348-7298',
					notes: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
				},
				{
					number: '747-977-3455',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S79009K',
					ICD10diagnosislongdescription:
						'Unspecified physeal fracture of upper end of unspecified femur, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Unsp physl fx upper end unsp femur, subs for fx w nonunion',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'Z-7975668138',
					company: 'Connelly Inc',
					frontimage:
						'http://dummyimage.com/128x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/123x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/30/1985',
					eligibiltybegan: '08/11/1979',
					eligibiltyexpired: '03/15/2012',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Q-6609348827',
					company: 'Sanford, Walker and Rutherford',
					frontimage:
						'http://dummyimage.com/196x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/185x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/08/1983',
					eligibiltybegan: '02/10/1975',
					eligibiltyexpired: '03/04/1960',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-3304057569',
					company: 'Renner-Kuvalis',
					frontimage:
						'http://dummyimage.com/175x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/226x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '06/30/1971',
					eligibiltybegan: '01/09/2001',
					eligibiltyexpired: '10/28/2000',
				},
				{
					primary: false,
					active: true,
					membernumber: 'U-0614216325',
					company: 'Ortiz-Cummings',
					frontimage:
						'http://dummyimage.com/108x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/119x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/18/2016',
					eligibiltybegan: '06/22/2000',
					eligibiltyexpired: '09/02/2000',
				},
				{
					primary: false,
					active: true,
					membernumber: 'V-7860596319',
					company: 'Shields Inc',
					frontimage:
						'http://dummyimage.com/211x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/232x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/23/1962',
					eligibiltybegan: '06/04/1964',
					eligibiltyexpired: '11/29/1978',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '04V03E6',
					performed_by: 'Torrance Conachy',
					date: 1977,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0JXF3ZC',
					performed_by: 'Georges Purtell',
					date: 1968,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0R9X4ZX',
					performed_by: 'Verge St. Aubyn',
					date: 1965,
					additional_information:
						'nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum',
				},
				{
					ICD10procedurecode: '0DQE4ZZ',
					performed_by: 'Marianne Scrivner',
					date: 1976,
					additional_information:
						'vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam',
				},
				{
					ICD10procedurecode: '0DQ74ZZ',
					performed_by: 'Conant Cade',
					date: 1966,
					additional_information:
						'feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst',
				},
				{
					ICD10procedurecode: '0TTC8ZZ',
					performed_by: 'Flossi Mossom',
					date: 1979,
					additional_information:
						'risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci',
				},
				{
					ICD10procedurecode: '0T9C0ZZ',
					performed_by: 'Wallie Dockwra',
					date: 1985,
					additional_information:
						'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
				},
				{
					ICD10procedurecode: '0MDV4ZZ',
					performed_by: 'Adelina Schulze',
					date: 2008,
					additional_information:
						'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet',
				},
				{
					ICD10procedurecode: '01S84ZZ',
					performed_by: 'Nickie Dablin',
					date: 2014,
					additional_information:
						'turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue',
				},
			],
		},
		ssn: '571182347',
	},
	{
		id: 45,
		details: {
			first_name: 'Lisle',
			last_name: 'Scottrell',
			middle_name: 'lscottrell18@lulu.com',
			gender: 'Genderqueer',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '97 Holy Cross Point',
			address_two: null,
			city: 'Indianapolis',
			state: 'IN',
			zip: '46226',
			date_of_birth: '2014-12-29T21:14:14Z',
			contact_methods: [
				{
					number: '895-881-1607',
					notes: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [{ allergy: 'peanut', notes: null }],
			diagnoses: [
				{
					ICD10diagnosiscode: 'M4120',
					ICD10diagnosislongdescription:
						'Other idiopathic scoliosis, site unspecified',
					ICD10diagnosisshortdescription:
						'Other idiopathic scoliosis, site unspecified',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Teodora Haydock',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lola Hurring',
						},
						{
							drugname: 'Cefprozil',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Marijn Bockett',
						},
						{
							drugname: 'Ribavirin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Marcy Janney',
						},
						{
							drugname: 'Lorazepam',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Taryn Scowcroft',
						},
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate, Octocrylene and Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Arlana Conrad',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Hildagard Whittleton',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T85310A',
					ICD10diagnosislongdescription:
						'Breakdown (mechanical) of prosthetic orbit of right eye, initial encounter',
					ICD10diagnosisshortdescription:
						'Breakdown of prosthetic orbit of right eye, init',
					medications: [
						{
							drugname: 'Petrolatum',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Whit Giovannazzi',
						},
						{
							drugname: 'mycobacterium phlei',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Nikkie Hadland',
						},
						{
							drugname: 'Naproxen',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Devora Easterling',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Adam Ouslem',
						},
						{
							drugname: 'Terazosin Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Toby Scarfe',
						},
						{
							drugname: 'oxycodone hydrochloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Aland Simla',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L89510',
					ICD10diagnosislongdescription:
						'Pressure ulcer of right ankle, unstageable',
					ICD10diagnosisshortdescription:
						'Pressure ulcer of right ankle, unstageable',
					medications: [
						{
							drugname: 'Triazolam',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Emelyne Bridgen',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T398X3S',
					ICD10diagnosislongdescription:
						'Poisoning by other nonopioid analgesics and antipyretics, not elsewhere classified, assault, sequela',
					ICD10diagnosisshortdescription:
						'Poisn by oth nonopio analges/antipyret, NEC, asslt, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Clevey Jans',
						},
						{
							drugname: 'Smooth Brome',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Farrell Mapis',
						},
						{
							drugname: 'Povidone-Iodine',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kurt Thyer',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Rora Soppit',
						},
						{
							drugname: 'Baclofen',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ginni Crannage',
						},
						{
							drugname: 'Indomethacin',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Vern Chavey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Elenore MacCleod',
						},
						{
							drugname: 'Balsalazide Disodium',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Gaye Abrehart',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'V-8628185312',
					company: 'Daugherty-Bins',
					frontimage:
						'http://dummyimage.com/139x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/11/1960',
					eligibiltybegan: '03/16/1964',
					eligibiltyexpired: '06/05/2016',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-5384693043',
					company: 'Smith Group',
					frontimage:
						'http://dummyimage.com/222x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/212x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/19/2017',
					eligibiltybegan: '12/06/1961',
					eligibiltyexpired: '12/17/1973',
				},
				{
					primary: true,
					active: false,
					membernumber: 'U-5297688789',
					company: 'Gusikowski Inc',
					frontimage:
						'http://dummyimage.com/155x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/160x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/03/1960',
					eligibiltybegan: '11/25/2010',
					eligibiltyexpired: '03/04/2007',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-2207345149',
					company: 'Steuber and Sons',
					frontimage:
						'http://dummyimage.com/134x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/134x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/11/1971',
					eligibiltybegan: '03/07/1957',
					eligibiltyexpired: '11/19/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-2053459434',
					company: 'Pfannerstill and Sons',
					frontimage:
						'http://dummyimage.com/184x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/126x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/07/1993',
					eligibiltybegan: '12/12/2020',
					eligibiltyexpired: '10/08/2020',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-6655891760',
					company: 'Hoppe, Stracke and Lindgren',
					frontimage:
						'http://dummyimage.com/100x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/162x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/14/2009',
					eligibiltybegan: '01/21/2002',
					eligibiltyexpired: '05/14/1979',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-0440970784',
					company: 'McLaughlin, Hirthe and Jacobs',
					frontimage:
						'http://dummyimage.com/242x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/02/1954',
					eligibiltybegan: '06/08/1963',
					eligibiltyexpired: '05/01/1999',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0BL40DZ',
					performed_by: 'Orin Elwyn',
					date: 1984,
					additional_information: null,
				},
				{
					ICD10procedurecode: '3E0K7HZ',
					performed_by: 'Gilbertine Roxbrough',
					date: 2011,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'XR2G021',
					performed_by: 'Helyn Filippov',
					date: 2004,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0UP8XDZ',
					performed_by: 'Sephira Boutwell',
					date: 1990,
					additional_information:
						'maecenas ut massa quis augue luctus tincidunt nulla mollis molestie',
				},
			],
		},
		ssn: '252908803',
	},
	{
		id: 46,
		details: {
			first_name: 'Rancell',
			last_name: 'Stiller',
			middle_name: 'rstiller19@wikispaces.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '6 Packers Hill',
			address_two: null,
			city: 'Orlando',
			state: 'FL',
			zip: '32813',
			date_of_birth: '2005-12-08T01:31:38Z',
			contact_methods: [
				{
					number: '856-159-6454',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
				{
					allergy: 'medication',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'Y93A3',
					ICD10diagnosislongdescription:
						'Activity, aerobic and step exercise',
					ICD10diagnosisshortdescription:
						'Activity, aerobic and step exercise',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S21052',
					ICD10diagnosislongdescription: 'Open bite of left breast',
					ICD10diagnosisshortdescription: 'Open bite of left breast',
					medications: [
						{
							drugname: 'OCTINOXATE and TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ruprecht Bountiff',
						},
						{
							drugname: 'Loperamide Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ame Imrie',
						},
						{
							drugname: 'Quetiapine fumarate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ilene Wise',
						},
						{
							drugname: 'Ofloxacin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Maighdiln Bligh',
						},
						{
							drugname: 'Fluocinolone Acetonide',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Daisey Freyn',
						},
						{
							drugname: 'Carbamazepine',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Tymon Galsworthy',
						},
						{
							drugname: 'Magesium Citrate',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Rois Pulley',
						},
						{
							drugname: 'Alprazolam',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Arnaldo Bastistini',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Jamie Buret',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Bax Chidlow',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T24499S',
					ICD10diagnosislongdescription:
						'Corrosion of unspecified degree of multiple sites of unspecified lower limb, except ankle and foot, sequela',
					ICD10diagnosisshortdescription:
						'Corros unsp deg mult sites of unsp low limb, ex ank/ft, sqla',
					medications: [
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Charlena Crigin',
						},
						{
							drugname:
								'Avobenzone Homosalate Octisalate Octocrylene Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sharyl Kydd',
						},
						{
							drugname: 'diphenhydramine citrate, ibuprofen',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Chevalier Foan',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Dorette Boshier',
						},
						{
							drugname: 'risperidone',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Annabell Tethcote',
						},
						{
							drugname: 'Methocarbamol',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Thaine Orringe',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S72409B',
					ICD10diagnosislongdescription:
						'Unspecified fracture of lower end of unspecified femur, initial encounter for open fracture type I or II',
					ICD10diagnosisshortdescription:
						'Unsp fx lower end of unsp femur, init for opn fx type I/2',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S62642S',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of proximal phalanx of right middle finger, sequela',
					ICD10diagnosisshortdescription:
						'Nondisp fx of proximal phalanx of r mid finger, sequela',
					medications: [
						{
							drugname: 'Hydralazine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Tracey Behrens',
						},
						{
							drugname: 'Hydrochlorothiazide',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Morissa Croisier',
						},
						{
							drugname: 'ARTEMISIA ABROTANUM FLOWERING TOP',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Kriste Lineen',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Jocelyn Vallack',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lisette Kilday',
						},
						{
							drugname: 'Oxycodone Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Mable Losseljong',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Gaby Tufts',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z5220',
					ICD10diagnosislongdescription: 'Bone donor, unspecified',
					ICD10diagnosisshortdescription: 'Bone donor, unspecified',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S46391S',
					ICD10diagnosislongdescription:
						'Other injury of muscle, fascia and tendon of triceps, right arm, sequela',
					ICD10diagnosisshortdescription:
						'Inj muscle, fascia and tendon of triceps, right arm, sequela',
					medications: [
						{
							drugname: 'Fentanyl Citrate, Bupivacaine HCl',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Moyna Benezeit',
						},
						{
							drugname: 'oxybutynin chloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Florina Kingscott',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'H-9950477795',
					company: 'Kreiger, Stoltenberg and Padberg',
					frontimage:
						'http://dummyimage.com/167x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/137x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/23/1977',
					eligibiltybegan: '04/24/1988',
					eligibiltyexpired: '08/24/2022',
				},
				{
					primary: true,
					active: true,
					membernumber: 'W-7203025743',
					company: 'Langosh and Sons',
					frontimage:
						'http://dummyimage.com/110x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/206x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/16/1987',
					eligibiltybegan: '12/09/1973',
					eligibiltyexpired: '01/05/2013',
				},
				{
					primary: true,
					active: false,
					membernumber: 'C-5122229277',
					company: 'Pfeffer LLC',
					frontimage:
						'http://dummyimage.com/132x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/136x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/30/1975',
					eligibiltybegan: '09/30/1987',
					eligibiltyexpired: '05/24/1964',
				},
				{
					primary: true,
					active: false,
					membernumber: 'O-9280074436',
					company: 'Gerhold Group',
					frontimage:
						'http://dummyimage.com/230x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/16/2013',
					eligibiltybegan: '08/12/2003',
					eligibiltyexpired: '04/30/2013',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-8429561000',
					company: 'Bauch Group',
					frontimage:
						'http://dummyimage.com/168x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/178x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/15/2012',
					eligibiltybegan: '09/17/1984',
					eligibiltyexpired: '12/05/2007',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-1169903647',
					company: 'Stark-Dicki',
					frontimage:
						'http://dummyimage.com/203x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/106x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/15/1952',
					eligibiltybegan: '03/06/1989',
					eligibiltyexpired: '12/17/1962',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '3E0N8HZ',
					performed_by: 'Tara Deverson',
					date: 2005,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0QB80ZX',
					performed_by: 'Philippine Dufour',
					date: 2021,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05BL4ZZ',
					performed_by: 'Lyndell Cranidge',
					date: 1964,
					additional_information:
						'orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi',
				},
				{
					ICD10procedurecode: '041C0ZC',
					performed_by: 'Juli Sandars',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SPHX0Z',
					performed_by: 'Pegeen Giurio',
					date: 2018,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'CW1MGZZ',
					performed_by: 'Kincaid Bindley',
					date: 2004,
					additional_information:
						'quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris',
				},
			],
		},
		ssn: '067803685',
	},
	{
		id: 47,
		details: {
			first_name: 'Tyler',
			last_name: 'Killerby',
			middle_name: 'tkillerby1a@devhub.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2 Mariners Cove Crossing',
			address_two: null,
			city: 'Lynchburg',
			state: 'VA',
			zip: '24515',
			date_of_birth: '1956-11-04T02:00:47Z',
			contact_methods: [
				{
					number: '101-521-6226',
					notes: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
				{
					number: '379-666-9719',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S8920',
					ICD10diagnosislongdescription:
						'Unspecified physeal fracture of upper end of fibula',
					ICD10diagnosisshortdescription:
						'Unspecified physeal fracture of upper end of fibula',
					medications: [
						{
							drugname:
								'Echinacea, Colchicum Autumnale, Aloe Socotrina, Colocynthis, Mercurius Corrosivus, Nux Vomica, Arsenicum Album',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Laurene Bing',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T2070XS',
					ICD10diagnosislongdescription:
						'Corrosion of third degree of head, face, and neck, unspecified site, sequela',
					ICD10diagnosisshortdescription:
						'Corros third degree of head, face, and neck, unsp site, sqla',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S83111A',
					ICD10diagnosislongdescription:
						'Anterior subluxation of proximal end of tibia, right knee, initial encounter',
					ICD10diagnosisshortdescription:
						'Anterior sublux of proximal end of tibia, right knee, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T83719D',
					ICD10diagnosislongdescription:
						'Erosion of other prosthetic materials to surrounding organ or tissue, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Erosion of other prosth materials to surrnd org/tiss, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M0603',
					ICD10diagnosislongdescription:
						'Rheumatoid arthritis without rheumatoid factor, wrist',
					ICD10diagnosisshortdescription:
						'Rheumatoid arthritis without rheumatoid factor, wrist',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Simmonds Garbett',
						},
						{
							drugname: 'Isopropyl Alcohol',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Sonja Whittington',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T23742',
					ICD10diagnosislongdescription:
						'Corrosion of third degree of multiple left fingers (nail), including thumb',
					ICD10diagnosisshortdescription:
						'Corrosion of 3rd deg mu left fingers (nail), including thumb',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'O355XX4',
					ICD10diagnosislongdescription:
						'Maternal care for (suspected) damage to fetus by drugs, fetus 4',
					ICD10diagnosisshortdescription:
						'Maternal care for damage to fetus by drugs, fetus 4',
					medications: [
						{
							drugname: 'DIMETHICONE and ZINC OXIDE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Mirabel Rotte',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Milena Piecha',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S55992D',
					ICD10diagnosislongdescription:
						'Other specified injury of unspecified blood vessel at forearm level, left arm, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Inj unsp blood vessel at forearm level, left arm, subs',
					medications: [
						{
							drugname: 'Pantoprazole sodium',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Lynda Cancellario',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Krystle Knowlden',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Courtnay Flieg',
						},
						{
							drugname: 'Titanium dioxide',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Georgena Piel',
						},
						{
							drugname: 'Terazosin Hydrochloride Anhydrous',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Arney Dawe',
						},
						{
							drugname: 'OCTINOXATE, TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Tome Cardenas',
						},
						{
							drugname:
								'OCTINOXATE, TITANIUM DIOXIDE, ZINC OXIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ervin Torri',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'X-2139695883',
					company: 'Emard, Bechtelar and Reichel',
					frontimage:
						'http://dummyimage.com/151x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/116x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/24/1983',
					eligibiltybegan: '08/23/1986',
					eligibiltyexpired: '01/22/1973',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-4643807553',
					company: 'Bergnaum-Parker',
					frontimage:
						'http://dummyimage.com/184x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/10/2011',
					eligibiltybegan: '06/26/2022',
					eligibiltyexpired: '09/04/1969',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Z-6215201259',
					company: 'Tillman, Little and Kub',
					frontimage:
						'http://dummyimage.com/151x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/240x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/29/1962',
					eligibiltybegan: '11/29/1973',
					eligibiltyexpired: '05/20/1980',
				},
				{
					primary: true,
					active: false,
					membernumber: 'L-3225541331',
					company: 'Fadel-Abernathy',
					frontimage:
						'http://dummyimage.com/111x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/177x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/05/1965',
					eligibiltybegan: '04/20/1996',
					eligibiltyexpired: '08/10/1957',
				},
				{
					primary: true,
					active: true,
					membernumber: 'P-6028918578',
					company: 'Hirthe, Bruen and Gutmann',
					frontimage:
						'http://dummyimage.com/157x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/24/1983',
					eligibiltybegan: '11/17/1956',
					eligibiltyexpired: '06/16/1995',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-9707290188',
					company: 'Kirlin, Kreiger and Hessel',
					frontimage:
						'http://dummyimage.com/131x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/173x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/19/2000',
					eligibiltybegan: '09/27/1956',
					eligibiltyexpired: '02/18/1951',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-3631245958',
					company: 'Gibson and Sons',
					frontimage:
						'http://dummyimage.com/135x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/108x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/14/1992',
					eligibiltybegan: '09/14/2005',
					eligibiltyexpired: '02/25/1976',
				},
				{
					primary: false,
					active: false,
					membernumber: 'O-6299663205',
					company: 'Bechtelar LLC',
					frontimage:
						'http://dummyimage.com/125x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/158x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/05/1963',
					eligibiltybegan: '11/18/1992',
					eligibiltyexpired: '06/18/1979',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0PQ3XZZ',
					performed_by: 'Taylor Mathevon',
					date: 2002,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0PRM4JZ',
					performed_by: 'Padraig Joderli',
					date: 1982,
					additional_information:
						'in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer',
				},
			],
		},
		ssn: '307041840',
	},
	{
		id: 48,
		details: {
			first_name: 'Xena',
			last_name: 'Cisco',
			middle_name: 'xcisco1b@toplist.cz',
			gender: 'Genderqueer',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '0 Redwing Alley',
			address_two: null,
			city: 'Stamford',
			state: 'CT',
			zip: '06922',
			date_of_birth: '1971-01-15T05:32:31Z',
			contact_methods: [
				{ number: '790-184-9042', notes: null },
				{ number: '163-404-5742', notes: null },
				{
					number: '277-717-1351',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'Q18',
					ICD10diagnosislongdescription:
						'Other congenital malformations of face and neck',
					ICD10diagnosisshortdescription:
						'Other congenital malformations of face and neck',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'I-4787041290',
					company: 'Kutch, Larkin and Cormier',
					frontimage:
						'http://dummyimage.com/202x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/109x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/01/1958',
					eligibiltybegan: '03/31/2017',
					eligibiltyexpired: '05/30/1996',
				},
				{
					primary: false,
					active: true,
					membernumber: 'R-0785031654',
					company: 'Hoeger-Mills',
					frontimage:
						'http://dummyimage.com/119x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/16/2021',
					eligibiltybegan: '08/16/1965',
					eligibiltyexpired: '06/15/1995',
				},
				{
					primary: true,
					active: true,
					membernumber: 'H-4523657040',
					company: 'Feil Inc',
					frontimage:
						'http://dummyimage.com/132x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/179x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/20/2017',
					eligibiltybegan: '02/06/1968',
					eligibiltyexpired: '08/06/2012',
				},
			],
			surgicalhistory: null,
		},
		ssn: '526978456',
	},
	{
		id: 49,
		details: {
			first_name: 'Fredia',
			last_name: 'Giberd',
			middle_name: 'fgiberd1c@huffingtonpost.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '0 Warner Hill',
			address_two: null,
			city: 'Clearwater',
			state: 'FL',
			zip: '34615',
			date_of_birth: '1976-05-02T23:12:19Z',
			contact_methods: [
				{ number: '732-696-9423', notes: null },
				{
					number: '628-909-9429',
					notes: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				},
				{
					number: '704-975-1009',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.',
				},
				{
					number: '131-545-8249',
					notes: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{
					allergy: 'animals',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
				},
				{
					allergy: 'peanut',
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
				},
				{
					allergy: null,
					notes: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'V851XXA',
					ICD10diagnosislongdescription:
						'Passenger of special construction vehicle injured in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Passenger of special construct vehicle injured in traf, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Pip Durbann',
						},
						{
							drugname: 'Butalbital, Acetaminophen, and Caffeine',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Melisande Elen',
						},
						{
							drugname:
								'BENZALKONIUM CHLORIDE, ASPIRIN, IBUPROFEN, ISOPROPYL ALCOHOL, BENZOCAINE, SD ALCOHOL, BACITRACIN ZINC, NEOMYCIN SULFATE, POLYMYXIN B SULFATE, ACETAMINOPHEN, DIPHENHYDRAMINE CHLORIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Mychal Chevers',
						},
						{
							drugname: 'RANITIDINE HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Brant Harme',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S72102N',
					ICD10diagnosislongdescription:
						'Unspecified trochanteric fracture of left femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion',
					ICD10diagnosisshortdescription:
						'Unsp trochan fx l femr, 7thN',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Felix Cathcart',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S37402',
					ICD10diagnosislongdescription:
						'Unspecified injury of ovary, bilateral',
					ICD10diagnosisshortdescription:
						'Unspecified injury of ovary, bilateral',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'C-0985434048',
					company: 'Jerde-Cartwright',
					frontimage:
						'http://dummyimage.com/187x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/07/2002',
					eligibiltybegan: '01/07/2018',
					eligibiltyexpired: '10/25/2007',
				},
				{
					primary: false,
					active: true,
					membernumber: 'L-0618189888',
					company: 'Breitenberg Inc',
					frontimage:
						'http://dummyimage.com/118x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/194x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/04/1986',
					eligibiltybegan: '01/30/2005',
					eligibiltyexpired: '12/18/2004',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-2273780195',
					company: 'Daugherty Inc',
					frontimage:
						'http://dummyimage.com/103x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/242x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/23/2017',
					eligibiltybegan: '06/12/2006',
					eligibiltyexpired: '11/04/1965',
				},
				{
					primary: false,
					active: false,
					membernumber: 'T-6244444504',
					company: "O'Keefe and Sons",
					frontimage:
						'http://dummyimage.com/234x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/25/2004',
					eligibiltybegan: '06/01/1997',
					eligibiltyexpired: '11/11/1989',
				},
				{
					primary: true,
					active: true,
					membernumber: 'V-9689546421',
					company: 'Goodwin Group',
					frontimage:
						'http://dummyimage.com/157x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/20/1975',
					eligibiltybegan: '10/12/1984',
					eligibiltyexpired: '09/23/1992',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '08W0XDZ',
					performed_by: 'Puff Simcock',
					date: 1995,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05HH43Z',
					performed_by: 'Silvester Fawson',
					date: 2002,
					additional_information:
						'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet',
				},
				{
					ICD10procedurecode: '04Q50ZZ',
					performed_by: 'Celene Cabrara',
					date: 1987,
					additional_information:
						'nunc proin at turpis a pede posuere nonummy integer non',
				},
				{
					ICD10procedurecode: '0LRM47Z',
					performed_by: 'Morgan Cheves',
					date: 1966,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'BU160ZZ',
					performed_by: 'Pattie Georgeot',
					date: 2003,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D120Z4',
					performed_by: 'Tomlin Keattch',
					date: 1970,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0YH901Z',
					performed_by: 'Shelia Lammiman',
					date: 2016,
					additional_information:
						'morbi quis tortor id nulla ultrices aliquet maecenas leo odio',
				},
				{
					ICD10procedurecode: '0GBH4ZZ',
					performed_by: 'Joelie Dooler',
					date: 1967,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06WY42Z',
					performed_by: 'Calla Pessler',
					date: 2009,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RG23K0',
					performed_by: 'Dayle Lillie',
					date: 2003,
					additional_information:
						'nulla tellus in sagittis dui vel nisl duis ac nibh fusce',
				},
			],
		},
		ssn: '489018674',
	},
	{
		id: 50,
		details: {
			first_name: 'Mavis',
			last_name: 'Redhouse',
			middle_name: 'mredhouse1d@youtube.com',
			gender: 'Female',
			preffered_name: null,
			address_one: '7636 Browning Park',
			address_two: null,
			city: 'New York City',
			state: 'NY',
			zip: '10019',
			date_of_birth: '2004-09-18T13:19:21Z',
			contact_methods: [
				{ number: '855-619-3109', notes: null },
				{
					number: '225-692-8352',
					notes: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
				},
				{
					number: '789-278-0205',
					notes: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: null,
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'Q-7083109052',
					company: 'Lebsack Inc',
					frontimage:
						'http://dummyimage.com/118x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/193x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/29/2006',
					eligibiltybegan: '02/17/2017',
					eligibiltyexpired: '08/02/1979',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Z-8623871879',
					company: 'Stroman, Pouros and Fritsch',
					frontimage:
						'http://dummyimage.com/160x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/226x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/03/2017',
					eligibiltybegan: '05/07/1961',
					eligibiltyexpired: '08/14/2004',
				},
			],
			surgicalhistory: null,
		},
		ssn: '527390694',
	},
	{
		id: 51,
		details: {
			first_name: 'Tybi',
			last_name: 'Bertlin',
			middle_name: 'tbertlin1e@wp.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '85 Caliangt Alley',
			address_two: null,
			city: 'Pittsburgh',
			state: 'PA',
			zip: '15261',
			date_of_birth: '1955-10-25T03:10:16Z',
			contact_methods: [
				{ number: '354-725-9554', notes: null },
				{ number: '763-510-5113', notes: null },
				{ number: '385-240-5983', notes: null },
				{ number: '839-679-8486', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'W28XXXD',
					ICD10diagnosislongdescription:
						'Contact with powered lawn mower, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Contact with powered lawn mower, subsequent encounter',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S34104',
					ICD10diagnosislongdescription:
						'Unspecified injury to L4 level of lumbar spinal cord',
					ICD10diagnosisshortdescription:
						'Unspecified injury to L4 level of lumbar spinal cord',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Paola Aleavy',
						},
						{
							drugname: 'Valacyclovir Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Cam Trinder',
						},
						{
							drugname: 'Lamotrigine',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Trefor Kimmins',
						},
						{
							drugname:
								'Acetaminophen, Diphenhydramine hydrochloride, Phenylephrine hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Yehudit Kintzel',
						},
						{
							drugname: 'carbamazepine',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Dre Wicher',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Krystle Hutchison',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T40693D',
					ICD10diagnosislongdescription:
						'Poisoning by other narcotics, assault, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by other narcotics, assault, subsequent encounter',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kaitlin Carse',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Malory Streader',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L851',
					ICD10diagnosislongdescription:
						'Acquired keratosis [keratoderma] palmaris et plantaris',
					ICD10diagnosisshortdescription:
						'Acquired keratosis [keratoderma] palmaris et plantaris',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S75012D',
					ICD10diagnosislongdescription:
						'Minor laceration of femoral artery, left leg, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Minor laceration of femoral artery, left leg, subs encntr',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Larissa Jarrad',
						},
						{
							drugname:
								'Acetaminophen, Chlorpheniramine maleate, Dextromethorphan hydrobromide',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Nessa Feldklein',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Timofei Pauletto',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Kerianne Malam',
						},
						{
							drugname: 'Ciprofloxacin Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Colin Wrought',
						},
						{
							drugname: 'Promethazine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Nancie Clissett',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Adelle Leall',
						},
						{
							drugname: 'megestrol acetate',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: "Fee O'Devey",
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan HBr, Doxylamine Succinate',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Annora Baildon',
						},
						{
							drugname:
								'HYDROCODONE BITARTRATE AND ACETAMINOPHEN',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Lind Ditty',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T422X6D',
					ICD10diagnosislongdescription:
						'Underdosing of succinimides and oxazolidinediones, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Underdosing of succinimides and oxazolidinediones, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Baryram Kupke',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42239G',
					ICD10diagnosislongdescription:
						'3-part fracture of surgical neck of unspecified humerus, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'3-part fx surg neck of unsp humer, subs for fx w delay heal',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Elise Phelit',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Junina Kirgan',
						},
						{
							drugname: 'Carisoprodol',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Clive Matthisson',
						},
						{
							drugname:
								'Arsenicum album, Baptisia tinctoria, Berberis vulgaris, Bryonia, Carduus marianus, Chelidonium majus, Chionanthus virginica, Cinchona officinalis, Lycopodium clavatum, Manganum muriaticum, Natrum sulphuricum, Nux vomica, Phosphorus, Sulphur, Taraxacum officinale',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Noe Owers',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Javier Lerway',
						},
						{
							drugname: 'Dexamethasone',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Towny Schrader',
						},
						{
							drugname: 'Montelukast',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Damon Espy',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan, Phenylephrine',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Joletta Woodgate',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92909B',
					ICD10diagnosislongdescription:
						'Unspecified fracture of unspecified foot, initial encounter for open fracture',
					ICD10diagnosisshortdescription:
						'Unsp fracture of unsp foot, init encntr for open fracture',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S56101',
					ICD10diagnosislongdescription:
						'Unspecified injury of flexor muscle, fascia and tendon of right index finger at forearm level',
					ICD10diagnosisshortdescription:
						'Unsp injury of flexor musc/fasc/tend r idx fngr at forarm lv',
					medications: [
						{
							drugname: 'ARABICA COFFEE BEAN',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Harrietta Corns',
						},
						{
							drugname: 'OCTINOXATE and TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Millisent Bittany',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Judi Hagard',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Ward Ivison',
						},
						{
							drugname: 'topiramate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Orly Sanpher',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'Q-1757787417',
					company: 'Emard, DuBuque and McLaughlin',
					frontimage:
						'http://dummyimage.com/194x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/158x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/19/2014',
					eligibiltybegan: '11/02/1967',
					eligibiltyexpired: '06/23/1963',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-9998014491',
					company: 'Mraz and Sons',
					frontimage:
						'http://dummyimage.com/169x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/230x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/28/1986',
					eligibiltybegan: '12/23/2009',
					eligibiltyexpired: '09/17/2008',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-6046304105',
					company: 'Kirlin, Romaguera and Lynch',
					frontimage:
						'http://dummyimage.com/138x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/179x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/20/2002',
					eligibiltybegan: '08/13/1955',
					eligibiltyexpired: '12/23/1956',
				},
				{
					primary: true,
					active: false,
					membernumber: 'C-2041148910',
					company: 'Leffler, Bogan and Hartmann',
					frontimage:
						'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/112x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/19/2009',
					eligibiltybegan: '06/06/1960',
					eligibiltyexpired: '02/10/2005',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-9698514465',
					company: 'Treutel-Willms',
					frontimage:
						'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/200x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/11/1994',
					eligibiltybegan: '08/15/2012',
					eligibiltyexpired: '12/04/1984',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Z-2485321847',
					company: 'Little and Sons',
					frontimage:
						'http://dummyimage.com/223x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/110x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/18/1959',
					eligibiltybegan: '07/31/1991',
					eligibiltyexpired: '12/04/1981',
				},
				{
					primary: false,
					active: true,
					membernumber: 'C-9355616083',
					company: 'Kihn Group',
					frontimage:
						'http://dummyimage.com/122x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/23/1988',
					eligibiltybegan: '12/30/1964',
					eligibiltyexpired: '08/22/1984',
				},
			],
			surgicalhistory: null,
		},
		ssn: '374313700',
	},
	{
		id: 52,
		details: {
			first_name: 'Farr',
			last_name: 'Oriel',
			middle_name: 'foriel1f@smugmug.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '8008 Oxford Terrace',
			address_two: null,
			city: 'Phoenix',
			state: 'AZ',
			zip: '85005',
			date_of_birth: '1983-07-04T23:46:49Z',
			contact_methods: [
				{ number: '437-832-2253', notes: null },
				{ number: '742-774-8372', notes: null },
				{ number: '235-961-9146', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T83191A',
					ICD10diagnosislongdescription:
						'Other mechanical complication of implanted urinary sphincter, initial encounter',
					ICD10diagnosisshortdescription:
						'Mech compl of implanted urinary sphincter, initial encounter',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S42452K',
					ICD10diagnosislongdescription:
						'Displaced fracture of lateral condyle of left humerus, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Disp fx of lateral condyle of l humer, 7thK',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Darla Teek',
						},
						{
							drugname: 'Oxygen',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Jackson Wolstenholme',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Honor Blackshaw',
						},
						{
							drugname: 'Midazolam Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Derby Loughton',
						},
						{
							drugname: 'Captopril',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ava Dunkerly',
						},
						{
							drugname: 'CEFIXIME',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Auria Veryard',
						},
						{
							drugname: 'Titanium dioxide',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Kristoffer Castellet',
						},
						{
							drugname: 'Lidocaine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Joannes Winspeare',
						},
						{
							drugname: 'Aspirin',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Stacia Whittington',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42133A',
					ICD10diagnosislongdescription:
						'Displaced fracture of coracoid process, unspecified shoulder, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Disp fx of coracoid process, unsp shoulder, init for clos fx',
					medications: [
						{
							drugname: 'Allergenic Extracts Alum Precipitated',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Elisabeth Catlette',
						},
						{
							drugname: 'Terazosin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Emmye Alessandretti',
						},
						{
							drugname: 'topiramate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Grata Bernardet',
						},
						{
							drugname: 'Guaifenesin',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Boris Geare',
						},
						{
							drugname: 'Helium',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Hamlin Roseveare',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42152K',
					ICD10diagnosislongdescription:
						'Displaced fracture of neck of scapula, left shoulder, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Disp fx of neck of scapula, l shldr, subs for fx w nonunion',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'T-9418169704',
					company: 'Kihn LLC',
					frontimage:
						'http://dummyimage.com/223x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/191x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/29/1963',
					eligibiltybegan: '05/17/1963',
					eligibiltyexpired: '05/10/1988',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-0940058443',
					company: "O'Keefe and Sons",
					frontimage:
						'http://dummyimage.com/152x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/214x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/10/1974',
					eligibiltybegan: '05/17/1994',
					eligibiltyexpired: '06/02/2015',
				},
				{
					primary: true,
					active: true,
					membernumber: 'T-5754651791',
					company: 'Shanahan and Sons',
					frontimage:
						'http://dummyimage.com/126x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/160x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/14/1974',
					eligibiltybegan: '01/12/2012',
					eligibiltyexpired: '10/23/1954',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0RJH3ZZ',
					performed_by: 'Lynea Horwell',
					date: 2016,
					additional_information: null,
				},
			],
		},
		ssn: '270685878',
	},
	{
		id: 53,
		details: {
			first_name: 'Pacorro',
			last_name: 'Crennan',
			middle_name: 'pcrennan1g@hubpages.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '7 Lawn Court',
			address_two: null,
			city: 'Albuquerque',
			state: 'NM',
			zip: '87180',
			date_of_birth: '1957-03-13T03:08:52Z',
			contact_methods: [{ number: '893-981-8274', notes: null }],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S70911D',
					ICD10diagnosislongdescription:
						'Unspecified superficial injury of right hip, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unspecified superficial injury of right hip, subs encntr',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Janela Tampion',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M00112',
					ICD10diagnosislongdescription:
						'Pneumococcal arthritis, left shoulder',
					ICD10diagnosisshortdescription:
						'Pneumococcal arthritis, left shoulder',
					medications: [
						{
							drugname: 'maprotiline hydrochloride',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Cyndie Wash',
						},
						{
							drugname: 'Sodium Fluoride and Triclosan',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Gracia Kaplan',
						},
						{
							drugname: 'SODIUM FLUORIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Joice Jarley',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Dorey Halahan',
						},
						{
							drugname: 'Titanium Dioxide and Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Dudley Withur',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Lonna Zaniolo',
						},
						{
							drugname: 'salicylic acid',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Saba Etchell',
						},
						{
							drugname: 'magnesium hydroxide',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Morse Normand',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T6404XS',
					ICD10diagnosislongdescription:
						'Toxic effect of aflatoxin, undetermined, sequela',
					ICD10diagnosisshortdescription:
						'Toxic effect of aflatoxin, undetermined, sequela',
					medications: [
						{
							drugname: 'sodium phosphate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Carroll Lamswood',
						},
						{
							drugname: 'risperidone',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Tedd Hartzenberg',
						},
						{
							drugname:
								'Elaps corallinus, Arg. nit., Bryonia, Calc. carb., Colocynthis, Convallaria, Crotalus horridus, Cuprum met., Digitalis, Gelsemium, Hypericum, Kali carb., Lachesis, Lathyrus sativus, Lilium, Mag. phos., Nux vom., Rhus toxicodendron, Silicea, Stramonium, Veratrum viride, Echinacea',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Baird Kluss',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Martin Stratton',
						},
						{
							drugname:
								'ascorbic acid and cholecalciferol and sodium fluoride and vitamin A palmitate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Wald Thorndale',
						},
						{
							drugname:
								'Baptisia tinctoria, Echinacea, Allium cepa, Ambrosia artemisiaefolia, Arsenicum album, Euphrasia officinalis, Natrum sulphuricum, Nux vomica, Phosphorus, Pulsatilla, Solidago virgaurea, Sulphur,',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Gustave Welds',
						},
						{
							drugname: 'fentanyl',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Brittani McNally',
						},
						{
							drugname: 'amlodipine besylate',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Maximilien Franciotti',
						},
						{
							drugname: 'barium sulfate',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Tootsie Cowhig',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S21009S',
					ICD10diagnosislongdescription:
						'Unspecified open wound of unspecified breast, sequela',
					ICD10diagnosisshortdescription:
						'Unspecified open wound of unspecified breast, sequela',
					medications: [
						{
							drugname:
								'Avobenzone, Octinoxate, Octisalate, Octocrylene',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Dorene Dominick',
						},
						{
							drugname: 'MENTHOL',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Joline Langthorn',
						},
						{
							drugname: 'Dextrose Monohydrate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Humbert Nelsen',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Elianora Clapson',
						},
						{
							drugname: 'Benzocaine',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Brittani McCaughren',
						},
						{
							drugname: 'Benzocaine',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Joycelin Zanetti',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Annmarie Gooke',
						},
						{
							drugname: 'VANCOMYCIN HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Hartley Hanhart',
						},
						{
							drugname: 'methylcellulose',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lazarus Giveen',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T85731D',
					ICD10diagnosislongdescription:
						'Infection and inflammatory reaction due to implanted electronic neurostimulator of brain, electrode (lead), subsequent encounter',
					ICD10diagnosisshortdescription:
						'I/I react d/t implnt elec nstim of brain, lead, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'C5062',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of axillary tail of breast, male',
					ICD10diagnosisshortdescription:
						'Malignant neoplasm of axillary tail of breast, male',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'S-8366662540',
					company: 'Swaniawski LLC',
					frontimage:
						'http://dummyimage.com/220x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/202x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/07/1954',
					eligibiltybegan: '06/19/1957',
					eligibiltyexpired: '04/27/1963',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0X9G3ZX',
					performed_by: 'Alisun Reddish',
					date: 1962,
					additional_information: null,
				},
				{
					ICD10procedurecode: '059F40Z',
					performed_by: 'Janey Pittock',
					date: 1994,
					additional_information:
						'ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi',
				},
				{
					ICD10procedurecode: '0SHH35Z',
					performed_by: 'Mohammed Weatherhead',
					date: 1985,
					additional_information:
						'augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent',
				},
				{
					ICD10procedurecode: 'BW191ZZ',
					performed_by: 'Adiana Aven',
					date: 1953,
					additional_information:
						'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus',
				},
			],
		},
		ssn: '851226739',
	},
	{
		id: 54,
		details: {
			first_name: 'Pierre',
			last_name: 'Layborn',
			middle_name: 'playborn1h@php.net',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '21328 Utah Lane',
			address_two: null,
			city: 'Santa Clara',
			state: 'CA',
			zip: '95054',
			date_of_birth: '2010-06-30T06:53:06Z',
			contact_methods: [
				{ number: '201-130-0425', notes: null },
				{ number: '385-236-1458', notes: null },
				{ number: '675-190-1385', notes: null },
				{ number: '998-481-7204', notes: null },
				{
					number: '370-196-2070',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{ allergy: 'peanut', notes: null },
				{
					allergy: 'animals',
					notes: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S2529XD',
					ICD10diagnosislongdescription:
						'Other specified injury of superior vena cava, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Other specified injury of superior vena cava, subs encntr',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V279XXS',
					ICD10diagnosislongdescription:
						'Unspecified motorcycle rider injured in collision with fixed or stationary object in traffic accident, sequela',
					ICD10diagnosisshortdescription:
						'Unsp mtrcy rider inj in clsn w statnry object in traf, sqla',
					medications: [
						{
							drugname: 'METHYL SALICYLATE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Alisun Hardes',
						},
						{
							drugname: 'Octinoxate, Octisalate, and Zinc',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Ginger Spragg',
						},
						{
							drugname: 'Rye Grain',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Micheil Sykora',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Lyn Snelgrove',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S8251XS',
					ICD10diagnosislongdescription:
						'Displaced fracture of medial malleolus of right tibia, sequela',
					ICD10diagnosisshortdescription:
						'Disp fx of medial malleolus of right tibia, sequela',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'U-0647804811',
					company: 'Nienow, Bartoletti and Bahringer',
					frontimage:
						'http://dummyimage.com/106x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/212x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/13/1975',
					eligibiltybegan: '01/20/1955',
					eligibiltyexpired: '11/15/1954',
				},
				{
					primary: true,
					active: false,
					membernumber: 'H-9886443198',
					company: 'Lakin-Emard',
					frontimage:
						'http://dummyimage.com/150x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/250x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/20/2010',
					eligibiltybegan: '10/21/1978',
					eligibiltyexpired: '02/22/1957',
				},
				{
					primary: true,
					active: false,
					membernumber: 'K-6889654735',
					company: 'Swaniawski, Waelchi and Donnelly',
					frontimage:
						'http://dummyimage.com/240x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/222x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/04/1985',
					eligibiltybegan: '11/09/2020',
					eligibiltyexpired: '09/28/1969',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '3E0G305',
					performed_by: 'Jacquelin Williamson',
					date: 1982,
					additional_information: null,
				},
			],
		},
		ssn: '564315529',
	},
	{
		id: 55,
		details: {
			first_name: 'Bradford',
			last_name: 'Canner',
			middle_name: 'bcanner1i@symantec.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '87436 Talisman Pass',
			address_two: null,
			city: 'Erie',
			state: 'PA',
			zip: '16534',
			date_of_birth: '1993-09-21T07:32:28Z',
			contact_methods: [
				{
					number: '375-313-0381',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S82254',
					ICD10diagnosislongdescription:
						'Nondisplaced comminuted fracture of shaft of right tibia',
					ICD10diagnosisshortdescription:
						'Nondisplaced comminuted fracture of shaft of right tibia',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Liv Fisby',
						},
						{
							drugname: 'Amlobenz',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Joelie Becconsall',
						},
						{
							drugname: 'Chloroxylenol',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Janaye Flode',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Fredek Marquot',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Delaney Woolerton',
						},
						{
							drugname: 'Acetaminophen, Diphenhydramine HCl',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Kai Voden',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Cirilo Mugford',
						},
						{
							drugname: 'Clonazepam',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Harriette Gudgen',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Roxy Hischke',
						},
						{
							drugname:
								'Chondrus Crispus, Glycyrrhiza Glabra, Sarsaparilla, Zingiber Officinale, Adrenalinum, Allium Cepa, Aralia Racemosa',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Charil Wilsone',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'D-6565021678',
					company: 'Gutmann, Smith and Crooks',
					frontimage:
						'http://dummyimage.com/197x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/164x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/19/1985',
					eligibiltybegan: '06/21/1952',
					eligibiltyexpired: '05/09/2014',
				},
				{
					primary: false,
					active: false,
					membernumber: 'V-1764909637',
					company: 'Kshlerin Group',
					frontimage:
						'http://dummyimage.com/149x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/157x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/16/1953',
					eligibiltybegan: '01/11/1970',
					eligibiltyexpired: '11/09/2012',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-8306739187',
					company: 'Marquardt, Crist and Murray',
					frontimage:
						'http://dummyimage.com/154x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/238x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/21/2018',
					eligibiltybegan: '08/01/1991',
					eligibiltyexpired: '09/07/2006',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-2334075462',
					company: 'Ledner LLC',
					frontimage:
						'http://dummyimage.com/182x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/247x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/21/2001',
					eligibiltybegan: '07/22/1974',
					eligibiltyexpired: '01/18/1951',
				},
				{
					primary: true,
					active: true,
					membernumber: 'L-1294170989',
					company: 'Dibbert, Vandervort and Gerlach',
					frontimage:
						'http://dummyimage.com/116x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/26/1987',
					eligibiltybegan: '03/31/2000',
					eligibiltyexpired: '07/20/1987',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-4473168077',
					company: 'Cummings Group',
					frontimage:
						'http://dummyimage.com/229x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/167x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/01/1993',
					eligibiltybegan: '09/10/1977',
					eligibiltyexpired: '11/13/2001',
				},
				{
					primary: true,
					active: true,
					membernumber: 'S-8311835104',
					company: 'Ratke LLC',
					frontimage:
						'http://dummyimage.com/166x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/248x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/12/2010',
					eligibiltybegan: '01/24/1993',
					eligibiltyexpired: '05/10/1978',
				},
				{
					primary: false,
					active: true,
					membernumber: 'T-2352302380',
					company: 'Robel Inc',
					frontimage:
						'http://dummyimage.com/155x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/201x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/31/2015',
					eligibiltybegan: '10/05/2006',
					eligibiltyexpired: '05/13/1961',
				},
				{
					primary: true,
					active: true,
					membernumber: 'A-2506470067',
					company: 'Dicki, Hintz and Langosh',
					frontimage:
						'http://dummyimage.com/113x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/214x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/04/1952',
					eligibiltybegan: '09/13/1987',
					eligibiltyexpired: '05/29/1993',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '05HG0DZ',
					performed_by: 'Blake Raymond',
					date: 1961,
					additional_information:
						'ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac',
				},
				{
					ICD10procedurecode: '0QSF0ZZ',
					performed_by: 'Johny Aliman',
					date: 1993,
					additional_information:
						'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis',
				},
				{
					ICD10procedurecode: '06BM4ZX',
					performed_by: 'Freemon Colerick',
					date: 1981,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0XB90ZX',
					performed_by: 'Andromache Rumke',
					date: 1953,
					additional_information: null,
				},
			],
		},
		ssn: '245649299',
	},
	{
		id: 56,
		details: {
			first_name: 'Roselle',
			last_name: 'Cuddihy',
			middle_name: 'rcuddihy1j@tinyurl.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '98388 Harper Lane',
			address_two: null,
			city: 'Indianapolis',
			state: 'IN',
			zip: '46216',
			date_of_birth: '1986-11-23T07:36:15Z',
			contact_methods: [
				{ number: '374-768-6357', notes: null },
				{ number: '460-896-5134', notes: null },
				{ number: '865-720-4818', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M8935',
					ICD10diagnosislongdescription: 'Hypertrophy of bone, femur',
					ICD10diagnosisshortdescription:
						'Hypertrophy of bone, femur',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Arly Dudmesh',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Bernadette Clausewitz',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Thaxter Jillings',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Y-5091333253',
					company: 'Ratke-Mohr',
					frontimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/127x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/11/1977',
					eligibiltybegan: '10/07/1996',
					eligibiltyexpired: '02/26/2014',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-1030749570',
					company: 'Schroeder LLC',
					frontimage:
						'http://dummyimage.com/240x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/241x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/15/2001',
					eligibiltybegan: '02/07/2019',
					eligibiltyexpired: '11/26/1999',
				},
				{
					primary: false,
					active: true,
					membernumber: 'B-8238175898',
					company: 'Murphy Inc',
					frontimage:
						'http://dummyimage.com/153x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/111x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/29/2015',
					eligibiltybegan: '01/04/1950',
					eligibiltyexpired: '08/22/1976',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0VCJ4ZZ',
					performed_by: 'Christine Avey',
					date: 1979,
					additional_information: null,
				},
			],
		},
		ssn: '526082726',
	},
	{
		id: 57,
		details: {
			first_name: 'Nap',
			last_name: 'Lemmens',
			middle_name: 'nlemmens1k@reddit.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '041 Judy Crossing',
			address_two: null,
			city: 'Monticello',
			state: 'MN',
			zip: '55585',
			date_of_birth: '1968-12-15T07:40:11Z',
			contact_methods: [{ number: '413-693-2000', notes: null }],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T25192S',
					ICD10diagnosislongdescription:
						'Burn of first degree of multiple sites of left ankle and foot, sequela',
					ICD10diagnosisshortdescription:
						'Burn of first deg mult sites of left ankle and foot, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Brandise Rennebeck',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Vasili Totaro',
						},
						{
							drugname: 'Tamsulosin Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Linnie Mulloch',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Titus Kinnaird',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Sonnie Lougheed',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Jazmin Brake',
						},
						{
							drugname: 'Papaverine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Olwen Wabb',
						},
						{
							drugname: 'Fexofenadine HCl',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Ofelia Izaks',
						},
						{
							drugname: 'Quetiapine fumarate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Mack Roz',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T33011',
					ICD10diagnosislongdescription:
						'Superficial frostbite of right ear',
					ICD10diagnosisshortdescription:
						'Superficial frostbite of right ear',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V9037XA',
					ICD10diagnosislongdescription:
						'Drowning and submersion due to falling or jumping from crushed water-skis, initial encounter',
					ICD10diagnosisshortdescription:
						'Drown due to fall/jump fr crushed water-skis, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'L438',
					ICD10diagnosislongdescription: 'Other lichen planus',
					ICD10diagnosisshortdescription: 'Other lichen planus',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S66123A',
					ICD10diagnosislongdescription:
						'Laceration of flexor muscle, fascia and tendon of left middle finger at wrist and hand level, initial encounter',
					ICD10diagnosisshortdescription:
						'Lacerat flexor musc/fasc/tend l mid fngr at wrs/hnd lv, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S52366B',
					ICD10diagnosislongdescription:
						'Nondisplaced segmental fracture of shaft of radius, unspecified arm, initial encounter for open fracture type I or II',
					ICD10diagnosisshortdescription:
						'Nondisp seg fx shaft of rad, unsp arm, 7thB',
					medications: [
						{
							drugname: 'primidone',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Syd Eisikowitch',
						},
						{
							drugname: 'Bacitracin',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Wenda Splaven',
						},
						{
							drugname: 'Lidocaine',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Regine Puckett',
						},
						{
							drugname: 'OXYGEN',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Christine Colqueran',
						},
						{
							drugname:
								'CALENDULA OFFICINALIS FLOWERING TOP, Causticum, PHYTOLACCA AMERICANA ROOT, THUJA OCCIDENTALIS LEAFY TWIG, and SODIUM CHLORIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Brunhilda Dunnett',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Mil Wiz',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T86892',
					ICD10diagnosislongdescription:
						'Other transplanted tissue infection',
					ICD10diagnosisshortdescription:
						'Other transplanted tissue infection',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'O3673X5',
					ICD10diagnosislongdescription:
						'Maternal care for viable fetus in abdominal pregnancy, third trimester, fetus 5',
					ICD10diagnosisshortdescription:
						'Matern care for viable fetus in abd preg, third tri, fetus 5',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'D-9172225551',
					company: 'Ullrich, Jerde and Weissnat',
					frontimage:
						'http://dummyimage.com/101x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/23/1991',
					eligibiltybegan: '07/31/2022',
					eligibiltyexpired: '12/26/1974',
				},
				{
					primary: true,
					active: true,
					membernumber: 'R-0194684389',
					company: 'Paucek LLC',
					frontimage:
						'http://dummyimage.com/176x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/246x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/14/2020',
					eligibiltybegan: '09/08/1994',
					eligibiltyexpired: '12/31/1996',
				},
				{
					primary: false,
					active: false,
					membernumber: 'N-6799214990',
					company: 'Wehner, Murray and Ortiz',
					frontimage:
						'http://dummyimage.com/202x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/233x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/06/1963',
					eligibiltybegan: '11/30/1958',
					eligibiltyexpired: '06/23/2016',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-0354615522',
					company: 'Grimes, Rath and Cruickshank',
					frontimage:
						'http://dummyimage.com/100x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/105x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/31/1988',
					eligibiltybegan: '12/18/1992',
					eligibiltyexpired: '11/19/1976',
				},
				{
					primary: false,
					active: true,
					membernumber: 'M-0825530538',
					company: 'Rau-Anderson',
					frontimage:
						'http://dummyimage.com/111x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/08/1971',
					eligibiltybegan: '07/27/1964',
					eligibiltyexpired: '03/20/1980',
				},
				{
					primary: false,
					active: true,
					membernumber: 'O-8524637233',
					company: 'Schuppe-Bailey',
					frontimage:
						'http://dummyimage.com/127x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/250x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/09/2002',
					eligibiltybegan: '07/19/1998',
					eligibiltyexpired: '07/30/2004',
				},
				{
					primary: false,
					active: false,
					membernumber: 'L-1317665580',
					company: 'Satterfield-Koch',
					frontimage:
						'http://dummyimage.com/192x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/120x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/16/1975',
					eligibiltybegan: '12/21/2006',
					eligibiltyexpired: '06/04/1999',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'BT1D1ZZ',
					performed_by: 'Chaunce Boyda',
					date: 1978,
					additional_information:
						'a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla',
				},
				{
					ICD10procedurecode: '09U2X7Z',
					performed_by: 'Brion Akenhead',
					date: 2019,
					additional_information: null,
				},
				{
					ICD10procedurecode: '047Q056',
					performed_by: 'Bartholomeo Whetland',
					date: 1993,
					additional_information:
						'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien',
				},
				{
					ICD10procedurecode: '0DVC8DZ',
					performed_by: 'Kath Easterbrook',
					date: 1967,
					additional_information:
						'mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at',
				},
				{
					ICD10procedurecode: '0TWD0CZ',
					performed_by: 'Odelle Elgy',
					date: 2008,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0LPX40Z',
					performed_by: 'Brina Varnham',
					date: 2011,
					additional_information:
						'parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida',
				},
				{
					ICD10procedurecode: 'F0BZ02Z',
					performed_by: 'Cathe Joburn',
					date: 1994,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SNH3ZZ',
					performed_by: 'Dory Tew',
					date: 1999,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0JBH3ZX',
					performed_by: 'Meredithe Pavlishchev',
					date: 1984,
					additional_information:
						'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit',
				},
			],
		},
		ssn: '423474633',
	},
	{
		id: 58,
		details: {
			first_name: 'Valery',
			last_name: 'Jillett',
			middle_name: 'vjillett1l@fema.gov',
			gender: 'Female',
			preffered_name: null,
			address_one: '354 Corben Park',
			address_two: null,
			city: 'Sacramento',
			state: 'CA',
			zip: '94207',
			date_of_birth: '1980-03-29T01:56:18Z',
			contact_methods: [
				{ number: '451-735-0573', notes: null },
				{
					number: '303-165-0422',
					notes: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
				},
				{
					number: '331-247-5302',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
				{ number: '301-848-0358', notes: null },
				{ number: '894-826-8554', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: null,
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'W-1217344644',
					company: 'Purdy, Kirlin and Wisoky',
					frontimage:
						'http://dummyimage.com/218x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/239x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/28/1975',
					eligibiltybegan: '04/18/1998',
					eligibiltyexpired: '07/28/1987',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-9416529954',
					company: 'Treutel LLC',
					frontimage:
						'http://dummyimage.com/247x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/171x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/09/2008',
					eligibiltybegan: '07/16/2000',
					eligibiltyexpired: '04/16/1996',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '057A4DZ',
					performed_by: 'Morena Wigginton',
					date: 1962,
					additional_information:
						'ligula nec sem duis aliquam convallis nunc proin at turpis a',
				},
				{
					ICD10procedurecode: '0LU94KZ',
					performed_by: 'Trista Rudall',
					date: 1989,
					additional_information:
						'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque',
				},
				{
					ICD10procedurecode: '0RWL4KZ',
					performed_by: 'Paulita Begent',
					date: 1955,
					additional_information:
						'justo morbi ut odio cras mi pede malesuada in imperdiet',
				},
				{
					ICD10procedurecode: 'DG1597Z',
					performed_by: 'Leisha Biasetti',
					date: 1953,
					additional_information:
						'in lacus curabitur at ipsum ac tellus semper interdum mauris',
				},
			],
		},
		ssn: '802729145',
	},
	{
		id: 59,
		details: {
			first_name: 'Minerva',
			last_name: 'Aggott',
			middle_name: 'maggott1m@samsung.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '4539 Surrey Avenue',
			address_two: null,
			city: 'Paterson',
			state: 'NJ',
			zip: '07522',
			date_of_birth: '2022-05-25T08:07:24Z',
			contact_methods: [
				{ number: '783-971-0418', notes: null },
				{
					number: '891-570-3574',
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
				{ number: '632-577-1799', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
				{
					allergy: null,
					notes: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T63331S',
					ICD10diagnosislongdescription:
						'Toxic effect of venom of brown recluse spider, accidental (unintentional), sequela',
					ICD10diagnosisshortdescription:
						'Toxic effect of venom of brown recluse spider, acc, sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S43084A',
					ICD10diagnosislongdescription:
						'Other dislocation of right shoulder joint, initial encounter',
					ICD10diagnosisshortdescription:
						'Other dislocation of right shoulder joint, initial encounter',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S61310',
					ICD10diagnosislongdescription:
						'Laceration without foreign body of right index finger with damage to nail',
					ICD10diagnosisshortdescription:
						'Laceration w/o foreign body of r idx fngr w damage to nail',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Kiley Cutchie',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Correy Garaghan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M25322',
					ICD10diagnosislongdescription:
						'Other instability, left elbow',
					ICD10diagnosisshortdescription:
						'Other instability, left elbow',
					medications: [
						{
							drugname: 'CALENDULA OFFICINALIS FLOWERING TOP',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Adolphus Guerreru',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Jonah Dunsire',
						},
						{
							drugname: 'Carisoprodol',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Atalanta Legerton',
						},
						{
							drugname:
								'Chlorpheniramine maleate, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Aigneis Dunabie',
						},
						{
							drugname: 'Diphenhydramine HCl',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Frederich Moreinu',
						},
						{
							drugname: 'Sweetgum',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Cathee Emmines',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Alissa McGriffin',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Loella Work',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T2260XD',
					ICD10diagnosislongdescription:
						'Corrosion of second degree of shoulder and upper limb, except wrist and hand, unspecified site, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Corros 2nd deg of shldr/up lmb, ex wrs/hnd, unsp site, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Richart Jayme',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Johnath Postan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S61230S',
					ICD10diagnosislongdescription:
						'Puncture wound without foreign body of right index finger without damage to nail, sequela',
					ICD10diagnosisshortdescription:
						'Pnctr w/o fb of r idx fngr w/o damage to nail, sequela',
					medications: [
						{
							drugname: 'PIPERACILLIN SODIUM,TAZOBACTAM SODIUM',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Lauryn Pardi',
						},
						{
							drugname: 'Loperamide Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Vickie Trail',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Krystle Daout',
						},
						{
							drugname: 'Canary Grass',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Benjamin Caulcott',
						},
						{
							drugname: 'Naproxen Sodium',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Maren Milazzo',
						},
						{
							drugname:
								'Avobenzone and Homosalate and Octisalate and Octocrylene',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Ludovika Bosse',
						},
						{
							drugname:
								'Butalbital, Acetaminophen, Caffeine, and Codeine Phosphate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Kit Crolla',
						},
						{
							drugname: 'Desogestrel and Ethinyl Estradiol',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: "Livvie D'Onise",
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Debor Bresson',
						},
						{
							drugname:
								'Allergena Trees, Weeds and Grasses - Zone 5 Kids',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Hannis Nusche',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S62330P',
					ICD10diagnosislongdescription:
						'Displaced fracture of neck of second metacarpal bone, right hand, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Disp fx of nk of 2nd MC bone, r hand, subs for fx w malunion',
					medications: [
						{
							drugname: 'Treatment Set TS329678',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Philis Rewcastle',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T40694A',
					ICD10diagnosislongdescription:
						'Poisoning by other narcotics, undetermined, initial encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by other narcotics, undetermined, init encntr',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S3801XD',
					ICD10diagnosislongdescription:
						'Crushing injury of penis, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Crushing injury of penis, subsequent encounter',
					medications: [
						{
							drugname: 'Hepatitis B Vaccine (Recombinant)',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Kris Torrecilla',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Tracee Pearton',
						},
						{
							drugname: 'Gemfibrozil',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Gilbertine Berrey',
						},
						{
							drugname: 'Ondansetron',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Daloris Nayshe',
						},
						{
							drugname: 'Antihemophilic Factor (Recombinant)',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Bili Holbury',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Arnaldo Adne',
						},
						{
							drugname: 'Aspirin, Caffeine',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Brooks Haycox',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Klemens Jindrich',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Zorah Birds',
						},
						{
							drugname: 'Carbidopa and Levodopa',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ashby Bernardet',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'D-7806125536',
					company: 'Zieme-Simonis',
					frontimage:
						'http://dummyimage.com/206x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/226x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/26/1998',
					eligibiltybegan: '01/03/2003',
					eligibiltyexpired: '01/29/1993',
				},
				{
					primary: false,
					active: false,
					membernumber: 'W-8270493574',
					company: "O'Connell, O'Kon and Johnston",
					frontimage:
						'http://dummyimage.com/151x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/148x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/08/1961',
					eligibiltybegan: '11/02/1970',
					eligibiltyexpired: '02/26/2019',
				},
				{
					primary: true,
					active: true,
					membernumber: 'R-5865614198',
					company: 'Keebler LLC',
					frontimage:
						'http://dummyimage.com/193x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/112x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/02/1961',
					eligibiltybegan: '07/09/1968',
					eligibiltyexpired: '07/14/1999',
				},
				{
					primary: false,
					active: false,
					membernumber: 'D-0758038158',
					company: 'Baumbach, Sauer and Steuber',
					frontimage:
						'http://dummyimage.com/231x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/19/1965',
					eligibiltybegan: '04/12/2018',
					eligibiltyexpired: '05/19/1961',
				},
				{
					primary: true,
					active: false,
					membernumber: 'K-4950723234',
					company: 'Krajcik-Nicolas',
					frontimage:
						'http://dummyimage.com/171x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/22/1973',
					eligibiltybegan: '03/05/1982',
					eligibiltyexpired: '09/25/1964',
				},
				{
					primary: false,
					active: true,
					membernumber: 'U-4491018585',
					company: 'Langworth-Heaney',
					frontimage:
						'http://dummyimage.com/244x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/199x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/03/1973',
					eligibiltybegan: '05/31/1971',
					eligibiltyexpired: '04/15/1996',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '06QB4ZZ',
					performed_by: 'Juliane Swoffer',
					date: 1992,
					additional_information:
						'habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem',
				},
				{
					ICD10procedurecode: '037R346',
					performed_by: 'Mortie Morais',
					date: 2021,
					additional_information:
						'nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero',
				},
				{
					ICD10procedurecode: '09990ZX',
					performed_by: 'Homerus Morsley',
					date: 2011,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'DTY3CZZ',
					performed_by: 'Pebrook Merrifield',
					date: 1985,
					additional_information:
						'ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et',
				},
				{
					ICD10procedurecode: '02RV48Z',
					performed_by: 'Alfy Joincey',
					date: 2010,
					additional_information: null,
				},
				{
					ICD10procedurecode: '00BM0ZX',
					performed_by: 'Devland Zapata',
					date: 1965,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0NSP44Z',
					performed_by: 'Eirena Burlingame',
					date: 1979,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B31HZZZ',
					performed_by: 'Esther Boneham',
					date: 1986,
					additional_information:
						'mollis molestie lorem quisque ut erat curabitur gravida nisi at',
				},
				{
					ICD10procedurecode: '01BM3ZX',
					performed_by: 'Thorpe Armin',
					date: 1953,
					additional_information:
						'mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in',
				},
				{
					ICD10procedurecode: '0U900ZZ',
					performed_by: 'Boothe Hamlin',
					date: 1975,
					additional_information: null,
				},
			],
		},
		ssn: '440019304',
	},
	{
		id: 60,
		details: {
			first_name: 'Juli',
			last_name: 'Dearnaley',
			middle_name: 'jdearnaley1n@ycombinator.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '89887 Moulton Lane',
			address_two: null,
			city: 'Hampton',
			state: 'VA',
			zip: '23668',
			date_of_birth: '1999-10-16T05:37:08Z',
			contact_methods: [
				{
					number: '315-174-1258',
					notes: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
				{ number: '739-356-8200', notes: null },
				{ number: '237-743-5981', notes: null },
				{ number: '349-377-5490', notes: null },
				{
					number: '563-969-5713',
					notes: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'I69113',
					ICD10diagnosislongdescription:
						'Psychomotor deficit following nontraumatic intracerebral hemorrhage',
					ICD10diagnosisshortdescription:
						'Psychomotor deficit following ntrm intcrbl hemorrhage',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Horacio Gunderson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O3661X3',
					ICD10diagnosislongdescription:
						'Maternal care for excessive fetal growth, first trimester, fetus 3',
					ICD10diagnosisshortdescription:
						'Maternal care for excess fetal growth, first tri, fetus 3',
					medications: [
						{
							drugname: 'OXYCODONE HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Nellie McGeachie',
						},
						{
							drugname: 'acetylcysteine',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Averil Boyson',
						},
						{
							drugname: 'Hackberry',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Carolee Allewell',
						},
						{
							drugname: 'Divalproex Sodium',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Marv Brimilcome',
						},
						{
							drugname: 'Alcohol',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Chaddie Wolfinger',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Mauricio Lints',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Nancy Pauleit',
						},
						{
							drugname:
								'CleanWell Natural Orange Vanilla Hand Sanitizer',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Cookie Fluin',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S43016S',
					ICD10diagnosislongdescription:
						'Anterior dislocation of unspecified humerus, sequela',
					ICD10diagnosisshortdescription:
						'Anterior dislocation of unspecified humerus, sequela',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'V-3391156852',
					company: "O'Keefe-Rohan",
					frontimage:
						'http://dummyimage.com/231x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/139x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/19/1991',
					eligibiltybegan: '03/10/1972',
					eligibiltyexpired: '03/14/1985',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-4072527154',
					company: 'Schuppe LLC',
					frontimage:
						'http://dummyimage.com/151x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/12/1988',
					eligibiltybegan: '08/18/1998',
					eligibiltyexpired: '05/06/1956',
				},
				{
					primary: true,
					active: true,
					membernumber: 'K-7268237592',
					company: 'Kohler Inc',
					frontimage:
						'http://dummyimage.com/170x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/26/2019',
					eligibiltybegan: '12/07/1967',
					eligibiltyexpired: '04/30/1974',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-8788340710',
					company: 'Crist LLC',
					frontimage:
						'http://dummyimage.com/142x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/182x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/25/1982',
					eligibiltybegan: '09/17/1985',
					eligibiltyexpired: '08/30/1961',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-0024387984',
					company: 'Hane, Gorczany and Hudson',
					frontimage:
						'http://dummyimage.com/148x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/14/1976',
					eligibiltybegan: '10/27/2010',
					eligibiltyexpired: '01/16/1993',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '3E0G7BZ',
					performed_by: 'Delilah Ramsier',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0Y9L3ZZ',
					performed_by: 'Madeline Seyler',
					date: 2013,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0JPT0MZ',
					performed_by: 'Oona Iacomi',
					date: 1979,
					additional_information: null,
				},
			],
		},
		ssn: '618212803',
	},
	{
		id: 61,
		details: {
			first_name: 'Shay',
			last_name: 'Keneleyside',
			middle_name: 'skeneleyside1o@oakley.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '11 Bartillon Way',
			address_two: null,
			city: 'El Paso',
			state: 'TX',
			zip: '88589',
			date_of_birth: '2001-01-21T00:42:32Z',
			contact_methods: [
				{ number: '709-571-8597', notes: null },
				{ number: '623-510-1126', notes: null },
				{ number: '877-867-9975', notes: null },
				{
					number: '552-689-0445',
					notes: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
				},
				{ number: '309-209-8135', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				},
				{ allergy: null, notes: null },
				{ allergy: 'peanut', notes: null },
				{
					allergy: null,
					notes: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
				},
				{
					allergy: null,
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S32413D',
					ICD10diagnosislongdescription:
						'Displaced fracture of anterior wall of unspecified acetabulum, subsequent encounter for fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Disp fx of ant wall of unsp acetab, subs for fx w routn heal',
					medications: [
						{
							drugname: 'Escitalopram',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Adolph Rossant',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Georges Haslehurst',
						},
						{
							drugname: 'Benzocaine',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Lenette Seakin',
						},
						{
							drugname: 'diphenhydramine hydrochloride',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Godard Beauman',
						},
						{
							drugname: 'Saltbush',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Kermy Kuhle',
						},
						{
							drugname: 'Lamotrigine',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Tannie Alabastar',
						},
						{
							drugname:
								'Lidocaine Hydrochloride and Epinephrine Bitartrate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ainslee Jeandillou',
						},
						{
							drugname:
								'fexofenadine hydrochloride and pseudoephedrine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Ammamaria Bonevant',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T22661A',
					ICD10diagnosislongdescription:
						'Corrosion of second degree of right scapular region, initial encounter',
					ICD10diagnosisshortdescription:
						'Corrosion of second degree of right scapular region, init',
					medications: [
						{
							drugname:
								'FEXOFENADINE HYDROCHLORIDE and PSEUDOEPHEDRINE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Nikki Slora',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Saxe Allmark',
						},
						{
							drugname: 'ONDANSETRON HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: "D'arcy Byatt",
						},
						{
							drugname: 'OCTINOXATE, OCTISALATE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Cathryn Yorkston',
						},
						{
							drugname: 'amitriptyline hydrochloride',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Pris Tydeman',
						},
					],
				},
				{
					ICD10diagnosiscode: 'W1681',
					ICD10diagnosislongdescription:
						'Jumping or diving into other water striking water surface',
					ICD10diagnosisshortdescription:
						'Jumping or diving into other water striking water surface',
					medications: [
						{
							drugname: 'Aspirin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Powell Abbott',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Lizbeth Bonhan',
						},
						{
							drugname: 'Octinoxate and Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Adan Dechelette',
						},
						{
							drugname: 'Isopropyl alcohol',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Cherice Ebrall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63034A',
					ICD10diagnosislongdescription:
						'Dislocation of midcarpal joint of right wrist, initial encounter',
					ICD10diagnosisshortdescription:
						'Dislocation of midcarpal joint of right wrist, init encntr',
					medications: [
						{
							drugname: 'Sotalol Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Yetta Vanyarkin',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Bernie Landy',
						},
						{
							drugname: 'Aluminum Chlorohydrate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Judie Sponer',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: "Laverna O'Crowley",
						},
						{
							drugname: 'BUDESONIDE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Maddalena Sutterfield',
						},
						{
							drugname: 'Oxcarbazepine',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Gerhardine Minucci',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S24153D',
					ICD10diagnosislongdescription:
						'Other incomplete lesion at T7-T10 level of thoracic spinal cord, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Oth incomplete lesion at T7-T10, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'O4452',
					ICD10diagnosislongdescription:
						'Low lying placenta with hemorrhage, second trimester',
					ICD10diagnosisshortdescription:
						'Low lying placenta with hemorrhage, second trimester',
					medications: [
						{
							drugname: 'ANASTROZOLE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Gaby Peron',
						},
						{
							drugname: 'VANCOMYCIN HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Sibel Castaneda',
						},
						{
							drugname: 'OCTINOXATE and TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Janaye Sidey',
						},
						{
							drugname: 'zolpidem tartrate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Kort Spanton',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Kira Bachman',
						},
						{
							drugname: 'Tree Mix 5',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Felike Libri',
						},
						{
							drugname: 'Gabapentin',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Gabrila Dorber',
						},
						{
							drugname: 'URTICA URENS',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Nichole Pottery',
						},
						{
							drugname: 'Acetaminophen, Dextromethorphan HBr',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Abbe Meneyer',
						},
						{
							drugname: 'finasteride',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Der Carbine',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T23101A',
					ICD10diagnosislongdescription:
						'Burn of first degree of right hand, unspecified site, initial encounter',
					ICD10diagnosisshortdescription:
						'Burn of first degree of right hand, unsp site, init encntr',
					medications: [
						{
							drugname: 'Poplar',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Alanna Olenchenko',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S96022D',
					ICD10diagnosislongdescription:
						'Laceration of muscle and tendon of long flexor muscle of toe at ankle and foot level, left foot, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Lacerat msl/tnd lng flxr msl toe at ank/ft lev, l foot, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Dorolice Philippson',
						},
						{
							drugname: 'GUAIFENESIN and PHENYLEPHRINE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Meade Gourdon',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'F-4329089084',
					company: 'Pollich, Bernier and Maggio',
					frontimage:
						'http://dummyimage.com/245x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/100x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/07/1960',
					eligibiltybegan: '09/09/2004',
					eligibiltyexpired: '04/09/1999',
				},
				{
					primary: true,
					active: true,
					membernumber: 'S-6656198805',
					company: 'Abshire Group',
					frontimage:
						'http://dummyimage.com/163x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/166x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/26/1997',
					eligibiltybegan: '03/02/1963',
					eligibiltyexpired: '01/28/1986',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-8041075582',
					company: 'Grady-Schoen',
					frontimage:
						'http://dummyimage.com/210x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/114x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/10/2014',
					eligibiltybegan: '06/04/2019',
					eligibiltyexpired: '09/14/1968',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-1834912528',
					company: 'Harris LLC',
					frontimage:
						'http://dummyimage.com/119x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/218x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/21/1956',
					eligibiltybegan: '11/30/1996',
					eligibiltyexpired: '07/25/1976',
				},
				{
					primary: true,
					active: false,
					membernumber: 'V-9095532376',
					company: 'Beier-Schoen',
					frontimage:
						'http://dummyimage.com/164x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/133x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/23/1982',
					eligibiltybegan: '03/02/1987',
					eligibiltyexpired: '05/28/1955',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '05W0X2Z',
					performed_by: 'Beck Tureville',
					date: 2017,
					additional_information: null,
				},
				{
					ICD10procedurecode: '037L07Z',
					performed_by: 'Lib Gahan',
					date: 1981,
					additional_information:
						'curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu',
				},
				{
					ICD10procedurecode: 'CP1YYZZ',
					performed_by: 'Allys Birkenshaw',
					date: 1961,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'C712YZZ',
					performed_by: 'Ellynn Prendergast',
					date: 2021,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WW601Z',
					performed_by: 'Karney Hurich',
					date: 1957,
					additional_information:
						'pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci',
				},
				{
					ICD10procedurecode: '0QUS4KZ',
					performed_by: 'Korey Edgell',
					date: 1955,
					additional_information:
						'id pretium iaculis diam erat fermentum justo nec condimentum neque sapien',
				},
				{
					ICD10procedurecode: '0QPB4KZ',
					performed_by: 'Elbertina Willetts',
					date: 1951,
					additional_information: null,
				},
			],
		},
		ssn: '166192614',
	},
	{
		id: 62,
		details: {
			first_name: 'Gonzales',
			last_name: 'Eckley',
			middle_name: 'geckley1p@youtube.com',
			gender: 'Genderfluid',
			preffered_name: null,
			address_one: '8 Clarendon Circle',
			address_two: null,
			city: 'Houston',
			state: 'TX',
			zip: '77276',
			date_of_birth: '1985-07-18T19:07:14Z',
			contact_methods: [
				{
					number: '911-856-0121',
					notes: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
				},
				{
					allergy: null,
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				},
			],
			diagnoses: null,
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'I-6197176659',
					company: 'Kutch, Klocko and Weber',
					frontimage:
						'http://dummyimage.com/178x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/231x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/24/2008',
					eligibiltybegan: '04/28/1960',
					eligibiltyexpired: '08/12/1991',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Y-3736240214',
					company: 'Turcotte-Champlin',
					frontimage:
						'http://dummyimage.com/214x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/204x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/09/1977',
					eligibiltybegan: '01/13/2005',
					eligibiltyexpired: '11/20/1976',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-2507817845',
					company: 'Armstrong, Mayert and Stokes',
					frontimage:
						'http://dummyimage.com/143x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/122x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/02/1954',
					eligibiltybegan: '10/17/2002',
					eligibiltyexpired: '10/09/1994',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-8692714058',
					company: 'Trantow, Bergstrom and Macejkovic',
					frontimage:
						'http://dummyimage.com/237x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/23/1963',
					eligibiltybegan: '09/04/2004',
					eligibiltyexpired: '05/11/1988',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-8902504620',
					company: 'Dietrich, Skiles and Ledner',
					frontimage:
						'http://dummyimage.com/130x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/132x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/26/1971',
					eligibiltybegan: '11/08/1987',
					eligibiltyexpired: '05/03/1967',
				},
				{
					primary: false,
					active: false,
					membernumber: 'W-7283891032',
					company: 'Kutch-Batz',
					frontimage:
						'http://dummyimage.com/137x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/155x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/12/2016',
					eligibiltybegan: '11/01/2020',
					eligibiltyexpired: '10/11/1976',
				},
				{
					primary: true,
					active: false,
					membernumber: 'U-3465500636',
					company: 'Dibbert-Schimmel',
					frontimage:
						'http://dummyimage.com/156x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/170x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/08/2021',
					eligibiltybegan: '04/15/1986',
					eligibiltyexpired: '06/14/2008',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-6365328061',
					company: 'VonRueden and Sons',
					frontimage:
						'http://dummyimage.com/177x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/206x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/28/2000',
					eligibiltybegan: '05/02/1953',
					eligibiltyexpired: '11/26/2018',
				},
				{
					primary: false,
					active: true,
					membernumber: 'T-1422213518',
					company: 'Rutherford, Rau and Heidenreich',
					frontimage:
						'http://dummyimage.com/138x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/05/1950',
					eligibiltybegan: '06/24/1998',
					eligibiltyexpired: '03/15/1964',
				},
				{
					primary: true,
					active: true,
					membernumber: 'K-1891519852',
					company: 'Lockman-Glover',
					frontimage:
						'http://dummyimage.com/206x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/162x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/05/1997',
					eligibiltybegan: '12/27/2003',
					eligibiltyexpired: '01/09/1963',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0SSGX4Z',
					performed_by: 'Gustavus Frankland',
					date: 1974,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RSKXZZ',
					performed_by: 'Alidia Stones',
					date: 1966,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RW943Z',
					performed_by: 'Clari Backs',
					date: 1982,
					additional_information:
						'diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris',
				},
			],
		},
		ssn: '067830033',
	},
	{
		id: 63,
		details: {
			first_name: 'Joya',
			last_name: 'Coady',
			middle_name: 'jcoady1q@virginia.edu',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2718 New Castle Terrace',
			address_two: null,
			city: 'Apache Junction',
			state: 'AZ',
			zip: '85219',
			date_of_birth: '1978-02-10T16:14:02Z',
			contact_methods: [
				{ number: '223-558-6143', notes: null },
				{ number: '534-780-5709', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S37409',
					ICD10diagnosislongdescription:
						'Unspecified injury of ovary, unspecified',
					ICD10diagnosisshortdescription:
						'Unspecified injury of ovary, unspecified',
					medications: [
						{
							drugname: 'CAMPHOR, EUCALYPTUS OIL, MENTHOL',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Chrysler Wahner',
						},
						{
							drugname: 'TITANIUM DIOXIDE, OCTINOXATE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Shaughn Lotwich',
						},
						{
							drugname: 'Grama Grass',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Rochella Luberti',
						},
						{
							drugname: 'Calcitriol',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Donnajean Wegner',
						},
						{
							drugname: 'hydrocortisone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'De witt Springtorp',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Rollo Bryan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'G44009',
					ICD10diagnosislongdescription:
						'Cluster headache syndrome, unspecified, not intractable',
					ICD10diagnosisshortdescription:
						'Cluster headache syndrome, unspecified, not intractable',
					medications: [
						{
							drugname: 'PredniSONE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Orlando Cobbe',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Frederik Blennerhassett',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: "Averil O'Cannovane",
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Mozelle Trundell',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S66299A',
					ICD10diagnosislongdescription:
						'Other specified injury of extensor muscle, fascia and tendon of unspecified thumb at wrist and hand level, initial encounter',
					ICD10diagnosisshortdescription:
						'Inj extensor musc/fasc/tend thmb at wrs/hnd lv, init',
					medications: [
						{
							drugname: 'Clonidine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Leelah Rakestraw',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Bonnie Kerswell',
						},
						{
							drugname:
								'Hydrocodone Bitartrate and Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Fedora Drover',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Mariana Suermeier',
						},
						{
							drugname:
								'TRIPROLIDINE HYDROCHLORIDE, PSEUDOEPHEDRINE HYDROCHLORIDE, and DEXTROMETHORPHAN HYDROBROMIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Bernita Grenfell',
						},
						{
							drugname: 'Octinoxate and Titanium Dioxide',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Dav Dyke',
						},
						{
							drugname: 'nicardipine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Minnaminnie Rawstorne',
						},
						{
							drugname: 'Poplar',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Dotti Grinishin',
						},
						{
							drugname:
								'Mineral oil, Petrolatum, Phenylephrine HCl, Shark liver oil',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Bee Mainson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S36261A',
					ICD10diagnosislongdescription:
						'Major laceration of body of pancreas, initial encounter',
					ICD10diagnosisshortdescription:
						'Major laceration of body of pancreas, initial encounter',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Shandra Vasile',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Natal Licas',
						},
						{
							drugname:
								'Beta vulgaris, Boldo, Chelidonium majus, Petroselinum sativum, Taraxacum officinale, Arsenicum album, Belladonna, Cobaltum metallicum, Cuprum metallicum, Iodium, Lycopodium clavatum, Phosphoricum acidum, Selenium metallicum, Zincum metallicum,',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Teressa Splaven',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Manon Stebbings',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Z-7187885821',
					company: 'Purdy and Sons',
					frontimage:
						'http://dummyimage.com/236x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/133x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/27/1998',
					eligibiltybegan: '08/30/1952',
					eligibiltyexpired: '06/04/1998',
				},
				{
					primary: true,
					active: false,
					membernumber: 'C-8657897035',
					company: 'Maggio-Hand',
					frontimage:
						'http://dummyimage.com/188x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/01/1962',
					eligibiltybegan: '11/04/1955',
					eligibiltyexpired: '10/07/1959',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-6538844447',
					company: 'Moen, Larkin and Weimann',
					frontimage:
						'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/01/1986',
					eligibiltybegan: '08/25/2008',
					eligibiltyexpired: '10/21/1961',
				},
				{
					primary: true,
					active: true,
					membernumber: 'V-8178045322',
					company: 'Kris-Mayert',
					frontimage:
						'http://dummyimage.com/153x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/201x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/24/1995',
					eligibiltybegan: '06/12/1997',
					eligibiltyexpired: '02/14/1976',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-1282517365',
					company: 'Schimmel, Lynch and Smitham',
					frontimage:
						'http://dummyimage.com/244x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/160x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/09/1951',
					eligibiltybegan: '12/03/1994',
					eligibiltyexpired: '04/10/2022',
				},
				{
					primary: false,
					active: false,
					membernumber: 'O-1331255683',
					company: 'Beer-Waelchi',
					frontimage:
						'http://dummyimage.com/100x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/222x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/21/2016',
					eligibiltybegan: '08/01/1991',
					eligibiltyexpired: '04/25/2004',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-8474857911',
					company: 'Frami LLC',
					frontimage:
						'http://dummyimage.com/228x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/206x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/15/2016',
					eligibiltybegan: '04/04/2007',
					eligibiltyexpired: '09/09/1959',
				},
				{
					primary: false,
					active: false,
					membernumber: 'V-5591608019',
					company: 'Luettgen, Davis and Gottlieb',
					frontimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/101x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/22/2006',
					eligibiltybegan: '06/20/1984',
					eligibiltyexpired: '10/01/2000',
				},
				{
					primary: true,
					active: false,
					membernumber: 'J-7578808139',
					company: 'Bernhard-Schuster',
					frontimage:
						'http://dummyimage.com/136x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/166x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/30/1977',
					eligibiltybegan: '04/27/1980',
					eligibiltyexpired: '01/23/1995',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-4968836377',
					company: 'Schimmel, Leannon and Moen',
					frontimage:
						'http://dummyimage.com/250x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/109x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/07/1958',
					eligibiltybegan: '02/18/1996',
					eligibiltyexpired: '07/07/1977',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '10Q08ZE',
					performed_by: 'Glenden Beat',
					date: 2001,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0MBV4ZX',
					performed_by: 'Etan Gorbell',
					date: 1969,
					additional_information:
						'in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis',
				},
				{
					ICD10procedurecode: '0X3C3ZZ',
					performed_by: 'Cyril Behninck',
					date: 2015,
					additional_information: null,
				},
				{
					ICD10procedurecode: '09CV0ZZ',
					performed_by: 'Teodor Stapleford',
					date: 2019,
					additional_information:
						'erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam',
				},
				{
					ICD10procedurecode: '0LTV0ZZ',
					performed_by: 'Zabrina Drivers',
					date: 2005,
					additional_information:
						'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam',
				},
				{
					ICD10procedurecode: '0DT50ZZ',
					performed_by: 'Page South',
					date: 1967,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0Y093JZ',
					performed_by: 'Marietta Quinnelly',
					date: 1989,
					additional_information: null,
				},
			],
		},
		ssn: '859568626',
	},
	{
		id: 64,
		details: {
			first_name: 'Felice',
			last_name: 'Tyer',
			middle_name: 'ftyer1r@vkontakte.ru',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2 Kensington Drive',
			address_two: null,
			city: 'Savannah',
			state: 'GA',
			zip: '31405',
			date_of_birth: '1989-01-11T08:24:34Z',
			contact_methods: [
				{ number: '321-366-7967', notes: null },
				{
					number: '846-813-3327',
					notes: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
				{ number: '570-506-3132', notes: null },
				{ number: '349-460-8583', notes: null },
				{ number: '860-539-9180', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T2139XS',
					ICD10diagnosislongdescription:
						'Burn of third degree of other site of trunk, sequela',
					ICD10diagnosisshortdescription:
						'Burn of third degree of other site of trunk, sequela',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'Y-6419475866',
					company: 'Wiegand Group',
					frontimage:
						'http://dummyimage.com/124x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/07/1969',
					eligibiltybegan: '02/28/1962',
					eligibiltyexpired: '06/23/2005',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-3928993125',
					company: 'Wolf-Sporer',
					frontimage:
						'http://dummyimage.com/208x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/177x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/16/1981',
					eligibiltybegan: '06/22/1983',
					eligibiltyexpired: '09/23/1988',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-4551708693',
					company: 'Hackett Inc',
					frontimage:
						'http://dummyimage.com/164x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/236x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/17/1968',
					eligibiltybegan: '09/08/1987',
					eligibiltyexpired: '02/25/1975',
				},
			],
			surgicalhistory: null,
		},
		ssn: '727694065',
	},
	{
		id: 65,
		details: {
			first_name: 'Wanda',
			last_name: 'Travis',
			middle_name: 'wtravis1s@dell.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '5 Veith Crossing',
			address_two: null,
			city: 'Hartford',
			state: 'CT',
			zip: '06152',
			date_of_birth: '1967-03-22T21:37:32Z',
			contact_methods: [{ number: '631-478-2695', notes: null }],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'C506',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of axillary tail of breast',
					ICD10diagnosisshortdescription:
						'Malignant neoplasm of axillary tail of breast',
					medications: [
						{
							drugname: 'Ethylhexl Methoxycinnamate, Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Lavinie Bail',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan HBr, Doxylamine Succinate, Phenylephrine HCl',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Felicia Aves',
						},
						{
							drugname: 'Acetaminophen, Diphenhydramine HCl',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Kerrie Messer',
						},
						{
							drugname: 'mycophenolic acid',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Tiphany Cogman',
						},
						{
							drugname: 'Olanzapine',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Jonis Mapledoore',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V854',
					ICD10diagnosislongdescription:
						'Person injured while boarding or alighting from special construction vehicle',
					ICD10diagnosisshortdescription:
						'Person injured wh brd/alit from special construction vehicle',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Z-0922446087',
					company: "O'Reilly Inc",
					frontimage:
						'http://dummyimage.com/142x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/245x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/30/1960',
					eligibiltybegan: '11/27/2010',
					eligibiltyexpired: '03/18/1972',
				},
				{
					primary: true,
					active: false,
					membernumber: 'D-2217927830',
					company: 'Wisoky and Sons',
					frontimage:
						'http://dummyimage.com/108x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/250x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/06/1960',
					eligibiltybegan: '11/20/2009',
					eligibiltyexpired: '03/23/1955',
				},
				{
					primary: true,
					active: true,
					membernumber: 'J-5423443295',
					company: 'Hammes and Sons',
					frontimage:
						'http://dummyimage.com/114x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/05/1989',
					eligibiltybegan: '01/19/2015',
					eligibiltyexpired: '01/16/1964',
				},
				{
					primary: false,
					active: true,
					membernumber: 'C-4378114706',
					company: 'Kutch LLC',
					frontimage:
						'http://dummyimage.com/222x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/18/1952',
					eligibiltybegan: '06/12/2018',
					eligibiltyexpired: '02/28/1951',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-6246436061',
					company: 'Grady, Rosenbaum and Kohler',
					frontimage:
						'http://dummyimage.com/110x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/164x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/27/1996',
					eligibiltybegan: '12/08/1985',
					eligibiltyexpired: '03/20/1957',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Z-5043342282',
					company: 'Daniel, Flatley and Huels',
					frontimage:
						'http://dummyimage.com/117x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/190x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/10/2000',
					eligibiltybegan: '06/18/1984',
					eligibiltyexpired: '06/13/2018',
				},
				{
					primary: true,
					active: true,
					membernumber: 'H-2852160589',
					company: 'Stehr, Hudson and Schmeler',
					frontimage:
						'http://dummyimage.com/245x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/136x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/04/1977',
					eligibiltybegan: '03/08/1967',
					eligibiltyexpired: '04/18/1954',
				},
			],
			surgicalhistory: null,
		},
		ssn: '355244297',
	},
	{
		id: 66,
		details: {
			first_name: 'Cornelius',
			last_name: 'Riley',
			middle_name: 'criley1t@sogou.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2 Mcbride Crossing',
			address_two: null,
			city: 'Des Moines',
			state: 'IA',
			zip: '50369',
			date_of_birth: '1987-10-18T05:17:10Z',
			contact_methods: [
				{
					number: '115-233-6016',
					notes: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
				{
					number: '826-485-7577',
					notes: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M25311',
					ICD10diagnosislongdescription:
						'Other instability, right shoulder',
					ICD10diagnosisshortdescription:
						'Other instability, right shoulder',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Royall Hargie',
						},
						{
							drugname: 'Medulla Arnica',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Celka Schooley',
						},
						{
							drugname: 'OCTINOXATE and TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Delmer Bussey',
						},
						{
							drugname: 'medroxyprogesterone acetate',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Cymbre Ellington',
						},
						{
							drugname:
								'AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE, OXYBENZONE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Jewel Martinet',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Milena Manville',
						},
						{
							drugname: 'Alcohol',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Zolly Bateup',
						},
						{
							drugname: 'Bethanechol Chloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Welbie Balchen',
						},
						{
							drugname: 'amoxicillin',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Olia Dorracott',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S86212',
					ICD10diagnosislongdescription:
						'Strain of muscle(s) and tendon(s) of anterior muscle group at lower leg level, left leg',
					ICD10diagnosisshortdescription:
						'Strain of musc/tend anterior grp at low leg level, left leg',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'B0802',
					ICD10diagnosislongdescription: 'Orf virus disease',
					ICD10diagnosisshortdescription: 'Orf virus disease',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'F13151',
					ICD10diagnosislongdescription:
						'Sedative, hypnotic or anxiolytic abuse with sedative, hypnotic or anxiolytic-induced psychotic disorder with hallucinations',
					ICD10diagnosisshortdescription:
						'Sedatv/hyp/anxiolytc abuse w psychotic disorder w hallucin',
					medications: [
						{
							drugname: 'Cilostazol',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Arni Golledge',
						},
						{
							drugname: 'Ribavirin',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Duke Appleton',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Jocelyn Paolicchi',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Liana Jewel',
						},
						{
							drugname: 'venlafaxine hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Wilhelmine Kirkness',
						},
						{
							drugname: 'PETROLATUM',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Karolina Hackinge',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Roman Allcroft',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'F-0335180643',
					company: 'Boyer Group',
					frontimage:
						'http://dummyimage.com/239x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/24/2010',
					eligibiltybegan: '03/02/1950',
					eligibiltyexpired: '11/22/2014',
				},
				{
					primary: false,
					active: true,
					membernumber: 'A-0419117218',
					company: 'Dooley Group',
					frontimage:
						'http://dummyimage.com/202x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/148x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/28/1992',
					eligibiltybegan: '02/11/2015',
					eligibiltyexpired: '10/11/1950',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'DB109BZ',
					performed_by: 'Shay Hogben',
					date: 1953,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WPG4JZ',
					performed_by: 'Maureene Keen',
					date: 2006,
					additional_information:
						'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
				},
				{
					ICD10procedurecode: '05RD0JZ',
					performed_by: 'Celesta Dowrey',
					date: 1967,
					additional_information:
						'justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci',
				},
				{
					ICD10procedurecode: '0GNC3ZZ',
					performed_by: 'Raymond Parkin',
					date: 1980,
					additional_information:
						'et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum',
				},
				{
					ICD10procedurecode: '06HC03Z',
					performed_by: 'Brnaby Nozzolinii',
					date: 1990,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DLG3ZZ',
					performed_by: 'Gypsy Giller',
					date: 1951,
					additional_information: null,
				},
			],
		},
		ssn: '904915760',
	},
	{
		id: 67,
		details: {
			first_name: 'Becka',
			last_name: 'Chrestien',
			middle_name: 'bchrestien1u@storify.com',
			gender: 'Female',
			preffered_name: null,
			address_one: '1 Mallard Way',
			address_two: null,
			city: 'Houston',
			state: 'TX',
			zip: '77090',
			date_of_birth: '1994-10-24T11:19:21Z',
			contact_methods: [
				{
					number: '954-836-0656',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: null,
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'R-0119474285',
					company: 'Kilback-Schumm',
					frontimage:
						'http://dummyimage.com/221x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/09/1998',
					eligibiltybegan: '11/23/2006',
					eligibiltyexpired: '10/29/1967',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Z-4983173974',
					company: 'Rau, Bernier and Aufderhar',
					frontimage:
						'http://dummyimage.com/177x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/11/2005',
					eligibiltybegan: '12/15/1995',
					eligibiltyexpired: '09/14/1968',
				},
				{
					primary: false,
					active: true,
					membernumber: 'L-6567445415',
					company: 'Moore and Sons',
					frontimage:
						'http://dummyimage.com/147x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/237x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/01/1965',
					eligibiltybegan: '08/19/2005',
					eligibiltyexpired: '01/27/1953',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-3964721993',
					company: "Torphy, Hirthe and O'Kon",
					frontimage:
						'http://dummyimage.com/226x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/215x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/19/1964',
					eligibiltybegan: '03/28/2017',
					eligibiltyexpired: '06/11/1976',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-4195962432',
					company: 'Okuneva, Murphy and Berge',
					frontimage:
						'http://dummyimage.com/204x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/163x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/07/1972',
					eligibiltybegan: '09/28/1997',
					eligibiltyexpired: '06/16/2018',
				},
				{
					primary: false,
					active: true,
					membernumber: 'N-6688315985',
					company: 'Bartell-Pagac',
					frontimage:
						'http://dummyimage.com/224x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/208x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/22/1960',
					eligibiltybegan: '01/31/2016',
					eligibiltyexpired: '11/20/1952',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0C9T4ZZ',
					performed_by: 'Benedikt Colten',
					date: 1987,
					additional_information: null,
				},
				{
					ICD10procedurecode: '08NQ0ZZ',
					performed_by: 'Bobbye Neasham',
					date: 2022,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0QH90BZ',
					performed_by: 'Kylie Yokel',
					date: 1953,
					additional_information: null,
				},
				{
					ICD10procedurecode: '03RJ0KZ',
					performed_by: 'Bunny McTerlagh',
					date: 1989,
					additional_information:
						'molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum',
				},
				{
					ICD10procedurecode: '03UM3JZ',
					performed_by: 'Gui Gut',
					date: 2018,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0C5T8ZZ',
					performed_by: 'Marlane Seel',
					date: 1965,
					additional_information:
						'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis',
				},
			],
		},
		ssn: '170242730',
	},
	{
		id: 68,
		details: {
			first_name: 'Derward',
			last_name: 'Luckcock',
			middle_name: 'dluckcock1v@a8.net',
			gender: 'Male',
			preffered_name: null,
			address_one: '49 Dovetail Junction',
			address_two: null,
			city: 'Cincinnati',
			state: 'OH',
			zip: '45264',
			date_of_birth: '1982-07-02T01:39:31Z',
			contact_methods: [{ number: '204-820-5929', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
				{
					allergy: null,
					notes: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
			],
			diagnoses: null,
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'I-8203570389',
					company: 'Brown-Roberts',
					frontimage:
						'http://dummyimage.com/179x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/141x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/08/1995',
					eligibiltybegan: '04/26/1982',
					eligibiltyexpired: '01/20/1970',
				},
				{
					primary: false,
					active: false,
					membernumber: 'U-7594483099',
					company: 'Murphy-Flatley',
					frontimage:
						'http://dummyimage.com/131x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/213x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/03/1987',
					eligibiltybegan: '06/01/2020',
					eligibiltyexpired: '05/18/2018',
				},
				{
					primary: false,
					active: true,
					membernumber: 'T-3222842779',
					company: 'Cruickshank, Wilderman and McLaughlin',
					frontimage:
						'http://dummyimage.com/171x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/198x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/29/1976',
					eligibiltybegan: '03/14/2003',
					eligibiltyexpired: '08/07/1970',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Z-4768200537',
					company: 'Frami-Lebsack',
					frontimage:
						'http://dummyimage.com/225x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/03/2003',
					eligibiltybegan: '01/15/1985',
					eligibiltyexpired: '08/01/1983',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0VB34ZX',
					performed_by: 'Blisse Dawid',
					date: 1950,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0KXQ0Z2',
					performed_by: 'Reamonn Ransom',
					date: 1990,
					additional_information:
						'a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet',
				},
				{
					ICD10procedurecode: '0RU54JZ',
					performed_by: 'Neila Zannelli',
					date: 1990,
					additional_information:
						'scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis',
				},
				{
					ICD10procedurecode: 'B5160ZZ',
					performed_by: 'Riley McGinnell',
					date: 1976,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SWN0JZ',
					performed_by: 'Chase Ennever',
					date: 1996,
					additional_information:
						'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
				},
				{
					ICD10procedurecode: '03U90JZ',
					performed_by: 'Sibilla Brame',
					date: 1988,
					additional_information: null,
				},
			],
		},
		ssn: '065586794',
	},
	{
		id: 69,
		details: {
			first_name: 'Heddi',
			last_name: 'Guitonneau',
			middle_name: 'hguitonneau1w@networkadvertising.org',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '86687 Cambridge Pass',
			address_two: null,
			city: 'Orlando',
			state: 'FL',
			zip: '32859',
			date_of_birth: '1990-09-08T02:01:40Z',
			contact_methods: [
				{ number: '746-454-1895', notes: null },
				{
					number: '365-546-7425',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
				{ number: '380-363-4220', notes: null },
				{
					number: '843-209-3241',
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				},
				{ number: '135-159-8899', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S42216K',
					ICD10diagnosislongdescription:
						'Unspecified nondisplaced fracture of surgical neck of unspecified humerus, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Unsp nondisp fx of surg nk of unsp humer, 7thK',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S4420XD',
					ICD10diagnosislongdescription:
						'Injury of radial nerve at upper arm level, unspecified arm, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Injury of radial nerve at upper arm level, unsp arm, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'O0011',
					ICD10diagnosislongdescription:
						'Tubal pregnancy with intrauterine pregnancy',
					ICD10diagnosisshortdescription:
						'Tubal pregnancy with intrauterine pregnancy',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'C168',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of overlapping sites of stomach',
					ICD10diagnosisshortdescription:
						'Malignant neoplasm of overlapping sites of stomach',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'N-8134574414',
					company: 'Wilkinson and Sons',
					frontimage:
						'http://dummyimage.com/163x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/107x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/10/1997',
					eligibiltybegan: '05/02/1990',
					eligibiltyexpired: '08/29/1979',
				},
				{
					primary: false,
					active: false,
					membernumber: 'M-7326663418',
					company: 'Renner and Sons',
					frontimage:
						'http://dummyimage.com/173x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/05/1980',
					eligibiltybegan: '06/25/2006',
					eligibiltyexpired: '06/30/1951',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-1168504428',
					company: 'Bogisich and Sons',
					frontimage:
						'http://dummyimage.com/164x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/240x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/22/1994',
					eligibiltybegan: '08/14/1981',
					eligibiltyexpired: '11/02/1969',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-1142452666',
					company: 'Halvorson and Sons',
					frontimage:
						'http://dummyimage.com/177x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/141x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/21/1983',
					eligibiltybegan: '04/09/1950',
					eligibiltyexpired: '10/17/1977',
				},
				{
					primary: false,
					active: true,
					membernumber: 'D-0082352902',
					company: 'Breitenberg, Bins and Cartwright',
					frontimage:
						'http://dummyimage.com/130x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/16/2004',
					eligibiltybegan: '03/25/1998',
					eligibiltyexpired: '11/30/2005',
				},
				{
					primary: true,
					active: false,
					membernumber: 'F-7879734791',
					company: 'Turcotte Group',
					frontimage:
						'http://dummyimage.com/242x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/140x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/24/2003',
					eligibiltybegan: '03/19/1989',
					eligibiltyexpired: '06/26/1984',
				},
				{
					primary: false,
					active: true,
					membernumber: 'J-7328031798',
					company: 'Maggio-Mosciski',
					frontimage:
						'http://dummyimage.com/234x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/238x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/28/1957',
					eligibiltybegan: '05/21/1972',
					eligibiltyexpired: '07/30/1956',
				},
				{
					primary: false,
					active: false,
					membernumber: 'W-4203295684',
					company: 'Rice and Sons',
					frontimage:
						'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/196x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/10/2007',
					eligibiltybegan: '07/27/2013',
					eligibiltyexpired: '08/29/1958',
				},
				{
					primary: false,
					active: true,
					membernumber: 'A-3827192574',
					company: 'Huels, Thiel and Hills',
					frontimage:
						'http://dummyimage.com/229x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/150x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/03/1958',
					eligibiltybegan: '07/27/1999',
					eligibiltyexpired: '04/21/1951',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0M850ZZ',
					performed_by: 'Lodovico Bleibaum',
					date: 1982,
					additional_information:
						'a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque',
				},
				{
					ICD10procedurecode: '0J813ZZ',
					performed_by: 'Helaina Olphert',
					date: 1997,
					additional_information:
						'mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
				},
				{
					ICD10procedurecode: '02BQ0ZZ',
					performed_by: 'Nobe Edwicke',
					date: 1962,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0MUH07Z',
					performed_by: "Nilson O'Flaverty",
					date: 2007,
					additional_information:
						'eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam',
				},
				{
					ICD10procedurecode: '0XUD0KZ',
					performed_by: 'Ashla Caldaro',
					date: 2003,
					additional_information:
						'volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla',
				},
				{
					ICD10procedurecode: '0D168ZB',
					performed_by: 'Marlowe Stitch',
					date: 2007,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0V5C3ZZ',
					performed_by: 'Any Lineker',
					date: 1981,
					additional_information: null,
				},
				{
					ICD10procedurecode: '021608R',
					performed_by: 'Ricky Quixley',
					date: 1993,
					additional_information:
						'aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque',
				},
				{
					ICD10procedurecode: '0F150D8',
					performed_by: 'Hadrian Schirak',
					date: 2001,
					additional_information: null,
				},
			],
		},
		ssn: '162553209',
	},
	{
		id: 70,
		details: {
			first_name: 'Jennifer',
			last_name: 'Brunet',
			middle_name: 'jbrunet1x@google.com.hk',
			gender: 'Agender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '48084 Fairfield Pass',
			address_two: null,
			city: 'Pueblo',
			state: 'CO',
			zip: '81010',
			date_of_birth: '1959-07-12T12:09:28Z',
			contact_methods: [
				{ number: '904-224-1788', notes: null },
				{ number: '136-511-5381', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H02834',
					ICD10diagnosislongdescription:
						'Dermatochalasis of left upper eyelid',
					ICD10diagnosisshortdescription:
						'Dermatochalasis of left upper eyelid',
					medications: [
						{
							drugname: 'Salicylic Acid',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Miran Meadway',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Ryan Anan',
						},
						{
							drugname: 'DONEPEZIL HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Barney Johnston',
						},
						{
							drugname: 'Salicylic Acid',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Nichole Kimmerling',
						},
						{
							drugname: 'Avobenzone, Octisalate and Octocrylene',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Luigi Maddick',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M84475K',
					ICD10diagnosislongdescription:
						'Pathological fracture, left foot, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Pathological fracture, left foot, subs for fx w nonunion',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: "Hatty O'Siaghail",
						},
						{
							drugname:
								'chlorhexidine gluconate and isopropyl alcohol',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Elenore Lynam',
						},
						{
							drugname:
								'Ascorbic Acid, .Alpha.-Tocopherol Acetate, DL-, Folic Acid, Cyanocobalamin, Biotin, Iron, Cupric Sulfate, and Docusate Sodium',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Paquito Fransinelli',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Manfred Leneve',
						},
						{
							drugname: 'CAMPHOR',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Jacquie Bartoleyn',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S89199A',
					ICD10diagnosislongdescription:
						'Other physeal fracture of lower end of unspecified tibia, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Oth physeal fracture of lower end of unsp tibia, init',
					medications: [
						{
							drugname: 'BENZETHONIUM CHLORIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Corny Byrnes',
						},
						{
							drugname: 'Sodium Sulfacetamide',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Judah Haney',
						},
						{
							drugname: 'Nicotine Polacrilex',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Gizela Le - Count',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M84539A',
					ICD10diagnosislongdescription:
						'Pathological fracture in neoplastic disease, unspecified ulna and radius, initial encounter for fracture',
					ICD10diagnosisshortdescription:
						'Path fracture in neopltc disease, unsp ulna and radius, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Conan Binder',
						},
						{
							drugname: 'dextromethorphan polistirex',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Ganny Blomfield',
						},
						{
							drugname: 'Vancomycin Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ewen Bover',
						},
						{
							drugname: 'Clotrimazole',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Tierney Wyeth',
						},
						{
							drugname:
								'Sodium Ascorbate, Cholecalciferol, di-alpha-Tocopheryl Acetate, Thiamine Mononitrate, Riboflavin, Niacinamide, Pyridoxine HCL, Folic Acid, Cyanocobalamin, Calcium Formate, Calcium Carbonate, Ferrous (II) bis-Glycinate Chelate, Potassium Iodide, Zinc Oxide, Choline Bitartrate, with Doconexent and Icosapent',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Annamaria Selbach',
						},
						{
							drugname: 'citalopram hydrobromide',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Bari Prinett',
						},
						{
							drugname: 'Hydrocortisone',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Addie Grene',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S83134S',
					ICD10diagnosislongdescription:
						'Medial dislocation of proximal end of tibia, right knee, sequela',
					ICD10diagnosisshortdescription:
						'Medial disloc of proximal end of tibia, right knee, sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S32121K',
					ICD10diagnosislongdescription:
						'Minimally displaced Zone II fracture of sacrum, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Minimally displ Zone II fx sacrum, subs for fx w nonunion',
					medications: [
						{
							drugname: 'amitriptyline hydrochloride',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Hammad Caseri',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Mohammed Spreadbury',
						},
						{
							drugname: 'COLESTIPOL HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Hakeem Plose',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V4969XD',
					ICD10diagnosislongdescription:
						'Unspecified car occupant injured in collision with other motor vehicles in traffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unsp car occupant injured in clsn w oth mv in traf, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Ericha Oakenfall',
						},
						{
							drugname: 'Pyrithione Zinc',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Gardner Denington',
						},
						{
							drugname: 'Alcohol',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Jared Sherrum',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: "Osgood de'-Ancy Willis",
						},
					],
				},
				{
					ICD10diagnosiscode: 'T39316A',
					ICD10diagnosislongdescription:
						'Underdosing of propionic acid derivatives, initial encounter',
					ICD10diagnosisshortdescription:
						'Underdosing of propionic acid derivatives, initial encounter',
					medications: [
						{
							drugname: 'Mesalamine',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Trenna Hazard',
						},
						{
							drugname:
								'Aletris 30c, Belladonna 30c, Bovista 30c, Cinchona 30c, Colocynthis 30c, Chamomilla 30c, Cinnamomum 30c, Coffea Cruda 30c, Secale 30c, Veratrum Album 30c',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Michel Fossord',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Cross Isabell',
						},
						{
							drugname: 'not applicable',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Almira Denisyuk',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Patti Beesley',
						},
						{
							drugname: 'TRICLOSAN',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Kristin Espine',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C380',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of heart',
					ICD10diagnosisshortdescription:
						'Malignant neoplasm of heart',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Bob Tidmarsh',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Demetris Orgee',
						},
						{
							drugname: 'Mesquite, Prosopis juliflora',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Beilul Caizley',
						},
						{
							drugname: 'Octinoxate and Titanium dioxide',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Chrisse Gordon-Giles',
						},
						{
							drugname: 'TOXICODENDRON PUBESCENS LEAF',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Dulcea Ethridge',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Forest Amdohr',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'M-9670106051',
					company: 'Rodriguez Inc',
					frontimage:
						'http://dummyimage.com/125x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/168x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/01/2020',
					eligibiltybegan: '04/04/1982',
					eligibiltyexpired: '08/18/1959',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-1295634186',
					company: 'Jaskolski Group',
					frontimage:
						'http://dummyimage.com/223x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/107x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/17/1992',
					eligibiltybegan: '12/11/1981',
					eligibiltyexpired: '01/16/1960',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-8290667382',
					company: 'Lesch LLC',
					frontimage:
						'http://dummyimage.com/114x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/115x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/08/1980',
					eligibiltybegan: '12/04/1975',
					eligibiltyexpired: '03/06/1987',
				},
				{
					primary: false,
					active: true,
					membernumber: 'V-3390836819',
					company: 'Grady-Schroeder',
					frontimage:
						'http://dummyimage.com/166x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/231x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/31/1961',
					eligibiltybegan: '04/26/1965',
					eligibiltyexpired: '07/22/2000',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '03H003Z',
					performed_by: 'Eugine Skelhorn',
					date: 1996,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0H9V30Z',
					performed_by: 'Wynn Grassot',
					date: 1992,
					additional_information:
						'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
				},
				{
					ICD10procedurecode: '0NPB44Z',
					performed_by: 'Phelia Wasbrough',
					date: 2020,
					additional_information: null,
				},
			],
		},
		ssn: '740436049',
	},
	{
		id: 71,
		details: {
			first_name: 'Sybyl',
			last_name: 'Whitcomb',
			middle_name: 'swhitcomb1y@marriott.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '05467 Kingsford Trail',
			address_two: null,
			city: 'Charlotte',
			state: 'NC',
			zip: '28278',
			date_of_birth: '1964-03-01T23:21:29Z',
			contact_methods: [
				{
					number: '937-422-5605',
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
				},
				{
					number: '111-398-1375',
					notes: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
				},
				{
					number: '726-717-7856',
					notes: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'V270XXS',
					ICD10diagnosislongdescription:
						'Motorcycle driver injured in collision with fixed or stationary object in nontraffic accident, sequela',
					ICD10diagnosisshortdescription:
						'Mtrcy driver inj in clsn w statnry object nontraf, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Janenna Treagust',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S96811',
					ICD10diagnosislongdescription:
						'Strain of other specified muscles and tendons at ankle and foot level, right foot',
					ICD10diagnosisshortdescription:
						'Strain of muscles and tendons at ank/ft level, right foot',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Daune Filippov',
						},
						{
							drugname: 'MEGESTROL ACETATE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Riannon Duferie',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Harlen Driscoll',
						},
						{
							drugname: 'olmesartan medoxomil',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Jethro Pendergrast',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lucie Tweddle',
						},
						{
							drugname: 'Artichoke',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Trixie Normanton',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O228',
					ICD10diagnosislongdescription:
						'Other venous complications in pregnancy',
					ICD10diagnosisshortdescription:
						'Other venous complications in pregnancy',
					medications: [
						{
							drugname:
								'Ailanthus Altissima Flowering Twig, Antimony Potassium Tartrate, Arsenic Trioxide, Atropa Belladonna, Camphor (Natural), Chamomile, Copper, Digitalis, Strychnos Ignatii Seed, Canis Lupus Familiaris Milk, Strychnos Nux-Vomica Seed',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Kipper Noke',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52616J',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of unspecified ulna styloid process, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing',
					ICD10diagnosisshortdescription:
						'Nondisp fx of unsp ulna styloid pro, 7thJ',
					medications: [
						{
							drugname: 'Octinoxate and Titanium Dioxide',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Felicle Iglesias',
						},
						{
							drugname: 'Benzocain',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Andrea Rawlin',
						},
						{
							drugname: 'ZINC OXIDE, TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lori Karleman',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Randal Keighley',
						},
						{
							drugname: 'HYDROCORTISONE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Bianca Gerb',
						},
						{
							drugname: 'GELSEMIUM SEMPERVIRENS ROOT',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Estrellita Beaves',
						},
					],
				},
				{
					ICD10diagnosiscode: 'K003',
					ICD10diagnosislongdescription: 'Mottled teeth',
					ICD10diagnosisshortdescription: 'Mottled teeth',
					medications: [
						{
							drugname: 'GABAPENTIN',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lura Godby',
						},
						{
							drugname: 'Treatment Set TS335100',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Wendel Siddeley',
						},
						{
							drugname: 'Loxapine Succinate',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Tillie Drieu',
						},
						{
							drugname: 'oxycodone hydrochloride',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Fayina Hardie',
						},
						{
							drugname: 'Mirtazapine',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Liam Swindon',
						},
						{
							drugname: 'Isopropyl Alcohol',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Carr Huzzey',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Nonie Emburey',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'W-7325383751',
					company: 'Mosciski Inc',
					frontimage:
						'http://dummyimage.com/199x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/137x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/16/1974',
					eligibiltybegan: '12/03/1999',
					eligibiltyexpired: '04/15/1994',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-6791471579',
					company: 'Blanda, Leuschke and Olson',
					frontimage:
						'http://dummyimage.com/190x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/181x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/26/1956',
					eligibiltybegan: '02/17/2002',
					eligibiltyexpired: '12/11/1983',
				},
				{
					primary: true,
					active: false,
					membernumber: 'D-5617409849',
					company: 'Kris, Shields and Kling',
					frontimage:
						'http://dummyimage.com/191x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/134x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/12/1985',
					eligibiltybegan: '10/12/1955',
					eligibiltyexpired: '11/04/1962',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-6287486673',
					company: 'Yost and Sons',
					frontimage:
						'http://dummyimage.com/220x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/147x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/27/1961',
					eligibiltybegan: '03/05/2006',
					eligibiltyexpired: '03/11/1985',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-2277474695',
					company: 'Mraz and Sons',
					frontimage:
						'http://dummyimage.com/155x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/119x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/13/1972',
					eligibiltybegan: '07/13/2004',
					eligibiltyexpired: '07/09/1981',
				},
				{
					primary: true,
					active: true,
					membernumber: 'A-2649633423',
					company: 'Okuneva, Pagac and Wolff',
					frontimage:
						'http://dummyimage.com/164x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/158x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/11/2020',
					eligibiltybegan: '10/21/1980',
					eligibiltyexpired: '10/05/1999',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-6962148057',
					company: 'Pfannerstill, Hills and Hayes',
					frontimage:
						'http://dummyimage.com/110x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/110x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/24/2016',
					eligibiltybegan: '11/18/1955',
					eligibiltyexpired: '09/18/1967',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-8506623595',
					company: 'Waelchi-Morissette',
					frontimage:
						'http://dummyimage.com/134x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/153x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/07/1962',
					eligibiltybegan: '11/17/1959',
					eligibiltyexpired: '09/03/2008',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-4906973748',
					company: 'Kulas, Morissette and Moore',
					frontimage:
						'http://dummyimage.com/212x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/30/1980',
					eligibiltybegan: '12/26/1997',
					eligibiltyexpired: '03/01/1987',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0X0D0ZZ',
					performed_by: 'Maiga Kivelhan',
					date: 1972,
					additional_information: null,
				},
			],
		},
		ssn: '072471403',
	},
	{
		id: 72,
		details: {
			first_name: 'Easter',
			last_name: 'Ourtic',
			middle_name: 'eourtic1z@multiply.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '7000 Gale Point',
			address_two: null,
			city: 'Topeka',
			state: 'KS',
			zip: '66667',
			date_of_birth: '1997-03-08T01:19:38Z',
			contact_methods: [{ number: '141-197-4488', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				},
				{
					allergy: 'insects',
					notes: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
				},
				{
					allergy: 'animals',
					notes: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
				},
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'V5949XA',
					ICD10diagnosislongdescription:
						'Driver of pick-up truck or van injured in collision with other motor vehicles in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Driver of pk-up/van injured in clsn w oth mv in traf, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S52342P',
					ICD10diagnosislongdescription:
						'Displaced spiral fracture of shaft of radius, left arm, subsequent encounter for closed fracture with malunion',
					ICD10diagnosisshortdescription:
						'Displ spiral fx shaft of rad, l arm, 7thP',
					medications: [
						{
							drugname:
								'ACTIVATED CHARCOAL - AETHUSA CYNAPIUM - ALTHAEA OFFICINALIS LEAF - BILBERRY - CANDIDA ALBICANS - UNCARIA TOMENTOSA - ESCHERICHIA COLI - INDOLE - MERCURIUS SOLUBILIS - OKOUBAKA AUBREVILLEI BARK - PORK',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Shelba Josefs',
						},
						{
							drugname: 'Naproxen',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Burke Gaw',
						},
						{
							drugname: 'Milrinone Lactate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Umeko Gregorowicz',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C50311',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of lower-inner quadrant of right female breast',
					ICD10diagnosisshortdescription:
						'Malig neoplm of lower-inner quadrant of right female breast',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'C8592',
					ICD10diagnosislongdescription:
						'Non-Hodgkin lymphoma, unspecified, intrathoracic lymph nodes',
					ICD10diagnosisshortdescription:
						'Non-Hodgkin lymphoma, unspecified, intrathoracic lymph nodes',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Fidelity Gomez',
						},
						{
							drugname: 'methylphenidate hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Atlanta Baynard',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Jesus Farley',
						},
						{
							drugname: 'Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Trey Heber',
						},
						{
							drugname:
								'Cholinum, Capsicum Annuum, Ginkgo Biloba, Arnica Montana, Gelsemium Sempervirens, Kali Phosphoricum, Anacardium Orientale, Phosphorus, Serotonin (Hydrochloride, Baryta Carbonica',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Dallis Wodeland',
						},
						{
							drugname: 'Benzoyl Peroxide',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Keir Sawer',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S065X7A',
					ICD10diagnosislongdescription:
						'Traumatic subdural hemorrhage with loss of consciousness of any duration with death due to brain injury before regaining consciousness, initial encounter',
					ICD10diagnosisshortdescription:
						'Traum subdr hem w LOC w dth d/t brain inj bef reg consc,init',
					medications: [
						{
							drugname: 'Morphine Sulfate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Chris Willshear',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'L-6853435812',
					company: 'Schiller, Harris and Stamm',
					frontimage:
						'http://dummyimage.com/191x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/148x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/02/1993',
					eligibiltybegan: '04/30/1981',
					eligibiltyexpired: '04/20/1989',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0X083JZ',
					performed_by: 'Binnie Barrowcliffe',
					date: 1955,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0QP345Z',
					performed_by: 'Parry Lurner',
					date: 2012,
					additional_information: null,
				},
				{
					ICD10procedurecode: '04H14DZ',
					performed_by: 'Alexandro Muirhead',
					date: 1971,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WWCXKZ',
					performed_by: 'Rudolfo Beedom',
					date: 2005,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0QPS37Z',
					performed_by: 'Petrina Ivanenkov',
					date: 1958,
					additional_information:
						'dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium',
				},
				{
					ICD10procedurecode: '0SRW0JA',
					performed_by: 'Pinchas Clayden',
					date: 1956,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06PY37Z',
					performed_by: 'Billie Chasier',
					date: 1966,
					additional_information: null,
				},
			],
		},
		ssn: '929157097',
	},
	{
		id: 73,
		details: {
			first_name: 'Eadie',
			last_name: 'Tibbs',
			middle_name: 'etibbs20@nps.gov',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '0955 Becker Road',
			address_two: null,
			city: 'Chicago',
			state: 'IL',
			zip: '60614',
			date_of_birth: '2003-03-26T09:50:19Z',
			contact_methods: [
				{
					number: '561-149-3575',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S92414S',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of proximal phalanx of right great toe, sequela',
					ICD10diagnosisshortdescription:
						'Nondisp fx of proximal phalanx of right great toe, sequela',
					medications: [
						{
							drugname: 'Lycopodium clavatum, Pulsatilla,',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Nick Bault',
						},
						{
							drugname:
								'Belladonna, Bryonia, Cyclamen europaeum, Gelsemium sempervirens, Sanguianaria canadensis, Spigelia anthelmia',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Etta Lighton',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Janetta Jentin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Perry Poetz',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Jamey Dix',
						},
						{
							drugname: 'Diphenhydramine HCl, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Chevy Croneen',
						},
						{
							drugname:
								'ASIAN GINSENG - CANAKINUMAB - ELEUTHERO - GERMANIUM DIOXIDE - ISOLEUCINE - LEUCINE - PROLINE - SUS SCROFA COLLAGEN - SUS SCROFA SKIN - VALINE - WITCH HAZEL -',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Neilla Paulucci',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Y93K',
					ICD10diagnosislongdescription:
						'Activities involving animal care',
					ICD10diagnosisshortdescription:
						'Activities involving animal care',
					medications: [
						{
							drugname: 'Cantaloupe Cucumis melo',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Willi Grigoli',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'Y-4029797751',
					company: 'Stroman-Konopelski',
					frontimage:
						'http://dummyimage.com/222x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/14/2007',
					eligibiltybegan: '11/25/2002',
					eligibiltyexpired: '08/02/1963',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-7640173942',
					company: 'Beatty-Dickens',
					frontimage:
						'http://dummyimage.com/139x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/113x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/14/2018',
					eligibiltybegan: '06/02/1991',
					eligibiltyexpired: '03/07/1983',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-8722191434',
					company: 'Larkin, Emmerich and Stracke',
					frontimage:
						'http://dummyimage.com/159x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/107x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '03/12/1998',
					eligibiltybegan: '11/28/1990',
					eligibiltyexpired: '10/12/1994',
				},
				{
					primary: true,
					active: true,
					membernumber: 'P-8852093430',
					company: 'Gaylord, Huel and Brown',
					frontimage:
						'http://dummyimage.com/184x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/182x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/06/2012',
					eligibiltybegan: '06/15/1979',
					eligibiltyexpired: '07/19/1966',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-0298641649',
					company: 'Lakin-MacGyver',
					frontimage:
						'http://dummyimage.com/134x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/114x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/16/2009',
					eligibiltybegan: '08/19/2001',
					eligibiltyexpired: '02/03/2012',
				},
				{
					primary: false,
					active: true,
					membernumber: 'S-6705384752',
					company: 'Schulist-Monahan',
					frontimage:
						'http://dummyimage.com/139x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/161x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/10/1968',
					eligibiltybegan: '05/11/2018',
					eligibiltyexpired: '06/06/2018',
				},
				{
					primary: false,
					active: true,
					membernumber: 'C-6201049819',
					company: 'Kilback-McLaughlin',
					frontimage:
						'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/210x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/22/1961',
					eligibiltybegan: '02/01/1997',
					eligibiltyexpired: '12/12/1978',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-6644142376',
					company: 'Wintheiser, Upton and Frami',
					frontimage:
						'http://dummyimage.com/180x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/206x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/12/1956',
					eligibiltybegan: '11/08/2019',
					eligibiltyexpired: '02/05/2011',
				},
				{
					primary: false,
					active: false,
					membernumber: 'U-1847351645',
					company: 'Ferry, Brekke and Shanahan',
					frontimage:
						'http://dummyimage.com/238x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/136x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/13/1996',
					eligibiltybegan: '05/10/1972',
					eligibiltyexpired: '06/08/1993',
				},
				{
					primary: true,
					active: true,
					membernumber: 'E-8523081585',
					company: 'Spencer Group',
					frontimage:
						'http://dummyimage.com/184x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/118x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/07/1968',
					eligibiltybegan: '03/11/2009',
					eligibiltyexpired: '07/10/1977',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0BF44ZZ',
					performed_by: 'Barnaby Cotmore',
					date: 2014,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RBT3ZX',
					performed_by: 'Davidde Castles',
					date: 1963,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0LWYXJZ',
					performed_by: 'Aprilette Wing',
					date: 2000,
					additional_information: null,
				},
			],
		},
		ssn: '297595031',
	},
	{
		id: 74,
		details: {
			first_name: 'Bevin',
			last_name: 'Jirousek',
			middle_name: 'bjirousek21@arizona.edu',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '124 Hintze Place',
			address_two: null,
			city: 'Chattanooga',
			state: 'TN',
			zip: '37416',
			date_of_birth: '2022-05-01T09:43:06Z',
			contact_methods: [
				{ number: '240-467-9973', notes: null },
				{
					number: '968-449-2388',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				},
				{
					number: '115-757-0201',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				},
				{ number: '895-691-5752', notes: null },
				{ number: '319-916-0883', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S0231XS',
					ICD10diagnosislongdescription:
						'Fracture of orbital floor, right side, sequela',
					ICD10diagnosisshortdescription:
						'Fracture of orbital floor, right side, sequela',
					medications: [
						{
							drugname:
								'Hydrocodone Bitartrate and Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Gabriellia Goly',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sonnie Potier',
						},
						{
							drugname: 'BENZETHONIUM CHLORIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Sharon Panner',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T38812',
					ICD10diagnosislongdescription:
						'Poisoning by anterior pituitary [adenohypophyseal] hormones, intentional self-harm',
					ICD10diagnosisshortdescription:
						'Poisoning by anterior pituitary hormones, self-harm',
					medications: [
						{
							drugname: 'Dimethicone',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Kania Forrington',
						},
						{
							drugname: 'Torsemide',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Alvan Couche',
						},
						{
							drugname: 'ANTIMONIUM CRUDUM',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Babara Huyhton',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Dayle Castlake',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O30',
					ICD10diagnosislongdescription: 'Multiple gestation',
					ICD10diagnosisshortdescription: 'Multiple gestation',
					medications: [
						{
							drugname: 'Loratadine',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Broddie Didsbury',
						},
						{
							drugname: 'Ponderosa Pine',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Marley Loughney',
						},
						{
							drugname: 'Octinoxate and Titanium Dioxide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Rhetta Grint',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Q16',
					ICD10diagnosislongdescription:
						'Congenital malformations of ear causing impairment of hearing',
					ICD10diagnosisshortdescription:
						'Congenital malform of ear causing impairment of hearing',
					medications: [
						{
							drugname: 'Cyclobenzaprine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Nessie Stoner',
						},
						{
							drugname: 'Arizona Cypress',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Dotty Manser',
						},
						{
							drugname: 'Ethyl Alcohol',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Dorothee Gloucester',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H01011',
					ICD10diagnosislongdescription:
						'Ulcerative blepharitis right upper eyelid',
					ICD10diagnosisshortdescription:
						'Ulcerative blepharitis right upper eyelid',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'K-1049215996',
					company: 'Lang-Wuckert',
					frontimage:
						'http://dummyimage.com/182x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/108x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/17/1985',
					eligibiltybegan: '11/24/2011',
					eligibiltyexpired: '11/10/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-2769051795',
					company: 'Morar Group',
					frontimage:
						'http://dummyimage.com/114x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/113x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/24/2021',
					eligibiltybegan: '07/26/1984',
					eligibiltyexpired: '01/06/1958',
				},
				{
					primary: true,
					active: true,
					membernumber: 'J-9736974076',
					company: 'Kautzer-Volkman',
					frontimage:
						'http://dummyimage.com/127x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/179x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/31/1965',
					eligibiltybegan: '04/17/1979',
					eligibiltyexpired: '07/21/2019',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-8484064217',
					company: 'Ward-Koelpin',
					frontimage:
						'http://dummyimage.com/101x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/208x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/31/1994',
					eligibiltybegan: '02/16/2004',
					eligibiltyexpired: '11/16/1988',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-2877116661',
					company: 'Rau-Dach',
					frontimage:
						'http://dummyimage.com/151x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/237x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/04/1966',
					eligibiltybegan: '10/11/1999',
					eligibiltyexpired: '03/24/2019',
				},
				{
					primary: true,
					active: false,
					membernumber: 'H-1073657939',
					company: 'Heaney Inc',
					frontimage:
						'http://dummyimage.com/102x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/06/2006',
					eligibiltybegan: '03/18/1965',
					eligibiltyexpired: '03/16/2009',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-4825954974',
					company: 'Ferry LLC',
					frontimage:
						'http://dummyimage.com/114x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/29/1982',
					eligibiltybegan: '08/30/1978',
					eligibiltyexpired: '07/17/2022',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-3233615571',
					company: 'Oberbrunner, Herzog and Roberts',
					frontimage:
						'http://dummyimage.com/246x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/175x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/17/1975',
					eligibiltybegan: '09/05/1972',
					eligibiltyexpired: '02/16/1989',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0PWB3KZ',
					performed_by: 'Nikki Moro',
					date: 1950,
					additional_information:
						'libero nam dui proin leo odio porttitor id consequat in',
				},
				{
					ICD10procedurecode: '0FPB40Z',
					performed_by: 'Irving Ducket',
					date: 2017,
					additional_information:
						'commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula',
				},
				{
					ICD10procedurecode: 'CF26YZZ',
					performed_by: 'Leona Bruna',
					date: 1984,
					additional_information:
						'in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio',
				},
				{
					ICD10procedurecode: '0DLC0DZ',
					performed_by: 'Husein Sparkes',
					date: 2012,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05U147Z',
					performed_by: 'Nestor Cano',
					date: 1971,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0MBH0ZX',
					performed_by: 'Kelley Vescovini',
					date: 1969,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0P9P0ZX',
					performed_by: 'Brion Brougham',
					date: 1968,
					additional_information:
						'nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit',
				},
				{
					ICD10procedurecode: '06WY42Z',
					performed_by: 'Loydie Skone',
					date: 1957,
					additional_information: null,
				},
			],
		},
		ssn: '478458370',
	},
	{
		id: 75,
		details: {
			first_name: 'Hewitt',
			last_name: 'Blackburne',
			middle_name: 'hblackburne22@wsj.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '83998 Rutledge Pass',
			address_two: null,
			city: 'Topeka',
			state: 'KS',
			zip: '66606',
			date_of_birth: '1956-10-08T07:00:14Z',
			contact_methods: [
				{ number: '501-336-9820', notes: null },
				{ number: '105-752-5229', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'medication',
					notes: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
				{
					allergy: null,
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
				{
					allergy: null,
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				},
				{
					allergy: null,
					notes: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
				},
				{
					allergy: null,
					notes: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S066X6A',
					ICD10diagnosislongdescription:
						'Traumatic subarachnoid hemorrhage with loss of consciousness greater than 24 hours without return to pre-existing conscious level with patient surviving, initial encounter',
					ICD10diagnosisshortdescription:
						'Traum subrac hem w LOC >24 hr w/o ret consc w surv, init',
					medications: [
						{
							drugname: 'STEMPHYLIUM SOLANI',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Ignatius Waterdrinker',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63142A',
					ICD10diagnosislongdescription:
						'Subluxation of distal interphalangeal joint of left thumb, initial encounter',
					ICD10diagnosisshortdescription:
						'Subluxation of distal interphaln joint of left thumb, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'K5903',
					ICD10diagnosislongdescription: 'Drug induced constipation',
					ICD10diagnosisshortdescription: 'Drug induced constipation',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M84621G',
					ICD10diagnosislongdescription:
						'Pathological fracture in other disease, right humerus, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Path fx in oth disease, r humerus, subs for fx w delay heal',
					medications: [
						{
							drugname:
								'Drosera 30C, Spongia 30C, Kali Carbonicum 30C, Phospherous 30C, Ipeacacuhuana 30C, Pulsatilla 30C, Belladonna 30C',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Feodora Escoffrey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Babara Millwater',
						},
						{
							drugname: 'Tangerine',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Aile Davidowich',
						},
						{
							drugname:
								'Aesculus hippocastanum 2X, Potentilla anserina 2X, Cuprum aceticum 6X, Secale cornutum 4X, Tabacum 4X, Veratrum album 6X',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Gradey Bergeon',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Gerrie Futter',
						},
						{
							drugname: 'Ursodiol',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Tabbie Buttrey',
						},
						{
							drugname: 'SALICYLIC ACID',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Pren Shakesby',
						},
						{
							drugname:
								'Hydralazine hydrochloride and Isosorbide dinitrate',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Eb Bugdall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V242XXD',
					ICD10diagnosislongdescription:
						'Unspecified motorcycle rider injured in collision with heavy transport vehicle or bus in nontraffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unsp mtrcy rider injured in collision w hv veh nontraf, subs',
					medications: [
						{
							drugname: 'fenofibrate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Denyse Domney',
						},
						{
							drugname: 'Titanium Dioxide and Zinc Oxide',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Gawain Rosenblad',
						},
						{
							drugname: 'SERTRALINE HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Allyn Sheed',
						},
						{
							drugname: 'TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Elisha Giffon',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Abagael Doige',
						},
						{
							drugname: 'Quinapril',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Henriette Cockling',
						},
						{
							drugname: 'nebivolol hydrochloride',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ernst Everal',
						},
						{
							drugname: 'metoprolol tartrate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Patrica Cannavan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T48204A',
					ICD10diagnosislongdescription:
						'Poisoning by unspecified drugs acting on muscles, undetermined, initial encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by unsp drugs acting on muscles, undet, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Merridie Finlator',
						},
						{
							drugname:
								'acetaminophen, dextromethorphan Hbr, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Harri Rosborough',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Jarad Dakhno',
						},
						{
							drugname: 'Prednicarbate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Dominga Goodrich',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Garret Patnelli',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T540X4',
					ICD10diagnosislongdescription:
						'Toxic effect of phenol and phenol homologues, undetermined',
					ICD10diagnosisshortdescription:
						'Toxic effect of phenol and phenol homologues, undetermined',
					medications: [
						{
							drugname: 'Menthol',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Val Redfern',
						},
						{
							drugname: 'Olanzapine',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Otho Le Houx',
						},
						{
							drugname: 'tramadol hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Malachi Hritzko',
						},
						{
							drugname: 'Plum',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Livia Dallman',
						},
						{
							drugname: 'oxybutynin chloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Germayne Santacrole',
						},
						{
							drugname:
								'Carbo vegetabilis, Cuprum metallicum, Drosera Rotundifolia',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Tabatha Selesnick',
						},
						{
							drugname: 'Levofloxacin',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Eberhard Brealey',
						},
						{
							drugname: 'Atenolol',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Parke Rubinsaft',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S5292XS',
					ICD10diagnosislongdescription:
						'Unspecified fracture of left forearm, sequela',
					ICD10diagnosisshortdescription:
						'Unspecified fracture of left forearm, sequela',
					medications: [
						{
							drugname: 'BENZALKONIUM CHLORIDE',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Booth Barbary',
						},
						{
							drugname: 'Quetiapine fumarate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Imelda Hobden',
						},
						{
							drugname: 'Candida albicans',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Mildrid Wilmot',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Clemente Izzett',
						},
						{
							drugname: 'morella cerifera pollen',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Lacey Inmett',
						},
						{
							drugname: 'Doxycycline Hyclate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lyndsay Trobe',
						},
						{
							drugname: 'escherichia coli',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Brade Le Blanc',
						},
						{
							drugname:
								'Aesculus hippocastanum, flos, Aloe socotrina, Arnica montana, Arsenicum album, Borago officinalis, Calcarea carbonica, Carpinus betulus, flos, Chamomilla, Gelsemium sempervirens, Graphites, Ipecacuanha, Kali sulphuricum, Mentha piperita, Nitricum acidum, Olea europaea, flos, Onosmodium virginianum, Palladium metallicum, Pulsatilla, Sepia, Tropaeolum majus, Ulmus procera, flos, Viola tricolor',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Caryl Carayol',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Rochell Speerman',
						},
						{
							drugname: 'Baclofen',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Blaire Trownson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Y36321S',
					ICD10diagnosislongdescription:
						'War operations involving incendiary bullet, civilian, sequela',
					ICD10diagnosisshortdescription:
						'War op involving incendiary bullet, civilian, sequela',
					medications: [
						{
							drugname: 'Hand Wash',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Marlena Boarleyson',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Crichton Comelli',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Andie Petry',
						},
						{
							drugname: 'Alcohol',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Adda Shilburne',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Osmund Cosser',
						},
						{
							drugname:
								'Eucalyptol, menthol, methyl salicylate, thymol',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Boyd Melton',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'Z-1854312116',
					company: 'Jaskolski and Sons',
					frontimage:
						'http://dummyimage.com/248x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/08/1997',
					eligibiltybegan: '02/17/1986',
					eligibiltyexpired: '08/03/1982',
				},
				{
					primary: true,
					active: true,
					membernumber: 'N-8297812366',
					company: 'Vandervort LLC',
					frontimage:
						'http://dummyimage.com/148x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/222x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/01/1960',
					eligibiltybegan: '08/12/2017',
					eligibiltyexpired: '03/20/1960',
				},
				{
					primary: false,
					active: true,
					membernumber: 'O-8985066074',
					company: 'Johnston-Krajcik',
					frontimage:
						'http://dummyimage.com/198x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/234x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/25/2003',
					eligibiltybegan: '12/25/2010',
					eligibiltyexpired: '03/15/1950',
				},
				{
					primary: false,
					active: false,
					membernumber: 'M-8218497887',
					company: 'Lynch Inc',
					frontimage:
						'http://dummyimage.com/196x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/104x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/05/1959',
					eligibiltybegan: '07/16/2006',
					eligibiltyexpired: '10/10/1953',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '7W06X3Z',
					performed_by: 'Braden Ruggles',
					date: 2019,
					additional_information:
						'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
				},
			],
		},
		ssn: '031497034',
	},
	{
		id: 76,
		details: {
			first_name: 'Peadar',
			last_name: 'Blaise',
			middle_name: 'pblaise23@salon.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '9091 Weeping Birch Way',
			address_two: null,
			city: 'San Antonio',
			state: 'TX',
			zip: '78240',
			date_of_birth: '1968-07-12T10:31:12Z',
			contact_methods: [
				{
					number: '360-936-7628',
					notes: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
				{ number: '588-118-6027', notes: null },
				{ number: '718-890-9365', notes: null },
				{
					number: '918-579-1670',
					notes: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
				{
					number: '588-509-0400',
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
				},
				{ allergy: 'insects', notes: null },
				{ allergy: 'peanut', notes: null },
				{
					allergy: null,
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				},
				{
					allergy: null,
					notes: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S24104',
					ICD10diagnosislongdescription:
						'Unspecified injury at T11-T12 level of thoracic spinal cord',
					ICD10diagnosisshortdescription:
						'Unspecified injury at T11-T12 level of thoracic spinal cord',
					medications: [
						{
							drugname:
								'HELIANTHEMUM NUMMULARIUM FLOWER, CLEMATIS VITALBA FLOWER, IMPATIENS GLANDULIFERA FLOWER, PRUNUS CERASIFERA FLOWER, and ORNITHOGALUM UMBELLATUM',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Phaidra Drance',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Vita Blackford',
						},
						{
							drugname: 'Gabapentin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Tony Sawney',
						},
						{
							drugname: 'Simethicone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Miriam Yurkin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Kelli Huddles',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z60',
					ICD10diagnosislongdescription:
						'Problems related to social environment',
					ICD10diagnosisshortdescription:
						'Problems related to social environment',
					medications: [
						{
							drugname: 'Strawberry',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Joelly Kitchenham',
						},
						{
							drugname: 'MENTHOL , ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Gaelan Deacon',
						},
						{
							drugname:
								'TITANIUM DIOXIDE, OCTINOXATE, ZINC OXIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Federico Oakden',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Gayleen Whiff',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Dietrich Gregoletti',
						},
					],
				},
				{
					ICD10diagnosiscode: 'I15',
					ICD10diagnosislongdescription: 'Secondary hypertension',
					ICD10diagnosisshortdescription: 'Secondary hypertension',
					medications: [
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Diana Siemons',
						},
						{
							drugname:
								'OCTINOXATE OCTISALATE ZINC OXIDE TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Elisha Crosher',
						},
						{
							drugname:
								'articaine hydrochloride and epinephrine bitartrate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Kimball Andrysek',
						},
						{
							drugname: 'tolmetin sodium',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Marc Beardsell',
						},
						{
							drugname: 'Octinoxate, Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ado Chomiszewski',
						},
						{
							drugname: 'mesalamine',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Gordie Gronou',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T84623A',
					ICD10diagnosislongdescription:
						'Infection and inflammatory reaction due to internal fixation device of left tibia, initial encounter',
					ICD10diagnosisshortdescription:
						'Infect/inflm reaction due to int fix of left tibia, init',
					medications: [
						{
							drugname: 'Simvastatin',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Parrnell Insworth',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S728X1G',
					ICD10diagnosislongdescription:
						'Other fracture of right femur, subsequent encounter for closed fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Oth fracture of right femur, subs for clos fx w delay heal',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'L0212',
					ICD10diagnosislongdescription: 'Furuncle of neck',
					ICD10diagnosisshortdescription: 'Furuncle of neck',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S63135',
					ICD10diagnosislongdescription:
						'Dislocation of proximal interphalangeal joint of left thumb',
					ICD10diagnosisshortdescription:
						'Dislocation of proximal interphalangeal joint of left thumb',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'C-9773792003',
					company: 'Williamson, Gibson and Lueilwitz',
					frontimage:
						'http://dummyimage.com/195x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/21/1987',
					eligibiltybegan: '12/23/2015',
					eligibiltyexpired: '08/30/2012',
				},
				{
					primary: true,
					active: false,
					membernumber: 'V-6776525112',
					company: 'Doyle-Roberts',
					frontimage:
						'http://dummyimage.com/171x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/26/1967',
					eligibiltybegan: '02/14/1987',
					eligibiltyexpired: '11/29/1975',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '04140J5',
					performed_by: 'Levon Prall',
					date: 2012,
					additional_information: null,
				},
				{
					ICD10procedurecode: '04N70ZZ',
					performed_by: 'Artemas Lacelett',
					date: 1998,
					additional_information:
						'urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras',
				},
				{
					ICD10procedurecode: '0D1387A',
					performed_by: 'Marlene Oneile',
					date: 1994,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02VX0CZ',
					performed_by: 'Granville Stanman',
					date: 1969,
					additional_information: null,
				},
			],
		},
		ssn: '324070054',
	},
	{
		id: 77,
		details: {
			first_name: 'Galven',
			last_name: 'McGonnell',
			middle_name: 'gmcgonnell24@techcrunch.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '7914 Vidon Point',
			address_two: null,
			city: 'Bronx',
			state: 'NY',
			zip: '10459',
			date_of_birth: '1996-10-26T08:49:52Z',
			contact_methods: [
				{ number: '997-485-4486', notes: null },
				{ number: '495-356-3755', notes: null },
				{ number: '542-234-3873', notes: null },
				{
					number: '927-650-1460',
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				},
				{
					number: '940-824-1155',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'B330',
					ICD10diagnosislongdescription: 'Epidemic myalgia',
					ICD10diagnosisshortdescription: 'Epidemic myalgia',
					medications: [
						{
							drugname:
								'Triticum aestivum, Alfalfa, Fucus vesiculosus, Laminaria digitata, Nasturtium aquaticum, Oryza sativa, Raphanus sativus, Symphytum officinale, Hordeum vulgare, Asparagus officinalis, Manganum gluconat',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Meir Bredee',
						},
						{
							drugname:
								'Betamethasone Acetate and Betamethasone Sodium Phosphate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Odessa Garrood',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Jillie Sicha',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L03122',
					ICD10diagnosislongdescription:
						'Acute lymphangitis of left axilla',
					ICD10diagnosisshortdescription:
						'Acute lymphangitis of left axilla',
					medications: [
						{
							drugname:
								'AVOBENZONE HOMOSALATE OCTISALATE OCTOCRYLENE OXYBENZONE',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Doe Deaves',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Kimberlee Schmuhl',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Morse Dryden',
						},
					],
				},
				{
					ICD10diagnosiscode: 'B42',
					ICD10diagnosislongdescription: 'Sporotrichosis',
					ICD10diagnosisshortdescription: 'Sporotrichosis',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S52539',
					ICD10diagnosislongdescription:
						"Colles' fracture of unspecified radius",
					ICD10diagnosisshortdescription:
						"Colles' fracture of unspecified radius",
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M12452',
					ICD10diagnosislongdescription:
						'Intermittent hydrarthrosis, left hip',
					ICD10diagnosisshortdescription:
						'Intermittent hydrarthrosis, left hip',
					medications: [
						{
							drugname: 'Isopropyl Alcohol',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Wallis Heddon',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S32120B',
					ICD10diagnosislongdescription:
						'Nondisplaced Zone II fracture of sacrum, initial encounter for open fracture',
					ICD10diagnosisshortdescription:
						'Nondisplaced Zone II fracture of sacrum, init for opn fx',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V139XXA',
					ICD10diagnosislongdescription:
						'Unspecified pedal cyclist injured in collision with car, pick-up truck or van in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Unsp pedl cyclst inj pick-up truck, pk-up/van in traf, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Alaric Rollitt',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Vitoria Cheesley',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S061X8A',
					ICD10diagnosislongdescription:
						'Traumatic cerebral edema with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, initial encounter',
					ICD10diagnosisshortdescription:
						'Traum cereb edema w LOC w death d/t oth cause bf consc, init',
					medications: [
						{
							drugname: 'nicotine polacrilex',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Angelique Petzolt',
						},
						{
							drugname:
								'ACETAMINOPHEN, PHENYLEPHRINE HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Drugi Phoebe',
						},
						{
							drugname: 'Naproxen Delayed Release',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ashbey Elt',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Irv Frake',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H5011',
					ICD10diagnosislongdescription: 'Monocular exotropia',
					ICD10diagnosisshortdescription: 'Monocular exotropia',
					medications: [
						{
							drugname: 'Blue Beech (Hornbeam)',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Virgilio Rassell',
						},
						{
							drugname: 'HYDROQUINONE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Towney Gascoine',
						},
						{
							drugname: 'SALICYLIC ACID',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Marcus Scherme',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M628',
					ICD10diagnosislongdescription:
						'Other specified disorders of muscle',
					ICD10diagnosisshortdescription:
						'Other specified disorders of muscle',
					medications: [
						{
							drugname: 'Lamb Quarters',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Phyllida Stammirs',
						},
						{
							drugname: 'DIMETHICONE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Brande Preble',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Willow Andreou',
						},
						{
							drugname: 'lisinopril',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Prissie Enderle',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Diana Blayney',
						},
						{
							drugname: 'decitabine',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Lock Dufaire',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Marrilee Girardi',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'T-9016970463',
					company: 'Luettgen-Bahringer',
					frontimage:
						'http://dummyimage.com/105x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/246x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/24/2004',
					eligibiltybegan: '06/29/2022',
					eligibiltyexpired: '07/30/1954',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-5395677600',
					company: 'Purdy-Schinner',
					frontimage:
						'http://dummyimage.com/123x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/06/1961',
					eligibiltybegan: '01/16/2014',
					eligibiltyexpired: '04/03/1993',
				},
				{
					primary: true,
					active: true,
					membernumber: 'V-1829652233',
					company: "O'Conner-Johnston",
					frontimage:
						'http://dummyimage.com/163x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/104x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/14/1961',
					eligibiltybegan: '05/07/2017',
					eligibiltyexpired: '02/19/2007',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-6602667001',
					company: 'Collier-Kozey',
					frontimage:
						'http://dummyimage.com/220x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/184x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/22/1973',
					eligibiltybegan: '08/02/1957',
					eligibiltyexpired: '04/14/1980',
				},
				{
					primary: false,
					active: false,
					membernumber: 'P-4754891267',
					company: 'Bernier, Lehner and Considine',
					frontimage:
						'http://dummyimage.com/123x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/22/2018',
					eligibiltybegan: '12/22/1998',
					eligibiltyexpired: '10/16/1974',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-4558021078',
					company: 'Yundt LLC',
					frontimage:
						'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/147x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/01/2021',
					eligibiltybegan: '10/13/1976',
					eligibiltyexpired: '04/10/2014',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-4039723364',
					company: 'Metz, Lakin and Wolff',
					frontimage:
						'http://dummyimage.com/140x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/244x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/29/1988',
					eligibiltybegan: '10/03/1987',
					eligibiltyexpired: '10/25/2006',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-7653954052',
					company: 'Abbott-Feeney',
					frontimage:
						'http://dummyimage.com/157x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/26/2012',
					eligibiltybegan: '06/15/1980',
					eligibiltyexpired: '12/05/1963',
				},
			],
			surgicalhistory: null,
		},
		ssn: '538774992',
	},
	{
		id: 78,
		details: {
			first_name: 'Henri',
			last_name: 'Chape',
			middle_name: 'hchape25@unicef.org',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '217 5th Park',
			address_two: null,
			city: 'Cheyenne',
			state: 'WY',
			zip: '82007',
			date_of_birth: '2008-06-12T13:11:40Z',
			contact_methods: [
				{ number: '258-980-5797', notes: null },
				{ number: '742-369-5554', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M24673',
					ICD10diagnosislongdescription:
						'Ankylosis, unspecified ankle',
					ICD10diagnosisshortdescription:
						'Ankylosis, unspecified ankle',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T81528A',
					ICD10diagnosislongdescription:
						'Obstruction due to foreign body accidentally left in body following other procedure, initial encounter',
					ICD10diagnosisshortdescription:
						'Obst due to fb acc left in body fol oth procedure, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Nannette Van de Vlies',
						},
					],
				},
				{
					ICD10diagnosiscode: 'D46C',
					ICD10diagnosislongdescription:
						'Myelodysplastic syndrome with isolated del(5q) chromosomal abnormality',
					ICD10diagnosisshortdescription:
						'Myelodysplastic syndrome w isolated del(5q) chromsoml abnlt',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S68722',
					ICD10diagnosislongdescription:
						'Partial traumatic transmetacarpal amputation of left hand',
					ICD10diagnosisshortdescription:
						'Partial traumatic transmetacarpal amputation of left hand',
					medications: [
						{
							drugname: 'Donepezil hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Thedrick Jodlkowski',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T400X3S',
					ICD10diagnosislongdescription:
						'Poisoning by opium, assault, sequela',
					ICD10diagnosisshortdescription:
						'Poisoning by opium, assault, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Stafani Fantham',
						},
						{
							drugname: 'Ketotifen Fumarate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Umberto Haresign',
						},
						{
							drugname: 'quinapril hydrochloride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Christal Lapish',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Hillel Lannon',
						},
						{
							drugname: 'SALICYLIC ACID',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Estele Tyhurst',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L9790',
					ICD10diagnosislongdescription:
						'Non-pressure chronic ulcer of unspecified part of unspecified lower leg',
					ICD10diagnosisshortdescription:
						'Non-pressure chronic ulcer of unsp part of unsp lower leg',
					medications: [
						{
							drugname:
								'ALUMINUM HYDROXIDE and MAGNESIUM CARBONATE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Keri Castagna',
						},
						{
							drugname:
								'Chlophedianol Hydrochloride and Pseudoephedrine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Krystalle Nourse',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Blinni Filson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V441XXA',
					ICD10diagnosislongdescription:
						'Car passenger injured in collision with heavy transport vehicle or bus in nontraffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Car passenger injured in collision w hv veh nontraf, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82875F',
					ICD10diagnosislongdescription:
						'Nondisplaced pilon fracture of left tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing',
					ICD10diagnosisshortdescription:
						'Nondisp pilon fx l tibia, 7thF',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Charline Delacroix',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Maddalena Kenwin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Leonie Tal',
						},
						{
							drugname: 'Titanium Dioxide and Octinoxate',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Ruttger Colbridge',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Nert Lefridge',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'U-4162112648',
					company: 'Hayes LLC',
					frontimage:
						'http://dummyimage.com/222x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/23/2015',
					eligibiltybegan: '08/09/2012',
					eligibiltyexpired: '04/01/2019',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'B42',
					performed_by: 'Jacklin Noor',
					date: 2014,
					additional_information:
						'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac',
				},
				{
					ICD10procedurecode: '03UB47Z',
					performed_by: 'Kendra Addionisio',
					date: 2016,
					additional_information:
						'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est',
				},
				{
					ICD10procedurecode: '05BL4ZZ',
					performed_by: 'Forbes Conlaund',
					date: 2001,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0N9G0ZX',
					performed_by: 'Beltran Larwell',
					date: 2015,
					additional_information:
						'sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer',
				},
				{
					ICD10procedurecode: '06Q50ZZ',
					performed_by: 'Sigismundo Atkin',
					date: 1994,
					additional_information: null,
				},
			],
		},
		ssn: '041481553',
	},
	{
		id: 79,
		details: {
			first_name: 'Pascale',
			last_name: 'Bassingden',
			middle_name: 'pbassingden26@forbes.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '534 Haas Terrace',
			address_two: null,
			city: 'El Paso',
			state: 'TX',
			zip: '79977',
			date_of_birth: '1965-01-20T10:50:50Z',
			contact_methods: [
				{ number: '640-470-8382', notes: null },
				{ number: '677-211-8193', notes: null },
				{
					number: '307-779-2825',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H16409',
					ICD10diagnosislongdescription:
						'Unspecified corneal neovascularization, unspecified eye',
					ICD10diagnosisshortdescription:
						'Unspecified corneal neovascularization, unspecified eye',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S20472D',
					ICD10diagnosislongdescription:
						'Other superficial bite of left back wall of thorax, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Oth superficial bite of left back wall of thorax, subs',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Jonathon Dunsire',
						},
					],
				},
				{
					ICD10diagnosiscode: 'W16132S',
					ICD10diagnosislongdescription:
						'Fall into natural body of water striking side causing other injury, sequela',
					ICD10diagnosisshortdescription:
						'Fall into natrl body of water strk side cause oth inj, sqla',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82046C',
					ICD10diagnosislongdescription:
						'Nondisplaced comminuted fracture of unspecified patella, initial encounter for open fracture type IIIA, IIIB, or IIIC',
					ICD10diagnosisshortdescription:
						'Nondisp commnt fx unsp patella, init for opn fx type 3A/B/C',
					medications: [
						{
							drugname: 'Enoxaparin Sodium',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Devy Rowet',
						},
						{
							drugname: 'METOPROLOL SUCCINATE',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Berkeley Dockrey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Carey Foxon',
						},
						{
							drugname: 'Telmisartan and Amlodipine',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Evania Frisch',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Tann Camidge',
						},
						{
							drugname:
								'Vitamin C (Ascorbic Acid), Carbonyl Iron, Folic Acid, Vitamin B-12 (Cyanocobalamin)',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Armando Spacie',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Giffer Skerme',
						},
						{
							drugname: 'Levetiracetam',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Nonie Jessope',
						},
						{
							drugname: 'ALUMINUM CHLOROHYDRATE',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Gino McCoughan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'Z89629',
					ICD10diagnosislongdescription:
						'Acquired absence of unspecified hip joint',
					ICD10diagnosisshortdescription:
						'Acquired absence of unspecified hip joint',
					medications: [
						{
							drugname:
								'Avobenzone, Homosalate, Octisalate, Octocrylene',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Cassie Pimblett',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52319S',
					ICD10diagnosislongdescription:
						'Greenstick fracture of shaft of radius, unspecified arm, sequela',
					ICD10diagnosisshortdescription:
						'Greenstick fracture of shaft of radius, unsp arm, sequela',
					medications: [
						{
							drugname: 'Citalopram Hydrobromide',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: "Sibylla O'Fielly",
						},
						{
							drugname: 'sodium monofluorophosphate',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Ava Bayliss',
						},
						{
							drugname: 'Buprenorphine and Naloxone',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Den Gill',
						},
						{
							drugname: 'ACETAMINOPHEN',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Wendi Comino',
						},
						{
							drugname: 'methylphenidate hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Jeremie MacLoughlin',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Isadora Gownge',
						},
						{
							drugname: 'Treatment Set TS345476',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Thalia Pawden',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Reiko Wadge',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T43021S',
					ICD10diagnosislongdescription:
						'Poisoning by tetracyclic antidepressants, accidental (unintentional), sequela',
					ICD10diagnosisshortdescription:
						'Poisoning by tetracyclic antidepress, accidental, sequela',
					medications: [
						{
							drugname: 'avobenzone, octinoxate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Brooks Dunsire',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Rakel Beasleigh',
						},
						{
							drugname: 'Cottonseed',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Salome Elcoat',
						},
						{
							drugname: 'Cilostazol',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Steffane Greenroad',
						},
						{
							drugname:
								'glycerin, phenylephrine HCl, pramoxine HCl, white petrolatum',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Blondelle Astin',
						},
						{
							drugname: 'Meperidine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Babbette Lannin',
						},
						{
							drugname: 'Tretinoin',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Carter Jest',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Care Collisson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V639XXS',
					ICD10diagnosislongdescription:
						'Unspecified occupant of heavy transport vehicle injured in collision with car, pick-up truck or van in traffic accident, sequela',
					ICD10diagnosisshortdescription:
						'Occup of hv veh inj pk-up truck, pk-up/van in traf, sequela',
					medications: [
						{
							drugname:
								'Ethyl Alcohol, Salicylic Acid, Benzocaine',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Bekki Tregona',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'M-1232691109',
					company: 'Lindgren-Rowe',
					frontimage:
						'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/139x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/17/2017',
					eligibiltybegan: '06/16/1974',
					eligibiltyexpired: '06/13/2013',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Q-5202343367',
					company: 'Smith-Douglas',
					frontimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/05/2018',
					eligibiltybegan: '01/15/1978',
					eligibiltyexpired: '10/10/1969',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-9035731340',
					company: 'Mante LLC',
					frontimage:
						'http://dummyimage.com/167x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/199x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/09/2021',
					eligibiltybegan: '07/13/2019',
					eligibiltyexpired: '07/10/2009',
				},
				{
					primary: true,
					active: false,
					membernumber: 'H-2368654490',
					company: 'Legros-Gerlach',
					frontimage:
						'http://dummyimage.com/108x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/151x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/04/2010',
					eligibiltybegan: '10/04/2009',
					eligibiltyexpired: '09/26/1988',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-2462462171',
					company: 'Marks Group',
					frontimage:
						'http://dummyimage.com/225x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/16/1986',
					eligibiltybegan: '08/17/1970',
					eligibiltyexpired: '06/24/1989',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-0638302800',
					company: 'Larkin-Hoeger',
					frontimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/121x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/30/1950',
					eligibiltybegan: '08/23/1986',
					eligibiltyexpired: '09/04/2009',
				},
				{
					primary: false,
					active: false,
					membernumber: 'N-9448997273',
					company: 'DuBuque, Dickinson and Daugherty',
					frontimage:
						'http://dummyimage.com/186x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/165x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/20/2013',
					eligibiltybegan: '08/28/1959',
					eligibiltyexpired: '12/31/2020',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-5696771905',
					company: 'Hintz, Kuhn and Smitham',
					frontimage:
						'http://dummyimage.com/109x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/144x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/25/2008',
					eligibiltybegan: '08/25/1985',
					eligibiltyexpired: '02/18/1970',
				},
				{
					primary: true,
					active: false,
					membernumber: 'S-0932254857',
					company: 'MacGyver Group',
					frontimage:
						'http://dummyimage.com/150x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/215x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/21/1953',
					eligibiltybegan: '01/28/1968',
					eligibiltyexpired: '08/02/2002',
				},
				{
					primary: true,
					active: false,
					membernumber: 'W-7237798797',
					company: 'Dach, Schoen and Romaguera',
					frontimage:
						'http://dummyimage.com/189x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/157x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/11/1983',
					eligibiltybegan: '01/09/1952',
					eligibiltyexpired: '01/25/1984',
				},
			],
			surgicalhistory: null,
		},
		ssn: '130094549',
	},
	{
		id: 80,
		details: {
			first_name: 'Lolita',
			last_name: 'De Banke',
			middle_name: 'ldebanke27@hibu.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '3 Randy Parkway',
			address_two: null,
			city: 'Miami',
			state: 'FL',
			zip: '33164',
			date_of_birth: '1972-11-03T03:23:14Z',
			contact_methods: [
				{
					number: '633-873-3233',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
				{
					number: '590-448-5309',
					notes: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
				{ number: '136-724-8916', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
				},
				{
					allergy: null,
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
				},
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S73025D',
					ICD10diagnosislongdescription:
						'Obturator dislocation of left hip, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Obturator dislocation of left hip, subsequent encounter',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Peggy Stoll',
						},
						{
							drugname: 'ammonium lactate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Huntley Bernade',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Cahra Frosch',
						},
						{
							drugname: 'Rabeprazole Sodium',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Ardath Pate',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Lenore Colbron',
						},
						{
							drugname: 'CARBOplatin',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Tibold Stenett',
						},
						{
							drugname: 'loperamide HCl',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Odessa Mizzen',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Lily Spinelli',
						},
					],
				},
				{
					ICD10diagnosiscode: 'B79',
					ICD10diagnosislongdescription: 'Trichuriasis',
					ICD10diagnosisshortdescription: 'Trichuriasis',
					medications: [
						{
							drugname: 'Dimethicone',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Tomas McGahern',
						},
						{
							drugname: 'ZINC OXIDE',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Noell Tangye',
						},
						{
							drugname:
								'Bisoprolol Fumarate and Hydrochlorothiazide',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Charlotte Ridley',
						},
						{
							drugname: 'Verapamil hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Albert Stearns',
						},
						{
							drugname: 'Nystatin',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Conrado Blitz',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C9022',
					ICD10diagnosislongdescription:
						'Extramedullary plasmacytoma in relapse',
					ICD10diagnosisshortdescription:
						'Extramedullary plasmacytoma in relapse',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S82151Q',
					ICD10diagnosislongdescription:
						'Displaced fracture of right tibial tuberosity, subsequent encounter for open fracture type I or II with malunion',
					ICD10diagnosisshortdescription:
						'Disp fx of r tibial tuberosity, 7thQ',
					medications: [
						{
							drugname: 'Benzocaine 7.5%',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Joyan Beccles',
						},
						{
							drugname: 'Okra',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Marin Blackman',
						},
						{
							drugname: 'Octinoxate and Titanium Dioxide',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Pierrette Payfoot',
						},
						{
							drugname: 'Octinoxate and Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Doy Acors',
						},
						{
							drugname: 'Triclosan',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Walden Baitson',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V777XXA',
					ICD10diagnosislongdescription:
						'Person on outside of bus injured in collision with fixed or stationary object in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Person outsd bus inj in clsn w statnry object in traf, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S51042A',
					ICD10diagnosislongdescription:
						'Puncture wound with foreign body of left elbow, initial encounter',
					ICD10diagnosisshortdescription:
						'Puncture wound with foreign body of left elbow, init encntr',
					medications: [
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Bond Calway',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Allene Mooreed',
						},
						{
							drugname: 'Atriplex confertifolia',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Belvia Ramsden',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Chas Woolley',
						},
						{
							drugname: 'candida parapsilosis',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Porter Burghill',
						},
						{
							drugname:
								'olmesartan medoxomil / amlodipine besylate / hydrochlorothiazide',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Carlin Ianittello',
						},
						{
							drugname: 'Diphenhydramine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Joshua Rockhill',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S65899D',
					ICD10diagnosislongdescription:
						'Other specified injury of other blood vessels at wrist and hand level of unspecified arm, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Inj oth blood vessels at wrs/hnd lv of unsp arm, subs',
					medications: [
						{
							drugname: 'diclofenac sodium and misoprostol',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Filmer Thorouggood',
						},
						{
							drugname: 'PETROLATUM',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Jessie Brando',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Annemarie Lightowlers',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S72146H',
					ICD10diagnosislongdescription:
						'Nondisplaced intertrochanteric fracture of unspecified femur, subsequent encounter for open fracture type I or II with delayed healing',
					ICD10diagnosisshortdescription:
						'Nondisp intertroch fx unsp femr, 7thH',
					medications: [
						{
							drugname: 'Zinc Oxide and Ferric Oxide Red',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Lorinda Leisk',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Shandie Losel',
						},
						{
							drugname: 'Cricket',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Marty Petit',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Redford Pretsell',
						},
						{
							drugname: 'Naratriptan',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Cassie Scarratt',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Julius Brose',
						},
						{
							drugname: 'Titanium dioxide',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sherline Cockland',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T502X6D',
					ICD10diagnosislongdescription:
						'Underdosing of carbonic-anhydrase inhibitors, benzothiadiazides and other diuretics, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Underdosing of crbnc-anhydr inhibtr, benzo/oth diuretc, subs',
					medications: [
						{
							drugname:
								'Octinoxate, Octocrylene, Octisalate, Oxybenzone, Avobenzone and Homosalate.',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Wheeler Garn',
						},
						{
							drugname: 'Pantoprazole sodium',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Rivkah McDonand',
						},
						{
							drugname: 'OCTOCRYLENE, OXYBENZONE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Willie Vasyaev',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Shawnee Whytock',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'P-9084846380',
					company: 'Maggio LLC',
					frontimage:
						'http://dummyimage.com/184x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/148x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/10/1981',
					eligibiltybegan: '02/07/2019',
					eligibiltyexpired: '09/28/1996',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-3006211052',
					company: 'Nienow LLC',
					frontimage:
						'http://dummyimage.com/185x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/234x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/30/2017',
					eligibiltybegan: '04/20/1997',
					eligibiltyexpired: '02/05/1970',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0VC33ZZ',
					performed_by: 'Dolly Driffield',
					date: 1970,
					additional_information:
						'quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue',
				},
				{
					ICD10procedurecode: '0Q844ZZ',
					performed_by: 'Andromache Norster',
					date: 1999,
					additional_information: null,
				},
				{
					ICD10procedurecode: '05V63CZ',
					performed_by: 'Jerrome Station',
					date: 1983,
					additional_information:
						'at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut',
				},
				{
					ICD10procedurecode: '00XQ0ZS',
					performed_by: 'Sallie Lohoar',
					date: 1963,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0F9F3ZZ',
					performed_by: 'Annette Hammerson',
					date: 1978,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'BN291ZZ',
					performed_by: 'Suzann Barling',
					date: 1955,
					additional_information:
						'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia',
				},
				{
					ICD10procedurecode: '0LX40ZZ',
					performed_by: 'Rania Lyddon',
					date: 1969,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0210083',
					performed_by: 'Junie Stapele',
					date: 2012,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0K963ZX',
					performed_by: 'Cly Staveley',
					date: 2014,
					additional_information: null,
				},
			],
		},
		ssn: '851914643',
	},
	{
		id: 81,
		details: {
			first_name: 'Guss',
			last_name: 'Bernardinelli',
			middle_name: 'gbernardinelli28@statcounter.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '4637 Luster Circle',
			address_two: null,
			city: 'Buffalo',
			state: 'NY',
			zip: '14233',
			date_of_birth: '1990-11-25T01:31:44Z',
			contact_methods: [
				{ number: '775-669-8210', notes: null },
				{ number: '611-807-4569', notes: null },
				{ number: '600-973-7351', notes: null },
				{
					number: '424-235-8024',
					notes: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
				{
					allergy: null,
					notes: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
				{ allergy: 'insects', notes: null },
				{
					allergy: null,
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
				{
					allergy: 'insects',
					notes: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'G722',
					ICD10diagnosislongdescription:
						'Myopathy due to other toxic agents',
					ICD10diagnosisshortdescription:
						'Myopathy due to other toxic agents',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Sukey Foston',
						},
						{
							drugname: 'Atenolol',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Alvin Sone',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O618',
					ICD10diagnosislongdescription:
						'Other failed induction of labor',
					ICD10diagnosisshortdescription:
						'Other failed induction of labor',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'V442XXD',
					ICD10diagnosislongdescription:
						'Person on outside of car injured in collision with heavy transport vehicle or bus in nontraffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Person outside car injured in clsn w hv veh nontraf, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M89072',
					ICD10diagnosislongdescription:
						'Algoneurodystrophy, left ankle and foot',
					ICD10diagnosisshortdescription:
						'Algoneurodystrophy, left ankle and foot',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Y35301D',
					ICD10diagnosislongdescription:
						'Legal intervention involving unspecified blunt objects, law enforcement official injured, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Legal intervnt w unsp blunt obj, law enforc offl inj, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S92002A',
					ICD10diagnosislongdescription:
						'Unspecified fracture of left calcaneus, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Unsp fracture of left calcaneus, init for clos fx',
					medications: [
						{
							drugname: 'Wild oat,',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Bertram Kimbley',
						},
						{
							drugname: 'Ceftriaxone Sodium',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Hedda Eton',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Dredi Shepland',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Milt Holliar',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Liane Tesoe',
						},
						{
							drugname: 'CLADOSPORIUM CLADOSPORIOIDES',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Alberta Miskelly',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Bran Seawright',
						},
					],
				},
				{
					ICD10diagnosiscode: 'N818',
					ICD10diagnosislongdescription:
						'Other female genital prolapse',
					ICD10diagnosisshortdescription:
						'Other female genital prolapse',
					medications: [
						{
							drugname:
								'Aluminum Zirconium Tetrachlorohydrex GLY',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Kermie Bonifas',
						},
						{
							drugname: 'Levetiracetam',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Isac Silliman',
						},
						{
							drugname: 'Glycerin',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Pinchas Chick',
						},
						{
							drugname:
								'ALUMINUM ZIRCONIUM TETRACHLOROHYDREX GLY',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Willabella Uvedale',
						},
						{
							drugname: 'Robitussin Cough Long Acting',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Raddie Maggiori',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Jaime Moorerud',
						},
						{
							drugname: 'Losartan Potassium',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Nicko De la Eglise',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42136P',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of coracoid process, unspecified shoulder, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Nondisp fx of coracoid pro, unsp shldr, 7thP',
					medications: [
						{
							drugname: 'lamotrigine',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Trudy Petrello',
						},
						{
							drugname: 'Fentanyl Citrate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Barton Ervine',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M67814',
					ICD10diagnosislongdescription:
						'Other specified disorders of tendon, left shoulder',
					ICD10diagnosisshortdescription:
						'Other specified disorders of tendon, left shoulder',
					medications: [
						{
							drugname: 'Potassium Chloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Prescott Coton',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Selma Loughead',
						},
						{
							drugname:
								'Capsicum annuum, pyrethrum parthenium, mentholum',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Germaine Scurry',
						},
						{
							drugname: 'CALCIUM CARBONATE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Legra Olner',
						},
						{
							drugname: 'calcium carbonate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Juliet Swate',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Carlina Keble',
						},
						{
							drugname: 'Cephalexin',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Christabella Ovize',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Julee Bougen',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S32509A',
					ICD10diagnosislongdescription:
						'Unspecified fracture of unspecified pubis, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Unsp fracture of unsp pubis, init encntr for closed fracture',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'U-4190949541',
					company: 'Yundt Group',
					frontimage:
						'http://dummyimage.com/183x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/103x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/13/2016',
					eligibiltybegan: '07/27/1997',
					eligibiltyexpired: '10/24/1965',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Y-0077558319',
					company: "O'Keefe-Schmidt",
					frontimage:
						'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/125x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/01/2010',
					eligibiltybegan: '01/08/1971',
					eligibiltyexpired: '07/25/2022',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-4826324210',
					company: 'Fay-McKenzie',
					frontimage:
						'http://dummyimage.com/109x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/132x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/27/1993',
					eligibiltybegan: '11/10/1964',
					eligibiltyexpired: '05/22/1998',
				},
				{
					primary: false,
					active: false,
					membernumber: 'O-6614167034',
					company: 'Stehr, Kunde and Nader',
					frontimage:
						'http://dummyimage.com/148x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/25/1950',
					eligibiltybegan: '01/23/1951',
					eligibiltyexpired: '06/25/1970',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Z-3233203571',
					company: 'Osinski Group',
					frontimage:
						'http://dummyimage.com/239x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/232x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/15/1975',
					eligibiltybegan: '02/03/1960',
					eligibiltyexpired: '01/20/1976',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Z-4011122084',
					company: 'Hegmann-Davis',
					frontimage:
						'http://dummyimage.com/150x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/249x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '06/14/2010',
					eligibiltybegan: '01/05/2019',
					eligibiltyexpired: '09/16/2016',
				},
				{
					primary: true,
					active: true,
					membernumber: 'A-2958475832',
					company: 'Hudson Group',
					frontimage:
						'http://dummyimage.com/220x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/143x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/30/1960',
					eligibiltybegan: '07/01/2006',
					eligibiltyexpired: '11/14/1970',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '06VV3DZ',
					performed_by: 'Selby Mundy',
					date: 1953,
					additional_information:
						'habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum',
				},
				{
					ICD10procedurecode: 'B547ZZZ',
					performed_by: 'Maddi Humby',
					date: 2005,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0MDP4ZZ',
					performed_by: 'Brittney Robroe',
					date: 1975,
					additional_information: null,
				},
				{
					ICD10procedurecode: '037T0DZ',
					performed_by: 'Mallorie Pahl',
					date: 2014,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0F583ZZ',
					performed_by: 'Quentin Huffadine',
					date: 1995,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0VHM33Z',
					performed_by: 'Iolanthe Ticic',
					date: 1972,
					additional_information:
						'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in',
				},
				{
					ICD10procedurecode: '02130ZC',
					performed_by: "Alister O'Gaven",
					date: 1958,
					additional_information:
						'consequat ut nulla sed accumsan felis ut at dolor quis odio',
				},
				{
					ICD10procedurecode: 'F07Z9ZZ',
					performed_by: 'Cam Demcak',
					date: 1963,
					additional_information:
						'suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem',
				},
				{
					ICD10procedurecode: '04104AQ',
					performed_by: 'Brandon Sabberton',
					date: 2021,
					additional_information:
						'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus',
				},
			],
		},
		ssn: '892495617',
	},
	{
		id: 82,
		details: {
			first_name: 'Neil',
			last_name: 'Edwicker',
			middle_name: 'nedwicker29@soup.io',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '0614 Rigney Circle',
			address_two: null,
			city: 'Lexington',
			state: 'KY',
			zip: '40576',
			date_of_birth: '1991-09-09T02:50:58Z',
			contact_methods: [
				{ number: '848-925-5633', notes: null },
				{
					number: '146-251-7632',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				},
				{ number: '730-565-9152', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S42344B',
					ICD10diagnosislongdescription:
						'Nondisplaced spiral fracture of shaft of humerus, right arm, initial encounter for open fracture',
					ICD10diagnosisshortdescription:
						'Nondisp spiral fx shaft of humer, right arm, init for opn fx',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Idalina Kilius',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V411XXD',
					ICD10diagnosislongdescription:
						'Car passenger injured in collision with pedal cycle in nontraffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Car passenger injured in collision w pedl cyc nontraf, subs',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T873',
					ICD10diagnosislongdescription:
						'Neuroma of amputation stump',
					ICD10diagnosisshortdescription:
						'Neuroma of amputation stump',
					medications: [
						{
							drugname:
								'Cholinum, Capsicum Annuum, Ginkgo Biloba, Arnica Montana, Gelsemium Sempervirens, Kali Phosphoricum, Anacardium Orientale, Phosphorus, Serotonin (Hydrochloride, Baryta Carbonica',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Farica Falconbridge',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ron Jakeway',
						},
						{
							drugname: 'gemcitabine',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Paola Wixey',
						},
						{
							drugname: 'Montelukast Sodium',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Patience Schouthede',
						},
						{
							drugname: 'Cetirizine HCl',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Isadora Boulde',
						},
					],
				},
				{
					ICD10diagnosiscode: 'K564',
					ICD10diagnosislongdescription:
						'Other impaction of intestine',
					ICD10diagnosisshortdescription:
						'Other impaction of intestine',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Aurelia Clutheram',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Curtice Dunnet',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Rock Murt',
						},
						{
							drugname: 'Clorazepate Dipotassium',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Theodoric Cowlishaw',
						},
						{
							drugname: 'Activated Charcoal',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Mable Nestle',
						},
						{
							drugname:
								'arginine, acetylcarnitine, l-, ornithine and human chorionic gonadotropin',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Merilyn Cuschieri',
						},
					],
				},
				{
					ICD10diagnosiscode: 'I69211',
					ICD10diagnosislongdescription:
						'Memory deficit following other nontraumatic intracranial hemorrhage',
					ICD10diagnosisshortdescription:
						'Memory deficit following other ntrm intcrn hemorrhage',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S31111A',
					ICD10diagnosislongdescription:
						'Laceration without foreign body of abdominal wall, left upper quadrant without penetration into peritoneal cavity, initial encounter',
					ICD10diagnosisshortdescription:
						'Lac w/o fb of abd wall, l upr q w/o penet perit cav, init',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'J-0487597655',
					company: 'Hauck-Morissette',
					frontimage:
						'http://dummyimage.com/196x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/115x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/04/2018',
					eligibiltybegan: '08/14/1958',
					eligibiltyexpired: '05/20/2014',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-1871829770',
					company: 'Jacobs, Schoen and Haley',
					frontimage:
						'http://dummyimage.com/155x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/241x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/11/1967',
					eligibiltybegan: '07/28/2000',
					eligibiltyexpired: '05/28/2012',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-1697234314',
					company: 'Haley LLC',
					frontimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/166x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/28/1971',
					eligibiltybegan: '03/21/1965',
					eligibiltyexpired: '02/22/1985',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-9587217486',
					company: 'Goodwin-Hilpert',
					frontimage:
						'http://dummyimage.com/136x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/225x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/19/2003',
					eligibiltybegan: '06/01/1975',
					eligibiltyexpired: '03/22/2001',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-9085201151',
					company: 'Bayer-Rath',
					frontimage:
						'http://dummyimage.com/129x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/225x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/30/1971',
					eligibiltybegan: '03/25/1989',
					eligibiltyexpired: '05/17/2010',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-9752526177',
					company: 'Hills-King',
					frontimage:
						'http://dummyimage.com/168x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/151x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/30/1968',
					eligibiltybegan: '09/24/2013',
					eligibiltyexpired: '06/12/1972',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Y-2777384355',
					company: 'Kilback, Bogisich and Beier',
					frontimage:
						'http://dummyimage.com/169x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/187x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/22/1963',
					eligibiltybegan: '10/12/1989',
					eligibiltyexpired: '05/04/2018',
				},
				{
					primary: true,
					active: false,
					membernumber: 'O-6817460828',
					company: 'Ondricka-Batz',
					frontimage:
						'http://dummyimage.com/215x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/21/1970',
					eligibiltybegan: '03/30/1989',
					eligibiltyexpired: '12/13/2003',
				},
				{
					primary: false,
					active: false,
					membernumber: 'D-9401198046',
					company: 'Stehr, Gerhold and Schmidt',
					frontimage:
						'http://dummyimage.com/217x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/03/1952',
					eligibiltybegan: '02/07/1995',
					eligibiltyexpired: '05/12/1953',
				},
				{
					primary: true,
					active: true,
					membernumber: 'E-8970809508',
					company: 'Mraz LLC',
					frontimage:
						'http://dummyimage.com/200x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/100x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/20/1978',
					eligibiltybegan: '05/23/1982',
					eligibiltyexpired: '01/04/1983',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '01CK4ZZ',
					performed_by: 'Brand Ciobotaru',
					date: 2017,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02QJ0ZG',
					performed_by: 'Wilie Padbery',
					date: 2016,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RP437Z',
					performed_by: 'Tomas Ladewig',
					date: 2021,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0LTJ0ZZ',
					performed_by: 'Margaret Hurdiss',
					date: 1960,
					additional_information:
						'integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor',
				},
			],
		},
		ssn: '159319099',
	},
	{
		id: 83,
		details: {
			first_name: 'Rey',
			last_name: 'Berndtsson',
			middle_name: 'rberndtsson2a@ehow.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '86467 Mcguire Hill',
			address_two: null,
			city: 'Waco',
			state: 'TX',
			zip: '76711',
			date_of_birth: '1970-06-11T02:54:33Z',
			contact_methods: [
				{ number: '951-959-5816', notes: null },
				{ number: '159-834-2173', notes: null },
				{ number: '642-532-5671', notes: null },
				{ number: '717-109-4092', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'I6922',
					ICD10diagnosislongdescription:
						'Speech and language deficits following other nontraumatic intracranial hemorrhage',
					ICD10diagnosisshortdescription:
						'Speech/lang deficits following oth ntrm intcrn hemorrhage',
					medications: [
						{
							drugname:
								'Acetaminophen, Chlorpheniramine maleate, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Robina Drinkall',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S82113F',
					ICD10diagnosislongdescription:
						'Displaced fracture of unspecified tibial spine, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing',
					ICD10diagnosisshortdescription:
						'Disp fx of unsp tibial spin, 7thF',
					medications: [
						{
							drugname: 'pramipexole dihydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Eilis Jervois',
						},
					],
				},
				{
					ICD10diagnosiscode: 'K942',
					ICD10diagnosislongdescription: 'Gastrostomy complications',
					ICD10diagnosisshortdescription: 'Gastrostomy complications',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Annalise Peracco',
						},
						{
							drugname: 'avena sativa pollen',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Rudd Slyde',
						},
						{
							drugname: 'Acebutolol Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Jessika Impleton',
						},
						{
							drugname: 'SALICYLIC ACID',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Ulrikaumeko Hancill',
						},
						{
							drugname: 'Benzalkonium Chloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Annabella Blacksell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Nata Callen',
						},
						{
							drugname:
								'AVOBENZONE, OCTINOXATE, OCTISALATE, OCTOCRYLENE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Tim Polon',
						},
						{
							drugname: 'Loratadine',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Pierette Hollington',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Corby Chesman',
						},
						{
							drugname: 'Tramadol Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Lark Rassmann',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S42455S',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of lateral condyle of left humerus, sequela',
					ICD10diagnosisshortdescription:
						'Nondisp fx of lateral condyle of left humerus, sequela',
					medications: [
						{
							drugname: 'Triclosan',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Hedy Askaw',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Amalie Mannion',
						},
						{
							drugname:
								'TITANIUM DIOXIDE, OCTINOXATE, ZINC OXIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Stevy Moodie',
						},
						{
							drugname: 'ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Margy Isakowicz',
						},
						{
							drugname: 'Donepezil hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Johnette Shawyers',
						},
						{
							drugname: 'GLYCERIN',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Amerigo Frissell',
						},
						{
							drugname: 'Sertraline Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Jehanna Smylie',
						},
						{
							drugname: 'Birch Mixture',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Kristoffer MacAughtrie',
						},
						{
							drugname: 'HEPARIN SODIUM',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Lorianna Leeburne',
						},
						{
							drugname: 'CAULOPHYLLUM THALICTROIDES ROOT',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Lorie Garaghan',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63298D',
					ICD10diagnosislongdescription:
						'Dislocation of distal interphalangeal joint of other finger, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Dislocation of distal interphalangeal joint of finger, subs',
					medications: [
						{
							drugname: 'RIFAXIMIN',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Georgeanne Bon',
						},
						{
							drugname: 'Paclitaxel',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Hillary Woloschin',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Lorianna Sammes',
						},
						{
							drugname: 'DIDANOSINE',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Von Southcott',
						},
						{
							drugname: 'Methylphenidate Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Rice Betton',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H44652',
					ICD10diagnosislongdescription:
						'Retained (old) magnetic foreign body in vitreous body, left eye',
					ICD10diagnosisshortdescription:
						'Retained (old) magnetic fb in vitreous body, left eye',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'K-7297535168',
					company: 'Adams, Botsford and Fritsch',
					frontimage:
						'http://dummyimage.com/127x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/120x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/09/1966',
					eligibiltybegan: '08/20/1986',
					eligibiltyexpired: '08/01/1991',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-8426210004',
					company: 'Lesch Inc',
					frontimage:
						'http://dummyimage.com/234x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/175x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/19/2005',
					eligibiltybegan: '12/04/1960',
					eligibiltyexpired: '08/25/1998',
				},
				{
					primary: false,
					active: true,
					membernumber: 'L-3603925099',
					company: 'Stiedemann Inc',
					frontimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/02/1968',
					eligibiltybegan: '07/28/2015',
					eligibiltyexpired: '05/03/2021',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Y-9296182420',
					company: 'Lehner Group',
					frontimage:
						'http://dummyimage.com/203x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/30/1966',
					eligibiltybegan: '11/30/2000',
					eligibiltyexpired: '12/23/1950',
				},
				{
					primary: false,
					active: false,
					membernumber: 'T-0887050890',
					company: 'Weber, Bayer and Miller',
					frontimage:
						'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/218x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/02/2000',
					eligibiltybegan: '06/01/1993',
					eligibiltyexpired: '09/09/1982',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-0664795407',
					company: 'Goodwin Group',
					frontimage:
						'http://dummyimage.com/140x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/143x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/22/2021',
					eligibiltybegan: '05/01/2012',
					eligibiltyexpired: '12/08/2004',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-7093584943',
					company: 'Roberts, Crist and Veum',
					frontimage:
						'http://dummyimage.com/250x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/210x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/26/2009',
					eligibiltybegan: '08/01/2016',
					eligibiltyexpired: '09/13/1996',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Q-2172595593',
					company: 'Nolan LLC',
					frontimage:
						'http://dummyimage.com/178x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/172x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/14/1992',
					eligibiltybegan: '12/08/1968',
					eligibiltyexpired: '11/22/2006',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-6426225436',
					company: 'Hessel-Deckow',
					frontimage:
						'http://dummyimage.com/208x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/187x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/29/1992',
					eligibiltybegan: '07/29/2020',
					eligibiltyexpired: '08/27/1976',
				},
			],
			surgicalhistory: null,
		},
		ssn: '266270070',
	},
	{
		id: 84,
		details: {
			first_name: 'Neddie',
			last_name: 'Cheer',
			middle_name: 'ncheer2b@w3.org',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '453 Dennis Drive',
			address_two: null,
			city: 'Wichita',
			state: 'KS',
			zip: '67220',
			date_of_birth: '1955-03-03T22:38:12Z',
			contact_methods: [
				{ number: '678-351-5080', notes: null },
				{
					number: '940-413-5657',
					notes: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S42432G',
					ICD10diagnosislongdescription:
						'Displaced fracture (avulsion) of lateral epicondyle of left humerus, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Disp fx of lateral epicondyl of l humer, 7thG',
					medications: [
						{
							drugname: 'Zinc Gluconate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Herve Wibberley',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Buddy Semarke',
						},
						{
							drugname: 'Povidone-Iodine',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Allys Reymers',
						},
						{
							drugname: 'methylphenidate hydrochloride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: "Amie O'Logan",
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Birgit Ginnell',
						},
						{
							drugname: 'DEXAMETHASONE SODIUM PHOSPHATE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Feliks Chadburn',
						},
						{
							drugname: 'Diclofenac Potassium',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Shir Corradetti',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M84663P',
					ICD10diagnosislongdescription:
						'Pathological fracture in other disease, right fibula, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Path fx in oth disease, r fibula, subs for fx w malunion',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S93699D',
					ICD10diagnosislongdescription:
						'Other sprain of unspecified foot, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Other sprain of unspecified foot, subsequent encounter',
					medications: [
						{
							drugname: 'Diltiazem Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Drew Nardoni',
						},
						{
							drugname: 'Octinoxate, Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Grant Goodlet',
						},
						{
							drugname: 'Tolnaftate',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Darb Beart',
						},
					],
				},
				{
					ICD10diagnosiscode: 'H33042',
					ICD10diagnosislongdescription:
						'Retinal detachment with retinal dialysis, left eye',
					ICD10diagnosisshortdescription:
						'Retinal detachment with retinal dialysis, left eye',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S72434S',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of medial condyle of right femur, sequela',
					ICD10diagnosisshortdescription:
						'Nondisp fx of medial condyle of right femur, sequela',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ceil Prestner',
						},
						{
							drugname: 'CARISOPRODOL',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Constance Sotheron',
						},
						{
							drugname: 'East Sycamore',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Philbert Reicherz',
						},
						{
							drugname: 'Lisinopril',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Natal Shillinglaw',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Reiko Lowdes',
						},
						{
							drugname: 'Benzoyl Peroxide',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Katleen Bushaway',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M47891',
					ICD10diagnosislongdescription:
						'Other spondylosis, occipito-atlanto-axial region',
					ICD10diagnosisshortdescription:
						'Other spondylosis, occipito-atlanto-axial region',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'M-3924796044',
					company: 'Langosh Group',
					frontimage:
						'http://dummyimage.com/136x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/196x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/04/1951',
					eligibiltybegan: '11/01/1951',
					eligibiltyexpired: '03/30/2010',
				},
				{
					primary: false,
					active: true,
					membernumber: 'L-9072840158',
					company: 'Skiles, Gutkowski and Kris',
					frontimage:
						'http://dummyimage.com/216x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/204x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/16/1983',
					eligibiltybegan: '01/31/1959',
					eligibiltyexpired: '05/15/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'N-4353736488',
					company: 'Carter, Hilpert and MacGyver',
					frontimage:
						'http://dummyimage.com/120x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/218x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/30/1995',
					eligibiltybegan: '01/19/1955',
					eligibiltyexpired: '05/19/1955',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Q-9280117039',
					company: 'Hyatt Inc',
					frontimage:
						'http://dummyimage.com/108x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/127x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/11/1959',
					eligibiltybegan: '12/28/1957',
					eligibiltyexpired: '01/23/1958',
				},
				{
					primary: true,
					active: false,
					membernumber: 'E-7953327001',
					company: 'Armstrong-Beatty',
					frontimage:
						'http://dummyimage.com/236x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/240x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/28/1971',
					eligibiltybegan: '10/30/1979',
					eligibiltyexpired: '02/09/2014',
				},
				{
					primary: true,
					active: true,
					membernumber: 'F-8388416652',
					company: 'Lang, Anderson and Nicolas',
					frontimage:
						'http://dummyimage.com/169x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/238x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/05/1985',
					eligibiltybegan: '06/11/2003',
					eligibiltyexpired: '02/05/1959',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '04U94JZ',
					performed_by: 'Aloise Shallcross',
					date: 1963,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B300YZZ',
					performed_by: 'Niles Southwick',
					date: 1950,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0FPB7CZ',
					performed_by: 'Bearnard Kolakowski',
					date: 1953,
					additional_information:
						'faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis',
				},
				{
					ICD10procedurecode: '3E0V328',
					performed_by: 'Sigismondo Enos',
					date: 1988,
					additional_information:
						'nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris',
				},
				{
					ICD10procedurecode: '07T40ZZ',
					performed_by: 'Nerita Mildmott',
					date: 1950,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0HQHXZZ',
					performed_by: 'Bartholemy Yanin',
					date: 1975,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0PW107Z',
					performed_by: 'Johannah Broom',
					date: 1956,
					additional_information:
						'nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo',
				},
				{
					ICD10procedurecode: '05L50ZZ',
					performed_by: 'Shanie Estabrook',
					date: 1959,
					additional_information:
						'at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi',
				},
			],
		},
		ssn: '544510364',
	},
	{
		id: 85,
		details: {
			first_name: 'Herculie',
			last_name: 'Deadman',
			middle_name: 'hdeadman2c@jigsy.com',
			gender: 'Genderfluid',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2628 Nova Way',
			address_two: null,
			city: 'Indianapolis',
			state: 'IN',
			zip: '46207',
			date_of_birth: '2018-08-26T02:46:54Z',
			contact_methods: [{ number: '913-588-5322', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
				},
				{ allergy: null, notes: null },
				{
					allergy: 'animals',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
				{
					allergy: 'peanut',
					notes: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S53021D',
					ICD10diagnosislongdescription:
						'Posterior subluxation of right radial head, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Posterior subluxation of right radial head, subs encntr',
					medications: [
						{
							drugname: 'trimethobenzamide hydrochloride',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Orsa Leving',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Roscoe Boother',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S30874S',
					ICD10diagnosislongdescription:
						'Other superficial bite of vagina and vulva, sequela',
					ICD10diagnosisshortdescription:
						'Other superficial bite of vagina and vulva, sequela',
					medications: [
						{
							drugname: 'Oxygen',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Sabina Enefer',
						},
						{
							drugname:
								'HOMOSALATE, OCTINOXATE, OCTISALATE, OXYBENZONE, AVOBENZONE, OCTOCRYLENE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Reinold Zettler',
						},
						{
							drugname: 'Pelargonium sidoides',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Janene Albin',
						},
						{
							drugname: 'OCTINOXATE, TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Victoir Cretney',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Wilhelmine Jerrome',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S25129',
					ICD10diagnosislongdescription:
						'Major laceration of unspecified innominate or subclavian artery',
					ICD10diagnosisshortdescription:
						'Major laceration of unsp innominate or subclavian artery',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T563X3D',
					ICD10diagnosislongdescription:
						'Toxic effect of cadmium and its compounds, assault, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Toxic effect of cadmium and its compounds, assault, subs',
					medications: [
						{
							drugname: 'Allantoin',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Piggy Carbry',
						},
						{
							drugname: 'FAMCICLOVIR',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Celeste Pancoust',
						},
						{
							drugname:
								'AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Benetta Dunbar',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Fianna Squibbes',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Nilson Dreinan',
						},
						{
							drugname: 'Eastern Cottonwood',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Reinaldos Hickisson',
						},
						{
							drugname: 'Perphenazine',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Colver Wass',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Emmerich Melwall',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'Q-8300066093',
					company: 'Spinka-Haag',
					frontimage:
						'http://dummyimage.com/183x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/24/2004',
					eligibiltybegan: '03/01/1980',
					eligibiltyexpired: '04/14/1974',
				},
				{
					primary: true,
					active: false,
					membernumber: 'N-2029428355',
					company: 'Carter, Hettinger and Klein',
					frontimage:
						'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/170x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/21/1964',
					eligibiltybegan: '09/17/1986',
					eligibiltyexpired: '02/22/2014',
				},
				{
					primary: true,
					active: false,
					membernumber: 'X-0132519684',
					company: 'Raynor and Sons',
					frontimage:
						'http://dummyimage.com/110x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/13/2020',
					eligibiltybegan: '10/04/1961',
					eligibiltyexpired: '11/01/1954',
				},
				{
					primary: true,
					active: false,
					membernumber: 'D-3706215025',
					company: 'Klein Group',
					frontimage:
						'http://dummyimage.com/146x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/05/1979',
					eligibiltybegan: '08/17/1971',
					eligibiltyexpired: '03/02/1966',
				},
				{
					primary: true,
					active: true,
					membernumber: 'H-3525897637',
					company: 'Bode-Waelchi',
					frontimage:
						'http://dummyimage.com/223x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/211x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/28/1958',
					eligibiltybegan: '05/04/1957',
					eligibiltyexpired: '10/24/1955',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-2057537893',
					company: 'Volkman, Kovacek and Stark',
					frontimage:
						'http://dummyimage.com/199x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/144x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/25/1996',
					eligibiltybegan: '12/25/1972',
					eligibiltyexpired: '07/11/1983',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Q-0274854514',
					company: 'Zulauf LLC',
					frontimage:
						'http://dummyimage.com/211x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/137x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/15/1961',
					eligibiltybegan: '05/08/1989',
					eligibiltyexpired: '02/07/2010',
				},
				{
					primary: false,
					active: false,
					membernumber: 'X-5613318105',
					company: 'Heathcote-Paucek',
					frontimage:
						'http://dummyimage.com/141x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/161x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/10/1977',
					eligibiltybegan: '08/07/2006',
					eligibiltyexpired: '10/27/1976',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-6764142194',
					company: 'Luettgen-Mitchell',
					frontimage:
						'http://dummyimage.com/126x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/05/2006',
					eligibiltybegan: '05/08/1975',
					eligibiltyexpired: '12/30/1998',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0D9H8ZZ',
					performed_by: 'Sandie Blonden',
					date: 1967,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0X054JZ',
					performed_by: 'Drugi Hanster',
					date: 1960,
					additional_information:
						'odio donec vitae nisi nam ultrices libero non mattis pulvinar',
				},
				{
					ICD10procedurecode: '041C0AB',
					performed_by: 'Rabi Saxelby',
					date: 2015,
					additional_information:
						'ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor',
				},
				{
					ICD10procedurecode: '0RTG0ZZ',
					performed_by: 'Myrah Redwin',
					date: 1978,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WP201Z',
					performed_by: 'Blondelle Trusler',
					date: 1960,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'BP0H1ZZ',
					performed_by: 'Kevin Bridgland',
					date: 2014,
					additional_information:
						'convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut',
				},
			],
		},
		ssn: '389294352',
	},
	{
		id: 86,
		details: {
			first_name: 'Averill',
			last_name: 'Backman',
			middle_name: 'abackman2d@blogspot.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '34488 Surrey Parkway',
			address_two: null,
			city: 'Round Rock',
			state: 'TX',
			zip: '78682',
			date_of_birth: '2008-12-19T01:55:02Z',
			contact_methods: [
				{ number: '207-977-7697', notes: null },
				{ number: '400-854-8311', notes: null },
				{
					number: '512-239-8225',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
				},
				{
					number: '230-109-5655',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'T567X4A',
					ICD10diagnosislongdescription:
						'Toxic effect of beryllium and its compounds, undetermined, initial encounter',
					ICD10diagnosisshortdescription:
						'Toxic effect of beryllium and its compounds, undet, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S59031A',
					ICD10diagnosislongdescription:
						'Salter-Harris Type III physeal fracture of lower end of ulna, right arm, initial encounter for closed fracture',
					ICD10diagnosisshortdescription:
						'Sltr-haris Type III physl fx lower end ulna, right arm, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Odilia Ransome',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S62347G',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of base of fifth metacarpal bone. left hand, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Nondisp fx of base of 5th MC bone. l hand, 7thG',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S12391D',
					ICD10diagnosislongdescription:
						'Other nondisplaced fracture of fourth cervical vertebra, subsequent encounter for fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Oth nondisp fx of 4th cervcal vert, subs for fx w routn heal',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Y36250',
					ICD10diagnosislongdescription:
						'War operations involving fragments from munitions, military personnel',
					ICD10diagnosisshortdescription:
						'War operations involving fragments from munitions, milt',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Marie-jeanne Burkin',
						},
						{
							drugname:
								'AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE, OXYBENZONE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Sheila Gunson',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'U-3944368813',
					company: "Erdman-O'Kon",
					frontimage:
						'http://dummyimage.com/124x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/19/2011',
					eligibiltybegan: '08/26/1975',
					eligibiltyexpired: '04/15/2006',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-1736222568',
					company: 'Schmidt LLC',
					frontimage:
						'http://dummyimage.com/178x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/161x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/26/1970',
					eligibiltybegan: '03/21/1956',
					eligibiltyexpired: '05/08/1992',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-3237640397',
					company: 'Murazik-Bernier',
					frontimage:
						'http://dummyimage.com/232x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/106x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/30/1956',
					eligibiltybegan: '04/19/2019',
					eligibiltyexpired: '01/07/2016',
				},
				{
					primary: true,
					active: true,
					membernumber: 'I-1482314070',
					company: 'Okuneva, Casper and Wilderman',
					frontimage:
						'http://dummyimage.com/159x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/233x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/13/1963',
					eligibiltybegan: '07/17/2018',
					eligibiltyexpired: '05/22/1997',
				},
				{
					primary: true,
					active: true,
					membernumber: 'T-7251419967',
					company: 'Trantow Group',
					frontimage:
						'http://dummyimage.com/219x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/244x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/04/1963',
					eligibiltybegan: '07/18/2010',
					eligibiltyexpired: '05/31/2003',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0YUC07Z',
					performed_by: 'Jorry Stainton - Skinn',
					date: 2015,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0PW144Z',
					performed_by: 'Gunter Kaveney',
					date: 2019,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0FU837Z',
					performed_by: 'Nickie Lippiett',
					date: 1994,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0W0F47Z',
					performed_by: 'Yettie McMeekan',
					date: 1972,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'D0Y67ZZ',
					performed_by: 'Dionisio Inglesant',
					date: 1974,
					additional_information: null,
				},
			],
		},
		ssn: '923560223',
	},
	{
		id: 87,
		details: {
			first_name: 'Lissie',
			last_name: 'Brandes',
			middle_name: 'lbrandes2e@friendfeed.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '4 Anhalt Parkway',
			address_two: null,
			city: 'San Antonio',
			state: 'TX',
			zip: '78235',
			date_of_birth: '2016-12-24T14:08:17Z',
			contact_methods: [
				{ number: '247-401-0075', notes: null },
				{ number: '204-677-2186', notes: null },
				{
					number: '747-544-6777',
					notes: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
				{ number: '849-333-5745', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T497X1',
					ICD10diagnosislongdescription:
						'Poisoning by dental drugs, topically applied, accidental (unintentional)',
					ICD10diagnosisshortdescription:
						'Poisoning by dental drugs, topically applied, accidental',
					medications: [
						{
							drugname: 'IBUPROFEN',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Nevins Ochiltree',
						},
						{
							drugname: 'Avobenzone, Octisalate, and Octocrylene',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Shawna Greenhowe',
						},
						{
							drugname:
								'desloratadine and pseudoephedrine sulfate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Amelina Bernardot',
						},
						{
							drugname: 'Lorazepam',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Gordy Ledington',
						},
						{
							drugname: 'montelukast sodium',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Linc Hardwicke',
						},
						{
							drugname: 'fluvoxamine maleate',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Betteann Macklin',
						},
						{
							drugname: 'Bupropion Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Gillie Gonzalez',
						},
						{
							drugname: 'Metolazone',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Gigi Piel',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52562B',
					ICD10diagnosislongdescription:
						"Barton's fracture of left radius, initial encounter for open fracture type I or II",
					ICD10diagnosisshortdescription:
						"Barton's fracture of left radius, init for opn fx type I/2",
					medications: null,
				},
				{
					ICD10diagnosiscode: 'N418',
					ICD10diagnosislongdescription:
						'Other inflammatory diseases of prostate',
					ICD10diagnosisshortdescription:
						'Other inflammatory diseases of prostate',
					medications: [
						{
							drugname: 'Warfarin Sodium',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Isaac Bowshire',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Andee Bolitho',
						},
						{
							drugname:
								'Amlodipine Besylate and Benazepril Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Alister Polland',
						},
						{
							drugname: 'theophylline anhydrous',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Pearce Grewar',
						},
						{
							drugname: 'ALFENTANIL HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ardenia Ethersey',
						},
						{
							drugname: 'Salicylic Acid',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Hamid Anstie',
						},
						{
							drugname: 'risperidone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Hayley Ollet',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'D-4067506520',
					company: 'Bernier-Hammes',
					frontimage:
						'http://dummyimage.com/205x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/244x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/13/1998',
					eligibiltybegan: '06/15/1960',
					eligibiltyexpired: '05/01/1997',
				},
				{
					primary: true,
					active: true,
					membernumber: 'R-7294412930',
					company: 'Renner, Schmidt and Klocko',
					frontimage:
						'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/248x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/03/1983',
					eligibiltybegan: '05/11/1990',
					eligibiltyexpired: '04/19/1995',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-5126292975',
					company: 'Sawayn-Hessel',
					frontimage:
						'http://dummyimage.com/146x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/248x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/17/1987',
					eligibiltybegan: '05/02/1970',
					eligibiltyexpired: '09/02/1982',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-9358022396',
					company: 'Beatty LLC',
					frontimage:
						'http://dummyimage.com/168x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/217x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/25/1985',
					eligibiltybegan: '09/03/1993',
					eligibiltyexpired: '07/09/1958',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0KTJ4ZZ',
					performed_by: 'Katlin Coulton',
					date: 1965,
					additional_information: null,
				},
				{
					ICD10procedurecode: '047P0D6',
					performed_by: 'Gwyn Beharrell',
					date: 1997,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0W2FX0Z',
					performed_by: 'Raoul Carse',
					date: 1999,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DUA07Z',
					performed_by: 'Helaina Forsbey',
					date: 1985,
					additional_information:
						'pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur',
				},
				{
					ICD10procedurecode: '0WW231Z',
					performed_by: 'Thorin Dacks',
					date: 1952,
					additional_information: null,
				},
				{
					ICD10procedurecode: '061J47Y',
					performed_by: 'Hali Cammis',
					date: 1969,
					additional_information:
						'neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris',
				},
				{
					ICD10procedurecode: '0JPW31Z',
					performed_by: 'Maribelle Siemantel',
					date: 1951,
					additional_information: null,
				},
			],
		},
		ssn: '765901676',
	},
	{
		id: 88,
		details: {
			first_name: 'Dietrich',
			last_name: 'Millard',
			middle_name: 'dmillard2f@163.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '114 Morning Drive',
			address_two: null,
			city: 'Mobile',
			state: 'AL',
			zip: '36610',
			date_of_birth: '2018-02-14T14:08:41Z',
			contact_methods: [
				{ number: '203-836-2449', notes: null },
				{ number: '832-345-4445', notes: null },
				{
					number: '246-804-6695',
					notes: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				},
				{ number: '967-221-9863', notes: null },
				{ number: '727-797-3725', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
				},
				{ allergy: null, notes: null },
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'V1959XA',
					ICD10diagnosislongdescription:
						'Pedal cycle passenger injured in collision with other motor vehicles in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Pedl cyc passenger injured in clsn w oth mv in traf, init',
					medications: [
						{
							drugname: 'Sodium Monofluorophosphate',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Ulick Mounter',
						},
						{
							drugname: 'staphylococcus aureus',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Adah Warbey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Robb Ponten',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Tedi Kausche',
						},
						{
							drugname: 'Cefdinir',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Antoinette Dohmer',
						},
						{
							drugname: 'Acetaminophen',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Gae De Michetti',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M2629',
					ICD10diagnosislongdescription:
						'Other anomalies of dental arch relationship',
					ICD10diagnosisshortdescription:
						'Other anomalies of dental arch relationship',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Burty Lancett',
						},
						{
							drugname:
								'Acetaminophen, Chlorpheniramine Maleate and Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Agneta Alldread',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T85128A',
					ICD10diagnosislongdescription:
						'Displacement of other implanted electronic stimulator of nervous system, initial encounter',
					ICD10diagnosisshortdescription:
						'Displacmnt of implnt electrnc stimultr of nervous sys, init',
					medications: [
						{
							drugname:
								'Acetaminophen, diphenhydramine HCl, phenylephrine HCl',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Dido Perell',
						},
						{
							drugname: 'ETHYL ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Lonna McKeurtan',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Griffith Gayter',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Charisse Hacun',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Berkeley Timmons',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Perri Clifford',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T85732S',
					ICD10diagnosislongdescription:
						'Infection and inflammatory reaction due to implanted electronic neurostimulator of peripheral nerve, electrode (lead), sequela',
					ICD10diagnosisshortdescription:
						'I/I react d/t implnt elec nstim of prph nrv, lead, sequela',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M67824',
					ICD10diagnosislongdescription:
						'Other specified disorders of tendon, left elbow',
					ICD10diagnosisshortdescription:
						'Other specified disorders of tendon, left elbow',
					medications: [
						{
							drugname: 'METHYL SALICYLATE, MENTHOL, CAPSAICIN',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Boycey Cathro',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Ingaborg Mattei',
						},
						{
							drugname: 'Diphenhydramine HCl, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Marrilee Goby',
						},
						{
							drugname: 'dextromethorphan polistirex',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Fidelia Gerhold',
						},
						{
							drugname: 'ciprofloxacin',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Grethel Lindback',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Thayne Seares',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C48',
					ICD10diagnosislongdescription:
						'Malignant neoplasm of retroperitoneum and peritoneum',
					ICD10diagnosisshortdescription:
						'Malignant neoplasm of retroperitoneum and peritoneum',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Emlyn Colthard',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Isak Mauditt',
						},
						{
							drugname: 'Oxygen',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Keven Sansom',
						},
						{
							drugname: 'epinephrine',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Trudi Southworth',
						},
						{
							drugname: 'Bethanechol Chloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Cassy Lattka',
						},
						{
							drugname: 'Amlodipine besylate',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Regan Soitoux',
						},
						{
							drugname:
								'amlodipine besylate and atorvastatin calcium',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Wald Drohan',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Olenolin Sterry',
						},
						{
							drugname: 'Glycerin and Naphazoline Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Isobel Gleaves',
						},
						{
							drugname: 'Temazepam',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Killian Thrustle',
						},
					],
				},
				{
					ICD10diagnosiscode: 'L02424',
					ICD10diagnosislongdescription:
						'Furuncle of left upper limb',
					ICD10diagnosisshortdescription:
						'Furuncle of left upper limb',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'Y-5553192612',
					company: 'Lehner, Ryan and Quitzon',
					frontimage:
						'http://dummyimage.com/104x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/248x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/04/2021',
					eligibiltybegan: '11/13/2011',
					eligibiltyexpired: '12/02/1987',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '03HM33Z',
					performed_by: 'Roma Barts',
					date: 1996,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0H0V07Z',
					performed_by: 'La verne Milington',
					date: 1995,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0DLC3ZZ',
					performed_by: 'Anselma Geroldini',
					date: 1984,
					additional_information:
						'ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
				},
				{
					ICD10procedurecode: 'B31M110',
					performed_by: 'Chucho Reddoch',
					date: 2010,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SWM05Z',
					performed_by: 'Gina Medgewick',
					date: 1951,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SRK07Z',
					performed_by: 'Maynard Beaglehole',
					date: 1996,
					additional_information:
						'nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida',
				},
				{
					ICD10procedurecode: '10Q08YF',
					performed_by: 'Seth Retter',
					date: 1964,
					additional_information:
						'felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam',
				},
			],
		},
		ssn: '650727528',
	},
	{
		id: 89,
		details: {
			first_name: 'Robb',
			last_name: 'Drage',
			middle_name: 'rdrage2g@icq.com',
			gender: 'Polygender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '895 Cascade Place',
			address_two: null,
			city: 'San Francisco',
			state: 'CA',
			zip: '94159',
			date_of_birth: '2018-09-18T02:58:43Z',
			contact_methods: [
				{
					number: '772-663-5399',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				},
				{
					number: '280-462-4870',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
				{ number: '833-904-8152', notes: null },
				{ number: '507-935-0905', notes: null },
				{
					number: '718-899-4931',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [{ allergy: null, notes: null }],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T573',
					ICD10diagnosislongdescription:
						'Toxic effect of hydrogen cyanide',
					ICD10diagnosisshortdescription:
						'Toxic effect of hydrogen cyanide',
					medications: [
						{
							drugname: 'doxazosin mesylate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Gillian Guillart',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Sadie Pocknoll',
						},
						{
							drugname: 'OCTINOXATE and TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Doy De Freyne',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'K-8660295868',
					company: 'Reichert-Turcotte',
					frontimage:
						'http://dummyimage.com/165x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '04/08/2016',
					eligibiltybegan: '04/19/1988',
					eligibiltyexpired: '08/01/1961',
				},
				{
					primary: true,
					active: true,
					membernumber: 'R-7103271995',
					company: 'Kuhic, Rath and Steuber',
					frontimage:
						'http://dummyimage.com/188x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/158x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/02/1981',
					eligibiltybegan: '09/21/2009',
					eligibiltyexpired: '09/08/2001',
				},
				{
					primary: true,
					active: true,
					membernumber: 'A-5718779992',
					company: 'Kessler Group',
					frontimage:
						'http://dummyimage.com/132x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/152x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/18/2007',
					eligibiltybegan: '10/23/1972',
					eligibiltyexpired: '10/29/1982',
				},
				{
					primary: false,
					active: true,
					membernumber: 'U-3277762403',
					company: 'Turcotte Inc',
					frontimage:
						'http://dummyimage.com/130x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/166x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/15/1969',
					eligibiltybegan: '05/17/1958',
					eligibiltyexpired: '06/27/1992',
				},
				{
					primary: false,
					active: false,
					membernumber: 'O-8908108283',
					company: 'Emard-Ritchie',
					frontimage:
						'http://dummyimage.com/124x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/168x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/22/1981',
					eligibiltybegan: '06/26/1981',
					eligibiltyexpired: '06/09/1997',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-1623210724',
					company: 'Bogisich, Luettgen and Upton',
					frontimage:
						'http://dummyimage.com/210x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/250x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/01/2010',
					eligibiltybegan: '05/28/1973',
					eligibiltyexpired: '07/26/2010',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-5216569880',
					company: 'Miller-Hauck',
					frontimage:
						'http://dummyimage.com/242x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/128x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '12/06/1961',
					eligibiltybegan: '04/17/2019',
					eligibiltyexpired: '08/19/1973',
				},
				{
					primary: true,
					active: true,
					membernumber: 'L-0357239988',
					company: 'Schimmel LLC',
					frontimage:
						'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/09/1990',
					eligibiltybegan: '06/12/1985',
					eligibiltyexpired: '05/09/1963',
				},
				{
					primary: true,
					active: true,
					membernumber: 'H-7310675065',
					company: 'Braun and Sons',
					frontimage:
						'http://dummyimage.com/155x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/127x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/01/1957',
					eligibiltybegan: '06/12/1998',
					eligibiltyexpired: '04/08/1987',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'DM006ZZ',
					performed_by: 'Rutherford Youde',
					date: 1993,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02LS4DZ',
					performed_by: 'Michaella Rosthorn',
					date: 2018,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0JUB37Z',
					performed_by: 'Lucho Annandale',
					date: 1971,
					additional_information: null,
				},
				{
					ICD10procedurecode: '10903ZD',
					performed_by: 'Micheil Searchfield',
					date: 1994,
					additional_information:
						'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris',
				},
				{
					ICD10procedurecode: '0V9L0ZX',
					performed_by: 'Hillier Smidmor',
					date: 2015,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0YWB3JZ',
					performed_by: 'Terrill Pittway',
					date: 1954,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B33KY0Z',
					performed_by: 'Linnet Gofford',
					date: 1993,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'B90HZZZ',
					performed_by: 'Cathleen Hallen',
					date: 2016,
					additional_information: null,
				},
			],
		},
		ssn: '863316333',
	},
	{
		id: 90,
		details: {
			first_name: 'Miller',
			last_name: 'Isacsson',
			middle_name: 'misacsson2h@msn.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '977 Quincy Junction',
			address_two: null,
			city: 'Brooksville',
			state: 'FL',
			zip: '34605',
			date_of_birth: '2002-04-13T05:35:13Z',
			contact_methods: [
				{
					number: '940-658-1851',
					notes: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
				},
				{ number: '842-417-2577', notes: null },
				{ number: '866-822-9921', notes: null },
				{ number: '166-326-8245', notes: null },
				{ number: '602-924-2936', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S91209',
					ICD10diagnosislongdescription:
						'Unspecified open wound of unspecified toe(s) with damage to nail',
					ICD10diagnosisshortdescription:
						'Unsp open wound of unspecified toe(s) with damage to nail',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Bone Glazebrook',
						},
						{
							drugname: 'Benzocaine',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Carrol Speek',
						},
						{
							drugname: 'azithromycin',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Spenser Rexworthy',
						},
						{
							drugname: 'Donepezil Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Johny Bachanski',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Ky Pullar',
						},
						{
							drugname: 'acetaminophen and codeine phosphate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Valaree Novic',
						},
						{
							drugname: 'Temazepam',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Biddie Barthelmes',
						},
						{
							drugname: 'Benzalkonium chloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Brier Huntress',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Flinn Lorkins',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S52133F',
					ICD10diagnosislongdescription:
						'Displaced fracture of neck of unspecified radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing',
					ICD10diagnosisshortdescription:
						'Disp fx of nk of unsp rad, 7thF',
					medications: [
						{
							drugname: 'nicotine polacrilex',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Raviv Davers',
						},
						{
							drugname: 'Levothyroxine sodium',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Vicki Raynton',
						},
						{
							drugname: 'Ethyl Alcohol',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Callean Oldmeadow',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Kelcy Crispin',
						},
						{
							drugname:
								'Bacitracin Zinc, Neomycin Sulfate, Polymyxin B Sulfate, and Pramoxine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Britte McCanny',
						},
						{
							drugname: 'Aluminum Zirconium Trichlorohydrex Gly',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Eamon Verbrugge',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'T-8091528334',
					company: 'Simonis, Strosin and Homenick',
					frontimage:
						'http://dummyimage.com/131x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/217x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/18/1960',
					eligibiltybegan: '07/21/1983',
					eligibiltyexpired: '04/29/2017',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-8516606168',
					company: 'Krajcik and Sons',
					frontimage:
						'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/109x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/22/2000',
					eligibiltybegan: '11/04/2020',
					eligibiltyexpired: '06/23/2003',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-5294935358',
					company: 'Okuneva LLC',
					frontimage:
						'http://dummyimage.com/120x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/135x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/06/1964',
					eligibiltybegan: '04/21/1985',
					eligibiltyexpired: '08/04/1960',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-8921213161',
					company: 'Schumm, Thiel and Wehner',
					frontimage:
						'http://dummyimage.com/212x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/248x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/05/1981',
					eligibiltybegan: '06/29/1985',
					eligibiltyexpired: '02/09/1972',
				},
				{
					primary: true,
					active: true,
					membernumber: 'E-0271569925',
					company: 'Metz and Sons',
					frontimage:
						'http://dummyimage.com/202x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/192x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/10/1982',
					eligibiltybegan: '08/11/1980',
					eligibiltyexpired: '07/08/1993',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-3894895664',
					company: 'Bergnaum and Sons',
					frontimage:
						'http://dummyimage.com/168x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/215x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/24/1952',
					eligibiltybegan: '09/07/2002',
					eligibiltyexpired: '07/02/1983',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-6045412738',
					company: 'Kutch-Harvey',
					frontimage:
						'http://dummyimage.com/228x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/14/2011',
					eligibiltybegan: '09/14/1976',
					eligibiltyexpired: '09/09/2012',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-7238269736',
					company: 'Haag, Denesik and Boyle',
					frontimage:
						'http://dummyimage.com/238x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/110x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/24/1993',
					eligibiltybegan: '12/28/2010',
					eligibiltyexpired: '05/10/1966',
				},
				{
					primary: true,
					active: true,
					membernumber: 'A-5886299361',
					company: 'Jaskolski, Gleason and Larson',
					frontimage:
						'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/175x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/21/1970',
					eligibiltybegan: '11/28/1987',
					eligibiltyexpired: '10/22/1989',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '061T47Y',
					performed_by: 'Turner Courtese',
					date: 1983,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0Q974ZX',
					performed_by: 'Cyb Jeakins',
					date: 1971,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0VWR03Z',
					performed_by: 'Perry Kensitt',
					date: 1997,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WJQ4ZZ',
					performed_by: 'Rodger Besse',
					date: 1966,
					additional_information: null,
				},
			],
		},
		ssn: '211666366',
	},
	{
		id: 91,
		details: {
			first_name: 'Stanislas',
			last_name: 'Pinnick',
			middle_name: 'spinnick2i@cam.ac.uk',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '2 Dayton Crossing',
			address_two: null,
			city: 'Jacksonville',
			state: 'FL',
			zip: '32220',
			date_of_birth: '1969-07-13T10:37:29Z',
			contact_methods: [
				{
					number: '637-210-2471',
					notes: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S52312K',
					ICD10diagnosislongdescription:
						'Greenstick fracture of shaft of radius, left arm, subsequent encounter for fracture with nonunion',
					ICD10diagnosisshortdescription:
						'Greenstick fx shaft of rad, left arm, subs for fx w nonunion',
					medications: [
						{
							drugname: 'Isopropyl Alcohol',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Saba Hadeke',
						},
						{
							drugname: 'Povidone Iodine',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Estel Atkirk',
						},
						{
							drugname: 'Ibuprofen',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Lissa Gregorace',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lauretta Fiddy',
						},
						{
							drugname: 'ONDANSETRON HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Prue Tunno',
						},
						{
							drugname: 'Nicotine Polacrilex',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Orsa McCalister',
						},
						{
							drugname:
								'ETHYLHEXYL METHOXYCINNAMATE, TITANIUM DIOXIDE, ZINC OXIDE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Kin Fuxman',
						},
						{
							drugname: 'Iodixanol',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Shara Runnacles',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Farlee Zavattiero',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M4842XA',
					ICD10diagnosislongdescription:
						'Fatigue fracture of vertebra, cervical region, initial encounter for fracture',
					ICD10diagnosisshortdescription:
						'Fatigue fracture of vertebra, cervical region, init for fx',
					medications: [
						{
							drugname: 'Clonazepam',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Jacquelynn Eates',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Dot Hellewell',
						},
						{
							drugname: 'Berberis Viscum',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Malia Weighell',
						},
						{
							drugname: 'irbesartan',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Loralee Dyzart',
						},
						{
							drugname: 'Cephalexin',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Elita Hubeaux',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Maynard Cornels',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S1264XG',
					ICD10diagnosislongdescription:
						'Type III traumatic spondylolisthesis of seventh cervical vertebra, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Type III traum spondylolysis of 7th cervcal vert, 7thG',
					medications: [
						{
							drugname: 'OXYBENZONE, AVOBENZONE, OCTOCRYLENE',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Genny Jenkison',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'U-1019631720',
					company: 'Hickle, Daugherty and Kerluke',
					frontimage:
						'http://dummyimage.com/128x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/213x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/12/1987',
					eligibiltybegan: '11/09/1956',
					eligibiltyexpired: '02/19/2002',
				},
				{
					primary: false,
					active: true,
					membernumber: 'A-3912838989',
					company: 'Kassulke-Hessel',
					frontimage:
						'http://dummyimage.com/192x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/226x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/07/1969',
					eligibiltybegan: '01/08/2016',
					eligibiltyexpired: '05/07/1993',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-0073311826',
					company: 'Turner, Williamson and Wilkinson',
					frontimage:
						'http://dummyimage.com/101x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/137x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/27/2018',
					eligibiltybegan: '09/15/1961',
					eligibiltyexpired: '11/08/1999',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-2520915843',
					company: 'Dickinson-Johns',
					frontimage:
						'http://dummyimage.com/107x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/149x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/03/1955',
					eligibiltybegan: '12/07/1984',
					eligibiltyexpired: '12/15/1955',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-5696854459',
					company: 'Streich, Murazik and Dach',
					frontimage:
						'http://dummyimage.com/189x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/235x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/29/1978',
					eligibiltybegan: '04/06/1959',
					eligibiltyexpired: '02/08/1987',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0V907ZZ',
					performed_by: 'Judye Clayhill',
					date: 1968,
					additional_information:
						'eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget',
				},
				{
					ICD10procedurecode: '0K953ZX',
					performed_by: 'Chantalle Swinbourne',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0CLB3CZ',
					performed_by: 'Jervis Scolland',
					date: 1961,
					additional_information:
						'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
				},
				{
					ICD10procedurecode: '0MN7XZZ',
					performed_by: 'Fons Caves',
					date: 1950,
					additional_information: null,
				},
				{
					ICD10procedurecode: '051A0ZY',
					performed_by: 'Lind Peer',
					date: 1960,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0XJ6XZZ',
					performed_by: 'Georgena Drennan',
					date: 2012,
					additional_information: null,
				},
			],
		},
		ssn: '642187820',
	},
	{
		id: 92,
		details: {
			first_name: 'Grayce',
			last_name: 'Dagleas',
			middle_name: 'gdagleas2j@wufoo.com',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '3851 Nobel Alley',
			address_two: null,
			city: 'Gulfport',
			state: 'MS',
			zip: '39505',
			date_of_birth: '2002-10-18T13:43:24Z',
			contact_methods: [
				{
					number: '597-852-1061',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
				{ number: '848-722-9807', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'Q685',
					ICD10diagnosislongdescription:
						'Congenital bowing of long bones of leg, unspecified',
					ICD10diagnosisshortdescription:
						'Congenital bowing of long bones of leg, unspecified',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'W1843XD',
					ICD10diagnosislongdescription:
						'Slipping, tripping and stumbling without falling due to stepping from one level to another, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Slip/trip w/o fall d/t step from one level to another, subs',
					medications: [
						{
							drugname: 'Calcium carbonate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Charmain Hearty',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Hamlen Bullivent',
						},
						{
							drugname: 'Folliculinum, OOphorinum,',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Bartlett Oke',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Brook Gadsdon',
						},
					],
				},
				{
					ICD10diagnosiscode: 'N251',
					ICD10diagnosislongdescription:
						'Nephrogenic diabetes insipidus',
					ICD10diagnosisshortdescription:
						'Nephrogenic diabetes insipidus',
					medications: [
						{
							drugname: 'Econazole Nitrate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Rosalinde MacVagh',
						},
						{
							drugname: 'lisinopril',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Annie Gilliver',
						},
						{
							drugname: 'Alprazolam',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Madonna Rummins',
						},
						{
							drugname:
								'Aluminum Zirconium Tetrachlorohydrex GLY',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Eileen Postance',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Raymond Cowperthwaite',
						},
						{
							drugname: 'OCTINOXATE',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Pansie Wernham',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M21929',
					ICD10diagnosislongdescription:
						'Unspecified acquired deformity of unspecified upper arm',
					ICD10diagnosisshortdescription:
						'Unspecified acquired deformity of unspecified upper arm',
					medications: [
						{
							drugname: 'MENTHOL',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Bobbe Dickins',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Candis Musicka',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Beatrix Petrus',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Karyn Umfrey',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Eric MacKill',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Matty Piecha',
						},
						{
							drugname: 'Aurum Lavender Rose',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Hammad Cullin',
						},
						{
							drugname: 'Chinese Elm',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Gleda Murrow',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S37099A',
					ICD10diagnosislongdescription:
						'Other injury of unspecified kidney, initial encounter',
					ICD10diagnosisshortdescription:
						'Other injury of unspecified kidney, initial encounter',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Carlina Olivari',
						},
						{
							drugname: 'Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Bernard Kraut',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Constantine Kubicek',
						},
						{
							drugname: 'ARNICA MONTANA',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Husain Pumphrey',
						},
						{
							drugname: 'Clarithromycin',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Debra Buttrum',
						},
						{
							drugname: 'Treatment Set TS332131',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Rhody Wortt',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V767XXA',
					ICD10diagnosislongdescription:
						'Person on outside of bus injured in collision with other nonmotor vehicle in traffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Person outsd bus inj in clsn w nonmtr vehicle in traf, init',
					medications: [
						{
							drugname: 'Fluvastatin',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Waldo Fowell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Opal Haszard',
						},
						{
							drugname: 'citalopram hydrobromide',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Hobie Hepher',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Skylar Denslow',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Wadsworth Parlott',
						},
						{
							drugname: 'Triclosan',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Mario Hodjetts',
						},
						{
							drugname: 'lisinopril',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Sayres Laming',
						},
						{
							drugname: 'octinoxate, octisalate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Gertrud Ledes',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M00172',
					ICD10diagnosislongdescription:
						'Pneumococcal arthritis, left ankle and foot',
					ICD10diagnosisshortdescription:
						'Pneumococcal arthritis, left ankle and foot',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Georgina McGilben',
						},
						{
							drugname: 'bismuth subsalicylate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Sidonnie Dansie',
						},
						{
							drugname: 'Neostigmine Methylsulfate',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Camella Phython',
						},
						{
							drugname: 'Furosemide',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Colleen Marchelli',
						},
						{
							drugname: 'ALUMINUM CHLOROHYDRATE',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Jodi Regorz',
						},
						{
							drugname: 'DayQuil',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Benyamin Barritt',
						},
						{
							drugname: 'Oxymetazoline HCl',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Zulema Marzellano',
						},
						{
							drugname: 'Naproxen Sodium',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Eb Mathiot',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'S-7120422528',
					company: 'Murray Group',
					frontimage:
						'http://dummyimage.com/123x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/225x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/21/1973',
					eligibiltybegan: '12/04/1989',
					eligibiltyexpired: '11/02/2003',
				},
				{
					primary: false,
					active: true,
					membernumber: 'N-0858965423',
					company: 'Connelly LLC',
					frontimage:
						'http://dummyimage.com/193x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/145x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/21/1956',
					eligibiltybegan: '05/13/1972',
					eligibiltyexpired: '04/03/2005',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-9388385252',
					company: 'Goodwin, Abshire and Koch',
					frontimage:
						'http://dummyimage.com/232x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/126x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/07/1975',
					eligibiltybegan: '02/08/2015',
					eligibiltyexpired: '05/26/1951',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-9366443549',
					company: 'Beatty-Larkin',
					frontimage:
						'http://dummyimage.com/239x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/12/1967',
					eligibiltybegan: '05/26/1997',
					eligibiltyexpired: '05/29/2022',
				},
				{
					primary: false,
					active: true,
					membernumber: 'B-8576494230',
					company: 'Dibbert, Witting and Tillman',
					frontimage:
						'http://dummyimage.com/246x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/122x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/28/1968',
					eligibiltybegan: '01/24/1961',
					eligibiltyexpired: '02/06/1985',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-6604812105',
					company: 'Herman, Heaney and Aufderhar',
					frontimage:
						'http://dummyimage.com/131x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/116x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/01/2019',
					eligibiltybegan: '10/18/2005',
					eligibiltyexpired: '01/11/1982',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-7562755086',
					company: 'Kemmer Inc',
					frontimage:
						'http://dummyimage.com/173x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/23/1954',
					eligibiltybegan: '02/15/1960',
					eligibiltyexpired: '06/14/1969',
				},
				{
					primary: false,
					active: false,
					membernumber: 'E-7302778194',
					company: 'Harris Inc',
					frontimage:
						'http://dummyimage.com/158x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/101x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/04/2014',
					eligibiltybegan: '11/30/2000',
					eligibiltyexpired: '10/03/2000',
				},
				{
					primary: true,
					active: false,
					membernumber: 'F-6644707986',
					company: 'Reilly-MacGyver',
					frontimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/160x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '05/01/1984',
					eligibiltybegan: '03/08/2009',
					eligibiltyexpired: '08/20/1964',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-1916131275',
					company: 'Batz-Bogan',
					frontimage:
						'http://dummyimage.com/228x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/10/1987',
					eligibiltybegan: '03/24/1965',
					eligibiltyexpired: '02/02/1967',
				},
			],
			surgicalhistory: null,
		},
		ssn: '858429503',
	},
	{
		id: 93,
		details: {
			first_name: 'Maximilian',
			last_name: 'Iacobo',
			middle_name: 'miacobo2k@prnewswire.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '48 Northfield Pass',
			address_two: null,
			city: 'Saint Paul',
			state: 'MN',
			zip: '55103',
			date_of_birth: '1958-12-27T10:14:23Z',
			contact_methods: [
				{ number: '916-965-7251', notes: null },
				{ number: '639-338-4829', notes: null },
				{ number: '890-807-1823', notes: null },
				{ number: '973-983-5973', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
				},
				{
					allergy: null,
					notes: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S3639XA',
					ICD10diagnosislongdescription:
						'Other injury of stomach, initial encounter',
					ICD10diagnosisshortdescription:
						'Other injury of stomach, initial encounter',
					medications: [
						{
							drugname: 'Ribavirin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Saxe Hofton',
						},
						{
							drugname: 'triclocarban',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Bo McGonnell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Fayette Collicott',
						},
						{
							drugname: 'Meprobamate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ariel Mitton',
						},
						{
							drugname: 'clozapine',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Reid Hollows',
						},
						{
							drugname: 'quinupristin and dalfopristin',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Gladys Blything',
						},
						{
							drugname: 'PETROLATUM',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Kenyon Paulat',
						},
						{
							drugname: 'DEXAMETHASONE SODIUM PHOSPHATE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Mercedes Bosward',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V9534XA',
					ICD10diagnosislongdescription:
						'Commercial fixed-wing aircraft fire injuring occupant, initial encounter',
					ICD10diagnosisshortdescription:
						'Commercial fixed-wing aircraft fire injuring occupant, init',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Alameda Dudgeon',
						},
						{
							drugname: 'Loperamide Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Aurelea Thaine',
						},
						{
							drugname: 'quinapril hydrochloride',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Humfrey Bleakman',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Carilyn Tremontana',
						},
						{
							drugname: 'Sodium Fluoride',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Ethelyn Bog',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Thayne Baildon',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Georg Penrice',
						},
						{
							drugname: 'OCTINOXATE, TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Otho Siaskowski',
						},
						{
							drugname:
								'Acetaminophen, Dextromethorphan HBr, Guaifenesin, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Derril Casper',
						},
					],
				},
				{
					ICD10diagnosiscode: 'P579',
					ICD10diagnosislongdescription: 'Kernicterus, unspecified',
					ICD10diagnosisshortdescription: 'Kernicterus, unspecified',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'K08531',
					ICD10diagnosislongdescription:
						'Fractured dental restorative material with loss of material',
					ICD10diagnosisshortdescription:
						'Fractured dental restorative material with loss of material',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Jerrold De Cruz',
						},
						{
							drugname: 'Droperidol',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Tessi Cookley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Sarah Bracknall',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Chadwick Fairey',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Morgan Urling',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Avery Oxtiby',
						},
					],
				},
				{
					ICD10diagnosiscode: 'I82622',
					ICD10diagnosislongdescription:
						'Acute embolism and thrombosis of deep veins of left upper extremity',
					ICD10diagnosisshortdescription:
						'Acute embolism and thrombosis of deep veins of l up extrem',
					medications: [
						{
							drugname: 'ROPINIROLE HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Luther Marcoolyn',
						},
						{
							drugname: 'Levetiracetam',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Nari Bourget',
						},
						{
							drugname:
								'aliskiren hemifumarate and hydrochlorothiazide',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Derrick Winteringham',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Babita Keling',
						},
						{
							drugname:
								'Acetaminophen, Chlorpheniramine maleate, Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Salli Apperley',
						},
						{
							drugname: 'Simvastatin',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Allayne Ocklin',
						},
						{
							drugname:
								'Potassium Phosphate, Monobasic and Potassium Phosphate, Dibasic',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Lorilee Royce',
						},
						{
							drugname: 'Carbidopa and Levodopa',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Orren Longmate',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Manya Moyles',
						},
						{
							drugname: 'GABAPENTIN',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Siffre Papworth',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M488X8',
					ICD10diagnosislongdescription:
						'Other specified spondylopathies, sacral and sacrococcygeal region',
					ICD10diagnosisshortdescription:
						'Oth spondylopathies, sacral and sacrococcygeal region',
					medications: [
						{
							drugname: 'BISMUTH SUBSALICYLATE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Colleen Le Huquet',
						},
						{
							drugname: 'POVIDONE-IODINE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Bobbie Danelut',
						},
						{
							drugname: 'Amitriptyline Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Rosana Yates',
						},
						{
							drugname: 'TITANIUM DIOXIDE AND ZINC OXIDE',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Elka Woodyear',
						},
						{
							drugname: 'Loratadine',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Minnie Caff',
						},
						{
							drugname: 'Diphenhydramine HCl',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Corinne Potzold',
						},
						{
							drugname:
								'Anticoagulant Citrate Phosphate Dextrose Adenine (CPDA-1)',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Louise MacGiany',
						},
						{
							drugname: 'Furosemide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Brianne Messham',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M84471P',
					ICD10diagnosislongdescription:
						'Pathological fracture, right ankle, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Pathological fracture, right ankle, subs for fx w malunion',
					medications: [
						{
							drugname: 'Ailanthus Tree of Heaven',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Kingston MacGillivray',
						},
						{
							drugname: 'oxycodone hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Orelee Jacketts',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Egbert Triswell',
						},
						{
							drugname: 'Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Agnesse Broxton',
						},
						{
							drugname:
								'dextromethorphan hydrobromide, guaifenesin, phenylephrine hydrochloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Mayne Dunmuir',
						},
						{
							drugname: 'Sucralfate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Byrom Baskwell',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Hildegarde Blaisdell',
						},
						{
							drugname: 'calcium carbonate',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Mathias Roxburgh',
						},
						{
							drugname: 'stannous fluoride',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Martina Winpenny',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M86639',
					ICD10diagnosislongdescription:
						'Other chronic osteomyelitis, unspecified radius and ulna',
					ICD10diagnosisshortdescription:
						'Other chronic osteomyelitis, unspecified radius and ulna',
					medications: [
						{
							drugname: 'Estradiol',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Ardis Benbough',
						},
						{
							drugname: 'butalbital and acetaminophen',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Sigismund Skeen',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Marcie McKinnon',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Anetta Manneville',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S82831F',
					ICD10diagnosislongdescription:
						'Other fracture of upper and lower end of right fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing',
					ICD10diagnosisshortdescription:
						'Oth fx upr & low end r fibula, 7thF',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'T-8870322480',
					company: 'Jakubowski LLC',
					frontimage:
						'http://dummyimage.com/189x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/178x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '06/27/1972',
					eligibiltybegan: '08/11/2018',
					eligibiltyexpired: '04/21/1959',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-8211169592',
					company: 'Tromp, Price and Bashirian',
					frontimage:
						'http://dummyimage.com/144x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/205x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/07/1953',
					eligibiltybegan: '08/14/2018',
					eligibiltyexpired: '08/28/2005',
				},
				{
					primary: false,
					active: true,
					membernumber: 'O-4264275360',
					company: 'Lesch, Dickinson and Boehm',
					frontimage:
						'http://dummyimage.com/173x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/230x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/17/1994',
					eligibiltybegan: '05/30/1974',
					eligibiltyexpired: '07/24/2004',
				},
				{
					primary: true,
					active: true,
					membernumber: 'L-0139516583',
					company: 'Roberts LLC',
					frontimage:
						'http://dummyimage.com/114x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/113x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/19/1958',
					eligibiltybegan: '07/14/1979',
					eligibiltyexpired: '11/01/1998',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-1638486510',
					company: 'Breitenberg-Baumbach',
					frontimage:
						'http://dummyimage.com/150x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/174x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/05/1993',
					eligibiltybegan: '10/29/1992',
					eligibiltyexpired: '08/31/1982',
				},
				{
					primary: false,
					active: true,
					membernumber: 'C-3201812003',
					company: 'Collier Group',
					frontimage:
						'http://dummyimage.com/170x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/199x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/26/2021',
					eligibiltybegan: '10/17/2004',
					eligibiltyexpired: '04/16/1969',
				},
				{
					primary: true,
					active: false,
					membernumber: 'S-7079438464',
					company: 'McClure, Klocko and DuBuque',
					frontimage:
						'http://dummyimage.com/224x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/113x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/22/2017',
					eligibiltybegan: '08/26/1950',
					eligibiltyexpired: '09/25/1997',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-1752781018',
					company: 'Boehm, Bednar and Dach',
					frontimage:
						'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/184x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/13/1979',
					eligibiltybegan: '11/29/1954',
					eligibiltyexpired: '08/08/1976',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '03160K8',
					performed_by: 'Lorilyn Orred',
					date: 1972,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0PP74JZ',
					performed_by: 'Cullen Lambrick',
					date: 1971,
					additional_information:
						'in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat',
				},
				{
					ICD10procedurecode: '03543ZZ',
					performed_by: 'Colin Jonah',
					date: 2006,
					additional_information: null,
				},
			],
		},
		ssn: '864393346',
	},
	{
		id: 94,
		details: {
			first_name: 'Shepard',
			last_name: 'Levitt',
			middle_name: 'slevitt2l@uol.com.br',
			gender: 'Agender',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '15 Sycamore Drive',
			address_two: null,
			city: 'Bethesda',
			state: 'MD',
			zip: '20816',
			date_of_birth: '1970-08-08T17:26:27Z',
			contact_methods: [
				{ number: '616-604-3746', notes: null },
				{ number: '144-952-1326', notes: null },
				{ number: '215-760-3625', notes: null },
				{ number: '803-706-5711', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
				},
				{
					allergy: null,
					notes: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				},
				{
					allergy: null,
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H680',
					ICD10diagnosislongdescription: 'Eustachian salpingitis',
					ICD10diagnosisshortdescription: 'Eustachian salpingitis',
					medications: [
						{
							drugname: 'Cilostazol',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Buck Bilverstone',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Madella Gandley',
						},
						{
							drugname: 'GOLD TRICHLORIDE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Madonna Feacham',
						},
						{
							drugname:
								'brompheniramine maleate, dextromethorphan hbr, phenylephrine hcl',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Quentin Sumsion',
						},
						{
							drugname: 'Desipramine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Meredithe Caldroni',
						},
						{
							drugname: 'HEPARIN SODIUM',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Tyler Everill',
						},
						{
							drugname: 'Methylergonovine Maleate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: "Vito O'Lahy",
						},
					],
				},
				{
					ICD10diagnosiscode: 'P2421',
					ICD10diagnosislongdescription:
						'Neonatal aspiration of blood with respiratory symptoms',
					ICD10diagnosisshortdescription:
						'Neonatal aspiration of blood with respiratory symptoms',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Bronny Dowsett',
						},
						{
							drugname: 'Prednisolone Sodium Phosphate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Inglebert Climar',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Conni Adie',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Shandie Embleton',
						},
						{
							drugname: 'Aluminum Sesquichlorohydrate',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Baron Emmott',
						},
						{
							drugname: 'valacyclovir hydrochloride',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Kimberley Goss',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Moishe Andrioli',
						},
						{
							drugname: 'Rhizopus oryzae',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Eliot Coburn',
						},
						{
							drugname: 'Fluconazole',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Rhodia Alan',
						},
						{
							drugname: 'Triclosan',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Demetra Stokoe',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S32423B',
					ICD10diagnosislongdescription:
						'Displaced fracture of posterior wall of unspecified acetabulum, initial encounter for open fracture',
					ICD10diagnosisshortdescription:
						'Disp fx of posterior wall of unsp acetab, init for opn fx',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Reg De Domenico',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Brandon Marsy',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Whitney Padly',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Guilbert Sinisbury',
						},
						{
							drugname: 'Trazodone Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Maximo Bengefield',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Olga Halm',
						},
						{
							drugname: 'metolazone',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Olive Darycott',
						},
						{
							drugname: 'OCTINOXATE, TITANIUM DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Portia Teacy',
						},
						{
							drugname: 'telmisartan/amlodipine',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Gwyneth Whittlesee',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M6513',
					ICD10diagnosislongdescription:
						'Other infective (teno)synovitis, wrist',
					ICD10diagnosisshortdescription:
						'Other infective (teno)synovitis, wrist',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M66252',
					ICD10diagnosislongdescription:
						'Spontaneous rupture of extensor tendons, left thigh',
					ICD10diagnosisshortdescription:
						'Spontaneous rupture of extensor tendons, left thigh',
					medications: [
						{
							drugname: 'Oxaliplatin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Obediah Whitlam',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Torry Corish',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Garland Dugget',
						},
						{
							drugname: 'TRAMADOL HYDROCHLORIDE',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Cathee Jobey',
						},
						{
							drugname: 'METFORMIN HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Faythe Coton',
						},
						{
							drugname:
								'bisoprolol fumarate and hydrochlorothiazide',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Julio Rosenzveig',
						},
						{
							drugname:
								'Tetrahydrozoline hydrochloride, Zinc sulfate',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Fair De Normanville',
						},
						{
							drugname: 'hydrocortisone acetate pramoxine hcl',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Carlin Rossi',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Louie Brunner',
						},
						{
							drugname: 'quercus virginiana pollen',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Remington Wilber',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S92354G',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of fifth metatarsal bone, right foot, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Nondisp fx of 5th metatarsal bone, r ft, 7thG',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'M898X8',
					ICD10diagnosislongdescription:
						'Other specified disorders of bone, other site',
					ICD10diagnosisshortdescription:
						'Other specified disorders of bone, other site',
					medications: [
						{
							drugname: 'Petrolatum, Octinoxate, and Oxybenzone',
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Gwenni Schroeder',
						},
						{
							drugname: 'Isopropyl Alcohol',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Olva Kwiek',
						},
						{
							drugname: 'HEPARIN SODIUM',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Thomas Keneleyside',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Gwyneth Belshaw',
						},
						{
							drugname: 'rocuronium bromide',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Bearnard Friday',
						},
						{
							drugname: 'Zaleplon',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Danny Akitt',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Tabby Cano',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'D-6233401846',
					company: 'Nitzsche-Hartmann',
					frontimage:
						'http://dummyimage.com/153x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/10/1983',
					eligibiltybegan: '02/11/1959',
					eligibiltyexpired: '10/01/1966',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-0280337273',
					company: 'Hudson Group',
					frontimage:
						'http://dummyimage.com/109x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/184x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/14/2021',
					eligibiltybegan: '06/29/1989',
					eligibiltyexpired: '07/07/1953',
				},
				{
					primary: false,
					active: true,
					membernumber: 'K-1805069025',
					company: 'West and Sons',
					frontimage:
						'http://dummyimage.com/198x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/24/1981',
					eligibiltybegan: '08/30/1973',
					eligibiltyexpired: '01/15/1974',
				},
				{
					primary: false,
					active: true,
					membernumber: 'S-6380983681',
					company: 'Conn Group',
					frontimage:
						'http://dummyimage.com/179x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/181x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/30/1968',
					eligibiltybegan: '03/05/1974',
					eligibiltyexpired: '04/18/1970',
				},
				{
					primary: false,
					active: false,
					membernumber: 'R-2234550160',
					company: 'Rowe, Feest and Boyle',
					frontimage:
						'http://dummyimage.com/231x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/236x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/16/1961',
					eligibiltybegan: '08/15/1997',
					eligibiltyexpired: '06/27/1960',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Y-3395290925',
					company: 'Leffler and Sons',
					frontimage:
						'http://dummyimage.com/214x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/119x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/23/1966',
					eligibiltybegan: '12/27/2015',
					eligibiltyexpired: '04/15/1952',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-9095018307',
					company: 'Koch-Hettinger',
					frontimage:
						'http://dummyimage.com/136x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/103x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/09/1956',
					eligibiltybegan: '06/01/1963',
					eligibiltyexpired: '07/27/1999',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Z-0896381829',
					company: 'Goyette, Robel and Prosacco',
					frontimage:
						'http://dummyimage.com/144x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/184x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/04/1952',
					eligibiltybegan: '11/20/2004',
					eligibiltyexpired: '03/30/1961',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-1598660943',
					company: 'Fahey, Schowalter and Langworth',
					frontimage:
						'http://dummyimage.com/152x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/107x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/10/2019',
					eligibiltybegan: '03/17/1977',
					eligibiltyexpired: '05/11/1957',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Z-9593324593',
					company: 'Wilkinson Inc',
					frontimage:
						'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/223x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/24/1962',
					eligibiltybegan: '08/25/2008',
					eligibiltyexpired: '02/27/2001',
				},
			],
			surgicalhistory: null,
		},
		ssn: '951489393',
	},
	{
		id: 95,
		details: {
			first_name: 'Andonis',
			last_name: 'Cosgrive',
			middle_name: 'acosgrive2m@ocn.ne.jp',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '6 Shasta Center',
			address_two: null,
			city: 'Chicago',
			state: 'IL',
			zip: '60646',
			date_of_birth: '1994-10-17T10:32:04Z',
			contact_methods: [
				{ number: '657-796-5164', notes: null },
				{ number: '754-122-8141', notes: null },
				{
					number: '421-553-5170',
					notes: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'M84641P',
					ICD10diagnosislongdescription:
						'Pathological fracture in other disease, right hand, subsequent encounter for fracture with malunion',
					ICD10diagnosisshortdescription:
						'Path fracture in oth disease, r hand, subs for fx w malunion',
					medications: [
						{
							drugname: 'Gnaphalium Stannum',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Alex Motto',
						},
						{
							drugname: 'Dimethicone',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Marlin Crilly',
						},
						{
							drugname: 'Atenolol',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Fergus Chattell',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Prentiss Kohrs',
						},
					],
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'W-8783054764',
					company: 'Maggio, Hodkiewicz and Kiehn',
					frontimage:
						'http://dummyimage.com/187x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/134x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/14/1984',
					eligibiltybegan: '08/14/1968',
					eligibiltyexpired: '05/16/1975',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Q-4732802589',
					company: 'Kertzmann-Heller',
					frontimage:
						'http://dummyimage.com/179x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/162x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/25/2013',
					eligibiltybegan: '05/01/1957',
					eligibiltyexpired: '12/28/1953',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-5875387190',
					company: 'Zboncak-Stamm',
					frontimage:
						'http://dummyimage.com/244x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/100x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/19/1970',
					eligibiltybegan: '08/31/2016',
					eligibiltyexpired: '05/11/1951',
				},
				{
					primary: false,
					active: false,
					membernumber: 'J-3084237276',
					company: 'Green-Harvey',
					frontimage:
						'http://dummyimage.com/144x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/14/2008',
					eligibiltybegan: '04/03/2005',
					eligibiltyexpired: '12/12/1974',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-9318899412',
					company: 'Connelly Inc',
					frontimage:
						'http://dummyimage.com/244x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/27/1961',
					eligibiltybegan: '11/01/1955',
					eligibiltyexpired: '02/05/1968',
				},
				{
					primary: true,
					active: true,
					membernumber: 'U-7738553802',
					company: 'Daniel-Altenwerth',
					frontimage:
						'http://dummyimage.com/177x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '04/10/2004',
					eligibiltybegan: '03/16/1996',
					eligibiltyexpired: '07/25/1984',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-3655749261',
					company: 'Koch, Thiel and Kuhlman',
					frontimage:
						'http://dummyimage.com/140x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/114x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/13/1959',
					eligibiltybegan: '11/21/1993',
					eligibiltyexpired: '04/05/1957',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Z-3606053622',
					company: 'Yundt, Boehm and Rutherford',
					frontimage:
						'http://dummyimage.com/148x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '12/15/1991',
					eligibiltybegan: '12/26/1981',
					eligibiltyexpired: '11/11/1969',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-9082130117',
					company: 'Gorczany, Keeling and Mann',
					frontimage:
						'http://dummyimage.com/209x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/211x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/11/1987',
					eligibiltybegan: '08/05/1978',
					eligibiltyexpired: '07/19/1965',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '03QN3ZZ',
					performed_by: 'Amy Coughan',
					date: 1974,
					additional_information:
						'nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat',
				},
				{
					ICD10procedurecode: '0QRS07Z',
					performed_by: 'Townie Old',
					date: 1970,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0KSS0ZZ',
					performed_by: 'Gottfried Tacker',
					date: 1981,
					additional_information: null,
				},
			],
		},
		ssn: '306569399',
	},
	{
		id: 96,
		details: {
			first_name: 'Bogart',
			last_name: 'Bushaway',
			middle_name: 'bbushaway2n@mtv.com',
			gender: 'Male',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '33725 Dovetail Park',
			address_two: null,
			city: 'Canton',
			state: 'OH',
			zip: '44705',
			date_of_birth: '1993-06-16T08:51:40Z',
			contact_methods: [
				{
					number: '618-841-1941',
					notes: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				},
				{ number: '290-988-1478', notes: null },
				{
					number: '605-307-4848',
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: null,
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
				{
					allergy: 'peanut',
					notes: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
				},
				{
					allergy: 'peanut',
					notes: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S53005',
					ICD10diagnosislongdescription:
						'Unspecified dislocation of left radial head',
					ICD10diagnosisshortdescription:
						'Unspecified dislocation of left radial head',
					medications: [
						{
							drugname:
								'Fucus vesiculosus, Cyanocobalamin, Glandula suprarenalis suis, Hepar suis, L-carnitine, Ornithine, Antimonium crudum,',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Cole Cowdrey',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Theo Bodycote',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Kay Caddell',
						},
						{
							drugname: 'Octinoxate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ganny Jendas',
						},
						{
							drugname: 'Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Never',
							prescribed_by: 'Letty Giorgetti',
						},
						{
							drugname: 'Diphenhydramine Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Katerine Alelsandrowicz',
						},
						{
							drugname: 'darifenacin',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Zackariah Castanaga',
						},
						{
							drugname: 'Amoxicillin',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Caldwell Hann',
						},
						{
							drugname:
								'Aralia quinquefolia , Humulus lupulus, Adrenalinum, Cortisone aceticum, Thyroidinum suis, Selenium metallicum, Arsenicum album, Calcarea carbonica, Convallaria majalis, Crotalus horridus,',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Kristan Lynnett',
						},
					],
				},
				{
					ICD10diagnosiscode: 'O699XX4',
					ICD10diagnosislongdescription:
						'Labor and delivery complicated by cord complication, unspecified, fetus 4',
					ICD10diagnosisshortdescription:
						'Labor and delivery complicated by cord comp, unsp, fetus 4',
					medications: [
						{
							drugname: 'Phenylephrine HCl',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Nevin Wheildon',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Audie Beddis',
						},
						{
							drugname:
								'Anacardium, Calcerea carbonica, Hypericum, Magnesia phosphorica, Piper methysticum, Ruta graveolens, Silicea',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Judah Agerskow',
						},
						{
							drugname: 'Propranolol',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Lawry Jemmison',
						},
					],
				},
				{
					ICD10diagnosiscode: 'I5043',
					ICD10diagnosislongdescription:
						'Acute on chronic combined systolic (congestive) and diastolic (congestive) heart failure',
					ICD10diagnosisshortdescription:
						'Acute on chronic combined systolic and diastolic hrt fail',
					medications: [
						{
							drugname: 'Ropinirole Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Ruperto Glanz',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Deeanne Kendrew',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63202A',
					ICD10diagnosislongdescription:
						'Unspecified subluxation of right middle finger, initial encounter',
					ICD10diagnosisshortdescription:
						'Unspecified subluxation of right middle finger, init encntr',
					medications: [
						{
							drugname: 'Benzethonium Chloride',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Alf Pantecost',
						},
						{
							drugname: 'Potassium Chloride',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ursa Woolmore',
						},
						{
							drugname: 'Primidone',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Tammy Wilding',
						},
						{
							drugname:
								'acetaminophen, dextromethorphan hbr, guaifenesin, phenylephrine hcl',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Avis Redhouse',
						},
						{
							drugname: 'Titanium Dioxide',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Lucy Mosedall',
						},
						{
							drugname: 'Maple Sugar',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Lu Bezant',
						},
						{
							drugname: 'Sumatriptan Succinate',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Willow Posten',
						},
						{
							drugname: 'metronidazole',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Chelsey Rackley',
						},
						{
							drugname: 'ustilago maydis',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Opalina Eller',
						},
					],
				},
				{
					ICD10diagnosiscode: 'C8473',
					ICD10diagnosislongdescription:
						'Anaplastic large cell lymphoma, ALK-negative, intra-abdominal lymph nodes',
					ICD10diagnosisshortdescription:
						'Anaplastic large cell lymphoma, ALK-neg, intra-abd nodes',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S36892D',
					ICD10diagnosislongdescription:
						'Contusion of other intra-abdominal organs, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Contusion of other intra-abdominal organs, subs encntr',
					medications: null,
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'C-9776037464',
					company: 'Hills, Nolan and Prohaska',
					frontimage:
						'http://dummyimage.com/167x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/201x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/27/1960',
					eligibiltybegan: '07/24/1980',
					eligibiltyexpired: '09/10/1977',
				},
				{
					primary: false,
					active: false,
					membernumber: 'W-4670516515',
					company: 'Stanton, Wehner and Rutherford',
					frontimage:
						'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/101x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/31/1995',
					eligibiltybegan: '10/05/1973',
					eligibiltyexpired: '12/12/1990',
				},
				{
					primary: true,
					active: false,
					membernumber: 'H-8010771698',
					company: 'Kassulke-Turner',
					frontimage:
						'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/170x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/16/2003',
					eligibiltybegan: '06/03/1999',
					eligibiltyexpired: '03/12/2001',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-6678872304',
					company: 'Funk-Hickle',
					frontimage:
						'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/201x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/16/2000',
					eligibiltybegan: '10/17/1980',
					eligibiltyexpired: '04/15/1979',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-6465544415',
					company: 'Bernier-Robel',
					frontimage:
						'http://dummyimage.com/221x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/125x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/22/2007',
					eligibiltybegan: '12/10/1953',
					eligibiltyexpired: '08/06/2012',
				},
				{
					primary: true,
					active: false,
					membernumber: 'V-8081526608',
					company: 'Wyman, Gaylord and Fadel',
					frontimage:
						'http://dummyimage.com/113x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/192x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/14/1954',
					eligibiltybegan: '01/28/2006',
					eligibiltyexpired: '05/10/1957',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-4261867611',
					company: 'Bartell Inc',
					frontimage:
						'http://dummyimage.com/188x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/175x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/09/2018',
					eligibiltybegan: '07/17/1991',
					eligibiltyexpired: '12/16/1963',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0SWJ00Z',
					performed_by: 'Nikola Sidnell',
					date: 1979,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D19474',
					performed_by: 'Adrien Roakes',
					date: 1965,
					additional_information: null,
				},
				{
					ICD10procedurecode: '09BC3ZZ',
					performed_by: 'Nelia Landsbury',
					date: 1981,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RGN35Z',
					performed_by: 'Cyndi Abramamovh',
					date: 1998,
					additional_information:
						'purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor',
				},
				{
					ICD10procedurecode: '0BL53CZ',
					performed_by: 'Cody Joriot',
					date: 2018,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02HL3KZ',
					performed_by: 'Grove Sincock',
					date: 1991,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0ULG7ZZ',
					performed_by: 'Lavinia Iglesias',
					date: 1988,
					additional_information: null,
				},
				{
					ICD10procedurecode: '3E0H87Z',
					performed_by: 'Toddy Skilbeck',
					date: 1987,
					additional_information: null,
				},
				{
					ICD10procedurecode: '06RJ47Z',
					performed_by: 'Kissie Newarte',
					date: 2006,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D194K9',
					performed_by: 'Shalom Grane',
					date: 1954,
					additional_information:
						'in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque',
				},
			],
		},
		ssn: '824554066',
	},
	{
		id: 97,
		details: {
			first_name: 'Morrie',
			last_name: 'Abbyss',
			middle_name: 'mabbyss2o@timesonline.co.uk',
			gender: 'Male',
			preffered_name: null,
			address_one: '0371 Dayton Park',
			address_two: null,
			city: 'Jefferson City',
			state: 'MO',
			zip: '65110',
			date_of_birth: '1962-10-18T09:48:40Z',
			contact_methods: [
				{
					number: '354-606-6051',
					notes: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				},
				{
					number: '327-426-2083',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.',
				},
				{
					number: '542-576-4274',
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: null,
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'V-6880278812',
					company: 'Bailey-Nitzsche',
					frontimage:
						'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/19/1956',
					eligibiltybegan: '11/03/2001',
					eligibiltyexpired: '12/25/1970',
				},
				{
					primary: false,
					active: true,
					membernumber: 'I-2021558607',
					company: "O'Conner-Russel",
					frontimage:
						'http://dummyimage.com/250x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/192x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '08/03/1961',
					eligibiltybegan: '05/08/1976',
					eligibiltyexpired: '06/17/2018',
				},
				{
					primary: true,
					active: true,
					membernumber: 'E-0661028629',
					company: 'Trantow, Purdy and Green',
					frontimage:
						'http://dummyimage.com/170x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/27/1972',
					eligibiltybegan: '09/13/1955',
					eligibiltyexpired: '06/26/1956',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-6885016513',
					company: 'Greenfelder Inc',
					frontimage:
						'http://dummyimage.com/183x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/103x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/19/2007',
					eligibiltybegan: '08/02/1986',
					eligibiltyexpired: '12/24/1999',
				},
				{
					primary: true,
					active: true,
					membernumber: 'T-1479084959',
					company: 'Effertz Inc',
					frontimage:
						'http://dummyimage.com/158x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/135x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '10/09/1996',
					eligibiltybegan: '12/30/1992',
					eligibiltyexpired: '06/02/2002',
				},
				{
					primary: false,
					active: false,
					membernumber: 'B-4082485482',
					company: 'Hyatt Group',
					frontimage:
						'http://dummyimage.com/250x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/181x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/29/1963',
					eligibiltybegan: '05/12/1984',
					eligibiltyexpired: '03/29/1959',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Z-1966547013',
					company: 'Hoeger Inc',
					frontimage:
						'http://dummyimage.com/187x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/122x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/26/1955',
					eligibiltybegan: '12/07/2016',
					eligibiltyexpired: '12/11/1962',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0P9M4ZZ',
					performed_by: 'Gaye Nolin',
					date: 1991,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0KQ63ZZ',
					performed_by: 'Sharon Haldene',
					date: 1961,
					additional_information:
						'sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis',
				},
				{
					ICD10procedurecode: '0UBC8ZX',
					performed_by: 'Nicolina Rowbottam',
					date: 2019,
					additional_information:
						'ac neque duis bibendum morbi non quam nec dui luctus',
				},
				{
					ICD10procedurecode: 'DP060ZZ',
					performed_by: 'Winfred Pool',
					date: 2017,
					additional_information:
						'lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam',
				},
			],
		},
		ssn: '947495849',
	},
	{
		id: 98,
		details: {
			first_name: 'Lotta',
			last_name: 'Clemoes',
			middle_name: 'lclemoes2p@gnu.org',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '35476 Dahle Park',
			address_two: null,
			city: 'Seattle',
			state: 'WA',
			zip: '98104',
			date_of_birth: '1999-05-17T02:09:46Z',
			contact_methods: [
				{
					number: '755-777-1687',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
				{ number: '820-909-5999', notes: null },
				{
					number: '955-433-0822',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{ allergy: null, notes: null },
				{
					allergy: null,
					notes: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
				},
				{
					allergy: 'peanut',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
				},
				{
					allergy: null,
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S56497A',
					ICD10diagnosislongdescription:
						'Other injury of extensor muscle, fascia and tendon of right little finger at forearm level, initial encounter',
					ICD10diagnosisshortdescription:
						'Inj extn musc/fasc/tend r little finger at forarm lv, init',
					medications: [
						{
							drugname: 'Testosterone Cypionate',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Godwin Doram',
						},
						{
							drugname: 'Mirtazapine',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Ruthy Barnsdall',
						},
						{
							drugname: 'Zinc Oxide',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Maurise Hessentaler',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Etan Warton',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S83134A',
					ICD10diagnosislongdescription:
						'Medial dislocation of proximal end of tibia, right knee, initial encounter',
					ICD10diagnosisshortdescription:
						'Medial disloc of proximal end of tibia, right knee, init',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'J358',
					ICD10diagnosislongdescription:
						'Other chronic diseases of tonsils and adenoids',
					ICD10diagnosisshortdescription:
						'Other chronic diseases of tonsils and adenoids',
					medications: [
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Howey Thying',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Chanda Van Vuuren',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Allyson Bittleson',
						},
						{
							drugname: 'Diltiazem Hydrochloride',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Thorsten Riby',
						},
						{
							drugname: 'dipyridamole',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Edeline Sneller',
						},
						{
							drugname: 'Testosterone Cypionate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Berti Vignaux',
						},
						{
							drugname:
								'Calcarea Fluorica, Carbo Vegetabilis, Hamamelis Virginiana, Lachesis Mutus, Lycopodium Clavatum, Pulsatilla, Secale Cornutum, Staphysagria, Zincum Metallicum',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Marika Yarnell',
						},
					],
				},
				{
					ICD10diagnosiscode: 'M2513',
					ICD10diagnosislongdescription: 'Fistula, wrist',
					ICD10diagnosisshortdescription: 'Fistula, wrist',
					medications: [
						{
							drugname:
								'penicillin G benzathine and penicillin G procaine',
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Hazel Buckland',
						},
						{
							drugname: 'Dextroamphetamine Sulfate',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Caryl Bradley',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Kevan Realph',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Seldom',
							prescribed_by: 'Angel Hanniger',
						},
					],
				},
				{
					ICD10diagnosiscode: 'V9352XD',
					ICD10diagnosislongdescription:
						'Explosion on board fishing boat, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Explosion on board fishing boat, subsequent encounter',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'R455',
					ICD10diagnosislongdescription: 'Hostility',
					ICD10diagnosisshortdescription: 'Hostility',
					medications: [
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lorry Atwood',
						},
						{
							drugname: 'Gabapentin',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Bing MacKellar',
						},
						{
							drugname: 'ETHYL ALCOHOL',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Ester Millbank',
						},
						{
							drugname: 'Torsemide',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Gaelan Shipley',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Natividad Durrant',
						},
						{
							drugname: 'Hydrochlorothiazide',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Ringo Dugdale',
						},
						{
							drugname: 'Oxygen',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Ignace Durrans',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S65119',
					ICD10diagnosislongdescription:
						'Laceration of radial artery at wrist and hand level of unspecified arm',
					ICD10diagnosisshortdescription:
						'Laceration of radial artery at wrs/hnd lv of unsp arm',
					medications: [
						{
							drugname: 'Sulfamethoxazole and Trimethoprim',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Elka Tivolier',
						},
						{
							drugname:
								'OCTINOXATE, OCTISALATE, TITANIUM DIOXIDE',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Patrizia Mecchi',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Aimil Kohrsen',
						},
						{
							drugname: 'Standardized Grass Pollen, Redtop',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Walker Gumly',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Gale Patifield',
						},
						{
							drugname: 'Banana Musa sapientum',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Dietrich Cochrane',
						},
						{
							drugname: 'CHLOROPROCAINE HYDROCHLORIDE',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Maurie Bread',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: "Tabbie O'Keaveny",
						},
						{
							drugname: 'Chlorpheniramine Maleate',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Tracee Dwyr',
						},
						{
							drugname: 'SILICON DIOXIDE',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Angelique Tottem',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T50A93S',
					ICD10diagnosislongdescription:
						'Poisoning by other bacterial vaccines, assault, sequela',
					ICD10diagnosisshortdescription:
						'Poisoning by other bacterial vaccines, assault, sequela',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'P-5161388928',
					company: 'Jacobi, Lebsack and Marquardt',
					frontimage:
						'http://dummyimage.com/177x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/198x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/08/1987',
					eligibiltybegan: '06/07/1951',
					eligibiltyexpired: '08/20/1970',
				},
				{
					primary: true,
					active: true,
					membernumber: 'X-2360865395',
					company: 'Connelly-Bartell',
					frontimage:
						'http://dummyimage.com/191x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/26/1982',
					eligibiltybegan: '12/02/1999',
					eligibiltyexpired: '08/13/2000',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0M8H4ZZ',
					performed_by: 'Ches Cottem',
					date: 1966,
					additional_information:
						'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
				},
				{
					ICD10procedurecode: '03C54ZZ',
					performed_by: 'Kati Huegett',
					date: 1969,
					additional_information: null,
				},
				{
					ICD10procedurecode: '00BA0ZZ',
					performed_by: 'Willem Taplin',
					date: 2022,
					additional_information:
						'pede venenatis non sodales sed tincidunt eu felis fusce posuere',
				},
				{
					ICD10procedurecode: 'B51SYZZ',
					performed_by: 'Shay Shenley',
					date: 2021,
					additional_information: null,
				},
				{
					ICD10procedurecode: '2W29X4Z',
					performed_by: 'Zorina Hagstone',
					date: 2019,
					additional_information: null,
				},
			],
		},
		ssn: '561929467',
	},
	{
		id: 99,
		details: {
			first_name: 'Michelle',
			last_name: 'Seally',
			middle_name: 'mseally2q@1688.com',
			gender: 'Genderfluid',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '072 Chinook Drive',
			address_two: null,
			city: 'Tacoma',
			state: 'WA',
			zip: '98424',
			date_of_birth: '1982-08-06T01:55:15Z',
			contact_methods: [
				{ number: '588-841-6589', notes: null },
				{
					number: '888-102-0563',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
				{ number: '766-870-0612', notes: null },
				{
					number: '915-369-1232',
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				},
				{ number: '276-518-0686', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'V4313',
					ICD10diagnosislongdescription:
						'Car passenger injured in collision with pick-up in nontraffic accident',
					ICD10diagnosisshortdescription:
						'Car passenger injured in collision w pick-up nontraf',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'H21222',
					ICD10diagnosislongdescription:
						'Degeneration of ciliary body, left eye',
					ICD10diagnosisshortdescription:
						'Degeneration of ciliary body, left eye',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'Q349',
					ICD10diagnosislongdescription:
						'Congenital malformation of respiratory system, unspecified',
					ICD10diagnosisshortdescription:
						'Congenital malformation of respiratory system, unspecified',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S14108D',
					ICD10diagnosislongdescription:
						'Unspecified injury at C8 level of cervical spinal cord, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unsp injury at C8 level of cervical spinal cord, subs encntr',
					medications: [
						{
							drugname: 'Triclocarban',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Baryram Tafani',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Monthly',
							prescribed_by: 'Lavinie Blasius',
						},
					],
				},
				{
					ICD10diagnosiscode: 'B191',
					ICD10diagnosislongdescription:
						'Unspecified viral hepatitis B',
					ICD10diagnosisshortdescription:
						'Unspecified viral hepatitis B',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S7035',
					ICD10diagnosislongdescription:
						'Superficial foreign body of thigh',
					ICD10diagnosisshortdescription:
						'Superficial foreign body of thigh',
					medications: [
						{
							drugname: 'Octinoxate',
							strength: null,
							active: false,
							frequency: 'Never',
							prescribed_by: 'Ian Cridlin',
						},
						{
							drugname: 'Alprazolam',
							strength: null,
							active: false,
							frequency: 'Weekly',
							prescribed_by: 'Jeremy Carl',
						},
						{
							drugname: 'Octinoxate and Oxybenzone',
							strength: null,
							active: false,
							frequency: 'Once',
							prescribed_by: 'Lazare Broxap',
						},
					],
				},
				{
					ICD10diagnosiscode: 'T20412D',
					ICD10diagnosislongdescription:
						'Corrosion of unspecified degree of left ear [any part, except ear drum], subsequent encounter',
					ICD10diagnosisshortdescription:
						'Corrosion of unspecified degree of left ear, subs encntr',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'S4500',
					ICD10diagnosislongdescription:
						'Unspecified injury of axillary artery',
					ICD10diagnosisshortdescription:
						'Unspecified injury of axillary artery',
					medications: null,
				},
				{
					ICD10diagnosiscode: 'T80A0',
					ICD10diagnosislongdescription:
						'Non-ABO incompatibility reaction due to transfusion of blood or blood products, unspecified',
					ICD10diagnosisshortdescription:
						'Non-ABO incompat react due to tranfs of bld/bld prod, unsp',
					medications: [
						{
							drugname: 'ETHYL ALCOHOL',
							strength: null,
							active: true,
							frequency: 'Weekly',
							prescribed_by: 'Estele Sallowaye',
						},
						{
							drugname: null,
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Reggie Jovic',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Lisle Dallemore',
						},
						{
							drugname:
								'Aluminum Zirconium Tetrachlorohydrex GLY',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Regina Champneys',
						},
						{
							drugname: 'glipizide',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Theodora Childes',
						},
						{
							drugname: 'Treatment Set TS344592',
							strength: null,
							active: false,
							frequency: 'Monthly',
							prescribed_by: 'Marion Olin',
						},
						{
							drugname: 'Coast Maple',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Man Taysbil',
						},
						{
							drugname: 'Irbesartan',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Alick Scothron',
						},
						{
							drugname: 'Dicyclomine Hydrochloride',
							strength: null,
							active: true,
							frequency: 'Daily',
							prescribed_by: 'Kiley Alfuso',
						},
					],
				},
				{
					ICD10diagnosiscode: 'S63071D',
					ICD10diagnosislongdescription:
						'Subluxation of distal end of right ulna, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Subluxation of distal end of right ulna, subs encntr',
					medications: null,
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'O-7856388279',
					company: 'Schaefer LLC',
					frontimage:
						'http://dummyimage.com/139x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/135x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/24/2012',
					eligibiltybegan: '08/26/1951',
					eligibiltyexpired: '10/21/1998',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-8265964617',
					company: 'Ondricka and Sons',
					frontimage:
						'http://dummyimage.com/193x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/227x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/28/1960',
					eligibiltybegan: '12/08/1994',
					eligibiltyexpired: '07/14/2010',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-3040980685',
					company: 'Nolan LLC',
					frontimage:
						'http://dummyimage.com/184x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/113x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/17/1998',
					eligibiltybegan: '11/13/2011',
					eligibiltyexpired: '03/26/1976',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-8178047053',
					company: 'Ferry, Keebler and Grady',
					frontimage:
						'http://dummyimage.com/223x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/137x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '06/20/1981',
					eligibiltybegan: '12/08/1961',
					eligibiltyexpired: '02/11/1954',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-0653019897',
					company: 'Terry LLC',
					frontimage:
						'http://dummyimage.com/165x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/153x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/22/1992',
					eligibiltybegan: '11/20/1979',
					eligibiltyexpired: '06/15/1961',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '009N0ZZ',
					performed_by: 'Everard Stilgo',
					date: 1961,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0X9900Z',
					performed_by: 'Gualterio Baversor',
					date: 1999,
					additional_information:
						'pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus',
				},
				{
					ICD10procedurecode: '027G0ZZ',
					performed_by: 'Theressa Gronaller',
					date: 1995,
					additional_information: null,
				},
			],
		},
		ssn: '384308776',
	},
	{
		id: 100,
		details: {
			first_name: 'Mair',
			last_name: 'Glazebrook',
			middle_name: 'mglazebrook2r@rakuten.co.jp',
			gender: 'Female',
			preffered_name: "error: Field 'preffered_name' not found",
			address_one: '593 Oriole Road',
			address_two: null,
			city: 'Boca Raton',
			state: 'FL',
			zip: '33499',
			date_of_birth: '2011-10-22T01:56:15Z',
			contact_methods: [
				{
					number: '408-606-5805',
					notes: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				},
				{
					number: '820-338-5720',
					notes: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				},
				{ number: '455-431-9314', notes: null },
			],
			familyhistory: null,
			socialhistory: null,
			medicalhistory: null,
			allergies: null,
			diagnoses: [
				{
					ICD10diagnosiscode: 'S52135M',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of neck of left radius, subsequent encounter for open fracture type I or II with nonunion',
					ICD10diagnosisshortdescription:
						'Nondisp fx of nk of l rad, 7thM',
					medications: [
						{
							drugname: 'ZINC ACETATE and ZINC GLUCONATE',
							strength: null,
							active: false,
							frequency: 'Yearly',
							prescribed_by: 'Ivette Blabber',
						},
						{
							drugname: 'Salicylic Acid',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Aurel Stronough',
						},
						{
							drugname: 'Dexamethasone',
							strength: null,
							active: true,
							frequency: 'Often',
							prescribed_by: 'Nev Meek',
						},
						{
							drugname:
								'Cinnamic acid, Phloridzinum, Argentum nitricum, ATP (Adenosine triphosphate disodium), Beet sugar, Dextrose, D-ribose, Fructose, Grape sugar (syrup), Lycopodium clavatum,',
							strength: null,
							active: false,
							frequency: 'Daily',
							prescribed_by: 'Simeon Duce',
						},
						{
							drugname: 'Amoxicillin',
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Allyn Goldsack',
						},
						{
							drugname: 'Gabapentin',
							strength: null,
							active: true,
							frequency: 'Seldom',
							prescribed_by: 'Kaitlynn Wintour',
						},
						{
							drugname: null,
							strength: null,
							active: true,
							frequency: 'Once',
							prescribed_by: 'Jo ann Heindle',
						},
						{
							drugname: 'Metoprolol Tartrate',
							strength: null,
							active: true,
							frequency: 'Yearly',
							prescribed_by: 'Chancey Rackam',
						},
						{
							drugname: 'Omeprazole',
							strength: null,
							active: false,
							frequency: 'Often',
							prescribed_by: 'Steffie Hakonsson',
						},
					],
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'D-7558797410',
					company: 'Moen and Sons',
					frontimage:
						'http://dummyimage.com/236x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/190x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/06/1963',
					eligibiltybegan: '01/16/1982',
					eligibiltyexpired: '03/25/2015',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-9076065588',
					company: 'Effertz Inc',
					frontimage:
						'http://dummyimage.com/249x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/212x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/04/1970',
					eligibiltybegan: '03/27/1999',
					eligibiltyexpired: '09/02/2010',
				},
				{
					primary: true,
					active: false,
					membernumber: 'P-3960538838',
					company: 'McCullough Inc',
					frontimage:
						'http://dummyimage.com/125x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/103x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/21/1980',
					eligibiltybegan: '01/13/1963',
					eligibiltyexpired: '03/30/2022',
				},
				{
					primary: false,
					active: false,
					membernumber: 'R-1670882055',
					company: "Robel-O'Keefe",
					frontimage:
						'http://dummyimage.com/176x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/190x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/21/1953',
					eligibiltybegan: '05/28/1966',
					eligibiltyexpired: '08/02/2011',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-3158456946',
					company: 'Rutherford and Sons',
					frontimage:
						'http://dummyimage.com/147x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/128x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/12/1984',
					eligibiltybegan: '07/04/2006',
					eligibiltyexpired: '01/29/1976',
				},
				{
					primary: true,
					active: true,
					membernumber: 'O-6006028343',
					company: 'Luettgen, Murphy and Ratke',
					frontimage:
						'http://dummyimage.com/108x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/216x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/24/1951',
					eligibiltybegan: '07/13/2018',
					eligibiltyexpired: '05/30/1968',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-5966365708',
					company: 'Keeling, Schmitt and Lebsack',
					frontimage:
						'http://dummyimage.com/221x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/247x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '09/02/1961',
					eligibiltybegan: '12/22/1995',
					eligibiltyexpired: '09/05/1977',
				},
			],
			surgicalhistory: null,
		},
		ssn: '791556500',
	},
]

export default mockpatients
