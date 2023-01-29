<script>
	export let checked;
</script>

<label>
	<slot />
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
</style>
