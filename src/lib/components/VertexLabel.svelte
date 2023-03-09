<script lang="ts">
	import { Text } from '@threlte/extras';
	import { Vector3, type Vector3Tuple } from 'three';

	export let visible: boolean;
	export let vertexCartesian: Vector3Tuple;
	export let text: string;
	export let vertexSize: number;

	const fontSize = 0.2;
</script>

<Text
	{visible}
	position={new Vector3(...vertexCartesian).add(new Vector3(0, vertexSize / 2 + fontSize / 1.5, 0))}
	{text}
	color="lime"
	anchorY="middle"
	{fontSize}
/>
