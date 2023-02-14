<script>
	export let value;
	export let min;
	export let max;
	export let step;
</script>

<label
	class="bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 grid p-3 rounded-lg gap-4 tracking-wide"
>
	<div class="flex justify-between items-center gap-4">
		<slot />
		<input
			type="number"
			bind:value
			{min}
			{max}
			{step}
			class="bg-zinc-200 dark:bg-zinc-600 w-20 p-1.5 rounded font-mono"
		/>
	</div>
	<input type="range" bind:value {min} {max} {step} class="cursor-pointer" />
</label>
