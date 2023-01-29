<script>
	import Toggle from '$lib/Toggle.svelte';
	import { autoRotate } from '$lib/stores.js';
</script>

<div>
	<Toggle bind:checked={$autoRotate}>Rotate</Toggle>
</div>

<style>
	div {
		pointer-events: auto;
		display: flex;
	}
</style>
