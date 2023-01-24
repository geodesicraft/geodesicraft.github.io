<script>
	import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
	import { Mesh } from '@threlte/core';
	import { BackSide, FrontSide, MeshLambertMaterial, Vector3 } from 'three';
	import { faces, vertices } from '$lib/stores.js';

	const points = $vertices.map((vertex) => new Vector3(...vertex));

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
