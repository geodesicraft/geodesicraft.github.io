import type { Vector3Tuple } from 'three';

export default function cartesianToSpherical([x, y, z]: Vector3Tuple): Vector3Tuple {
	// TODO
	const rho = Math.sqrt((x ^ 2) + (y ^ 2) + (z ^ 2));
	const theta = 0;
	const phi = 0;
	return [rho, theta, phi];
}

// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
// This formula is modified so x, y, z is consistent with Minecraft and Three.js
