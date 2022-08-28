const fakepatients = [
	{
		details: {
			first_name: 'Jaclin',
			last_name: 'Ceschini',
			middle_name: 'Opalina',
			gender: 'Female',
			address_one: '95 Waubesa Crossing',
			city: 'Sacramento',
			state: 'CA',
			zip: '94286',
			date_of_birth: '2009-02-21T19:39:19Z',
			contact_methods: [
				{ number: '501-159-6796', notes: null },
				{
					number: '226-611-4026',
					notes: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'medication',
					notes: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				},
				{
					allergy: 'animals',
					notes: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
				},
				{
					allergy: 'animals',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				},
				{
					allergy: 'insects',
					notes: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
				},
				{
					allergy: 'animals',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'L97222',
					ICD10diagnosislongdescription:
						'Non-pressure chronic ulcer of left calf with fat layer exposed',
					ICD10diagnosisshortdescription:
						'Non-pressure chronic ulcer of left calf w fat layer exposed',
				},
				{
					ICD10diagnosiscode: 'S72123E',
					ICD10diagnosislongdescription:
						'Displaced fracture of lesser trochanter of unspecified femur, subsequent encounter for open fracture type I or II with routine healing',
					ICD10diagnosisshortdescription:
						'Disp fx of less trochanter of unsp femr, 7thE',
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'X-4591085423',
					company: 'Schowalter, Breitenberg and Weber',
					frontimage:
						'http://dummyimage.com/119x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/130x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/18/1956',
					eligibiltybegan: '02/01/1984',
					eligibiltyexpired: '11/13/1971',
				},
				{
					primary: true,
					active: false,
					membernumber: 'C-6750175561',
					company: 'Dicki Inc',
					frontimage:
						'http://dummyimage.com/149x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/209x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/22/1984',
					eligibiltybegan: '10/01/1991',
					eligibiltyexpired: '09/23/1972',
				},
				{
					primary: true,
					active: false,
					membernumber: 'I-2675870969',
					company: 'Parker, Walker and Daugherty',
					frontimage:
						'http://dummyimage.com/172x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '04/18/2005',
					eligibiltybegan: '02/03/2012',
					eligibiltyexpired: '10/19/1971',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-8617138127',
					company: 'Berge, Lindgren and Goyette',
					frontimage:
						'http://dummyimage.com/249x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/162x100.png/dddddd/000000',
					dateeligibitylastchecked: '04/12/2004',
					eligibiltybegan: '08/08/1962',
					eligibiltyexpired: '06/22/2012',
				},
				{
					primary: true,
					active: false,
					membernumber: 'B-3040371914',
					company: 'Gusikowski, Kessler and Volkman',
					frontimage:
						'http://dummyimage.com/109x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/27/1952',
					eligibiltybegan: '11/23/1984',
					eligibiltyexpired: '02/09/2002',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0SPS4JZ',
					performed_by: 'Fee Yurshev',
					date: 1999,
					additional_information:
						'elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
				},
				{
					ICD10procedurecode: '0T1307B',
					performed_by: 'Lorrie Lecount',
					date: 1985,
					additional_information: null,
				},
				{
					ICD10procedurecode: '049H40Z',
					performed_by: 'Lynnett Summerson',
					date: 1960,
					additional_information:
						'in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in',
				},
				{
					ICD10procedurecode: '0RCB3ZZ',
					performed_by: 'Roi Pressdee',
					date: 1970,
					additional_information:
						'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit',
				},
				{
					ICD10procedurecode: '0RGA371',
					performed_by: 'Winnifred Pincott',
					date: 1988,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WW941Z',
					performed_by: 'Barbe Tackle',
					date: 1973,
					additional_information:
						'in porttitor pede justo eu massa donec dapibus duis at velit',
				},
				{
					ICD10procedurecode: 'HZ45ZZZ',
					performed_by: 'Wilbert Stollenwerck',
					date: 1973,
					additional_information:
						'sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum',
				},
				{
					ICD10procedurecode: '0XBF0ZZ',
					performed_by: 'Odelinda Vondrys',
					date: 1981,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0CB2XZX',
					performed_by: 'Mahmud Gonnely',
					date: 1974,
					additional_information: null,
				},
			],
			medications: [
				{
					drugname: 'HYDROMORPHONE HYDROCHLORIDE',
					prescribed_by: 'Hildagard Madison',
				},
				{ drugname: 'clonazepam', prescribed_by: 'Natalina Bourne' },
				{
					drugname:
						'Chlorpheniramine Maleate and Phenylephrine Hydrochloride',
					prescribed_by: 'Alberik Collyear',
				},
				{ drugname: 'Phenytoin', prescribed_by: 'Nataniel Lashley' },
				{
					drugname: 'leucovorin calcium',
					prescribed_by: 'Genny Brimman',
				},
				{
					drugname: 'Oxymetazoline HCl',
					prescribed_by: 'Freddie Lobbe',
				},
			],
		},
		ssn: '859096063',
	},
	{
		details: {
			first_name: 'Nan',
			last_name: 'Gavey',
			middle_name: 'Loella',
			gender: 'Female',
			address_one: '415 Summer Ridge Parkway',
			city: 'Baton Rouge',
			state: 'LA',
			zip: '70815',
			date_of_birth: '1966-10-26T21:16:23Z',
			contact_methods: [
				{ number: '662-319-9245', notes: null },
				{ number: '945-378-4950', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
				{
					allergy: 'insects',
					notes: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
				},
				{
					allergy: 'medication',
					notes: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
				{
					allergy: 'insects',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'T24129',
					ICD10diagnosislongdescription:
						'Burn of first degree of unspecified knee',
					ICD10diagnosisshortdescription:
						'Burn of first degree of unspecified knee',
				},
				{
					ICD10diagnosiscode: 'T82228',
					ICD10diagnosislongdescription:
						'Other mechanical complication of biological heart valve graft',
					ICD10diagnosisshortdescription:
						'Mech compl of biological heart valve graft',
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'C-7631491597',
					company: 'Ratke-Carter',
					frontimage:
						'http://dummyimage.com/184x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/12/1956',
					eligibiltybegan: '07/25/1961',
					eligibiltyexpired: '08/11/1971',
				},
				{
					primary: false,
					active: false,
					membernumber: 'L-5669861992',
					company: 'Hoppe Group',
					frontimage:
						'http://dummyimage.com/193x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/29/1958',
					eligibiltybegan: '10/19/1972',
					eligibiltyexpired: '04/27/1972',
				},
				{
					primary: true,
					active: true,
					membernumber: 'S-9523283714',
					company: 'Corkery, Rau and Batz',
					frontimage:
						'http://dummyimage.com/179x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/150x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/24/1969',
					eligibiltybegan: '07/07/1967',
					eligibiltyexpired: '01/09/1968',
				},
				{
					primary: true,
					active: true,
					membernumber: 'I-7610782420',
					company: 'Altenwerth-Heidenreich',
					frontimage:
						'http://dummyimage.com/172x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/128x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/12/1975',
					eligibiltybegan: '09/04/2004',
					eligibiltyexpired: '03/08/1977',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-3186387441',
					company: 'Legros, Hermiston and Schoen',
					frontimage:
						'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/208x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/18/1991',
					eligibiltybegan: '12/26/1973',
					eligibiltyexpired: '02/27/1960',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-4053593997',
					company: 'Beer and Sons',
					frontimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/194x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/24/1957',
					eligibiltybegan: '09/13/1991',
					eligibiltyexpired: '12/23/2013',
				},
				{
					primary: true,
					active: false,
					membernumber: 'L-0312364378',
					company: 'Hamill-Kiehn',
					frontimage:
						'http://dummyimage.com/111x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/187x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/06/1954',
					eligibiltybegan: '05/26/2009',
					eligibiltyexpired: '11/05/2004',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Y-2989525748',
					company: 'Buckridge, Rutherford and Rogahn',
					frontimage:
						'http://dummyimage.com/107x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/134x100.png/dddddd/000000',
					dateeligibitylastchecked: '11/21/1983',
					eligibiltybegan: '08/25/2022',
					eligibiltyexpired: '07/26/2018',
				},
				{
					primary: true,
					active: true,
					membernumber: 'S-1834121686',
					company: 'Gottlieb, Greenfelder and Gusikowski',
					frontimage:
						'http://dummyimage.com/143x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/13/1993',
					eligibiltybegan: '10/20/1975',
					eligibiltyexpired: '12/24/1967',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0MC50ZZ',
					performed_by: 'Lavina Haddy',
					date: 2008,
					additional_information:
						'eleifend luctus ultricies eu nibh quisque id justo sit amet sapien',
				},
				{
					ICD10procedurecode: '09BT4ZZ',
					performed_by: 'Corny Danher',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D128J6',
					performed_by: 'Josephina Thrasher',
					date: 2019,
					additional_information:
						'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
				},
				{
					ICD10procedurecode: '05QP0ZZ',
					performed_by: 'Babbie Redborn',
					date: 2006,
					additional_information: null,
				},
			],
			medications: [
				{
					drugname: 'Rosuvastatin calcium',
					prescribed_by: 'Darnall Merriment',
				},
				{
					drugname: 'SULFACETAMIDE SODIUM, SULFUR',
					prescribed_by: 'Nan Garvie',
				},
				{ drugname: 'Ceftriaxone', prescribed_by: 'Yalonda Cowely' },
				{ drugname: 'Ibuprofen', prescribed_by: 'Roldan Skinner' },
				{
					drugname: 'Aluminum Sesquichlorohydrate',
					prescribed_by: 'Damara Rielly',
				},
				{ drugname: 'EUCALYPTOL', prescribed_by: 'Dolores Dimbylow' },
				{ drugname: 'ALCOHOL', prescribed_by: 'Olga Morson' },
			],
		},
		ssn: '502046162',
	},
	{
		details: {
			first_name: 'Adrea',
			last_name: 'Scallan',
			middle_name: 'Charita',
			gender: 'Female',
			address_one: '48944 Lukken Place',
			city: 'Cleveland',
			state: 'OH',
			zip: '44191',
			date_of_birth: '1960-04-06T01:04:34Z',
			contact_methods: [{ number: '359-849-7344', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'medication',
					notes: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H4051X3',
					ICD10diagnosislongdescription:
						'Glaucoma secondary to other eye disorders, right eye, severe stage',
					ICD10diagnosisshortdescription:
						'Glaucoma secondary to oth eye disord, r eye, severe stage',
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'T-8104292297',
					company: 'Williamson LLC',
					frontimage:
						'http://dummyimage.com/155x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/124x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/20/1986',
					eligibiltybegan: '03/25/1981',
					eligibiltyexpired: '09/23/1992',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-2660247450',
					company: 'Blick, Murray and Schoen',
					frontimage:
						'http://dummyimage.com/215x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/104x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/11/1955',
					eligibiltybegan: '05/14/1972',
					eligibiltyexpired: '09/13/2012',
				},
				{
					primary: false,
					active: true,
					membernumber: 'W-6264502953',
					company: 'Farrell LLC',
					frontimage:
						'http://dummyimage.com/179x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/134x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/16/1971',
					eligibiltybegan: '02/18/1993',
					eligibiltyexpired: '02/09/1967',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-0772147317',
					company: 'Hane Group',
					frontimage:
						'http://dummyimage.com/215x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '08/09/1996',
					eligibiltybegan: '05/31/2001',
					eligibiltyexpired: '10/24/2013',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-6237609519',
					company: 'Gutmann, Rowe and Kilback',
					frontimage:
						'http://dummyimage.com/183x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/139x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/11/1977',
					eligibiltybegan: '10/17/1979',
					eligibiltyexpired: '07/26/1953',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-1986297653',
					company: 'Hansen-Hamill',
					frontimage:
						'http://dummyimage.com/181x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/232x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/28/1954',
					eligibiltybegan: '03/04/1958',
					eligibiltyexpired: '09/19/1962',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-9703638224',
					company: 'Breitenberg Group',
					frontimage:
						'http://dummyimage.com/232x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/239x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/21/2015',
					eligibiltybegan: '08/11/1952',
					eligibiltyexpired: '08/07/1978',
				},
				{
					primary: true,
					active: false,
					membernumber: 'W-9539251722',
					company: 'Walsh, Schumm and Gerhold',
					frontimage:
						'http://dummyimage.com/137x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/157x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/04/1985',
					eligibiltybegan: '06/24/1980',
					eligibiltyexpired: '02/20/1957',
				},
				{
					primary: false,
					active: true,
					membernumber: 'F-9121981061',
					company: 'Balistreri LLC',
					frontimage:
						'http://dummyimage.com/161x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/04/1972',
					eligibiltybegan: '03/10/1981',
					eligibiltyexpired: '08/20/1997',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0D1147A',
					performed_by: 'Adi McCrorie',
					date: 1956,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'CW1DLZZ',
					performed_by: 'Aili Aksell',
					date: 1954,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0T9830Z',
					performed_by: 'Gerri Leavry',
					date: 2012,
					additional_information:
						'nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac',
				},
				{
					ICD10procedurecode: '04QN3ZZ',
					performed_by: 'Brianna Luscombe',
					date: 2009,
					additional_information: null,
				},
			],
			medications: [
				{ drugname: 'Primidone', prescribed_by: 'Pollyanna Pounsett' },
				{
					drugname: 'dextromethorphan polistirex',
					prescribed_by: 'Katti Durston',
				},
				{ drugname: 'OLANZAPINE', prescribed_by: 'Rochelle Horrigan' },
				{ drugname: 'Octinoxate', prescribed_by: 'Brandyn Rideout' },
			],
		},
		ssn: '219298749',
	},
	{
		details: {
			first_name: 'Brandyn',
			last_name: 'Howarth',
			middle_name: 'Farly',
			gender: 'Male',
			address_one: '64 Maple Wood Way',
			city: 'Richmond',
			state: 'VA',
			zip: '23220',
			date_of_birth: '1981-05-03T23:48:05Z',
			contact_methods: [{ number: '148-656-6365', notes: null }],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S59142S',
					ICD10diagnosislongdescription:
						'Salter-Harris Type IV physeal fracture of upper end of radius, left arm, sequela',
					ICD10diagnosisshortdescription:
						'Sltr-haris Type IV physl fx upper end radius, left arm, sqla',
				},
				{
					ICD10diagnosiscode: 'W2210XA',
					ICD10diagnosislongdescription:
						'Striking against or struck by unspecified automobile airbag, initial encounter',
					ICD10diagnosisshortdescription:
						'Striking against or struck by unsp automobile airbag, init',
				},
				{
					ICD10diagnosiscode: 'S06338',
					ICD10diagnosislongdescription:
						'Contusion and laceration of cerebrum, unspecified, with loss of consciousness of any duration with death due to other cause prior to regaining consciousness',
					ICD10diagnosisshortdescription:
						'Contus/lac cereb, w LOC w death due to oth cause bf consc',
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'D-6252955093',
					company: 'Casper-Cummerata',
					frontimage:
						'http://dummyimage.com/220x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/157x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/09/1983',
					eligibiltybegan: '10/10/1980',
					eligibiltyexpired: '10/17/1996',
				},
				{
					primary: true,
					active: true,
					membernumber: 'G-0953038333',
					company: 'Stracke-Emmerich',
					frontimage:
						'http://dummyimage.com/181x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/158x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/29/1977',
					eligibiltybegan: '08/20/1979',
					eligibiltyexpired: '09/05/1961',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-1050215782',
					company: 'Langworth, Bode and Durgan',
					frontimage:
						'http://dummyimage.com/197x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/131x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/26/1978',
					eligibiltybegan: '12/08/1982',
					eligibiltyexpired: '08/12/1999',
				},
				{
					primary: true,
					active: true,
					membernumber: 'K-1045053601',
					company: 'Doyle, Effertz and Rau',
					frontimage:
						'http://dummyimage.com/235x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/239x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/29/2007',
					eligibiltybegan: '04/24/1958',
					eligibiltyexpired: '03/04/1969',
				},
			],
			medications: [
				{ drugname: 'ALCOHOL', prescribed_by: 'Annadiana Aird' },
				{ drugname: 'Phenytoin', prescribed_by: 'Pauline Kleisle' },
				{
					drugname: 'Glyburide and Metformin',
					prescribed_by: 'Wylie Karpol',
				},
			],
		},
		ssn: '334059439',
	},
	{
		details: {
			first_name: 'Brana',
			last_name: 'Mutimer',
			middle_name: 'Whitney',
			gender: 'Female',
			address_one: '28 Fieldstone Lane',
			city: 'Wilkes Barre',
			state: 'PA',
			zip: '18706',
			date_of_birth: '2018-01-05T05:10:55Z',
			contact_methods: [
				{ number: '234-804-6437', notes: null },
				{ number: '305-814-3175', notes: null },
				{ number: '688-514-3524', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
				},
				{
					allergy: 'peanut',
					notes: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
				},
				{
					allergy: 'insects',
					notes: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
				},
				{
					allergy: 'animals',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'I63329',
					ICD10diagnosislongdescription:
						'Cerebral infarction due to thrombosis of unspecified anterior cerebral artery',
					ICD10diagnosisshortdescription:
						'Cerebral infrc due to thombos unsp anterior cerebral artery',
				},
				{
					ICD10diagnosiscode: 'T4994XS',
					ICD10diagnosislongdescription:
						'Poisoning by unspecified topical agent, undetermined, sequela',
					ICD10diagnosisshortdescription:
						'Poisoning by unsp topical agent, undetermined, sequela',
				},
				{
					ICD10diagnosiscode: 'S90474A',
					ICD10diagnosislongdescription:
						'Other superficial bite of right lesser toe(s), initial encounter',
					ICD10diagnosisshortdescription:
						'Other superficial bite of right lesser toe(s), init encntr',
				},
				{
					ICD10diagnosiscode: 'S82466N',
					ICD10diagnosislongdescription:
						'Nondisplaced segmental fracture of shaft of unspecified fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion',
					ICD10diagnosisshortdescription:
						'Nondisp seg fx shaft of unsp fibula, 7thN',
				},
				{
					ICD10diagnosiscode: 'S82499R',
					ICD10diagnosislongdescription:
						'Other fracture of shaft of unspecified fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion',
					ICD10diagnosisshortdescription:
						'Oth fx shaft of unsp fibula, 7thR',
				},
				{
					ICD10diagnosiscode: 'T33829A',
					ICD10diagnosislongdescription:
						'Superficial frostbite of unspecified foot, initial encounter',
					ICD10diagnosisshortdescription:
						'Superficial frostbite of unspecified foot, initial encounter',
				},
				{
					ICD10diagnosiscode: 'L0252',
					ICD10diagnosislongdescription: 'Furuncle hand',
					ICD10diagnosisshortdescription: 'Furuncle hand',
				},
				{
					ICD10diagnosiscode: 'S89319G',
					ICD10diagnosislongdescription:
						'Salter-Harris Type I physeal fracture of lower end of unspecified fibula, subsequent encounter for fracture with delayed healing',
					ICD10diagnosisshortdescription:
						'Sltr-haris Type I physl fx low end unsp fibula, 7thG',
				},
				{
					ICD10diagnosiscode: 'K5531',
					ICD10diagnosislongdescription:
						'Stage 1 necrotizing enterocolitis',
					ICD10diagnosisshortdescription:
						'Stage 1 necrotizing enterocolitis',
				},
				{
					ICD10diagnosiscode: 'V5920XA',
					ICD10diagnosislongdescription:
						'Unspecified occupant of pick-up truck or van injured in collision with unspecified motor vehicles in nontraffic accident, initial encounter',
					ICD10diagnosisshortdescription:
						'Occup of pk-up/van injured in clsn w unsp mv nontraf, init',
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'X-0751080800',
					company: 'Yost LLC',
					frontimage:
						'http://dummyimage.com/192x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/26/2020',
					eligibiltybegan: '07/19/2002',
					eligibiltyexpired: '01/26/2013',
				},
				{
					primary: true,
					active: true,
					membernumber: 'C-0311181189',
					company: 'Weimann-Dietrich',
					frontimage:
						'http://dummyimage.com/242x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '10/04/1977',
					eligibiltybegan: '07/10/1958',
					eligibiltyexpired: '11/23/1962',
				},
				{
					primary: true,
					active: true,
					membernumber: 'H-8486779014',
					company: 'Maggio, Vandervort and Auer',
					frontimage:
						'http://dummyimage.com/189x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/131x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/07/2006',
					eligibiltybegan: '08/22/1966',
					eligibiltyexpired: '11/28/1956',
				},
				{
					primary: false,
					active: true,
					membernumber: 'M-1942845404',
					company: 'Yundt-Satterfield',
					frontimage:
						'http://dummyimage.com/140x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/203x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '06/24/1956',
					eligibiltybegan: '03/16/1968',
					eligibiltyexpired: '01/18/1968',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-0164955239',
					company: 'Rempel-Mayer',
					frontimage:
						'http://dummyimage.com/249x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/192x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/23/1990',
					eligibiltybegan: '09/07/1957',
					eligibiltyexpired: '12/30/2006',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0KTK0ZZ',
					performed_by: 'Iris Casetti',
					date: 1994,
					additional_information:
						'id luctus nec molestie sed justo pellentesque viverra pede ac diam',
				},
			],
			medications: [
				{
					drugname: 'Sulfamethoxazole and Trimethoprim',
					prescribed_by: 'Siffre Cunningham',
				},
				{
					drugname: 'Sumatriptan Succinate',
					prescribed_by: 'Iseabal Pease',
				},
				{
					drugname: 'lithium carbonate',
					prescribed_by: 'Noreen Crolly',
				},
				{
					drugname:
						'Acetaminophen, dextromethorphan HBr, doxylamine succinate, phenylephrine HCl',
					prescribed_by: "Mel O' Faherty",
				},
				{
					drugname: 'TITANIUM DIOXIDE',
					prescribed_by: 'Roselin Undrell',
				},
			],
		},
		ssn: '564497999',
	},
	{
		details: {
			first_name: 'Fonz',
			last_name: 'Doust',
			middle_name: 'Thorstein',
			gender: 'Male',
			address_one: '697 Stoughton Parkway',
			city: 'Decatur',
			state: 'GA',
			zip: '30089',
			date_of_birth: '2017-11-05T09:20:51Z',
			contact_methods: [
				{
					number: '474-638-5937',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				},
				{
					number: '197-454-2520',
					notes: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S32314B',
					ICD10diagnosislongdescription:
						'Nondisplaced avulsion fracture of right ilium, initial encounter for open fracture',
					ICD10diagnosisshortdescription:
						'Nondisp avulsion fracture of right ilium, init for opn fx',
				},
				{
					ICD10diagnosiscode: 'A0104',
					ICD10diagnosislongdescription: 'Typhoid arthritis',
					ICD10diagnosisshortdescription: 'Typhoid arthritis',
				},
				{
					ICD10diagnosiscode: 'O2321',
					ICD10diagnosislongdescription:
						'Infections of urethra in pregnancy, first trimester',
					ICD10diagnosisshortdescription:
						'Infections of urethra in pregnancy, first trimester',
				},
				{
					ICD10diagnosiscode: 'S72463P',
					ICD10diagnosislongdescription:
						'Displaced supracondylar fracture with intracondylar extension of lower end of unspecified femur, subsequent encounter for closed fracture with malunion',
					ICD10diagnosisshortdescription:
						'Displ suprcndl fx w intrcndl extn low end unsp femr, 7thP',
				},
				{
					ICD10diagnosiscode: 'S31139A',
					ICD10diagnosislongdescription:
						'Puncture wound of abdominal wall without foreign body, unspecified quadrant without penetration into peritoneal cavity, initial encounter',
					ICD10diagnosisshortdescription:
						'Pnctr of abd wall w/o fb, unsp q w/o penet perit cav, init',
				},
				{
					ICD10diagnosiscode: 'S63509',
					ICD10diagnosislongdescription:
						'Unspecified sprain of unspecified wrist',
					ICD10diagnosisshortdescription:
						'Unspecified sprain of unspecified wrist',
				},
				{
					ICD10diagnosiscode: 'O322XX3',
					ICD10diagnosislongdescription:
						'Maternal care for transverse and oblique lie, fetus 3',
					ICD10diagnosisshortdescription:
						'Maternal care for transverse and oblique lie, fetus 3',
				},
				{
					ICD10diagnosiscode: 'H47532',
					ICD10diagnosislongdescription:
						'Disorders of visual pathways in (due to) vascular disorders, left side',
					ICD10diagnosisshortdescription:
						'Disord of visual pathways in vascular disord, left side',
				},
				{
					ICD10diagnosiscode: 'S56001D',
					ICD10diagnosislongdescription:
						'Unspecified injury of flexor muscle, fascia and tendon of right thumb at forearm level, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unsp inj flexor musc/fasc/tend r thm at forarm lv, subs',
				},
				{
					ICD10diagnosiscode: 'S72499M',
					ICD10diagnosislongdescription:
						'Other fracture of lower end of unspecified femur, subsequent encounter for open fracture type I or II with nonunion',
					ICD10diagnosisshortdescription:
						'Oth fx low end unsp femr, 7thM',
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'K-6678519384',
					company: 'Hilll, Schamberger and Feil',
					frontimage:
						'http://dummyimage.com/167x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/202x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/21/2008',
					eligibiltybegan: '08/06/2001',
					eligibiltyexpired: '10/12/1950',
				},
			],
			medications: [
				{ drugname: 'Triclocarban', prescribed_by: 'Ariadne Face' },
				{ drugname: 'Cephalexin', prescribed_by: 'Vonny Kleinhandler' },
				{
					drugname:
						'Ceanothus americanus, Senna, Pancreas Suis, Spleen, Chionanthus virginica, Cinchona officinalis, Sepia, Arsenicum album, Lycopodium clavatum',
					prescribed_by: 'Ardeen Lermit',
				},
				{
					drugname: 'Oxymetazoline Hydrochloride',
					prescribed_by: 'Burg Jozsef',
				},
				{ drugname: 'Polyvinyl Alcohol', prescribed_by: 'Wald Disney' },
				{
					drugname: 'CARISOPRODOL, GABA',
					prescribed_by: 'Valerie Tacey',
				},
			],
		},
		ssn: '734397922',
	},
	{
		details: {
			first_name: 'Broddie',
			last_name: 'Blaydes',
			middle_name: 'Winifield',
			gender: 'Male',
			address_one: '7 Golden Leaf Park',
			city: 'Littleton',
			state: 'CO',
			zip: '80161',
			date_of_birth: '2005-06-17T14:19:01Z',
			contact_methods: [
				{ number: '624-875-1036', notes: null },
				{ number: '753-403-1569', notes: null },
				{
					number: '565-577-6682',
					notes: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
				},
				{
					number: '455-587-9128',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
				},
				{
					allergy: 'peanut',
					notes: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
				},
				{
					allergy: 'medication',
					notes: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S06890S',
					ICD10diagnosislongdescription:
						'Other specified intracranial injury without loss of consciousness, sequela',
					ICD10diagnosisshortdescription:
						'Oth intracranial injury w/o loss of consciousness, sequela',
				},
				{
					ICD10diagnosiscode: 'S270',
					ICD10diagnosislongdescription: 'Traumatic pneumothorax',
					ICD10diagnosisshortdescription: 'Traumatic pneumothorax',
				},
				{
					ICD10diagnosiscode: 'F14159',
					ICD10diagnosislongdescription:
						'Cocaine abuse with cocaine-induced psychotic disorder, unspecified',
					ICD10diagnosisshortdescription:
						'Cocaine abuse with cocaine-induced psychotic disorder, unsp',
				},
				{
					ICD10diagnosiscode: 'S24134',
					ICD10diagnosislongdescription:
						'Anterior cord syndrome at T11-T12 level of thoracic spinal cord',
					ICD10diagnosisshortdescription:
						'Anterior cord syndrome at T11-T12',
				},
				{
					ICD10diagnosiscode: 'S23101S',
					ICD10diagnosislongdescription:
						'Dislocation of unspecified thoracic vertebra, sequela',
					ICD10diagnosisshortdescription:
						'Dislocation of unspecified thoracic vertebra, sequela',
				},
				{
					ICD10diagnosiscode: 'T628X2D',
					ICD10diagnosislongdescription:
						'Toxic effect of other specified noxious substances eaten as food, intentional self-harm, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Toxic effect of noxious substnc eaten as food, slf-hrm, subs',
				},
				{
					ICD10diagnosiscode: 'S02119D',
					ICD10diagnosislongdescription:
						'Unspecified fracture of occiput, subsequent encounter for fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Unsp fracture of occiput, subs for fx w routn heal',
				},
				{
					ICD10diagnosiscode: 'S91349',
					ICD10diagnosislongdescription:
						'Puncture wound with foreign body, unspecified foot',
					ICD10diagnosisshortdescription:
						'Puncture wound with foreign body, unspecified foot',
				},
				{
					ICD10diagnosiscode: 'D039',
					ICD10diagnosislongdescription:
						'Melanoma in situ, unspecified',
					ICD10diagnosisshortdescription:
						'Melanoma in situ, unspecified',
				},
				{
					ICD10diagnosiscode: 'X832XXA',
					ICD10diagnosislongdescription:
						'Intentional self-harm by exposure to extremes of cold, initial encounter',
					ICD10diagnosisshortdescription:
						'Intentional self-harm by exposure to extremes of cold, init',
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'U-8217285810',
					company: 'Kemmer-Oberbrunner',
					frontimage:
						'http://dummyimage.com/156x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/240x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/30/1996',
					eligibiltybegan: '06/04/1955',
					eligibiltyexpired: '07/24/1953',
				},
				{
					primary: false,
					active: false,
					membernumber: 'F-5853220860',
					company: 'Kilback, Stokes and Conn',
					frontimage:
						'http://dummyimage.com/149x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/210x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/24/2021',
					eligibiltybegan: '12/03/1973',
					eligibiltyexpired: '02/25/2022',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-4341465479',
					company: 'Volkman-Lindgren',
					frontimage:
						'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/249x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/26/1950',
					eligibiltybegan: '03/27/1972',
					eligibiltyexpired: '06/18/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-8660600885',
					company: 'Greenholt Group',
					frontimage:
						'http://dummyimage.com/202x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/249x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/17/1987',
					eligibiltybegan: '12/07/1984',
					eligibiltyexpired: '12/05/1975',
				},
				{
					primary: false,
					active: true,
					membernumber: 'E-6964031690',
					company: 'Koelpin, Weissnat and Schneider',
					frontimage:
						'http://dummyimage.com/140x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/223x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '08/14/1975',
					eligibiltybegan: '07/09/1953',
					eligibiltyexpired: '02/23/1974',
				},
				{
					primary: false,
					active: false,
					membernumber: 'Z-0803214079',
					company: 'Towne, McClure and Little',
					frontimage:
						'http://dummyimage.com/158x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/232x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/29/1995',
					eligibiltybegan: '09/29/1986',
					eligibiltyexpired: '08/08/1960',
				},
				{
					primary: true,
					active: false,
					membernumber: 'J-9688414569',
					company: "Ward, Douglas and D'Amore",
					frontimage:
						'http://dummyimage.com/204x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/122x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/14/2016',
					eligibiltybegan: '12/10/1966',
					eligibiltyexpired: '04/20/1973',
				},
				{
					primary: true,
					active: false,
					membernumber: 'X-6825596379',
					company: 'Roberts-Paucek',
					frontimage:
						'http://dummyimage.com/206x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/205x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/21/2007',
					eligibiltybegan: '06/20/2003',
					eligibiltyexpired: '12/30/1980',
				},
				{
					primary: true,
					active: true,
					membernumber: 'Q-4254563075',
					company: 'Langosh LLC',
					frontimage:
						'http://dummyimage.com/147x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/176x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/02/2011',
					eligibiltybegan: '08/07/2015',
					eligibiltyexpired: '10/15/1995',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'BW211ZZ',
					performed_by: 'Bald Wilbor',
					date: 2020,
					additional_information: null,
				},
				{
					ICD10procedurecode: '02WA4JZ',
					performed_by: 'Zuzana Mc Pake',
					date: 1972,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RS644Z',
					performed_by: 'Revkah Swiggs',
					date: 1958,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WM60ZZ',
					performed_by: 'Caron Sallans',
					date: 1986,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0RWVX8Z',
					performed_by: 'Alicea Hecks',
					date: 2004,
					additional_information:
						'leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices',
				},
				{
					ICD10procedurecode: 'F13ZG4Z',
					performed_by: 'Kim Corrigan',
					date: 2010,
					additional_information:
						'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
				},
				{
					ICD10procedurecode: '0G9K0ZZ',
					performed_by: 'Florentia Battill',
					date: 1973,
					additional_information:
						'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus',
				},
				{
					ICD10procedurecode: '0D1H0Z4',
					performed_by: 'Gabi Vanlint',
					date: 2018,
					additional_information: null,
				},
				{
					ICD10procedurecode: '047W37Z',
					performed_by: 'Modesta Rubie',
					date: 1973,
					additional_information: null,
				},
			],
			medications: [
				{ drugname: 'Alcohol', prescribed_by: 'Alric Tiffany' },
				{
					drugname:
						'diphenoxylate hydrochloride and atropine sulfate',
					prescribed_by: 'Pansy Castellino',
				},
				{ drugname: 'ALCOHOL', prescribed_by: 'Thoma Rockcliffe' },
				{ drugname: 'Lamotrigine', prescribed_by: 'Amii Forbes' },
				{ drugname: 'azithromycin', prescribed_by: 'Margret Hardwich' },
				{
					drugname: 'GRINDELIA HIRSUTULA FLOWERING TOP',
					prescribed_by: 'Nichole Slegg',
				},
			],
		},
		ssn: '402312431',
	},
	{
		details: {
			first_name: 'Bryn',
			last_name: 'Lintill',
			middle_name: 'Porty',
			gender: 'Male',
			address_one: '97 Knutson Park',
			city: 'Grand Junction',
			state: 'CO',
			zip: '81505',
			date_of_birth: '1965-04-03T17:50:17Z',
			contact_methods: [
				{
					number: '892-160-1809',
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
				{ number: '435-914-8204', notes: null },
				{ number: '865-943-7278', notes: null },
				{
					number: '259-164-3998',
					notes: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				},
				{
					allergy: 'animals',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.',
				},
				{
					allergy: 'insects',
					notes: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
				},
				{
					allergy: 'insects',
					notes: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
				{
					allergy: 'peanut',
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'M6240',
					ICD10diagnosislongdescription:
						'Contracture of muscle, unspecified site',
					ICD10diagnosisshortdescription:
						'Contracture of muscle, unspecified site',
				},
				{
					ICD10diagnosiscode: 'M65171',
					ICD10diagnosislongdescription:
						'Other infective (teno)synovitis, right ankle and foot',
					ICD10diagnosisshortdescription:
						'Other infective (teno)synovitis, right ankle and foot',
				},
				{
					ICD10diagnosiscode: 'N4881',
					ICD10diagnosislongdescription:
						'Thrombosis of superficial vein of penis',
					ICD10diagnosisshortdescription:
						'Thrombosis of superficial vein of penis',
				},
				{
					ICD10diagnosiscode: 'V115XXD',
					ICD10diagnosislongdescription:
						'Pedal cycle passenger injured in collision with other pedal cycle in traffic accident, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Pedl cyc pasngr injured in clsn w oth pedl cyc in traf, subs',
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'L-6700857582',
					company: 'Okuneva, Hintz and Kuvalis',
					frontimage:
						'http://dummyimage.com/109x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/248x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '01/27/2006',
					eligibiltybegan: '08/26/1996',
					eligibiltyexpired: '02/09/1988',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-2381417757',
					company: "O'Reilly-Wisozk",
					frontimage:
						'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/149x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '02/03/1991',
					eligibiltybegan: '10/16/2004',
					eligibiltyexpired: '07/19/1960',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-2420181118',
					company: 'Anderson Inc',
					frontimage:
						'http://dummyimage.com/188x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/174x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/18/1970',
					eligibiltybegan: '03/20/1956',
					eligibiltyexpired: '01/27/1955',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-4148187356',
					company: 'Romaguera, Labadie and Dickinson',
					frontimage:
						'http://dummyimage.com/140x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/150x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '07/13/2019',
					eligibiltybegan: '06/22/1976',
					eligibiltyexpired: '09/11/1983',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'BU111ZZ',
					performed_by: 'Kristine Bothwell',
					date: 1980,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0YMQ0ZZ',
					performed_by: 'Benedick Sheehan',
					date: 1979,
					additional_information:
						'magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non',
				},
				{
					ICD10procedurecode: '08N',
					performed_by: 'Salomi Penhallurick',
					date: 1995,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0WW8XJZ',
					performed_by: 'Laetitia Lowdes',
					date: 2016,
					additional_information: null,
				},
			],
			medications: [
				{
					drugname:
						'CYCLOBENZAPRINE HYDROCHLORIDE, .GAMMA.-AMINOBUTYRIC ACID',
					prescribed_by: 'Alfons Redgrove',
				},
				{
					drugname: 'Phosphorus Tartarus',
					prescribed_by: 'Giuseppe Wilce',
				},
				{
					drugname: 'levetiracetam',
					prescribed_by: 'Wakefield Hoyland',
				},
				{ drugname: 'Zinc Oxide', prescribed_by: 'Lyman Hyett' },
				{
					drugname: 'Magnesium Hydroxide',
					prescribed_by: 'Alecia Feldhammer',
				},
				{ drugname: 'Heparin Sodium', prescribed_by: 'Rufus Teale' },
			],
		},
		ssn: '503286146',
	},
	{
		details: {
			first_name: 'Torrey',
			last_name: 'Mumm',
			middle_name: 'Carlo',
			gender: 'Male',
			address_one: '96 Shoshone Drive',
			city: 'Waterloo',
			state: 'IA',
			zip: '50706',
			date_of_birth: '1993-08-07T14:46:18Z',
			contact_methods: [
				{
					number: '864-436-6413',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				},
				{
					number: '266-590-3368',
					notes: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
				},
				{ number: '323-778-6097', notes: null },
				{ number: '206-443-7111', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
				},
				{
					allergy: 'medication',
					notes: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
				},
				{
					allergy: 'animals',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S82145H',
					ICD10diagnosislongdescription:
						'Nondisplaced bicondylar fracture of left tibia, subsequent encounter for open fracture type I or II with delayed healing',
					ICD10diagnosisshortdescription:
						'Nondisp bicondylar fx l tibia, 7thH',
				},
			],
			insurance: [
				{
					primary: true,
					active: true,
					membernumber: 'K-9470548244',
					company: 'Wintheiser, Greenholt and Kautzer',
					frontimage:
						'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/200x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/09/1978',
					eligibiltybegan: '10/04/1956',
					eligibiltyexpired: '12/31/1984',
				},
				{
					primary: true,
					active: false,
					membernumber: 'E-3206974619',
					company: 'Kemmer, Maggio and Klein',
					frontimage:
						'http://dummyimage.com/167x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '09/15/2015',
					eligibiltybegan: '11/11/1956',
					eligibiltyexpired: '10/31/2020',
				},
				{
					primary: false,
					active: true,
					membernumber: 'V-7290879429',
					company: 'Funk, Torphy and Koelpin',
					frontimage:
						'http://dummyimage.com/152x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/198x100.png/dddddd/000000',
					dateeligibitylastchecked: '02/08/1953',
					eligibiltybegan: '11/04/1951',
					eligibiltyexpired: '08/18/1967',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0F793ZZ',
					performed_by: 'Lorie Piegrome',
					date: 1954,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0SG30JJ',
					performed_by: 'Cornelle Tuison',
					date: 1969,
					additional_information:
						'praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula',
				},
				{
					ICD10procedurecode: '0CNX0Z2',
					performed_by: 'Gustav McIlmurray',
					date: 2012,
					additional_information: null,
				},
				{
					ICD10procedurecode: 'DW16BCZ',
					performed_by: 'Izabel Ballham',
					date: 1994,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0D1K4ZN',
					performed_by: 'Davin Pietzker',
					date: 2003,
					additional_information:
						'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis',
				},
			],
			medications: [
				{
					drugname:
						'Phytolacca Decandra, Gnaphalium Polycephalum, Colocynthis, Gelsemium Sempervirens',
					prescribed_by: 'Garvy Checcucci',
				},
				{
					drugname: 'Diltiazem Hydrochloride',
					prescribed_by: 'Hurleigh De Cristofalo',
				},
				{
					drugname: 'Sodium Fluoride and Potassium Nitrate',
					prescribed_by: 'Alasdair Watmough',
				},
				{
					drugname: 'Chlordiazepoxide Hydrochloride',
					prescribed_by: 'Lark Palatini',
				},
			],
		},
		ssn: '935296601',
	},
	{
		details: {
			first_name: 'Dudley',
			last_name: 'Cotherill',
			middle_name: 'Georgy',
			gender: 'Male',
			address_one: '2363 Helena Lane',
			city: 'Greensboro',
			state: 'NC',
			zip: '27415',
			date_of_birth: '2010-09-02T03:50:45Z',
			contact_methods: [
				{ number: '805-152-5512', notes: null },
				{ number: '235-401-2285', notes: null },
				{ number: '265-335-5496', notes: null },
				{
					number: '686-228-3518',
					notes: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				},
				{
					number: '405-623-1780',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
				{
					allergy: 'animals',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
				{
					allergy: 'medication',
					notes: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S63436D',
					ICD10diagnosislongdescription:
						'Traumatic rupture of volar plate of right little finger at metacarpophalangeal and interphalangeal joint, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Traum rupt of volar plate of r lit fngr at MCP/IP jt, subs',
				},
			],
			insurance: [
				{
					primary: false,
					active: true,
					membernumber: 'X-0334571294',
					company: 'Schmidt-Trantow',
					frontimage:
						'http://dummyimage.com/114x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/201x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/12/1995',
					eligibiltybegan: '03/07/1984',
					eligibiltyexpired: '11/10/1971',
				},
				{
					primary: false,
					active: true,
					membernumber: 'H-5776924355',
					company: 'Crist LLC',
					frontimage:
						'http://dummyimage.com/211x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/224x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '11/30/1953',
					eligibiltybegan: '11/23/1973',
					eligibiltyexpired: '09/30/1981',
				},
				{
					primary: false,
					active: false,
					membernumber: 'X-9362898467',
					company: 'Marks-Schumm',
					frontimage:
						'http://dummyimage.com/129x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/179x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/29/1983',
					eligibiltybegan: '06/02/1999',
					eligibiltyexpired: '01/23/1990',
				},
				{
					primary: false,
					active: true,
					membernumber: 'X-7225730627',
					company: 'Carroll Group',
					frontimage:
						'http://dummyimage.com/108x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/31/1994',
					eligibiltybegan: '11/06/1976',
					eligibiltyexpired: '06/14/2008',
				},
				{
					primary: true,
					active: false,
					membernumber: 'R-5653088548',
					company: 'Luettgen Group',
					frontimage:
						'http://dummyimage.com/218x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/223x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/14/1958',
					eligibiltybegan: '09/26/1951',
					eligibiltyexpired: '09/25/2015',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-0165968267',
					company: 'Johnston Group',
					frontimage:
						'http://dummyimage.com/139x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/181x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/21/2021',
					eligibiltybegan: '03/19/1996',
					eligibiltyexpired: '03/24/1961',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0P933ZZ',
					performed_by: 'Lenka Marshal',
					date: 2015,
					additional_information:
						'sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet',
				},
			],
			medications: [
				{
					drugname: 'oxycodone hydrochloride',
					prescribed_by: 'Jordain Townson',
				},
				{
					drugname: 'Octocrylene and Oxybenzone and Avobenzone',
					prescribed_by: 'Fred Tubb',
				},
				{
					drugname:
						'Apocynum cannabinum, Baryta carbonica, Cactus grandiflorus, Convallaria majalis, Digitalis purpurea, Gelsemium sempervirens, Glonoinum, Naja tripudians, Phosphorus, Spigelia anthelmia, Spongia tosta',
					prescribed_by: 'Gretta Allington',
				},
			],
		},
		ssn: '683817313',
	},
	{
		details: {
			first_name: 'Sanson',
			last_name: 'Steere',
			middle_name: 'Donny',
			gender: 'Male',
			address_one: '44 Spaight Avenue',
			city: 'Los Angeles',
			state: 'CA',
			zip: '90005',
			date_of_birth: '2013-03-18T09:38:07Z',
			contact_methods: [
				{ number: '651-514-8756', notes: null },
				{ number: '782-442-1101', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'peanut',
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
				{
					allergy: 'animals',
					notes: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
				},
				{
					allergy: 'animals',
					notes: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				},
				{
					allergy: 'medication',
					notes: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'V839',
					ICD10diagnosislongdescription:
						'Unspecified occupant of special industrial vehicle injured in nontraffic accident',
					ICD10diagnosisshortdescription:
						'Occup of special industrial vehicle injured nontraf',
				},
				{
					ICD10diagnosiscode: 'S41131S',
					ICD10diagnosislongdescription:
						'Puncture wound without foreign body of right upper arm, sequela',
					ICD10diagnosisshortdescription:
						'Puncture wound w/o foreign body of right upper arm, sequela',
				},
				{
					ICD10diagnosiscode: 'S52266H',
					ICD10diagnosislongdescription:
						'Nondisplaced segmental fracture of shaft of ulna, unspecified arm, subsequent encounter for open fracture type I or II with delayed healing',
					ICD10diagnosisshortdescription:
						'Nondisp seg fx shaft of ulna, unsp arm, 7thH',
				},
				{
					ICD10diagnosiscode: 'S37829D',
					ICD10diagnosislongdescription:
						'Unspecified injury of prostate, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unspecified injury of prostate, subsequent encounter',
				},
				{
					ICD10diagnosiscode: 'B371',
					ICD10diagnosislongdescription: 'Pulmonary candidiasis',
					ICD10diagnosisshortdescription: 'Pulmonary candidiasis',
				},
				{
					ICD10diagnosiscode: 'T433X4A',
					ICD10diagnosislongdescription:
						'Poisoning by phenothiazine antipsychotics and neuroleptics, undetermined, initial encounter',
					ICD10diagnosisshortdescription:
						'Poisoning by phenothiaz antipsychot/neurolept, undet, init',
				},
				{
					ICD10diagnosiscode: 'S63106D',
					ICD10diagnosislongdescription:
						'Unspecified dislocation of unspecified thumb, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Unspecified dislocation of unspecified thumb, subs encntr',
				},
				{
					ICD10diagnosiscode: 'M62421',
					ICD10diagnosislongdescription:
						'Contracture of muscle, right upper arm',
					ICD10diagnosisshortdescription:
						'Contracture of muscle, right upper arm',
				},
				{
					ICD10diagnosiscode: 'I70522',
					ICD10diagnosislongdescription:
						'Atherosclerosis of nonautologous biological bypass graft(s) of the extremities with rest pain, left leg',
					ICD10diagnosisshortdescription:
						'Athscl nonaut bio bypass of the extrm w rest pain, left leg',
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'I-4261114830',
					company: 'Mraz LLC',
					frontimage:
						'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/126x100.png/dddddd/000000',
					dateeligibitylastchecked: '09/24/2019',
					eligibiltybegan: '12/07/1952',
					eligibiltyexpired: '08/08/2007',
				},
				{
					primary: true,
					active: false,
					membernumber: 'J-2429322162',
					company: 'Cole-Dietrich',
					frontimage:
						'http://dummyimage.com/230x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/209x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '11/29/2018',
					eligibiltybegan: '02/10/2012',
					eligibiltyexpired: '12/15/1996',
				},
				{
					primary: false,
					active: true,
					membernumber: 'M-8599120587',
					company: 'Cummerata-Ward',
					frontimage:
						'http://dummyimage.com/158x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/136x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '05/18/1977',
					eligibiltybegan: '11/01/1979',
					eligibiltyexpired: '03/14/2005',
				},
				{
					primary: false,
					active: false,
					membernumber: 'I-5638306135',
					company: 'Reynolds, Kerluke and Wyman',
					frontimage:
						'http://dummyimage.com/207x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/195x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '09/06/1985',
					eligibiltybegan: '12/19/1973',
					eligibiltyexpired: '09/07/1988',
				},
				{
					primary: true,
					active: true,
					membernumber: 'I-0432515775',
					company: 'Cassin-Dibbert',
					frontimage:
						'http://dummyimage.com/168x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/119x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '10/26/1973',
					eligibiltybegan: '02/02/1984',
					eligibiltyexpired: '04/04/1991',
				},
				{
					primary: false,
					active: true,
					membernumber: 'R-5211393361',
					company: 'Wehner and Sons',
					frontimage:
						'http://dummyimage.com/175x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/22/2011',
					eligibiltybegan: '09/15/1973',
					eligibiltyexpired: '04/16/1976',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0SG33Z1',
					performed_by: 'Brandea Littlemore',
					date: 1970,
					additional_information: null,
				},
			],
			medications: [
				{
					drugname: 'Avobenzone, Octisalate, Octocrylene',
					prescribed_by: 'Roseline Loder',
				},
				{ drugname: 'Acetaminophen', prescribed_by: 'Darya Peirson' },
				{ drugname: 'temazepam', prescribed_by: 'Truda MacGuffie' },
				{
					drugname: 'Hydroxyzine Hydrochloride',
					prescribed_by: "Brooks O'Flynn",
				},
				{
					drugname:
						'MINERAL OIL, PETROLATUM, PHENYLEPHRINE HYDROCHLORIDE',
					prescribed_by: 'Gabbey Pregel',
				},
				{
					drugname: 'clonidine hydrochloride',
					prescribed_by: 'Brantley Mansbridge',
				},
				{ drugname: 'RANITIDINE', prescribed_by: 'Barbe Malkinson' },
				{ drugname: 'Omeprazole', prescribed_by: 'Byram Kirkebye' },
			],
		},
		ssn: '398373109',
	},
	{
		details: {
			first_name: 'Sutherland',
			last_name: 'Tolefree',
			middle_name: 'Ethe',
			gender: 'Male',
			address_one: '281 Mayfield Hill',
			city: 'Chicago',
			state: 'IL',
			zip: '60636',
			date_of_birth: '1993-02-24T14:22:23Z',
			contact_methods: [
				{ number: '490-755-0511', notes: null },
				{ number: '545-601-2169', notes: null },
				{
					number: '411-597-0616',
					notes: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'medication',
					notes: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'I70349',
					ICD10diagnosislongdescription:
						'Atherosclerosis of unspecified type of bypass graft(s) of the left leg with ulceration of unspecified site',
					ICD10diagnosisshortdescription:
						'Athscl unsp type bypass of the left leg w ulcer of unsp site',
				},
				{
					ICD10diagnosiscode: 'S61214A',
					ICD10diagnosislongdescription:
						'Laceration without foreign body of right ring finger without damage to nail, initial encounter',
					ICD10diagnosisshortdescription:
						'Laceration w/o fb of r rng fngr w/o damage to nail, init',
				},
				{
					ICD10diagnosiscode: 'S52256',
					ICD10diagnosislongdescription:
						'Nondisplaced comminuted fracture of shaft of ulna, unspecified arm',
					ICD10diagnosisshortdescription:
						'Nondisplaced comminuted fracture of shaft of ulna, unsp arm',
				},
				{
					ICD10diagnosiscode: 'H65114',
					ICD10diagnosislongdescription:
						'Acute and subacute allergic otitis media (mucoid) (sanguinous) (serous), recurrent, right ear',
					ICD10diagnosisshortdescription:
						'Acute and subacute allergic otitis media, recur, r ear',
				},
				{
					ICD10diagnosiscode: 'S15391S',
					ICD10diagnosislongdescription:
						'Other specified injury of right internal jugular vein, sequela',
					ICD10diagnosisshortdescription:
						'Oth injury of right internal jugular vein, sequela',
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'O-7347413715',
					company: 'Kshlerin-Cormier',
					frontimage:
						'http://dummyimage.com/239x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/126x100.png/dddddd/000000',
					dateeligibitylastchecked: '08/13/1983',
					eligibiltybegan: '07/21/1975',
					eligibiltyexpired: '01/17/1972',
				},
				{
					primary: false,
					active: false,
					membernumber: 'A-1693510104',
					company: 'Thompson-Yost',
					frontimage:
						'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '01/11/1951',
					eligibiltybegan: '10/15/2010',
					eligibiltyexpired: '12/21/1986',
				},
				{
					primary: true,
					active: true,
					membernumber: 'K-3621556350',
					company: 'Bashirian LLC',
					frontimage:
						'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/246x100.png/dddddd/000000',
					dateeligibitylastchecked: '03/21/1988',
					eligibiltybegan: '07/05/1959',
					eligibiltyexpired: '09/01/1976',
				},
				{
					primary: false,
					active: false,
					membernumber: 'C-4280212605',
					company: 'Frami and Sons',
					frontimage:
						'http://dummyimage.com/166x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/200x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/29/1988',
					eligibiltybegan: '12/15/2012',
					eligibiltyexpired: '09/12/1966',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-7561700982',
					company: 'Boehm-Weimann',
					frontimage:
						'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/139x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '06/06/2017',
					eligibiltybegan: '03/31/1952',
					eligibiltyexpired: '12/28/1954',
				},
				{
					primary: true,
					active: true,
					membernumber: 'D-5202093963',
					company: 'Nikolaus-Howell',
					frontimage:
						'http://dummyimage.com/248x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/172x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '07/26/2019',
					eligibiltybegan: '08/26/2011',
					eligibiltyexpired: '03/15/2016',
				},
				{
					primary: false,
					active: false,
					membernumber: 'S-3787799966',
					company: 'Mayert Group',
					frontimage:
						'http://dummyimage.com/204x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/142x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/10/2020',
					eligibiltybegan: '09/10/1999',
					eligibiltyexpired: '06/17/1958',
				},
				{
					primary: false,
					active: true,
					membernumber: 'I-0155082701',
					company: 'Gibson-Maggio',
					frontimage:
						'http://dummyimage.com/169x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/185x100.png/dddddd/000000',
					dateeligibitylastchecked: '05/09/1988',
					eligibiltybegan: '07/03/1965',
					eligibiltyexpired: '07/10/1974',
				},
				{
					primary: false,
					active: true,
					membernumber: 'P-1088212201',
					company: 'Schmeler, Rath and Sanford',
					frontimage:
						'http://dummyimage.com/205x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/234x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/27/2003',
					eligibiltybegan: '08/26/1998',
					eligibiltyexpired: '12/24/2012',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '0WPQ31Z',
					performed_by: 'Martina Adam',
					date: 2012,
					additional_information: null,
				},
			],
			medications: [
				{
					drugname: 'Levothyroxine Sodium',
					prescribed_by: 'Lacie Castanaga',
				},
				{
					drugname: 'hydromorphone hydrochloride',
					prescribed_by: 'Huey Nowaczyk',
				},
				{
					drugname: 'Diltiazem Hydrochloride',
					prescribed_by: 'Dave Castaignet',
				},
				{
					drugname: 'AVOBENZONE, OCTINOXATE, OCTOCRYLENE',
					prescribed_by: 'Bentlee Durbridge',
				},
				{
					drugname: 'OCTINOXATE, TITANIUM DIOXIDE, OXYBENZONE',
					prescribed_by: 'Maire Berisford',
				},
				{
					drugname: 'bupropion hydrochloride',
					prescribed_by: 'Jobina Ebbin',
				},
				{
					drugname: 'Cottonwood Western',
					prescribed_by: 'Keene Keyme',
				},
				{
					drugname: 'Octinoxate, Octisalate, and Oxybenzone',
					prescribed_by: 'Arnoldo Duigenan',
				},
				{ drugname: 'Allopurinol', prescribed_by: 'Golda Berndt' },
				{ drugname: 'Zinc Oxide', prescribed_by: 'Keefer Biaggelli' },
			],
		},
		ssn: '466855855',
	},
	{
		details: {
			first_name: 'Faydra',
			last_name: 'Jaggar',
			middle_name: 'Angelita',
			gender: 'Polygender',
			address_one: '820 Service Center',
			city: 'Norfolk',
			state: 'VA',
			zip: '23504',
			date_of_birth: '2016-10-11T05:50:42Z',
			contact_methods: [
				{
					number: '785-990-3262',
					notes: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				},
				{ number: '214-146-5667', notes: null },
				{
					number: '180-392-3339',
					notes: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				},
				{ number: '325-149-0685', notes: null },
				{
					number: '473-546-8888',
					notes: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				},
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'insects',
					notes: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
				},
				{
					allergy: 'medication',
					notes: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
				},
				{
					allergy: 'peanut',
					notes: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
				},
				{
					allergy: 'insects',
					notes: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'S83143A',
					ICD10diagnosislongdescription:
						'Lateral subluxation of proximal end of tibia, unspecified knee, initial encounter',
					ICD10diagnosisshortdescription:
						'Lateral sublux of proximal end of tibia, unsp knee, init',
				},
				{
					ICD10diagnosiscode: 'S37421D',
					ICD10diagnosislongdescription:
						'Contusion of ovary, unilateral, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Contusion of ovary, unilateral, subsequent encounter',
				},
				{
					ICD10diagnosiscode: 'C7A093',
					ICD10diagnosislongdescription:
						'Malignant carcinoid tumor of the kidney',
					ICD10diagnosisshortdescription:
						'Malignant carcinoid tumor of the kidney',
				},
				{
					ICD10diagnosiscode: 'Y93E',
					ICD10diagnosislongdescription:
						'Activities involving personal hygiene and interior property and clothing maintenance',
					ICD10diagnosisshortdescription:
						'Activities involving personal hygiene and prop & clothng',
				},
				{
					ICD10diagnosiscode: 'M2362',
					ICD10diagnosislongdescription:
						'Other spontaneous disruption of posterior cruciate ligament of knee',
					ICD10diagnosisshortdescription:
						'Oth spon disruption of posterior cruciate ligament of knee',
				},
				{
					ICD10diagnosiscode: 'S82014C',
					ICD10diagnosislongdescription:
						'Nondisplaced osteochondral fracture of right patella, initial encounter for open fracture type IIIA, IIIB, or IIIC',
					ICD10diagnosisshortdescription:
						'Nondisp osteochon fx r patella, init for opn fx type 3A/B/C',
				},
				{
					ICD10diagnosiscode: 'S62134S',
					ICD10diagnosislongdescription:
						'Nondisplaced fracture of capitate [os magnum] bone, right wrist, sequela',
					ICD10diagnosisshortdescription:
						'Nondisplaced fracture of capitate bone, right wrist, sequela',
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'H-2824184558',
					company: 'Stroman, Dickens and Fahey',
					frontimage:
						'http://dummyimage.com/110x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/194x100.png/dddddd/000000',
					dateeligibitylastchecked: '07/04/1994',
					eligibiltybegan: '02/01/2012',
					eligibiltyexpired: '01/21/1952',
				},
				{
					primary: true,
					active: true,
					membernumber: 'M-5645306055',
					company: 'Bartell, Huels and Hodkiewicz',
					frontimage:
						'http://dummyimage.com/166x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/169x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '12/24/2015',
					eligibiltybegan: '03/16/1993',
					eligibiltyexpired: '12/02/2008',
				},
				{
					primary: true,
					active: false,
					membernumber: 'E-2306818790',
					company: 'Spencer-Walker',
					frontimage:
						'http://dummyimage.com/201x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/194x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/12/1958',
					eligibiltybegan: '06/20/1962',
					eligibiltyexpired: '10/26/1977',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Y-8381330438',
					company: 'Lind Inc',
					frontimage:
						'http://dummyimage.com/167x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/249x100.png/dddddd/000000',
					dateeligibitylastchecked: '01/07/2016',
					eligibiltybegan: '08/28/1970',
					eligibiltyexpired: '02/11/1979',
				},
				{
					primary: true,
					active: false,
					membernumber: 'Q-7759700361',
					company: 'Conroy and Sons',
					frontimage:
						'http://dummyimage.com/212x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/123x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '05/21/1997',
					eligibiltybegan: '05/15/2003',
					eligibiltyexpired: '02/23/2003',
				},
				{
					primary: true,
					active: false,
					membernumber: 'A-9741356947',
					company: 'Gerlach-Ferry',
					frontimage:
						'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/106x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/06/1987',
					eligibiltybegan: '06/10/1976',
					eligibiltyexpired: '08/30/2014',
				},
				{
					primary: true,
					active: false,
					membernumber: 'J-4156328164',
					company: 'Cassin and Sons',
					frontimage:
						'http://dummyimage.com/166x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/189x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '02/11/1992',
					eligibiltybegan: '04/17/1953',
					eligibiltyexpired: '05/19/2008',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '00514ZZ',
					performed_by: 'Melantha Golde',
					date: 2000,
					additional_information:
						'bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl',
				},
				{
					ICD10procedurecode: '019630Z',
					performed_by: 'Hannah Gregorio',
					date: 1955,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0Q9040Z',
					performed_by: 'Licha Dayne',
					date: 1955,
					additional_information:
						'nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo',
				},
				{
					ICD10procedurecode: '061H4ZY',
					performed_by: 'Alvis Hughlin',
					date: 2017,
					additional_information: null,
				},
				{
					ICD10procedurecode: '3E0C704',
					performed_by: 'Kim Singers',
					date: 1967,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0BH58GZ',
					performed_by: 'Delia Pirazzi',
					date: 1969,
					additional_information:
						'felis donec semper sapien a libero nam dui proin leo',
				},
				{
					ICD10procedurecode: 'B5221ZZ',
					performed_by: 'Camille Banck',
					date: 1961,
					additional_information:
						'duis bibendum felis sed interdum venenatis turpis enim blandit mi',
				},
			],
			medications: [
				{
					drugname: 'cetirizine hydrochloride',
					prescribed_by: 'Emmalyn Northeast',
				},
				{
					drugname: 'Clemastine fumarate',
					prescribed_by: 'Rivy Crumbleholme',
				},
				{ drugname: 'Titanium dioxide', prescribed_by: 'Bondie Snel' },
				{
					drugname: 'ceftriaxone sodium',
					prescribed_by: 'Shelley Colbrun',
				},
				{ drugname: 'witch hazel', prescribed_by: 'Osborn Cockling' },
				{
					drugname: 'Triamcinolone Acetonide',
					prescribed_by: 'Lorrie Shanley',
				},
				{ drugname: 'Gambil Oak', prescribed_by: 'Fowler Wyard' },
				{
					drugname: 'Benzocaine 20%, Menthol, Benzalkonium Chloride',
					prescribed_by: 'Harris Palmby',
				},
				{
					drugname:
						'CONJUGATED ESTROGENS and MEDROXYPROGESTERONE ACETATE',
					prescribed_by: 'Kelsi Bertomieu',
				},
			],
		},
		ssn: '692185672',
	},
	{
		details: {
			first_name: 'Isaiah',
			last_name: 'Suttell',
			middle_name: 'Salvador',
			gender: 'Male',
			address_one: '363 Clemons Circle',
			city: 'South Bend',
			state: 'IN',
			zip: '46620',
			date_of_birth: '2009-01-06T09:03:09Z',
			contact_methods: [
				{
					number: '695-523-6102',
					notes: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
				},
				{ number: '194-586-0816', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'medication',
					notes: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
				},
				{
					allergy: 'animals',
					notes: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H6193',
					ICD10diagnosislongdescription:
						'Disorder of external ear, unspecified, bilateral',
					ICD10diagnosisshortdescription:
						'Disorder of external ear, unspecified, bilateral',
				},
				{
					ICD10diagnosiscode: 'S3763XS',
					ICD10diagnosislongdescription:
						'Laceration of uterus, sequela',
					ICD10diagnosisshortdescription:
						'Laceration of uterus, sequela',
				},
				{
					ICD10diagnosiscode: 'S92044D',
					ICD10diagnosislongdescription:
						'Nondisplaced other fracture of tuberosity of right calcaneus, subsequent encounter for fracture with routine healing',
					ICD10diagnosisshortdescription:
						'Nondisp oth fx tuberosity of r calcaneus, 7thD',
				},
				{
					ICD10diagnosiscode: 'Y37100S',
					ICD10diagnosislongdescription:
						'Military operations involving unspecified destruction of aircraft, military personnel, sequela',
					ICD10diagnosisshortdescription:
						'Milt op involving unsp dest arcrft, milt, sequela',
				},
				{
					ICD10diagnosiscode: 'H11241',
					ICD10diagnosislongdescription:
						'Scarring of conjunctiva, right eye',
					ICD10diagnosisshortdescription:
						'Scarring of conjunctiva, right eye',
				},
				{
					ICD10diagnosiscode: 'T22269',
					ICD10diagnosislongdescription:
						'Burn of second degree of unspecified scapular region',
					ICD10diagnosisshortdescription:
						'Burn of second degree of unspecified scapular region',
				},
			],
			insurance: [
				{
					primary: false,
					active: false,
					membernumber: 'D-4303648078',
					company: 'Schulist-Heathcote',
					frontimage:
						'http://dummyimage.com/212x100.png/cc0000/ffffff',
					backimage:
						'http://dummyimage.com/180x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '01/22/2004',
					eligibiltybegan: '10/02/2004',
					eligibiltyexpired: '05/05/1982',
				},
				{
					primary: true,
					active: false,
					membernumber: 'G-4472821304',
					company: 'Jerde, Farrell and Jerde',
					frontimage:
						'http://dummyimage.com/174x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/216x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/17/1991',
					eligibiltybegan: '08/07/2021',
					eligibiltyexpired: '08/22/2009',
				},
				{
					primary: false,
					active: false,
					membernumber: 'K-2745146785',
					company: "D'Amore, Romaguera and Prohaska",
					frontimage:
						'http://dummyimage.com/230x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '03/07/1963',
					eligibiltybegan: '06/03/1975',
					eligibiltyexpired: '07/23/2002',
				},
				{
					primary: false,
					active: false,
					membernumber: 'P-2922138490',
					company: 'Dare-Schuppe',
					frontimage:
						'http://dummyimage.com/177x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/137x100.png/ff4444/ffffff',
					dateeligibitylastchecked: '02/03/2009',
					eligibiltybegan: '03/21/1983',
					eligibiltyexpired: '05/04/2003',
				},
				{
					primary: false,
					active: true,
					membernumber: 'C-4588992918',
					company: 'Gottlieb Inc',
					frontimage:
						'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/117x100.png/cc0000/ffffff',
					dateeligibitylastchecked: '03/10/1966',
					eligibiltybegan: '01/13/2008',
					eligibiltyexpired: '04/14/1950',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Z-7860822216',
					company: 'Skiles-Parisian',
					frontimage:
						'http://dummyimage.com/183x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/197x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/10/1994',
					eligibiltybegan: '12/06/2000',
					eligibiltyexpired: '07/21/1956',
				},
				{
					primary: true,
					active: false,
					membernumber: 'M-8193982898',
					company: 'Beahan, Altenwerth and Cronin',
					frontimage:
						'http://dummyimage.com/116x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/185x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '07/06/1982',
					eligibiltybegan: '09/24/2008',
					eligibiltyexpired: '10/11/2016',
				},
				{
					primary: true,
					active: true,
					membernumber: 'B-0869666589',
					company: 'Leuschke, Corkery and VonRueden',
					frontimage:
						'http://dummyimage.com/139x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/199x100.png/dddddd/000000',
					dateeligibitylastchecked: '06/02/2000',
					eligibiltybegan: '10/04/1961',
					eligibiltyexpired: '10/13/1967',
				},
				{
					primary: true,
					active: false,
					membernumber: 'C-7547965375',
					company: 'Schroeder, Sipes and Durgan',
					frontimage:
						'http://dummyimage.com/133x100.png/dddddd/000000',
					backimage:
						'http://dummyimage.com/107x100.png/5fa2dd/ffffff',
					dateeligibitylastchecked: '11/02/1968',
					eligibiltybegan: '09/12/2011',
					eligibiltyexpired: '06/28/2022',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: '9WB3XGZ',
					performed_by: 'Beryle Mair',
					date: 1993,
					additional_information: null,
				},
				{
					ICD10procedurecode: '03HV33Z',
					performed_by: 'Mauricio Rosas',
					date: 1986,
					additional_information: null,
				},
				{
					ICD10procedurecode: '021K4ZC',
					performed_by: 'Kort Tooze',
					date: 2008,
					additional_information: null,
				},
			],
			medications: [
				{
					drugname: 'Desmopressin Acetate',
					prescribed_by: 'Perl Milley',
				},
				{ drugname: 'Vanilla Bean', prescribed_by: 'Conway Sergean' },
				{
					drugname: 'Avobenzone Homosalate Octisalate Octocrylene',
					prescribed_by: 'Aguie Kondrat',
				},
			],
		},
		ssn: '710978037',
	},
	{
		details: {
			first_name: 'Chrystal',
			last_name: 'Lintall',
			middle_name: 'Drucill',
			gender: 'Female',
			address_one: '88522 Straubel Road',
			city: 'Birmingham',
			state: 'AL',
			zip: '35285',
			date_of_birth: '1980-02-04T13:28:46Z',
			contact_methods: [
				{
					number: '378-552-9613',
					notes: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				},
				{ number: '606-130-1671', notes: null },
			],
			familyhistory: [],
			socialhistory: [],
			medicalhistory: [],
			allergies: [
				{
					allergy: 'animals',
					notes: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				},
				{
					allergy: 'peanut',
					notes: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				},
				{
					allergy: 'insects',
					notes: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				},
				{
					allergy: 'medication',
					notes: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
				},
			],
			diagnoses: [
				{
					ICD10diagnosiscode: 'H59013',
					ICD10diagnosislongdescription:
						'Keratopathy (bullous aphakic) following cataract surgery, bilateral',
					ICD10diagnosisshortdescription:
						'Keratopathy (bullous aphakic) following cataract surgery, bi',
				},
				{
					ICD10diagnosiscode: 'S75022',
					ICD10diagnosislongdescription:
						'Major laceration of femoral artery, left leg',
					ICD10diagnosisshortdescription:
						'Major laceration of femoral artery, left leg',
				},
				{
					ICD10diagnosiscode: 'T50Z96D',
					ICD10diagnosislongdescription:
						'Underdosing of other vaccines and biological substances, subsequent encounter',
					ICD10diagnosisshortdescription:
						'Underdosing of oth vaccines and biological substances, subs',
				},
			],
			insurance: [
				{
					primary: true,
					active: false,
					membernumber: 'R-4927647797',
					company: 'Hirthe-Block',
					frontimage:
						'http://dummyimage.com/108x100.png/ff4444/ffffff',
					backimage:
						'http://dummyimage.com/223x100.png/dddddd/000000',
					dateeligibitylastchecked: '12/06/1997',
					eligibiltybegan: '05/09/1995',
					eligibiltyexpired: '11/12/1980',
				},
				{
					primary: false,
					active: true,
					membernumber: 'Y-0999126537',
					company: 'Fay-Ratke',
					frontimage:
						'http://dummyimage.com/200x100.png/5fa2dd/ffffff',
					backimage:
						'http://dummyimage.com/139x100.png/dddddd/000000',
					dateeligibitylastchecked: '10/10/1955',
					eligibiltybegan: '05/24/1990',
					eligibiltyexpired: '03/05/2007',
				},
			],
			surgicalhistory: [
				{
					ICD10procedurecode: 'HZ2',
					performed_by: 'Lena Russ',
					date: 1983,
					additional_information: null,
				},
				{
					ICD10procedurecode: '0US9XZZ',
					performed_by: 'Eadith Sandry',
					date: 1996,
					additional_information:
						'proin at turpis a pede posuere nonummy integer non velit donec diam neque',
				},
			],
			medications: [
				{
					drugname:
						'Absinthium, Aconitum nap., Antimon. tart., Belladonna, Bryonia, Carbolicum acidum, Colchicum, Conium, Ferrum metallicum, Gelsemium, Glonoinum, Hyoscyamus, Ipecac., Iris versicolor, Lycopodium, Nux vom., Petroleum, Phosphorus, Sepia, Symphoricarpus racemosus, Tabacum, Theridion, Zingiber, Echinacea, Hypericum, Passiflora, Valeriana',
					prescribed_by: 'Perri Mattisssen',
				},
				{ drugname: 'Gabapentin', prescribed_by: 'Lindsey Rosell' },
				{
					drugname: 'LISINOPRIL AND HYDROCHLOROTHIAZIDE',
					prescribed_by: 'Darcey McAvaddy',
				},
				{
					drugname: 'Mango Blossom',
					prescribed_by: 'Theobald Kernocke',
				},
				{
					drugname: 'Ambrosia bipinnatifida',
					prescribed_by: 'Hayes Kach',
				},
				{
					drugname: 'acetylcysteine',
					prescribed_by: 'Jean Titterrell',
				},
				{
					drugname: 'octinoxate and oxybenzone',
					prescribed_by: 'Ulrikaumeko Cotesford',
				},
				{
					drugname:
						'Acetaminophen, Dextromethorphan HBr, Phenylephrine HCl',
					prescribed_by: 'Stormi Toffalo',
				},
				{ drugname: 'Lamotrigine', prescribed_by: 'Taffy Pechet' },
				{ drugname: 'Famotidine', prescribed_by: 'Jacklin Goatman' },
			],
		},
		ssn: '050538785',
	},
]
export default fakepatients
