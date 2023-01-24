<script>
	import Header from '$lib/Header.svelte';
	import Controls from '$lib/Controls.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div>
	<Header />
	<Controls />
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
