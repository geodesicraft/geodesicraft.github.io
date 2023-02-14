<script>
	export let checked;
	export let title;
</script>

<label
	{title}
	class:selected={checked}
	class="bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer select-none rounded-lg p-3.5"
>
	<input type="checkbox" bind:checked class="cursor-pointer hidden" />
	<slot />
</label>

<style>
	.selected {
		background: #228bee;
	}
</style>
