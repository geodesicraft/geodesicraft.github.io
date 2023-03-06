<script lang="ts">
	export let title: string;
	export let href: string;
</script>

<a
	{title}
	{href}
	class="bg-zinc-400 dark:bg-zinc-800 hover:!bg-blue-500 text-zinc-900 dark:text-zinc-100 hover:!text-zinc-100 cursor-pointer select-none rounded-lg p-3.5"
>
	<slot />
</a>
