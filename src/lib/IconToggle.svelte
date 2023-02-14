<script>
	export let checked;
	export let title;
</script>

<label {title} class:selected={checked} class="bg-zinc-400 dark:bg-zinc-800 dark:text-zinc-100">
	<input type="checkbox" bind:checked />
	<slot />
</label>

<style>
	label {
		cursor: pointer;
		user-select: none;
		border-radius: 0.5rem;
		padding: 0.6rem;
		display: block;
	}

	.selected {
		background: #228bee;
	}

	input {
		cursor: pointer;
		display: none;
	}
</style>
