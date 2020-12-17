<template>
	<input-wrapper
		class="input-text"
		:class="className"
		:description="description"
		:label="label"
	>
		<div
			v-if="multiline"
			class="ui form"
			data-children-count="1"
		>
			<textarea
				v-if="multiline"
				v-model="inputVal"
				rows="3"
				spellcheck="false"
				:placeholder="placeholder"
			/>
		</div>

		<div
			v-else
			class="ui fluid input"
			data-children-count="1"
		>
			<input
				v-model="inputVal"
				type="text"
				:placeholder="placeholder"
			>
		</div>
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

<style>
textarea {
	font-family: Lato, 'Helvetica Neue', Arial,Helvetica, sans-serif;
}
</style>
