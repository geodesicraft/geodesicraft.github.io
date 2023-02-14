<script>
	import MdiContentCopy from '~icons/mdi/content-copy';

	export let value;

	const copyCommand = () => {
		navigator.clipboard.writeText(value);
	};
</script>

<button
	title="Copy Command"
	class="cursor-pointer p-3 bg-zinc-100 dark:bg-zinc-600 hover:!bg-blue-500 text-zinc-900 dark:text-zinc-100 hover:!text-zinc-100 rounded-l-lg"
	on:click={copyCommand}
>
	<MdiContentCopy />
</button>
