<template>
	<div
		class="checkbox"
		:class="className"
	>
		<input
			v-model="inputVal"
			type="checkbox"
			class="input"
			:placeholder="placeholder"
		>

		<slot />

		<label
			v-if="label"
			class="label"
		>
			{{ label }}
		</label>

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
	name: 'Checkbox',
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
	position: relative;
	padding-left: 30px;
}
.input {
	position: absolute;
	left: 0;
	top: 0;
}
.checkbox:not(:first-of-type) {
	margin-top: 10px;
}

/* .input-text {
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
	border: 1px solid #999;
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
} */
</style>
