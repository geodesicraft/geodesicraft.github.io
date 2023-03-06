<script lang="ts">
	import Face from '$lib/components/Face.svelte';
	import getShapeVerticesAsCartesian from '$lib/scripts/getShapeVerticesAsCartesian';
	import { domeData } from '$lib/scripts/stores';
</script>

{#each $domeData.faces as face}
	<Face verticesCartesian={getShapeVerticesAsCartesian(face)} />
{/each}
