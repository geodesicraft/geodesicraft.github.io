<script>
	import ViewerHeader from '$lib/ViewerHeader.svelte';
	import ViewerFooter from '$lib/ViewerFooter.svelte';
</script>

<div>
	<ViewerHeader />
	<ViewerFooter />
</div>

<style>
	div {
		background: transparent;
		pointer-events: none;

		display: grid;
		height: 100%;
		align-content: space-between;
	}
</style>
