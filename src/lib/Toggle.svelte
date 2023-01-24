<script>
	export let checked;
</script>

<div>
	<label for="toggle">Rotate</label>
	<input id="toggle" type="checkbox" bind:checked />
</div>

<style>
	* {
		cursor: pointer;
	}

	div {
		background: #aaaaaa;
		border-radius: 0.5rem;
		padding: 0.4rem;
	}
</style>
