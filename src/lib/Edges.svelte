<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';
	import { edges, edgeThickness } from '$lib/stores.js';
</script>

{#each $edges as edge}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: $edgeThickness,
			color: 0x555555
		})}
		points={edge}
	/>
{/each}
