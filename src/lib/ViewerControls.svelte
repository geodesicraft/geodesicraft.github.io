<script>
	import IconToggle from '$lib/IconToggle.svelte';
	import { viewerSettings, viewerSettingsParameters } from '$lib/stores.js';
</script>

<div>
	{#each Object.entries(viewerSettingsParameters) as [key, value] (key)}
		<IconToggle bind:checked={$viewerSettings[key]} title={value.title} icon={value.icon} />
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
