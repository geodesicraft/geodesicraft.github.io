<script>
	import DomeControls from '$lib/DomeControls.svelte';
</script>

<div>
	<DomeControls />
</div>

<style>
	div {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		min-height: 0;
		background: #d3d3d3;
	}
</style>
