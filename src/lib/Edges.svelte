<script>
	import { domeSettings, domeData } from '$lib/stores.js';
	import Edge from '$lib/Edge.svelte';
	import getShapeVerticesAsCartesian from '$lib/getShapeVerticesAsCartesian.js';
</script>

{#each $domeData.edges as edge}
	<Edge
		edgeThickness={$domeSettings.edgeThickness}
		verticesCartesian={getShapeVerticesAsCartesian(edge)}
	/>
{/each}
