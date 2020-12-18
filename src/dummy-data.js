export const pollList = [
	{
		id: '12345',
		name: 'Test name',
		description: 'Description text here...',
		klass: 5,
		category_options: [
			'Category 1',
			'Category 2',
			'Category 3'
		],
		category: 'Category 2',
		questions: [
			{
				id: 1111111,
				text: 'Question text number 1',
				answers: [
					{
						text: 'Answer text 1',
						is_correct: false
					},
					{
						text: 'Answer text 2',
						is_correct: true
					}
				]
			},
			{
				id: 222222,
				text: 'Question text number 2',
				answers: [
					{
						text: 'Answer text 1',
						is_correct: false
					},
					{
						text: 'Answer text 2',
						is_correct: true
					},
					{
						text: 'Answer text 3',
						is_correct: false
					}
				]
			},
			{
				id: 333333,
				text: 'Question text number 3',
				answers: [
					{
						text: 'Answer text 1',
						is_correct: false
					}
				]
			}
		]
	}
]
