import { domeData } from '$lib/stores.js';
import { sphericalToCartesian } from '$lib/sphericalToCartesian.js';
import { createIcosahedron } from '$lib/icosahedron.js';

export function createGeodesic() {
	const icosahedron = createIcosahedron();

	const sphericalVertices = icosahedron.sphericalVertices;
	const cartesianVertices = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);

	const edgesReference = icosahedron.sphericalEdges;

	const facesReference = icosahedron.sphericalFaces;

	domeData.set({
		verticesCoordinates: cartesianVertices,
		edgesReference,
		facesReference
	});
}
