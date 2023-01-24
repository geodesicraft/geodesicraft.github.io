<script>
	import { lines, vertices, faces, vertexSize } from '$lib/stores.js';

	function setLines() {
		lines.set([
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

	setLines();
	setVertices();
	setFaces();
</script>

<span>Vertex Size</span>
<input type="range" bind:value={$vertexSize} min="0" max="1" step="0.05" />
<span>{$vertexSize}</span>
