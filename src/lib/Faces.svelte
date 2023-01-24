<script>
	import Face from '$lib/Face.svelte';
	import { faces } from '$lib/stores.js';

	$: console.log('faces:', $faces);
</script>

{#each $faces as face}
	<Face {face} />
{/each}
