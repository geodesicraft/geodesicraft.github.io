<script>
	import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
	import { Mesh } from '@threlte/core';
	import { MeshLambertMaterial, Vector3 } from 'three';
	import { faces } from '$lib/stores.js';
	import { getRandomColor } from '$lib/getRandomColor.js';

	const points = [
		new Vector3(0, 0, 0),
		new Vector3(1, 1, 1),
		new Vector3(1, -1, 1),
		new Vector3(-1, -1, 1)
	];

	const geometry = new ConvexGeometry(points);

	const material = new MeshLambertMaterial({
		color: 0x333333,
		opacity: 0.5,
		transparent: true
	});

	$: console.log('faces:', $faces);
</script>

<Mesh position={new Vector3(0, 0, 0)} {geometry} {material} />
