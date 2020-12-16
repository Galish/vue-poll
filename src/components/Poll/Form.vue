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

		<select-input
			v-model="category"
			label="Category"
			:options="categoryOptions"
		/>

		<div class="caption caption--secondary">
			Questions list:
		</div>

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

				<delete-button
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
import DeleteButton from '@/components/Poll/DeleteButton'
import InputText from '@/components/Form/InputText'
import QuestionForm from '@/components/Poll/QuestionForm'
import SelectInput from '@/components/Form/Select'
import SwapButtons from '@/components/Poll/SwapButtons'
import { blankAnswer, blankQuestion } from '@/helpers'

export default {
	name: 'PollForm',
	components: {
		AddButton,
		DeleteButton,
		InputText,
		QuestionForm,
		SelectInput,
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
			category: this.data.category,
			description: this.data.description,
			name: this.data.name,
			questions: this.data.questions
		}
	},
	computed: {
		categoryOptions() {
			return this.data.category_options.map(value => ({ value, text: value }))
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
.caption--secondary {
	font-size: 1.5em;
	padding-top: 20px;
}
</style>
