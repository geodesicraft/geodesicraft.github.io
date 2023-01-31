<script>
	import Toggle from '$lib/Toggle.svelte';
	import { viewerSettings, viewerSettingsParameters } from '$lib/stores.js';
</script>

<div>
	{#each Object.entries(viewerSettingsParameters) as [key, value] (key)}
		<Toggle bind:checked={$viewerSettings[key]} name={value.name} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 0.6rem;
		padding: 0.6rem;
		border-bottom: 0.1rem solid #aaaaaa;
	}
</style>
