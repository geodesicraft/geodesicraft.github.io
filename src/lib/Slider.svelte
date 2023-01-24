<script>
	export let label;
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<span>{label}</span>
<input type="range" bind:value {min} {max} {step} />
<span>{value}</span>
