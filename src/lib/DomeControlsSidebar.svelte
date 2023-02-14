<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="bg-zinc-300 dark:bg-zinc-700 overflow-scroll flex flex-col gap-3 p-3">
	{#each Object.entries(domeSettingsParameters) as [key, value] (key)}
		<div class="bg-zinc-400 dark:bg-zinc-800 rounded-lg">
			<Slider
				bind:value={$domeSettings[key]}
				min={value.min}
				max={value.max}
				step={value.step}
				numberClasses="bg-zinc-300 dark:bg-zinc-600"
			>
				{value.title}
			</Slider>
		</div>
	{/each}
</div>
