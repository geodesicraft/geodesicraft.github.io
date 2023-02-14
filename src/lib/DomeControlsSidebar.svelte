<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="bg-zinc-200 dark:bg-zinc-700">
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<Slider
			title={value.title}
			bind:value={$domeSettings[key]}
			min={value.min}
			max={value.max}
			step={value.step}
		/>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		overflow: auto;
		padding: 0.6rem;
		gap: 0.6rem;
	}
</style>
