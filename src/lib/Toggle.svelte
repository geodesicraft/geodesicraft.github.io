<script>
	export let checked;
</script>

<div>
	<label for="toggle"><slot /></label>
	<input id="toggle" type="checkbox" bind:checked />
</div>

<style>
	* {
		cursor: pointer;
		user-select: none;
	}

	div {
		background: #d3d3d3;
		border-radius: 0.5rem;
		padding: 0.4rem;
	}
</style>
