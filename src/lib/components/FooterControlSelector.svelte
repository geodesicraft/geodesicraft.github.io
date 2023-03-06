<script lang="ts">
	import { domeSettingsParameters } from '$lib/scripts/stores';

	export let selected: boolean;
</script>

<select
	bind:value={selected}
	class="bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer p-2 rounded-lg tracking-wide w-full"
>
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<option value={key}>{value.title}</option>
	{/each}
</select>
