<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	const points = [];
	points.push(new THREE.Vector3(-1, 0, 0));
	points.push(new THREE.Vector3(0, 1, 0));
	points.push(new THREE.Vector3(1, 0, 0));
</script>

<div>
	<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
		<SC.Mesh geometry={new THREE.BufferGeometry().setFromPoints(points)} />
		<SC.PerspectiveCamera position={[-2, 2, -2]} />
		<SC.OrbitControls enableZoom={false} />
	</SC.Canvas>
</div>

<style>
	div {
		background: grey;
		position: relative;
	}
</style>
