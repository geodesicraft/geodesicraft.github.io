import { edges, vertices, faces } from '$lib/stores.js';

export function createGeodesic() {
	const sphericalVertices = [
		[1, 0, 0],
		[1, 1, 0],
		[1, 1, 1]
	];
	const cartesianVertices = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);
	vertices.set(cartesianVertices);

	edges.set([]);

	faces.set([]);
}

function sphericalToCartesian(rho, theta, phi) {
	// radius, inclination, aziumuth
	const x = rho * Math.sin(theta) * Math.cos(phi);
	const y = rho * Math.sin(theta) * Math.sin(phi);
	const z = rho * Math.cos(theta);
	return [x, y, z];
}
// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
