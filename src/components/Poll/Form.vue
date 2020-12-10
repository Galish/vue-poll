<template>
	<div class="poll-form">
		<div class="caption">
			Form title
		</div>

		<input-text
			v-model="name"
			label="Name"
			description="Some description text"
		/>

		<input-text
			v-model="description"
			label="Description"
			multiline
		/>
	</div>
</template>

<script>
import InputText from '@/components/Form/InputText'

export default {
	name: 'PollForm',
	components: {
		InputText
	},
	props: {
		data: {
			type: Object,
			default() {
				return {}
			}
		}
		// id: {
		// 	type: String,
		// 	default: ''
		// },
		// name: {
		// 	type: String,
		// 	default: ''
		// },
		// description: {
		// 	type: String,
		// 	default: ''
		// }
	},
	data() {
		return {
			name: this.data.name,
			description: this.data.description
		}
	},
	methods: {
		onInput(val) {
			console.log('???', val);
		}
	}
}
</script>

<style>
.poll-form {

}

.caption {
	font-size: 2em;
	text-align: center;
}
</style>
