<script>
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<label>
	<slot />
	<input type="range" bind:value {min} {max} {step} />
	{value}
</label>

<style>
	label {
		background: #aaaaaa;
		border-radius: 0.5rem;
		padding: 0.4rem;
	}

	input {
		cursor: pointer;
	}
</style>
