<script>
	import DomeViewer from '$lib/DomeViewer.svelte';
	import ViewerOverlay from '$lib/ViewerOverlay.svelte';
</script>

<div class="clickthroughable grid grid-cols-1 overflow-hidden">
	<div class="overflow-hidden row-start-1 col-start-1"><DomeViewer /></div>
	<div class="clickthroughable overflow-hidden row-start-1 col-start-1"><ViewerOverlay /></div>
</div>
