<script>
	import IconToggle from '$lib/IconToggle.svelte';
	import { viewerSettings } from '$lib/stores.js';
	import TablerRotate360 from '~icons/tabler/rotate-360';
	import MdiAxisArrow from '~icons/mdi/axis-arrow';
	import TablerSunMoon from '~icons/tabler/sun-moon';
</script>

<div>
	<IconToggle bind:checked={$viewerSettings.autoRotate} title="Auto Rotate">
		<TablerRotate360 />
	</IconToggle>
	<IconToggle bind:checked={$viewerSettings.axesOverlay} title="Axes Overlay">
		<MdiAxisArrow />
	</IconToggle>
	<IconToggle bind:checked={$viewerSettings.darkMode} title="Dark Mode">
		<TablerSunMoon />
	</IconToggle>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 0.6rem;
		padding: 0.6rem;
		border-bottom: 0.1rem solid #aaaaaa;
	}
</style>
