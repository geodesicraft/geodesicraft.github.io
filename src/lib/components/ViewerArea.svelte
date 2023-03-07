<script lang="ts">
	import DomeViewer from '$lib/components/DomeViewer.svelte';
	import ViewerOverlay from '$lib/components/ViewerOverlay.svelte';
</script>

<div class="clickthroughable grid grid-cols-1 overflow-hidden">
	<div class="overflow-hidden row-start-1 col-start-1"><DomeViewer /></div>
	<div class="clickthroughable overflow-hidden row-start-1 col-start-1"><ViewerOverlay /></div>
</div>
