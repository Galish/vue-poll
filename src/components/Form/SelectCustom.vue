<template>
	<input-wrapper
		class="select"
		:class="className"
		:description="description"
		:label="label"
	>
		<div
			class="ui fluid selection dropdown"
			:class="{'active visible': active}"
			@click="toggle"
		>
			<input
				type="hidden"
				:value="selected(modelValue).value"
			>
			<i class="dropdown icon" />

			<div
				v-if="placeholder && !modelValue"
				class="default text"
			>
				{{ placeholder }}
			</div>

			<div
				v-if="modelValue"
				class="text"
			>
				{{ selected(modelValue).text }}
			</div>

			<div
				class="menu transition"
				:class="{'visible': active}"
			>
				<div
					v-for="option in options"
					:key="option"
					:data-value="option.value"
					class="item"
					@click="select(option.value)"
				>
					{{ option.text }}
				</div>
			</div>
		</div>
	</input-wrapper>
</template>

<script>
import InputWrapper from './InputWrapper'

export default {
	name: 'SelectCustom',
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
		},
		placeholder: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			active: false
		}
	},
	methods: {
		selected(value) {
			return this.options.find(option => option.value === value) || {}
		},
		select(value) {
			this.$emit('update:modelValue', value)
		},
		toggle() {
			this.active = !this.active
		}
	}
}
</script>
