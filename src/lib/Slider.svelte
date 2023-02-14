<script>
	export let value;
	export let min;
	export let max;
	export let step;
	export let numberClasses;
</script>

<label class="grid p-3 gap-4 tracking-wide text-zinc-900 dark:text-zinc-100">
	<div class="flex justify-between items-center gap-4">
		<slot />
		<input
			type="number"
			bind:value
			{min}
			{max}
			{step}
			class="w-20 p-1.5 rounded font-mono {numberClasses}"
		/>
	</div>
	<input type="range" bind:value {min} {max} {step} class="cursor-pointer" />
</label>
