<template>
	<div
		class="input-text"
		:class="className"
	>
		<label
			v-if="label"
			class="label"
		>
			{{ label }}
		</label>

		<textarea
			v-if="multiline"
			v-model="inputVal"
			type="text"
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

		<div
			v-if="description"
			class="text"
		>
			{{ description }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputText',
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
.input-text {
	padding: 10px 0;
}
.label {
	font-weight: bold;
	display: block;
	padding-bottom: 5px;
}
.input {
	width: 100%;
	font-size: 1em;
	display: block;
	border: 1px solid #666;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 5px;
}
.input.textarea {
	height: 100px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
.text{
	font-size: 0.75em;
	color: #999;
	display: block;
	padding-top: 5px;
}
</style>
