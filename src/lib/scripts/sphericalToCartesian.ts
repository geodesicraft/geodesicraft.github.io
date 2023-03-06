import type { Vector3Tuple } from 'three';

export default function sphericalToCartesian([rho, theta, phi]: Vector3Tuple): [
	number,
	number,
	number
] {
	// radius, inclination, aziumuth
	const x = rho * Math.sin(theta) * Math.sin(phi);
	const y = rho * Math.cos(theta);
	const z = rho * Math.sin(theta) * Math.cos(phi);
	return [x, y, z];
}

// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
// This formula is modified so x, y, z is consistent with Minecraft and Three.js
