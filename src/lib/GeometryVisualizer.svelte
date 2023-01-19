<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<div>
	<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
		<SC.Mesh geometry={new THREE.BoxGeometry()} />
		<SC.PerspectiveCamera position={[1, 1, 3]} />
		<SC.OrbitControls enableZoom={false} />
	</SC.Canvas>
</div>

<style>
	div {
		height: 50vh;
		width: 100vw;
		position: fixed;
	}
</style>
