<script lang="ts">
	import { domeSettings, domeSettingsParameters } from '$lib/scripts/stores';
	import { viewerSettings } from '$lib/scripts/stores';
	import FooterControlSelector from '$lib/components/FooterControlSelector.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { ControlOption, ControlOptionList } from '$lib/scripts/SettingsAndControls';

	const options: ControlOptionList = Object.entries(domeSettingsParameters).map(
		([id, parameters]): ControlOption => ({
			id,
			title: parameters.title
		})
	);
</script>

<div class="bg-zinc-300 dark:bg-zinc-700 p-5">
	<Slider
		bind:value={$domeSettings[$viewerSettings.selectedDomeSetting]}
		min={domeSettingsParameters[$viewerSettings.selectedDomeSetting].min}
		max={domeSettingsParameters[$viewerSettings.selectedDomeSetting].max}
		step={domeSettingsParameters[$viewerSettings.selectedDomeSetting].step}
		numberClasses="bg-zinc-400 dark:bg-zinc-800"
	>
		<FooterControlSelector bind:selected={$viewerSettings.selectedDomeSetting} {options} />
	</Slider>
</div>
