<script>
	import { domeSettingsParameters } from '$lib/stores.js';
	import FooterControlSelector from './FooterControlSelector.svelte';
	import FooterControl from './FooterControl.svelte';

	let selected = Object.keys(domeSettingsParameters)[0];
</script>

<div class="flex flex-col bg-zinc-200 dark:bg-zinc-700">
	<FooterControlSelector bind:selected />
	<FooterControl {selected} />
</div>

<style>
	div {
		gap: 1rem;
		padding: 1rem;
	}
</style>
