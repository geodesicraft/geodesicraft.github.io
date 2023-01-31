import { domeData } from '$lib/stores.js';
import { sphericalToCartesian } from '$lib/sphericalToCartesian.js';
import { createIcosahedron } from '$lib/icosahedron';

export function createGeodesic() {
	const icosahedron = createIcosahedron();

	const sphericalVertices = icosahedron.sphericalVertices;
	const cartesianVertices = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);
	domeData.vertices.set(cartesianVertices);

	const sphericalEdges = icosahedron.sphericalEdges;
	const cartesianEdges = sphericalEdges.map((sphericalEdge) =>
		sphericalEdge.map((sphericalVertex) => sphericalToCartesian(...sphericalVertex))
	);
	domeData.edges.set(cartesianEdges);

	const sphericalFaces = icosahedron.sphericalFaces;
	const cartesianFaces = sphericalFaces.map((sphericalFace) =>
		sphericalFace.map((sphericalVertex) => sphericalToCartesian(...sphericalVertex))
	);
	domeData.faces.set(cartesianFaces);
}
