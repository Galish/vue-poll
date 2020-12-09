<template>
	<PollList
		:list="data"
	/>
</template>

<script>
import PollList from '@/components/Poll/List.vue'
import { pollList as data } from '@/dummy-data.js'

export default {
	name: 'ListView',
	components: {
		PollList
	},
	data() {
		return {
			data
		}
	},
}
</script>
