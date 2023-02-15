<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';
	import { domeSettings, domeData } from '$lib/stores.js';
</script>

{#each $domeData.edges as edge}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: $domeSettings.edgeThickness,
			color: 0x555555
		})}
		points={edge.getVertices().map((vertex) => vertex.getCartesian())}
	/>
{/each}
