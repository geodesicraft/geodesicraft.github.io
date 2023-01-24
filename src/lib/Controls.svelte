<script>
	import { edges, vertices, faces, vertexSize, edgeThickness } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';

	function setEdges() {
		edges.set([
			[
				[0, 0, 0],
				[1, 1, 1]
			],
			[
				[0, 0, 0],
				[1, -1, 1]
			],
			[
				[0, 0, 0],
				[-1, -1, 1]
			],
			[
				[1, 1, 1],
				[1, -1, 1]
			],
			[
				[1, -1, 1],
				[-1, -1, 1]
			]
		]);
	}

	function setVertices() {
		vertices.set([
			[0, 0, 0],
			[1, 1, 1],
			[1, -1, 1],
			[-1, -1, 1]
		]);
	}

	function setFaces() {
		faces.set([
			[
				[0, 0, 0],
				[1, 1, 1],
				[1, -1, 1]
			],
			[
				[0, 0, 0],
				[1, -1, 1],
				[-1, -1, 1]
			]
		]);
	}

	setEdges();
	setVertices();
	setFaces();
</script>

<div>
	<Slider label="Vertex Size" bind:value={$vertexSize} min="0" max="1" step="0.05" />
	<Slider label="Edge Thickness" bind:value={$edgeThickness} min="0.01" max="0.5" step="0.01" />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		padding: 0.8rem 0.5rem;
		gap: 0.8rem;
	}
</style>
