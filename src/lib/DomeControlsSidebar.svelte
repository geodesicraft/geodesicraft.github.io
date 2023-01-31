<script>
	import { domeSettings } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="outer">
	<div class="inner">
		<Slider bind:value={$domeSettings.vertexSize} min="0" max="1" step="0.05">Vertex Size</Slider>
		<Slider bind:value={$domeSettings.edgeThickness} min="0.01" max="0.5" step="0.01"
			>Edge Thickness</Slider
		>
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
