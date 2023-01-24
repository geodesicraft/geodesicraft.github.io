<script>
	import { vertices } from '$lib/stores.js';
	import { MeshStandardMaterial, SphereGeometry, Vector3 } from 'three';
	import { InstancedMesh } from '@threlte/core';
	import { Instance } from '@threlte/core';
	import { getRandomColor } from '$lib/getRandomColor.js';

	const geometry = new SphereGeometry(0.5);
	const material = new MeshStandardMaterial();

	$: console.log('vertices:', $vertices);
</script>

<InstancedMesh {geometry} {material}>
	{#each $vertices as vertex}
		<Instance position={new Vector3(...vertex)} scale={0.15} color={getRandomColor()} />
	{/each}
</InstancedMesh>
