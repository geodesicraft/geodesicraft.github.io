<script>
	import GeometryViewer from '$lib/GeometryViewer.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import { createGeodesic } from '$lib/geodesic.js';

	createGeodesic();
</script>

<div>
	<Sidebar />
	<GeometryViewer />
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

	div {
		display: grid;
		height: 100vh;
	}

	@media (min-width: ($sidebar-width * 2)) {
		div {
			grid-template-columns: $sidebar-width 1fr;
		}
	}
</style>
