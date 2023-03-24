<script lang="ts">
	import { Line } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import { LineBasicMaterial, Vector3, type Vector3Tuple } from 'three';

	type CartesianDirection = `${'' | '-'}${'X' | 'Y' | 'Z'}`;

	export let visible: boolean;
	export let color: string;
	export let length: number;
	export let division: number;
	export let direction: CartesianDirection;

	let material = new LineBasicMaterial({ color });
	let text = direction;
	const fontSize = 0.2;

	function makeEndCoordinates(
		direction: CartesianDirection,
		length: number,
		sideways: number = 0
	): Vector3Tuple {
		const endCoordinatesPossibilities: Record<CartesianDirection, Vector3Tuple> = {
			X: [length, sideways, 0],
			Y: [sideways, length, 0],
			Z: [sideways, 0, length],
			'-X': [-length, sideways, 0],
			'-Y': [sideways, -length, 0],
			'-Z': [sideways, 0, -length]
		};
		return endCoordinatesPossibilities[direction];
	}

	function makeTick(direction: CartesianDirection, position: number): Vector3Tuple[] {
		const tickLength = 0.1;
		return [
			makeEndCoordinates(direction, position, 0),
			makeEndCoordinates(direction, position, tickLength)
		];
	}

	let axisStart = <Vector3Tuple>[0, 0, 0];
	let axisEnd = makeEndCoordinates(direction, length);
	let textPosition = makeEndCoordinates(direction, length + 0.1);

	function makeTicks(): Vector3Tuple[][] {
		let ticks = [];
		for (let tickPosition = 0; tickPosition <= length; tickPosition += division) {
			ticks.push(makeTick(direction, tickPosition));
		}
		return ticks;
	}
	let ticks = makeTicks();
</script>

<!-- axis -->
<Line {visible} points={[axisStart, axisEnd]} {material} />

<!-- direction label -->
<Text
	{visible}
	position={new Vector3(...textPosition)}
	{text}
	{color}
	anchorY="middle"
	{fontSize}
/>

<!-- measurement ticks -->
{#each ticks as tick}
	<Line {visible} points={tick} {material} />
{/each}
