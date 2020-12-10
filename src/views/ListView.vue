<template>
	<BasicLayout>
		<PollList
			:list="data"
		/>
	</BasicLayout>
</template>

<script>
import BasicLayout from '@/components/Layout/Basic.vue'
import PollList from '@/components/Poll/List.vue'
import { pollList as data } from '@/dummy-data.js'

export default {
	name: 'ListView',
	components: {
		BasicLayout,
		PollList
	},
	data() {
		return {
			data
		}
	},
}
</script>
