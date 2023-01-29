<script>
	import ViewerHeader from '$lib/ViewerHeader.svelte';
	import ViewerFooter from '$lib/ViewerFooter.svelte';
</script>

<div class="clickthroughable">
	<ViewerHeader />
	<ViewerFooter />
</div>

<style>
	div {
		display: grid;
		height: 100%;
		align-content: space-between;
	}
</style>
