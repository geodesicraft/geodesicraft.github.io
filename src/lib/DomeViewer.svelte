<script>
	import { AmbientLight, Canvas, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import Edges from '$lib/Edges.svelte';
	import Vertices from '$lib/Vertices.svelte';
	import Faces from '$lib/Faces.svelte';
	import { viewerSettings } from '$lib/stores.js';
	import AxisOverlay from '$lib/AxisOverlay.svelte';
</script>

<div class="h-full cursor-grab">
	<Canvas>
		<PerspectiveCamera position={{ y: 3, x: 3, z: 3 }}>
			<OrbitControls autoRotate={$viewerSettings.autoRotate} enableZoom={true} />
		</PerspectiveCamera>

		<AmbientLight color={0xffffff} intensity={1.0} />

		<Edges />
		<Vertices />
		<Faces />

		<AxisOverlay visible={$viewerSettings.axisOverlay} />
	</Canvas>
</div>
