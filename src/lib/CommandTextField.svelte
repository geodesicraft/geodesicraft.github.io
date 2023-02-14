<script>
	import { domeSettings, domeSettingsParameters } from '$lib/stores.js';

	let args;
	let command;

	$: args = Object.entries($domeSettings).map(
		([key, value]) => `${domeSettingsParameters[key].argument}=${value}`
	);

	$: command = `//geo ${args.join(' ')}`;
</script>

<input
	type="text"
	placeholder="//geo"
	class="px-2 bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-r-lg"
	readonly
	bind:value={command}
/>
