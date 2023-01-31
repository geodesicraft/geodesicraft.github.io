<script>
	import { createGeodesic } from '$lib/geodesic.js';
	import ViewerArea from '$lib/ViewerArea.svelte';
	import Footer from '$lib/Footer.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	createGeodesic();
</script>

<div class="main">
	<div class="sidebar">
		<Sidebar />
	</div>
	<ViewerArea />
	<div class="footer">
		<Footer />
	</div>
</div>

<style lang="scss">
	$sidebar-width: 15rem;

	:global(*) {
		font-family: sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	:global(.clickthroughable > *) {
		pointer-events: auto;
	}

	:global(.clickthroughable) {
		pointer-events: none;
	}

	.main {
		display: grid;
		height: 100vh;
	}

	// wide view

	.main {
		grid-template-columns: $sidebar-width 1fr;
	}

	.footer {
		display: none;
	}

	// narrow view

	@media (max-width: ($sidebar-width * 2.5)) {
		.main {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr auto;
		}

		.sidebar {
			display: none;
		}

		.footer {
			display: initial;
		}
	}
</style>
