<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="bg-zinc-200 dark:bg-zinc-700 flex flex-col gap-3 p-3 overflow-auto">
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<Slider
			title={value.title}
			bind:value={$domeSettings[key]}
			min={value.min}
			max={value.max}
			step={value.step}
		/>
	{/each}
</div>
