<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';
	import Slider from '$lib/Slider.svelte';

	export let selected;
</script>

<Slider
	title={domeSettingsParameters[selected].title}
	bind:value={$domeSettings[selected]}
	min={domeSettingsParameters[selected].min}
	max={domeSettingsParameters[selected].max}
	step={domeSettingsParameters[selected].step}
/>
