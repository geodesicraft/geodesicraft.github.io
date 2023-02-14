<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import { viewerSettings } from '$lib/stores.js';
	import FooterControlSelector from './FooterControlSelector.svelte';
	import Slider from '$lib/Slider.svelte';
</script>

<div class="bg-zinc-200 dark:bg-zinc-700 p-5">
	<Slider
		bind:value={$domeSettings[$viewerSettings.selectedDomeSetting]}
		min={domeSettingsParameters[$viewerSettings.selectedDomeSetting].min}
		max={domeSettingsParameters[$viewerSettings.selectedDomeSetting].max}
		step={domeSettingsParameters[$viewerSettings.selectedDomeSetting].step}
	>
		<FooterControlSelector bind:selected={$viewerSettings.selectedDomeSetting} />
	</Slider>
</div>
