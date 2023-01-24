<script>
	import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
	import { Mesh } from '@threlte/core';
	import { BackSide, FrontSide, MeshLambertMaterial, Vector3 } from 'three';
	import { faces } from '$lib/stores.js';

	const points = [
		new Vector3(0, 0, 0),
		new Vector3(1, 1, 1),
		new Vector3(1, -1, 1),
		new Vector3(-1, -1, 1)
	];

	const geometry = new ConvexGeometry(points);

	const frontMaterial = new MeshLambertMaterial({
		color: 0x333333,
		opacity: 0.5,
		transparent: true
	});

	const backMaterial = frontMaterial.clone();

	frontMaterial.side = FrontSide;
	backMaterial.side = BackSide;

	$: console.log('faces:', $faces);
</script>

<Mesh {geometry} material={frontMaterial} renderOrder="1" />
<Mesh {geometry} material={backMaterial} renderOrder="0" />
