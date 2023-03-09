import type { Vector3Tuple } from 'three';

export default function cartesianToSpherical([x, y, z]: Vector3Tuple): Vector3Tuple {
	const r = Math.sqrt(x * x + y * y + z * z);
	const theta = Math.atan2(x, z);
	const phi = Math.acos(y / r);
	return [r, theta, phi];
}

// y is up to be consistent with Minecraft and Three.js
