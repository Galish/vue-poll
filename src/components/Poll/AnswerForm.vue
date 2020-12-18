<template>
	<div
		class="answer-form"
		:class="{'answer-form--with-actions': hasSlot}"
	>
		<checkbox
			v-if="!single"
			v-model="answer.is_correct"
			class="answer-container"
		>
			<input-text
				v-model="answer.text"
				className="answer-text"
				multiline
			/>
		</checkbox>

		<input-text
			v-else
			v-model="answer.text"
			className="answer-text"
			multiline
		/>

		<div
			v-if="hasSlot"
			class="actions"
		>
			<slot />
		</div>
	</div>
</template>

<script>
import Checkbox from '@/components/Form/Checkbox'
import InputText from '@/components/Form/InputText'

export default {
	name: 'AnswerForm',
	components: {
		Checkbox,
		InputText
	},
	props: {
		modelValue: {
			type: Object,
			default() {
				return {}
			}
		},
		single: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		answer: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.updateModelValue(value)
			}
		},
		hasSlot() {
			return !!this.$slots.default
		}
	},
	mounted() {
		this.selectSingle()
	},
	updated() {
		this.selectSingle()
	},
	methods: {
		selectSingle() {
			if (this.single && !this.modelValue.is_correct) {
				this.updateModelValue({ is_correct: true })
			}
		},

		updateModelValue(value) {
			this.$emit('update:modelValue', value)
		}
	}
}
</script>

<style scoped>
.answer-form {
	padding: 10px 0;
}
.answer-form--with-actions {
	position: relative;
}
.answer-text.input-text {
	padding-top: 0;
	padding-bottom: 0;
}
.answer-container {
	display: block;
}
.actions {
	position: absolute;
	right: -30px;
	top: 10px;
}
</style>
