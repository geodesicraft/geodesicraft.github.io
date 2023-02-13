<script>
	export let checked;
	export let title;
</script>

<label {title} class:selected={checked}>
	<input type="checkbox" bind:checked />
	<slot />
</label>

<style>
	label {
		cursor: pointer;
		user-select: none;
		background: #aaaaaa;
		border-radius: 0.5rem;
		padding: 0.6rem;
		display: block;
	}

	.selected {
		background: #228bee;
		box-shadow: inset 0 0 0 0.2rem #333333;
	}

	input {
		cursor: pointer;
		display: none;
	}
</style>
