<script>
	import Face from '$lib/Face.svelte';
	import { domeData } from '$lib/stores.js';
</script>

{#each $domeData.faces as face}
	<Face faceCoordinates={face.getVertices().map((vertex) => vertex.getCartesian())} />
{/each}
