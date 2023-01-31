<script>
	import Toggle from '$lib/Toggle.svelte';
	import { autoRotate } from '$lib/stores.js';
</script>

<div class="clickthroughable">
	<Toggle>Dark Mode</Toggle>
	<Toggle bind:checked={$autoRotate}>Rotate</Toggle>
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		padding: 1rem;
	}
</style>
