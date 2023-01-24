<script>
	export let checked;
</script>

<div>
	<label>
		<slot />
		<input type="checkbox" bind:checked />
	</label>
</div>

<style>
	label {
		cursor: pointer;
		user-select: none;
		background: #d3d3d3;
		border-radius: 0.5rem;
		padding: 0.6rem;
	}
</style>
