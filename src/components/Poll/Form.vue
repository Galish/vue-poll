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

		<select-custom
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
					className="add-answer"
					:newItem="blankAnswer()"
				>
					+ Add Answer
				</add-button>
			</template>
		</question-form>

		<add-button
			v-model="questions"
			className="add-question"
			:newItem="blankQuestion()"
		>
			+ Add question
		</add-button>

		<div class="submit">
			<custom-button
				size="big"
				color="blue"
				@click="handleSubmit"
			>
				Submit
			</custom-button>
		</div>
	</div>
</template>

<script>
import AddButton from '@/components/Poll/AddButton'
import CustomButton from '@/components/Form/Button'
import DeleteButton from '@/components/Poll/DeleteButton'
import InputText from '@/components/Form/InputText'
import QuestionForm from '@/components/Poll/QuestionForm'
import SelectCustom from '@/components/Form/SelectCustom'
import SwapButtons from '@/components/Poll/SwapButtons'
import { blankAnswer, blankQuestion } from '@/helpers'

export default {
	name: 'PollForm',
	components: {
		AddButton,
		CustomButton,
		DeleteButton,
		InputText,
		QuestionForm,
		SelectCustom,
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
	},
	methods: {
		handleSubmit() {
			console.log('Submit:', { ...this.$data });
			console.log('questions:', this.questions);
		}
	}
}
</script>

<style>
.add-question.add-button {
	border: 1px solid #ebebeb;
	margin-top: 10px;
	padding-top: 20px;
	padding-bottom: 20px;
}
.add-answer.add-button {
	padding-bottom: 0;
}
.caption {
	font-size: 2em;
	text-align: center;
}
.caption--secondary {
	font-size: 1.5em;
	padding-top: 20px;
}
.submit {
	text-align: center;
	margin-top: 20px;
}
</style>
