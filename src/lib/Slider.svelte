<script>
	export let name;
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<label>
	<div>
		<span>{name}</span>
		<span>{value}</span>
	</div>
	<input type="range" bind:value {min} {max} {step} />
</label>

<style>
	label {
		display: grid;
		background: #aaaaaa;
		border-radius: 0.5rem;
		padding: 0.5rem;
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	input {
		cursor: pointer;
	}
</style>
