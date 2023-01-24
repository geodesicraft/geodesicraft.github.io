<script>
	import { vertexSize, edgeThickness } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div>
	<Slider bind:value={$vertexSize} min="0" max="1" step="0.05">Vertex Size</Slider>
	<Slider bind:value={$edgeThickness} min="0.01" max="0.5" step="0.01">Edge Thickness</Slider>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		overflow: auto;
		padding: 0.8rem 0.5rem;
		gap: 0.8rem;
	}
</style>
