<script lang="ts">
	import CommandTextField from '$lib/components/CommandTextField.svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';

	let value: string;
</script>

<div
	class="bg-zinc-400 dark:bg-zinc-800 p-3 grid grid-cols-[auto_1fr] divide-x-4 divide-zinc-400 dark:divide-zinc-800"
>
	<CopyButton {value} />
	<CommandTextField bind:value />
</div>
