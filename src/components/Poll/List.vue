<template>
	<div class="poll__list">
		Lists

		<PollItem
			v-for="item in list"
			:key="item.id"
			v-bind="item"
		/>
	</div>
</template>

<script>
import PollItem from './Item'

export default {
	name: 'PollList',
	components: {
		PollItem
	},
	props: {
		list: {
			type: Array,
			default() {
				return []
			}
		}
	},
}
</script>

<style scoped>
.poll__list {

}
</style>
