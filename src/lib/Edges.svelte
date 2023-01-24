<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';
	import { edges } from '$lib/stores.js';

	$: console.log('edges:', $edges);
</script>

{#each $edges as edge}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: 0.05,
			color: 0x555555
		})}
		points={edge}
	/>
{/each}
