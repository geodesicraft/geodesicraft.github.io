<script>
	export let checked;
	export let name;
</script>

<label>
	{name}
	<input type="checkbox" bind:checked />
</label>

<style>
	label {
		cursor: pointer;
		user-select: none;
		background: #d3d3d3;
		border-radius: 0.5rem;
		padding: 0.6rem;
		display: block;
	}

	input {
		cursor: pointer;
	}
</style>
