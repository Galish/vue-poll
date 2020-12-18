<template>
	<div
		class="question"
		:class="{'question--with-action': hasHeaderSlot}"
	>
		<div
			v-if="hasHeaderSlot"
			class="actions-container"
		>
			<slot name="header" />
		</div>

		<input-text
			v-model="question.text"
			label="Text"
		/>

		Answers:

		<answer-form
			v-for="(answer, index) in question.answers"
			:key="answer.id"
			v-model="question.answers[index]"
			:single="question.answers.length === 1"
		>
			<delete-button
				v-model="question.answers"
				:index="index"
			/>
		</answer-form>

		<div
			v-if="hasFooterSlot"
			class="button-container"
			:class="{'button-container--right-margin': hasHeaderSlot}"
		>
			<slot name="footer" />
		</div>
	</div>
</template>

<script>

import AnswerForm from '@/components/Poll/AnswerForm'
import DeleteButton from '@/components/Poll/DeleteButton'
import InputText from '@/components/Form/InputText'

export default {
	name: 'QuestionForm',
	components: {
		AnswerForm,
		DeleteButton,
		InputText
	},
	props: {
		modelValue: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		question: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value)
			}
		},
		hasHeaderSlot() {
			return !!this.$slots.header
		},
		hasFooterSlot() {
			return !!this.$slots.footer
		}
	}
}
</script>

<style scoped>
.question {
	border: 1px solid #ebebeb;
	margin-top: 10px;
	padding: 20px;
}
.question--with-action {
	padding-right: 40px;
	padding-top: 40px;
}
.actions-container {
	float: right;
	margin: -20px -30px 10px 20px;
}
.answer-container {
	margin-top: 10px;
}
.answer-text {
	padding-top: 0;
	padding-bottom: 0;
}
.button-container--right-margin {
	margin-right: -20px;
}
</style>
