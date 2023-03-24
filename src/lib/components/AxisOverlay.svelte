<script lang="ts">
	import Axis from '$lib/components/Axis.svelte';

	export let visible: boolean;

	const length = 3;
	const division = 1;
</script>

<Axis {visible} direction="X" {length} {division} color="#ff0000" />
<Axis {visible} direction="Y" {length} {division} color="#00ff00" />
<Axis {visible} direction="Z" {length} {division} color="#0000ff" />
