<script>
	export let label;
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<div>
	<span>{label}</span>
	<input type="range" bind:value {min} {max} {step} />
	<span>{value}</span>
</div>

<style>
	div {
		background: #aaaaaa;
		border-radius: 0.5rem;
		padding: 0.4rem;
	}
</style>
