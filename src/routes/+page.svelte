<script lang="ts">
	import { createGeodesic } from '$lib/scripts/geodesic';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
	import ViewerArea from '$lib/components/ViewerArea.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CommandBar from '$lib/components/CommandBar.svelte';

	createGeodesic();
</script>

<svelte:head>
	<title>Geodesicraft</title>
	<meta
		name="description"
		content="Geodesicraft is a suite of tools for generating and understanding geodesic domes."
	/>
</svelte:head>

<div class="h-screen grid md:grid-rows-[1fr_auto]">
	<div
		class="bg-zinc-100 dark:bg-zinc-600 grid min-h-0 grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-rows-[1fr] md:grid-cols-[auto_1fr]"
	>
		<div class="min-h-0 max-md:hidden">
			<Sidebar />
		</div>
		<div class="md:hidden">
			<Header />
		</div>
		<ViewerArea />
		<div class="md:hidden">
			<Footer />
		</div>
	</div>
	<div class="max-md:hidden">
		<CommandBar />
	</div>
</div>

<style>
	:global(body) {
		overflow: hidden;
	}

	:global(.clickthroughable > *) {
		pointer-events: auto;
	}

	:global(.clickthroughable) {
		pointer-events: none;
	}
</style>
