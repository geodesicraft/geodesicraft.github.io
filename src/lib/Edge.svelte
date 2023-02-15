<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { Line2 } from '@threlte/core';

	export let edgeThickness;
	export let verticesCartesian;
</script>

<Line2
	material={new LineMaterial({
		worldUnits: true,
		linewidth: edgeThickness,
		color: 0x555555
	})}
	points={verticesCartesian}
/>
