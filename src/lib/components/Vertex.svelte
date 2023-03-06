<script lang="ts">
	import { Vector3 } from 'three';
	import { Instance } from '@threlte/core';

	export let vertexCartesian: [number, number, number];
	export let vertexSize: number;
</script>

<Instance position={new Vector3(...vertexCartesian)} scale={vertexSize} color={0x444444} />
