<template>
	<input-wrapper
		class="input-text"
		:class="className"
		:description="description"
		:label="label"
	>
		<textarea
			v-if="multiline"
			v-model="inputVal"
			class="input textarea"
			:placeholder="placeholder"
		/>

		<input
			v-else
			v-model="inputVal"
			type="text"
			class="input"
			:placeholder="placeholder"
		>
	</input-wrapper>
</template>

<script>
import InputWrapper from './InputWrapper'

export default {
	name: 'InputText',
	components: {
		InputWrapper
	},
	props: {
		className: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		modelValue: {
			type: String,
			default: ''
		},
		multiline: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
	},
	computed: {
		inputVal: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		}
	}
}
</script>

<style scoped>
.input {
	width: 100%;
	font-size: 1em;
	display: block;
	border: 1px solid #999;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 5px;
}
.input.textarea {
	height: 100px;
}
</style>
