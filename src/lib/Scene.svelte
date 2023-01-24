<script>
	import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
	import { DirectionalLight, Line2, OrbitControls, PerspectiveCamera } from '@threlte/core';

	const lines = [
		[
			[0, 0, 0],
			[1, 1, 1]
		],
		[
			[0, 0, 0],
			[1, -1, 1]
		],
		[
			[0, 0, 0],
			[-1, -1, 1]
		]
	];

	const getRandomColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};
</script>

<PerspectiveCamera position={{ y: 3, x: 3, z: 3 }}>
	<OrbitControls autoRotate enableZoom={true} />
</PerspectiveCamera>

<DirectionalLight position={{ y: 10 }} />

{#each lines as line}
	<Line2
		material={new LineMaterial({
			worldUnits: true,
			linewidth: 0.05,
			color: getRandomColor()
		})}
		points={line}
	/>
{/each}
