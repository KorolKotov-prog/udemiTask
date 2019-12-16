<template>
	<div class="row">
		<div class="col-xs-12 col-sm-6">
			<ul class="list-group">
				<li
						class="list-group-item"
						v-for="index in 5"
						:key="index">
					Server #{{ index }} {{ status }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "serverItems",
		data() {
			return {
				status: 'error'
			}
		}
	}
</script>

<style scoped>
	.list-group {
		border: 1px;
	}
</style>
