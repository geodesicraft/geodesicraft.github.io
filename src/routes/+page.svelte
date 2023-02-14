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

<svelte:body class="m-0 p-0 overflow-hidden font-sans " />

<div
	class="main bg-zinc-100 dark:bg-zinc-600 grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[auto_1fr]"
>
	<div class="sidebar h-screen max-md:hidden">
		<Sidebar />
	</div>
	<div class="header md:hidden">
		<Header />
	</div>
	<ViewerArea />
	<div class="footer md:hidden">
		<Footer />
	</div>
</div>

<style lang="scss">
	:global(.clickthroughable > *) {
		pointer-events: auto;
	}

	:global(.clickthroughable) {
		pointer-events: none;
	}
</style>
