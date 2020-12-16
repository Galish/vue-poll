<template>
	<input-wrapper
		class="select"
		:class="className"
		:description="description"
		:label="label"
	>
		<select
			v-model="inputVal"
			class="ui fluid dropdown"
		>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.text }}
			</option>
		</select>
	</input-wrapper>
</template>

<script>
import InputWrapper from './InputWrapper'

export default {
	name: 'Select',
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
		options: {
			type: Array,
			default() {
				return []
			}
		}
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
.select {}
</style>
