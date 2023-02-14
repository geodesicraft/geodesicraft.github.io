<script>
	import IconToggle from '$lib/IconToggle.svelte';
	import IconLink from './IconLink.svelte';
	import { viewerSettings } from '$lib/stores.js';
	import TablerRotate360 from '~icons/tabler/rotate-360';
	import MdiAxisArrow from '~icons/mdi/axis-arrow';
	import TablerSunMoon from '~icons/tabler/sun-moon';
	import IcBaselineQuestionMark from '~icons/ic/baseline-question-mark';
</script>

<div
	class="border-b-2 border-zinc-100 dark:border-zinc-600 bg-zinc-200 dark:bg-zinc-700 py-3.5 flex flex-wrap justify-around"
>
	<IconLink href="https://github.com/geodesicraft" title="About">
		<IcBaselineQuestionMark />
	</IconLink>
	<IconToggle bind:checked={$viewerSettings.autoRotate} title="Auto Rotate">
		<TablerRotate360 />
	</IconToggle>
	<IconToggle bind:checked={$viewerSettings.axisOverlay} title="Axis Overlay">
		<MdiAxisArrow />
	</IconToggle>
	<IconToggle bind:checked={$viewerSettings.darkMode} title="Dark Mode">
		<TablerSunMoon />
	</IconToggle>
</div>
