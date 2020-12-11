import { v4 as uuidv4 } from 'uuid'

export const blankAnswer = (props = {}) => ({
	...props,
	id: uuidv4(),
	text: '',
	is_correct: false
})

export const blankQuestion = (props = {}) => ({
	...props,
	id: uuidv4(),
	text: '',
	answers: [
		blankAnswer()
	]
})
