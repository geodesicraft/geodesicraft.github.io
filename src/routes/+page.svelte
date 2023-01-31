<script>
	import { createGeodesic } from '$lib/geodesic.js';
	import DomeControlsSidebar from '$lib/DomeControlsSidebar.svelte';
	import ViewerArea from '$lib/ViewerArea.svelte';
	import DomeControlsFooter from '$lib/DomeControlsFooter.svelte';

	// createGeodesic();
</script>

<div class="main">
	<div class="sidebar">
		<DomeControlsSidebar />
	</div>
	<ViewerArea />
	<div class="footer">
		<DomeControlsFooter />
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
