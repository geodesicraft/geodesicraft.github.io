<script lang="ts">
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';
	import type { Vector3 } from 'three';

	export let edgeThickness: number;
	export let verticesCartesian: Array<Vector3>;
</script>

<Line2
	material={new LineMaterial({
		worldUnits: true,
		linewidth: edgeThickness,
		color: 0x555555
	})}
	points={verticesCartesian}
/>
