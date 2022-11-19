const mockappointments = [
	{
		details: {
			status: 'cancelled',
			summary:
				'vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
		},
		type: 'follow up',
		status: 'in progress',
		start: '2022-11-03T19:34:16Z',
		end: '2022-11-03T20:34:16Z',
		patient: 7,
		provider: 3,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
		},
		type: 'follow up',
		status: 'finalized',
		start: '2021-11-21T06:15:30Z',
		end: '2021-11-21T07:15:30Z',
		patient: 6,
		provider: 2,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		},
		type: 'urgent',
		status: 'in progress',
		start: '2021-11-19T13:03:09Z',
		end: '2021-11-19T14:03:09Z',
		patient: 3,
		provider: 2,
	},
	{
		details: {
			status: 'in progress',
			summary:
				'nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		},
		type: 'medication management',
		status: 'finalized',
		start: '2022-03-18T10:02:46Z',
		end: '2022-03-18T11:02:46Z',
		patient: 5,
		provider: 3,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
		},
		type: 'first appointment',
		status: 'encounter complete',
		start: '2021-12-28T11:54:29Z',
		end: '2021-12-28T12:54:29Z',
		patient: 6,
		provider: 2,
	},
	{
		details: {
			status: 'encounter complete',
			summary:
				'sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
		},
		type: 'medication management',
		status: 'scheduled',
		start: '2022-12-18T16:04:16Z',
		end: '2022-12-18T17:04:16Z',
		patient: 6,
		provider: 1,
	},
	{
		details: {
			status: 'in progress',
			summary: 'luctus rutrum nulla tellus in sagittis dui vel nisl duis',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
		},
		type: 'medication management',
		status: 'in progress',
		start: '2021-11-06T06:06:35Z',
		end: '2021-11-06T07:06:35Z',
		patient: 4,
		provider: 3,
	},
	{
		details: {
			status: 'in progress',
			summary:
				'molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
		},
		type: 'medication management',
		status: 'in progress',
		start: '2021-12-19T20:17:21Z',
		end: '2021-12-19T21:17:21Z',
		patient: 3,
		provider: 3,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
		},
		type: 'follow up',
		status: 'finalized',
		start: '2023-01-14T08:15:26Z',
		end: '2023-01-14T09:15:26Z',
		patient: 4,
		provider: 3,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		},
		type: 'first appointment',
		status: 'encounter complete',
		start: '2022-07-20T02:11:10Z',
		end: '2022-07-20T03:11:10Z',
		patient: 3,
		provider: 3,
	},
	{
		details: {
			status: 'scheduled',
			summary:
				'ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		},
		type: 'first appointment',
		status: 'in progress',
		start: '2022-02-21T22:48:53Z',
		end: '2022-02-21T23:48:53Z',
		patient: 4,
		provider: 1,
	},
	{
		details: {
			status: 'finalized',
			summary:
				'semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		},
		type: 'follow up',
		status: 'in progress',
		start: '2022-06-29T22:21:36Z',
		end: '2022-06-29T23:21:36Z',
		patient: 6,
		provider: 1,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		},
		type: 'medication management',
		status: 'encounter complete',
		start: '2022-11-18T16:58:24Z',
		end: '2022-11-18T17:58:24Z',
		patient: 5,
		provider: 2,
	},
	{
		details: {
			status: 'finalized',
			summary:
				'erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
		},
		type: 'follow up',
		status: 'in waiting room',
		start: '2022-12-09T12:13:33Z',
		end: '2022-12-09T13:13:33Z',
		patient: 6,
		provider: 3,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
		},
		type: 'first appointment',
		status: 'scheduled',
		start: '2022-01-24T16:32:53Z',
		end: '2022-01-24T17:32:53Z',
		patient: 5,
		provider: 3,
	},
	{
		details: {
			status: 'scheduled',
			summary:
				'penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
		},
		type: 'first appointment',
		status: 'finalized',
		start: '2022-08-12T18:29:51Z',
		end: '2022-08-12T19:29:51Z',
		patient: 5,
		provider: 1,
	},
	{
		details: {
			status: 'finalized',
			summary:
				'amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
		},
		type: 'medication management',
		status: 'scheduled',
		start: '2022-10-30T19:26:27Z',
		end: '2022-10-30T20:26:27Z',
		patient: 4,
		provider: 1,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
		},
		type: 'first appointment',
		status: 'in waiting room',
		start: '2022-01-28T08:40:20Z',
		end: '2022-01-28T09:40:20Z',
		patient: 2,
		provider: 2,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
		},
		type: 'first appointment',
		status: 'in progress',
		start: '2023-02-23T11:54:24Z',
		end: '2023-02-23T12:54:24Z',
		patient: 2,
		provider: 1,
	},
	{
		details: {
			status: 'encounter complete',
			summary:
				'fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
		},
		type: 'first appointment',
		status: 'scheduled',
		start: '2022-02-27T12:13:53Z',
		end: '2022-02-27T13:13:53Z',
		patient: 6,
		provider: 2,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
		},
		type: 'follow up',
		status: 'in examination room',
		start: '2022-08-23T09:16:20Z',
		end: '2022-08-23T10:16:20Z',
		patient: 1,
		provider: 3,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
		},
		type: 'medication management',
		status: 'in examination room',
		start: '2022-12-15T01:52:46Z',
		end: '2022-12-15T02:52:46Z',
		patient: 3,
		provider: 1,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
		},
		type: 'first appointment',
		status: 'scheduled',
		start: '2022-12-19T21:22:16Z',
		end: '2022-12-19T22:22:16Z',
		patient: 4,
		provider: 3,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
		},
		type: 'first appointment',
		status: 'in examination room',
		start: '2022-10-03T09:59:57Z',
		end: '2022-10-03T10:59:57Z',
		patient: 3,
		provider: 2,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
		},
		type: 'first appointment',
		status: 'cancelled',
		start: '2022-02-06T15:33:04Z',
		end: '2022-02-06T16:33:04Z',
		patient: 2,
		provider: 3,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
		},
		type: 'first appointment',
		status: 'cancelled',
		start: '2023-02-21T04:31:49Z',
		end: '2023-02-21T05:31:49Z',
		patient: 3,
		provider: 1,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		},
		type: 'medication management',
		status: 'encounter complete',
		start: '2022-05-15T14:15:06Z',
		end: '2022-05-15T15:15:06Z',
		patient: 4,
		provider: 1,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
		},
		type: 'urgent',
		status: 'in progress',
		start: '2022-07-20T03:50:21Z',
		end: '2022-07-20T04:50:21Z',
		patient: 6,
		provider: 2,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		},
		type: 'urgent',
		status: 'in examination room',
		start: '2022-10-29T13:34:27Z',
		end: '2022-10-29T14:34:27Z',
		patient: 7,
		provider: 2,
	},
	{
		details: {
			status: 'finalized',
			summary:
				'volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
		},
		type: 'medication management',
		status: 'in progress',
		start: '2022-02-04T11:33:03Z',
		end: '2022-02-04T12:33:03Z',
		patient: 3,
		provider: 1,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
		},
		type: 'follow up',
		status: 'cancelled',
		start: '2021-10-28T05:40:02Z',
		end: '2021-10-28T06:40:02Z',
		patient: 1,
		provider: 3,
	},
	{
		details: {
			status: 'encounter complete',
			summary:
				'non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
		},
		type: 'urgent',
		status: 'finalized',
		start: '2023-02-24T14:06:34Z',
		end: '2023-02-24T15:06:34Z',
		patient: 3,
		provider: 1,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'sed tristique in tempus sit amet sem fusce consequat nulla nisl',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		},
		type: 'medication management',
		status: 'scheduled',
		start: '2023-02-21T00:19:50Z',
		end: '2023-02-21T01:19:50Z',
		patient: 7,
		provider: 3,
	},
	{
		details: {
			status: 'in progress',
			summary:
				'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
		},
		type: 'first appointment',
		status: 'in examination room',
		start: '2023-02-24T04:49:33Z',
		end: '2023-02-24T05:49:33Z',
		patient: 7,
		provider: 3,
	},
	{
		details: {
			status: 'in progress',
			summary:
				'ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
		},
		type: 'follow up',
		status: 'in progress',
		start: '2022-06-17T06:17:43Z',
		end: '2022-06-17T07:17:43Z',
		patient: 2,
		provider: 2,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
		},
		type: 'first appointment',
		status: 'cancelled',
		start: '2022-01-06T06:34:08Z',
		end: '2022-01-06T07:34:08Z',
		patient: 3,
		provider: 2,
	},
	{
		details: {
			status: 'cancelled',
			summary:
				'convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
		},
		type: 'first appointment',
		status: 'finalized',
		start: '2022-02-19T16:08:46Z',
		end: '2022-02-19T17:08:46Z',
		patient: 4,
		provider: 2,
	},
	{
		details: {
			status: 'scheduled',
			summary:
				'dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
		},
		type: 'medication management',
		status: 'finalized',
		start: '2022-11-09T17:11:32Z',
		end: '2022-11-09T18:11:32Z',
		patient: 5,
		provider: 3,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		},
		type: 'urgent',
		status: 'finalized',
		start: '2022-02-02T11:57:05Z',
		end: '2022-02-02T12:57:05Z',
		patient: 2,
		provider: 3,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
		},
		type: 'follow up',
		status: 'in examination room',
		start: '2022-07-22T01:55:07Z',
		end: '2022-07-22T02:55:07Z',
		patient: 3,
		provider: 2,
	},
	{
		details: {
			status: 'encounter complete',
			summary:
				'vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
		type: 'first appointment',
		status: 'in waiting room',
		start: '2022-01-27T03:44:57Z',
		end: '2022-01-27T04:44:57Z',
		patient: 3,
		provider: 2,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
		},
		type: 'urgent',
		status: 'in progress',
		start: '2023-01-16T19:46:09Z',
		end: '2023-01-16T20:46:09Z',
		patient: 1,
		provider: 2,
	},
	{
		details: {
			status: 'finalized',
			summary:
				'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
		},
		type: 'medication management',
		status: 'in waiting room',
		start: '2023-01-28T02:16:44Z',
		end: '2023-01-28T03:16:44Z',
		patient: 4,
		provider: 2,
	},
	{
		details: {
			status: 'in examination room',
			summary:
				'dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
		},
		type: 'follow up',
		status: 'in progress',
		start: '2022-11-28T04:38:46Z',
		end: '2022-11-28T05:38:46Z',
		patient: 3,
		provider: 3,
	},
	{
		details: {
			status: 'finalized',
			summary:
				'ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		},
		type: 'medication management',
		status: 'in examination room',
		start: '2022-07-16T06:15:12Z',
		end: '2022-07-16T07:15:12Z',
		patient: 6,
		provider: 3,
	},
	{
		details: {
			status: 'in progress',
			summary:
				'pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
		},
		type: 'urgent',
		status: 'in waiting room',
		start: '2021-09-14T08:26:39Z',
		end: '2021-09-14T09:26:39Z',
		patient: 5,
		provider: 2,
	},
	{
		details: {
			status: 'in waiting room',
			summary:
				'dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus',
			followup: 'error: bad value for range',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes:
				'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
		},
		type: 'first appointment',
		status: 'in examination room',
		start: '2022-03-02T06:42:17Z',
		end: '2022-03-02T07:42:17Z',
		patient: 1,
		provider: 2,
	},
]

export default mockappointments
