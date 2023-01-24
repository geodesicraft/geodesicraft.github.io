<script>
	import { Mesh } from '@threlte/core';
	import { BufferAttribute, BufferGeometry, DoubleSide, MeshLambertMaterial, Vector3 } from 'three';
	import { faces } from '$lib/stores.js';

	const verticesMatrix = new Float32Array([...$faces[0][0], ...$faces[0][1], ...$faces[0][2]]);

	const geometry = new BufferGeometry();

	geometry.setAttribute('position', new BufferAttribute(verticesMatrix, 3));

	const material = new MeshLambertMaterial({
		color: 0x333333,
		opacity: 0.5,
		transparent: true,
		side: DoubleSide
	});

	$: console.log('faces:', $faces);
</script>

<Mesh {geometry} {material} />
