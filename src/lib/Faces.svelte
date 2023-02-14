<script>
	import Face from '$lib/Face.svelte';
	import { domeData } from '$lib/stores.js';
</script>

{#each $domeData.facesReference as faceReference}
	<Face
		faceCoordinates={[
			$domeData.verticesCoordinates[faceReference[0]],
			$domeData.verticesCoordinates[faceReference[1]],
			$domeData.verticesCoordinates[faceReference[2]]
		]}
	/>
{/each}
