<script>
	import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
	import { Mesh } from '@threlte/core';
	import { BufferAttribute, BufferGeometry, DoubleSide, MeshLambertMaterial, Vector3 } from 'three';
	import { faces, vertices } from '$lib/stores.js';

	const verticesMatrix = new Float32Array([0, 0, 0, 1, 1, 1, 1, -1, 1]);

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
