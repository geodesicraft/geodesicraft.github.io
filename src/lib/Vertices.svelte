<script>
	import { domeSettings, domeData } from '$lib/stores.js';
	import { MeshStandardMaterial, SphereGeometry } from 'three';
	import { InstancedMesh } from '@threlte/core';
	import Vertex from '$lib/Vertex.svelte';

	const geometry = new SphereGeometry(0.5);
	const material = new MeshStandardMaterial();
</script>

<InstancedMesh {geometry} {material}>
	{#each $domeData.vertices as vertex}
		<Vertex vertexCartesian={vertex.getCartesian()} vertexSize={$domeSettings.vertexSize} />
	{/each}
</InstancedMesh>
