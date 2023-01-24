<script>
	import { lines } from '$lib/stores.js';

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

	setLines();
</script>

<!-- <button on:click={setLines}>Set Lines</button> -->
