<script>
	export let checked;
</script>

<div>
	<label for="rotate">Rotate</label>
	<input type="checkbox" id="rotate" bind:checked />
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
