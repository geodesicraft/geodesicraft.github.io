<script>
	import { createGeodesic } from '$lib/geodesic.js';
	import Sidebar from '$lib/Sidebar.svelte';
	import Header from '$lib/Header.svelte';
	import ViewerArea from '$lib/ViewerArea.svelte';
	import Footer from '$lib/Footer.svelte';

	createGeodesic();
</script>

<svelte:head>
	<title>Geodesicraft</title>
	<meta
		name="description"
		content="Geodesicraft is a suite of tools for generating and understanding geodesic domes."
	/>
</svelte:head>

<div class="main bg-zinc-100 dark:bg-zinc-600 grid h-screen">
	<div class="sidebar">
		<Sidebar />
	</div>
	<div class="header">
		<Header />
	</div>
	<ViewerArea />
	<div class="footer">
		<Footer />
	</div>
</div>

<style lang="scss">
	$sidebar-width: 17rem;

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

	// wide view

	.main {
		grid-template-columns: $sidebar-width 1fr;
	}

	.header,
	.footer {
		display: none;
	}

	// narrow view

	@media (max-width: ($sidebar-width * 2.5)) {
		.main {
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr auto;
		}

		.sidebar {
			display: none;
		}

		.header,
		.footer {
			display: initial;
		}
	}
</style>
