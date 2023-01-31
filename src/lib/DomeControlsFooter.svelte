<script>
	import { domeSettingsParameters } from '$lib/stores.js';
	import FooterControlSelector from './FooterControlSelector.svelte';
	import FooterControl from './FooterControl.svelte';

	let selected = Object.keys(domeSettingsParameters)[0];
</script>

<div>
	<FooterControlSelector bind:selected />
	<FooterControl {selected} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		background: #d3d3d3;
		overflow: scroll;
	}
</style>
