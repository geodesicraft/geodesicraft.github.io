<script>
	import Toggle from '$lib/Toggle.svelte';
	import { viewerSettings, viewerSettingsParameters } from '$lib/stores.js';
</script>

<div class="clickthroughable">
	<Toggle bind:checked={$viewerSettings.axesOverlay}
		>{viewerSettingsParameters.axesOverlay.name}</Toggle
	>
	<Toggle bind:checked={$viewerSettings.darkMode}>{viewerSettingsParameters.darkMode.name}</Toggle>
	<Toggle bind:checked={$viewerSettings.autoRotate}
		>{viewerSettingsParameters.autoRotate.name}</Toggle
	>
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		padding: 1rem;
	}
</style>
