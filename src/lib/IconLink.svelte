<script>
	export let title;
	export let href;
</script>

<a
	{title}
	{href}
	class="bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer select-none rounded-lg p-3.5 hover:!bg-blue-500"
>
	<slot />
</a>
