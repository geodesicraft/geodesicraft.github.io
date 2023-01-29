<script>
	import DomeViewer from '$lib/DomeViewer.svelte';
	import ViewerOverlay from '$lib/ViewerOverlay.svelte';
</script>

<div class="parent">
	<div class="child"><DomeViewer /></div>
	<div class="child"><ViewerOverlay /></div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: 1fr;
	}

	.child {
		grid-row-start: 1;
		grid-column-start: 1;
		overflow: hidden;
		background: transparent;
		pointer-events: none;
	}
</style>
