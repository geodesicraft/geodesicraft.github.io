<script>
	import { domeSettingsParameters } from '$lib/stores.js';

	export let selected;
</script>

<select
	bind:value={selected}
	class="bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer p-4 rounded-lg tracking-wide"
>
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<option value={key}>{value.title}</option>
	{/each}
</select>
