<script lang="ts">
	import Axis from '$lib/components/Axis.svelte';

	export let visible: boolean;

	const axisDistance = 2.25;
</script>

<Axis {visible} endCoordinate={[axisDistance, 0, 0]} color="#ff0000" text="X" />
<Axis {visible} endCoordinate={[0, axisDistance, 0]} color="#00ff00" text="Y" />
<Axis {visible} endCoordinate={[0, 0, axisDistance]} color="#0000ff" text="Z" />
