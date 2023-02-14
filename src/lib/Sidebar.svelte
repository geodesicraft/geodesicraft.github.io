<script>
	import ViewerControls from '$lib/ViewerControls.svelte';
	import DomeControlsSidebar from '$lib/DomeControlsSidebar.svelte';
</script>

<div>
	<ViewerControls />
	<DomeControlsSidebar />
</div>

<style>
	div {
		height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr;
		overflow: hidden;
	}
</style>
