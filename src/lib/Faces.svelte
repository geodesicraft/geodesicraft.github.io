<script>
	import Face from '$lib/Face.svelte';
	import { domeData } from '$lib/stores.js';
	import getShapeVerticesAsCartesian from '$lib/getShapeVerticesAsCartesian.js';
</script>

{#each $domeData.faces as face}
	<Face verticesCartesian={getShapeVerticesAsCartesian(face)} />
{/each}
