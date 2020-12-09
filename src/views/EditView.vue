<template>
	<div>
		{{ this.$route.params.id }}
	</div>
</template>

<script>
import { pollList as data } from '@/dummy-data.js'

export default {
	name: 'ListView',
	components: {
		// PollList
	},
	data() {
		return {
			data
		}
	},
}
</script>
