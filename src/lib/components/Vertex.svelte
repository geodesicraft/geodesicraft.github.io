<script lang="ts">
	import { Vector3, type Vector3Tuple } from 'three';
	import { Instance } from '@threlte/core';

	export let vertexCartesian: Vector3Tuple;
	export let vertexSize: number;
</script>

<Instance position={new Vector3(...vertexCartesian)} scale={vertexSize} color={0x444444} />
