import { domeData } from '$lib/stores.js';
import { sphericalToCartesian } from '$lib/sphericalToCartesian.js';
import { createIcosahedron } from '$lib/icosahedron.js';

export function createGeodesic() {
	const icosahedron = createIcosahedron();

	const sphericalVertices = icosahedron.sphericalVertices;
	const cartesianVertices = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);

	const sphericalEdges = icosahedron.sphericalEdges;
	const cartesianEdges = sphericalEdges.map((sphericalEdge) =>
		sphericalEdge.map((sphericalVertex) => sphericalToCartesian(...sphericalVertex))
	);

	const sphericalFaces = icosahedron.sphericalFaces;
	const cartesianFaces = sphericalFaces.map((sphericalFace) =>
		sphericalFace.map((sphericalVertex) => sphericalToCartesian(...sphericalVertex))
	);

	domeData.set({
		vertices: cartesianVertices,
		edges: cartesianEdges,
		faces: cartesianFaces
	});
}
