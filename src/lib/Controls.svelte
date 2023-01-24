<script>
	import { lines, vertices, faces } from '$lib/stores.js';

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
		faces.set([]);
	}

	setLines();
	setVertices();
	setFaces();
</script>

<!-- <button on:click={setLines}>Set Lines</button> -->
