<script>
	import { domeSettingsParameters } from '$lib/stores.js';

	export let selected;
</script>

<select bind:value={selected}>
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<option value={key}>{value.title}</option>
	{/each}
</select>
