<script>
	import { edges, vertices, faces, vertexSize } from '$lib/stores.js';
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

<Slider label="Vertex Size" bind:value={$vertexSize} min="0" max="1" step="0.05" />
