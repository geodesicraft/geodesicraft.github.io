<script>
	import { Canvas, DirectionalLight, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import Edges from '$lib/Edges.svelte';
	import Vertices from '$lib/Vertices.svelte';
	import Faces from '$lib/Faces.svelte';
	import ViewerControls from '$lib/ViewerControls.svelte';
</script>

<div>
	<Canvas>
		<PerspectiveCamera position={{ y: 3, x: 3, z: 3 }}>
			<OrbitControls autoRotate enableZoom={true} />
		</PerspectiveCamera>

		<DirectionalLight position={{ y: 10 }} />

		<Edges />
		<Vertices />
		<Faces />
	</Canvas>
	<ViewerControls />
</div>

<style>
	div {
		overflow: hidden;
	}
</style>
