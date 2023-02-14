<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import FooterControlSelector from './FooterControlSelector.svelte';
	import Slider from '$lib/Slider.svelte';

	let selected = Object.keys(domeSettingsParameters)[0];
</script>

<div class="bg-zinc-200 dark:bg-zinc-700 p-5">
	<Slider
		bind:value={$domeSettings[selected]}
		min={domeSettingsParameters[selected].min}
		max={domeSettingsParameters[selected].max}
		step={domeSettingsParameters[selected].step}
	>
		<FooterControlSelector bind:selected />
	</Slider>
</div>
