<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="outer">
	<div class="inner">
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
</div>

<style>
	.outer {
		background: #d3d3d3;
		height: 100vh;
		display: grid;
		overflow: hidden;
	}

	.inner {
		display: flex;
		flex-direction: column;
		overflow: auto;
		padding: 0.6rem;
		gap: 0.6rem;
	}
</style>
