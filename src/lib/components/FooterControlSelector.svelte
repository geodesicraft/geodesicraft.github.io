<script lang="ts">
	import type { ControlOptionList } from '$lib/scripts/SettingsAndControls';

	export let selected: string;
	export let options: ControlOptionList;
</script>

<select
	bind:value={selected}
	class="bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer p-2 rounded-lg tracking-wide w-full"
>
	{#each options as option (option.id)}
		<option value={option.id}>{option.title}</option>
	{/each}
</select>
