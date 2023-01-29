<script>
	import Toggle from '$lib/Toggle.svelte';
	import { autoRotate } from '$lib/stores.js';
</script>

<div class="clickthroughable">
	<Toggle bind:checked={$autoRotate}>Rotate</Toggle>
	<Toggle>Dark Mode</Toggle>
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		padding: 1rem;
	}
</style>
