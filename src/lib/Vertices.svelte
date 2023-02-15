<script>
	import { domeSettings, domeData } from '$lib/stores.js';
	import { MeshStandardMaterial, SphereGeometry, Vector3 } from 'three';
	import { InstancedMesh } from '@threlte/core';
	import { Instance } from '@threlte/core';

	const geometry = new SphereGeometry(0.5);
	const material = new MeshStandardMaterial();
</script>

<InstancedMesh {geometry} {material}>
	{#each $domeData.vertices as vertex}
		<Instance
			position={new Vector3(...vertex.getCartesian())}
			scale={$domeSettings.vertexSize}
			color={0x444444}
		/>
	{/each}
</InstancedMesh>
