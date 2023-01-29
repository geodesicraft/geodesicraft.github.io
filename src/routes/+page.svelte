<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import { createGeodesic } from '$lib/geodesic.js';
	import ViewerArea from '$lib/ViewerArea.svelte';

	createGeodesic();
</script>

<div>
	<ViewerArea />
	<Sidebar />
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
	}

	@media (min-width: ($sidebar-width * 2.5)) {
		div {
			grid-template-columns: 1fr $sidebar-width;
		}
	}
</style>
