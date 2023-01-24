<script>
	import Face from '$lib/Face.svelte';
	import { faces } from '$lib/stores.js';
</script>

{#each $faces as face}
	<Face {face} />
{/each}
