<script lang="ts">
	import { domeSettings, domeSettingsParameters } from '$lib/scripts/stores';
	import Slider from '$lib/components/Slider.svelte';
	import { makeControlList } from '$lib/scripts/SettingsAndControls';

	let controlList = makeControlList(domeSettingsParameters);
</script>

<div class="bg-zinc-300 dark:bg-zinc-700 overflow-auto flex flex-col gap-3 p-3">
	{#each controlList as control (control.id)}
		<div class="bg-zinc-400 dark:bg-zinc-800 rounded-lg">
			<Slider
				bind:value={$domeSettings[control.id]}
				min={control.min}
				max={control.max}
				step={control.step}
				numberClasses="bg-zinc-300 dark:bg-zinc-600"
			>
				{control.title}
			</Slider>
		</div>
	{/each}
</div>
