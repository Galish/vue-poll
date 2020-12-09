<template>
	<div class="poll__item">
		<div class="poll__name">
			{{ name }}
		</div>

		<div class="poll__description">
			{{ description }}
		</div>

		<Button
			className="poll__button"
			:linkTo="`/edit/${id}`"
		>
			Edit
		</Button>
	</div>
</template>

<script>
import Button from '@/components/Form/Button'

export default {
	name: 'PollItem',
	components: {
		Button
	},
	props: {
		id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
}
</script>

<style>
.poll__item {
	padding: 20px;
	border: 1px solid #ebebeb;
	margin-top: 20px;
}
.poll__name {
	font-weight: bold;
}
.poll__description {
	margin-top: 5px;
}
.poll__button {
	margin-top: 10px;
}
</style>
