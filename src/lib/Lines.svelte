<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';
	import { lines } from '$lib/stores.js';

	$: console.log('lines:', $lines);
</script>

{#each $lines as line}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: 0.05,
			color: 0x555555
		})}
		points={line}
	/>
{/each}
