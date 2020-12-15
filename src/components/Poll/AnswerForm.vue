<template>
	<div
		class="answer-form"
		:class="{'answer-form--with-actions': hasSlot}"
	>
		<checkbox
			v-model="answer.is_correct"
			class="answer-container"
		>
			<input-text
				v-model="answer.text"
				className="answer-text"
				multiline
			/>
		</checkbox>

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
	},
	computed: {
		answer: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		},
		hasSlot() {
			return !!this.$slots.default
		}
	}
}
</script>

<style>
.answer-form {
	padding: 10px 0;
}
.answer-form--with-actions {
	padding-right: 50px;
	position: relative;
}
.answer-text.input-text {
	padding-top: 0;
	padding-bottom: 0;
}
.actions {
	position: absolute;
	right: 0;
	top: 10px;
}
</style>
