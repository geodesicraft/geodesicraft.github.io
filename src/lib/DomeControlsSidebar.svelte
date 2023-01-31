<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="outer">
	<div class="inner">
		<Slider
			name={domeSettingsParameters.vertexSize.name}
			bind:value={$domeSettings.vertexSize}
			min={domeSettingsParameters.vertexSize.min}
			max={domeSettingsParameters.vertexSize.max}
			step={domeSettingsParameters.vertexSize.step}
		/>
		<Slider
			name={domeSettingsParameters.vertexSize.name}
			bind:value={$domeSettings.edgeThickness}
			min={domeSettingsParameters.edgeThickness.min}
			max={domeSettingsParameters.edgeThickness.max}
			step={domeSettingsParameters.edgeThickness.step}
		/>
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
