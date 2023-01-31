<script>
	import Toggle from '$lib/Toggle.svelte';
	import { viewerSettings, viewerSettingsParameters } from '$lib/stores.js';
</script>

<div class="clickthroughable">
	{#each Object.entries(viewerSettingsParameters) as [key, value] (key)}
		<Toggle bind:checked={$viewerSettings[key]} name={value.name} />
	{/each}
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		padding: 1rem;
	}
</style>
