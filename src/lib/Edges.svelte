<script>
	import { domeSettings, domeData } from '$lib/stores.js';
	import Edge from '$lib/Edge.svelte';
</script>

{#each $domeData.edges as edge}
	<Edge
		edgeThickness={$domeSettings.edgeThickness}
		verticesCartesian={edge.getVertices().map((vertex) => vertex.getCartesian())}
	/>
{/each}
