<script>
	import { Vector3 } from 'three';
	import { Instance } from '@threlte/core';

	export let vertexCartesian;
	export let vertexSize;
</script>

<Instance position={new Vector3(...vertexCartesian)} scale={vertexSize} color={0x444444} />
