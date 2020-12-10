<template>
	<BasicLayout>
		<poll-form
			v-if="data"
			:data="data"
		/>
	</BasicLayout>
</template>

<script>
import BasicLayout from '@/components/Layout/Basic.vue'
import PollForm from '@/components/Poll/Form'
import { pollList as data } from '@/dummy-data.js'

export default {
	name: 'EditView',
	components: {
		BasicLayout,
		PollForm
	},
	data() {
		return {
			data: null
		}
	},
	created() {
		this.data = data.find(({ id }) => id === this.$route.params.id)
	},
}
</script>
