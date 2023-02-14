import { domeData } from '$lib/stores.js';
import { sphericalToCartesian } from '$lib/sphericalToCartesian.js';
import { createIcosahedron } from '$lib/icosahedron.js';

export function createGeodesic() {
	const icosahedron = createIcosahedron();

	const sphericalVertices = icosahedron.sphericalVertices;
	const cartesianVertices = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);

	const edgesReferences = icosahedron.sphericalEdges;

	const facesReferences = icosahedron.sphericalFaces;

	domeData.set({
		vertices: cartesianVertices,
		edges: edgesReferences,
		faces: facesReferences
	});
}
