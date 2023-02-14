<script>
	export let title;
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<label class="bg-zinc-400 dark:bg-zinc-800 dark:text-zinc-100">
	<div>
		<span>{title}</span>
		<input type="number" bind:value {min} {max} {step} class="bg-zinc-200 dark:bg-zinc-600" />
	</div>
	<input type="range" bind:value {min} {max} {step} />
</label>

<style>
	label {
		display: grid;
		border-radius: 0.5rem;
		padding: 0.5rem;
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	input[type='range'] {
		cursor: pointer;
	}

	input[type='number'] {
		width: 4rem;
	}
</style>
