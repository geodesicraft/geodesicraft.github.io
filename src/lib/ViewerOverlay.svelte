<script>
	import ViewerHeader from '$lib/ViewerHeader.svelte';
	import ViewerControls from '$lib/ViewerControls.svelte';
</script>

<div class="clickthroughable">
	<ViewerHeader />
	<ViewerControls />
</div>

<style>
	div {
		display: grid;
		height: 100%;
		align-content: space-between;
	}
</style>
