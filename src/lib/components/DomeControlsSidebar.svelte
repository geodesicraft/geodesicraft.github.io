<script lang="ts">
	import { domeSettings, domeSettingsParameters } from '$lib/scripts/stores';
	import Slider from '$lib/components/Slider.svelte';

	let domeSettingsParametersTyped = Object.entries(domeSettingsParameters);
</script>

<div class="bg-zinc-300 dark:bg-zinc-700 overflow-auto flex flex-col gap-3 p-3">
	{#each domeSettingsParametersTyped as [key, value] (key)}
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
