<script>
	import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
	import { Mesh } from '@threlte/core';
	import { DoubleSide, MeshLambertMaterial, Vector3 } from 'three';
	import { faces, vertices } from '$lib/stores.js';

	const points = $vertices.map((vertex) => new Vector3(...vertex));

	const geometry = new ConvexGeometry(points);

	const material = new MeshLambertMaterial({
		color: 0x333333,
		opacity: 0.5,
		transparent: true,
		side: DoubleSide
	});

	$: console.log('faces:', $faces);
</script>

<Mesh {geometry} {material} />
