<script lang="ts">
	import { domeSettings, domeData } from '$lib/scripts/stores';
	import Edge from '$lib/components/Edge.svelte';
	import getShapeVerticesAsCartesian from '$lib/scripts/getShapeVerticesAsCartesian';
</script>

{#each $domeData.edges as edge}
	<Edge
		edgeThickness={$domeSettings.edgeThickness}
		verticesCartesian={getShapeVerticesAsCartesian(edge)}
	/>
{/each}
