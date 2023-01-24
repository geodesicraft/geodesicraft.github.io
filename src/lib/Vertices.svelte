<script>
	import { vertices } from '$lib/stores.js';
	import { MeshStandardMaterial, SphereGeometry } from 'three';
	import { InstancedMesh } from '@threlte/core';
	import { Instance } from '@threlte/core';
	import { getRandomColor } from '$lib/getRandomColor.js';

	const geometry = new SphereGeometry(0.5);
	const material = new MeshStandardMaterial();

	$: console.log('vertices:', $vertices);
</script>

<InstancedMesh {geometry} {material}>
	{#each $vertices as vertex}
		<Instance
			position={{ x: vertex[0], y: vertex[1], z: vertex[2] }}
			scale={0.15}
			color={getRandomColor()}
		/>
	{/each}
</InstancedMesh>
