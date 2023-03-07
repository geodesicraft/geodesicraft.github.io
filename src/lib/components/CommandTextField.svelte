<script lang="ts">
	import { domeSettings, domeSettingsParameters } from '$lib/scripts/stores';

	let args: Array<string>;
	export let value: string;

	const getArgumentValuesFromSettings = function (
		// any is not ideal
		settings: Record<string, any>,
		settingsParameters: Record<string, any>
	) {
		return Object.entries(settings).map(
			([key, value]) => `${settingsParameters[key].argument}=${value}`
		);
	};

	$: args = getArgumentValuesFromSettings($domeSettings, domeSettingsParameters);

	$: value = `//geo ${args.join(' ')}`;
</script>

<input
	type="text"
	placeholder="//geo"
	class="px-2 bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-r-lg"
	readonly
	bind:value
/>
