<template>
	<input-wrapper
		className="ui checkbox"
		:class="className"
		:description="description"
		:label="label"
	>
		<input
			v-model="inputVal"
			type="checkbox"
			class="input"
			:placeholder="placeholder"
		>
		<label>
			<slot />
		</label>
	</input-wrapper>
</template>

<script>
import InputWrapper from './InputWrapper'

export default {
	name: 'Checkbox',
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
			type: Boolean,
			default: false
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
.checkbox {
	/* position: relative; */
	padding-top: 0;
	padding-bottom: 0;
}
/* .input {
	position: absolute;
	left: 0;
	top: 0;
} */
.checkbox:not(:first-of-type) {
	margin-top: 10px;
}
</style>
