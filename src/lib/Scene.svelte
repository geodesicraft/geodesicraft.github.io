<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { DirectionalLight, Line2, OrbitControls, PerspectiveCamera } from '@threlte/core';

	const lines = [];
	for (let index = 0; index < 10; index++) {
		const points = [];
		for (let index = 0; index < 10; index++) {
			const point = [25 - Math.random() * 50, 25 - Math.random() * 50, 25 - Math.random() * 50];
			points.push(point);
		}
		lines.push(points);
	}

	const getRandomColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};
</script>

<PerspectiveCamera position={{ y: 100, x: 100, z: 100 }}>
	<OrbitControls autoRotate enableZoom={true} />
</PerspectiveCamera>

<DirectionalLight position={{ y: 10 }} />

{#each lines as line}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: 1,
			color: getRandomColor()
		})}
		points={line}
	/>
{/each}
