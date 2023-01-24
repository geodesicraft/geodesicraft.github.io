<script>
	import { Canvas } from '@threlte/core';
	import Lines from '$lib/Lines.svelte';
	import Vertices from '$lib/Vertices.svelte';
	import Faces from '$lib/Faces.svelte';
</script>

<div>
	<Canvas>
		<Lines />
		<Vertices />
		<Faces />
	</Canvas>
</div>

<style>
	div {
		overflow: hidden;
	}
</style>
