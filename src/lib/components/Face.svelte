<script lang="ts">
	import { Mesh } from '@threlte/core';
	import { BufferAttribute, BufferGeometry, DoubleSide, MeshLambertMaterial } from 'three';

	export let verticesCartesian;

	const geometry = new BufferGeometry();
	const verticesMatrix = new Float32Array(Array.prototype.concat(...verticesCartesian));
	geometry.setAttribute('position', new BufferAttribute(verticesMatrix, 3));

	const material = new MeshLambertMaterial({
		color: 0x333333,
		opacity: 0.5,
		transparent: true,
		side: DoubleSide
	});
</script>

<Mesh {geometry} {material} />
