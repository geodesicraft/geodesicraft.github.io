<script lang="ts">
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';
	import type { Vector3Tuple } from 'three';

	export let edgeThickness: number;
	export let verticesCartesian: Array<Vector3Tuple>;
</script>

<Line2
	material={new LineMaterial({
		worldUnits: true,
		linewidth: edgeThickness,
		color: 0x555555
	})}
	points={verticesCartesian}
/>
