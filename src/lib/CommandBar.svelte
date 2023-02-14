<script>
	import CopyButton from '$lib/CopyButton.svelte';
	import CommandTextField from '$lib/CommandTextField.svelte';
</script>

<div
	class="bg-zinc-400 dark:bg-zinc-800 p-3 grid grid-cols-[auto_1fr] divide-x-4 divide-zinc-400 dark:divide-zinc-800"
>
	<CopyButton />
	<CommandTextField />
</div>
