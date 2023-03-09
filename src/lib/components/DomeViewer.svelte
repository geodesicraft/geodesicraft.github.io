<script lang="ts">
	import { AmbientLight, Canvas, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import Edges from '$lib/components/Edges.svelte';
	import Vertices from '$lib/components/Vertices.svelte';
	import Faces from '$lib/components/Faces.svelte';
	import AxisOverlay from '$lib/components/AxisOverlay.svelte';
	import { viewerSettings } from '$lib/scripts/stores';
</script>

<div class="h-full cursor-grab">
	<Canvas>
		<PerspectiveCamera position={{ y: 4, x: 4, z: 4 }} lookAt={{ x: 0, y: 0, z: 0 }}>
			<OrbitControls autoRotate={$viewerSettings.autoRotate} enableZoom={true} />
		</PerspectiveCamera>

		<AmbientLight color={0xffffff} intensity={1.0} />

		<Edges />
		<Vertices />
		<Faces />

		<AxisOverlay visible={$viewerSettings.axisOverlay} />
	</Canvas>
</div>
