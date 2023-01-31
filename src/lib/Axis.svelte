<script>
	import { Line } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import { LineBasicMaterial, Vector3 } from 'three';

	export let visible;
	export let endCoordinate;
	export let text;
	export let color;
</script>

<Line
	{visible}
	points={[[0, 0, 0], endCoordinate]}
	material={new LineBasicMaterial({
		color
	})}
/>

<Text
	{visible}
	position={new Vector3(...endCoordinate)}
	{text}
	{color}
	anchorY="middle"
	fontSize="0.2"
/>
