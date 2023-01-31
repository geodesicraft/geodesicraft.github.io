<script>
	import DomeViewer from '$lib/DomeViewer.svelte';
	import ViewerOverlay from '$lib/ViewerOverlay.svelte';
</script>

<div class="parent clickthroughable">
	<div class="child"><DomeViewer /></div>
	<div class="child clickthroughable"><ViewerOverlay /></div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: 1fr;
		overflow: hidden;
	}

	.child {
		grid-row-start: 1;
		grid-column-start: 1;
		overflow: hidden;
	}
</style>
