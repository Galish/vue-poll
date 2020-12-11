export const pollList = [
	{
		id: '12345',
		name: 'Test name',
		description: 'some text...',
		klass: 5,
		lesson_options: [
			'русский язык',
			'математика',
			'окружающий мир'
		],
		lesson: 'математика',
		questions: [
			{
				id: 1111111,
				text: 'Question text 1',
				answers: [
					{
						text: 'some text 1',
						is_correct: false
					},
					{
						text: 'some text 2',
						is_correct: true
					}
				]
			},
			{
				id: 222222,
				text: 'Question text 2',
				answers: [
					{
						text: 'some text 1',
						is_correct: false
					},
					{
						text: 'some text 2',
						is_correct: true
					}
				]
			}
		]
	}
]
