<script lang="ts">
	import IconToggle from '$lib/components/IconToggle.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import { viewerSettings } from '$lib/scripts/stores';
	import IcBaselineQuestionMark from '~icons/ic/baseline-question-mark';
	import TablerRotate360 from '~icons/tabler/rotate-360';
	import MdiAxisArrow from '~icons/mdi/axis-arrow';
	import LucideLightbulb from '~icons/lucide/lightbulb';
</script>

<div class="bg-zinc-300 dark:bg-zinc-700 py-3.5 flex flex-wrap justify-around">
	<IconLink href="https://github.com/geodesicraft" title="About">
		<IcBaselineQuestionMark />
	</IconLink>
	<IconToggle bind:checked={$viewerSettings.autoRotate} title="Auto Rotate">
		<TablerRotate360 />
	</IconToggle>
	<IconToggle bind:checked={$viewerSettings.axisOverlay} title="Axis Overlay">
		<MdiAxisArrow />
	</IconToggle>
	<IconToggle bind:checked={$viewerSettings.lightMode} title="Light Mode">
		<LucideLightbulb />
	</IconToggle>
</div>
