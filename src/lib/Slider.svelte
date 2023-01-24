<script>
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<div>
	<label for="slider"><slot /></label>
	<input id="slider" type="range" bind:value {min} {max} {step} />
	<label for="slider">{value}</label>
</div>

<style>
	div {
		background: #aaaaaa;
		border-radius: 0.5rem;
		padding: 0.4rem;
	}

	input {
		cursor: pointer;
	}
</style>
