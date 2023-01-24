import { edges, vertices, faces } from '$lib/stores.js';
import { sphericalToCartesian } from '$lib/sphericalToCartesian.js';

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
