<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div>
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<Slider
			name={value.name}
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
		gap: 1rem;
		padding: 1rem;
		height: 5rem;
		background: #d3d3d3;
		overflow: scroll;
	}
</style>
