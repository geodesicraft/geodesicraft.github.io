<script>
	import GeometryViewer from '$lib/GeometryViewer.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<div>
	<Sidebar />
	<GeometryViewer />
</div>

<style>
	:global(*) {
		font-family: sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	div {
		display: grid;
		grid-template-columns: 15rem 1fr;
		height: 100vh;
	}
</style>
