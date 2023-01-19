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
		background: grey;
		position: relative;
	}
</style>
