<script lang="ts">
	import { domeSettings, domeSettingsParameters } from '$lib/scripts/stores';

	let args: Array<string>;
	export let value: string;

	$: args = Object.entries($domeSettings).map(
		([key, value]: [string, any]) => `${domeSettingsParameters[key].argument}=${value}`
	);

	$: value = `//geo ${args.join(' ')}`;
</script>

<input
	type="text"
	placeholder="//geo"
	class="px-2 bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-r-lg"
	readonly
	bind:value
/>
