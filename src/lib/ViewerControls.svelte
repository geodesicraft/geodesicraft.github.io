<script>
	import Toggle from '$lib/Toggle.svelte';
	import { viewerSettings } from '$lib/stores.js';
</script>

<div class="clickthroughable">
	<Toggle>Dark Mode</Toggle>
	<Toggle bind:checked={$viewerSettings.autoRotate}>Rotate</Toggle>
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		padding: 1rem;
	}
</style>
