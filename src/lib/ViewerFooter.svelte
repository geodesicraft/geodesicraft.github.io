<script>
	import Toggle from '$lib/Toggle.svelte';
	import { autoRotate } from '$lib/stores.js';
</script>

<div>
	<Toggle bind:checked={$autoRotate}>Rotate</Toggle>
</div>

<style>
	div {
		position: absolute;
		bottom: 1.5rem;
		right: 1rem;
	}
</style>
