import { edges, vertices, faces } from '$lib/stores.js';

export function createGeodesic() {
	const sphericalVertices = [
		[1, 0, 0],
		[1, 90, 0],
		[1, 90, 90],
		[1, 90, 180]
	];
	const cartesianVertices = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);
	vertices.set(cartesianVertices);

	const sphericalEdges = [
		[
			[1, 0, 0],
			[1, 90, 0]
		],
		[
			[1, 0, 0],
			[1, 90, 90]
		],
		[
			[1, 90, 0],
			[1, 90, 90]
		],
		[
			[1, 0, 0],
			[1, 90, 180]
		],
		[
			[1, 90, 0],
			[1, 90, 180]
		],
		[
			[1, 90, 90],
			[1, 90, 180]
		]
	];
	const cartesianEdges = sphericalEdges.map((sphericalEdge) =>
		sphericalEdge.map((sphericalVertex) => sphericalToCartesian(...sphericalVertex))
	);
	edges.set(cartesianEdges);

	const sphericalFaces = [
		[
			[1, 0, 0],
			[1, 90, 0],
			[1, 90, 90]
		],
		[
			[1, 0, 0],
			[1, 90, 0],
			[1, 90, 180]
		]
	];
	const cartesianFaces = sphericalFaces.map((sphericalFace) =>
		sphericalFace.map((sphericalVertex) => sphericalToCartesian(...sphericalVertex))
	);
	faces.set(cartesianFaces);
}

function sphericalToCartesian(rho, theta, phi) {
	// radius, inclination, aziumuth
	const x = rho * Math.sin(theta) * Math.cos(phi);
	const y = rho * Math.sin(theta) * Math.sin(phi);
	const z = rho * Math.cos(theta);
	return [x, y, z];
}
// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
