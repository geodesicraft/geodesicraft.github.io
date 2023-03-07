<script lang="ts">
	import { Line } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import { LineBasicMaterial, Vector3, type Vector3Tuple } from 'three';

	export let visible: boolean;
	export let endCoordinate: Vector3Tuple;
	export let text: string;
	export let color: string;

	const fontSize = 0.2;
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
	{fontSize}
/>
