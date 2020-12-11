<template>
	<div class="poll-form">
		<div class="caption">
			Form title
		</div>

		<input-text
			v-model="name"
			label="Name"
			description="Some description text"
		/>

		<input-text
			v-model="description"
			label="Description"
			multiline
		/>

		Questions list:

		<question-form
			v-for="(question, index) in questions"
			:key="question.id"
			v-model="questions[index]"
		>
			<template #header>
				<swap-buttons
					v-model="questions"
					:index="index"
				/>
			</template>


			<template #footer>
				<add-button
					v-model="question.answers"
					:newItem="blankAnswer()"
				>
					+ Add Answer
				</add-button>
			</template>
		</question-form>

		<add-button
			v-model="questions"
			:newItem="blankQuestion()"
		>
			+ Add question
		</add-button>
	</div>
</template>

<script>
import AddButton from '@/components/Poll/AddButton'
import InputText from '@/components/Form/InputText'
import QuestionForm from '@/components/Poll/QuestionForm'
import SwapButtons from '@/components/Poll/SwapButtons'
import { blankAnswer, blankQuestion } from '@/helpers'

export default {
	name: 'PollForm',
	components: {
		AddButton,
		InputText,
		QuestionForm,
		SwapButtons
	},
	props: {
		data: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			name: this.data.name,
			description: this.data.description,
			questions: this.data.questions
		}
	},
	created() {
		this.blankAnswer = blankAnswer
		this.blankQuestion = blankQuestion
	}
}
</script>

<style>
.poll-form {}

.caption {
	font-size: 2em;
	text-align: center;
}
</style>
