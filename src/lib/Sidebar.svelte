<script>
	import Header from '$lib/Header.svelte';
	import DomeControls from '$lib/DomeControls.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div>
	<Header />
	<DomeControls />
	<Footer />
</div>

<style>
	div {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		min-height: 0;
		background: lightgray;
	}
</style>
