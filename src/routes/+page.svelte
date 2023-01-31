<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import { createGeodesic } from '$lib/geodesic.js';
	import ViewerArea from '$lib/ViewerArea.svelte';

	createGeodesic();
</script>

<div>
	<div class="sidebar">
		<Sidebar />
	</div>
	<ViewerArea />
</div>

<style lang="scss">
	$sidebar-width: 15rem;

	:global(*) {
		font-family: sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(.clickthroughable > *) {
		pointer-events: auto;
	}

	:global(.clickthroughable) {
		pointer-events: none;
	}

	div {
		display: grid;
		height: 100vh;

		// large view
		grid-template-columns: $sidebar-width 1fr;
	}

	// mobile view
	@media (max-width: ($sidebar-width * 2.5)) {
		div {
			grid-template-columns: 1fr;
		}

		.sidebar {
			display: none;
		}
	}
</style>
