<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { DirectionalLight, Line2, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import { lines } from '$lib/stores.js';
	import { getRandomColor } from '$lib/getRandomColor.js';

	$: console.log('lines:', $lines);
</script>

<PerspectiveCamera position={{ y: 3, x: 3, z: 3 }}>
	<OrbitControls autoRotate enableZoom={true} />
</PerspectiveCamera>

<DirectionalLight position={{ y: 10 }} />

{#each $lines as line}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: 0.05,
			color: getRandomColor()
		})}
		points={line}
	/>
{/each}
