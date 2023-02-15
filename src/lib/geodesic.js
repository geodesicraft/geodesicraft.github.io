import { domeData } from '$lib/stores.js';
import { sphericalToCartesian } from '$lib/sphericalToCartesian-old.js';
import { createIcosahedron } from '$lib/icosahedron-old.js';
import { findVertexBetween } from '$lib/findVertexBetween';
import Icosahedron from '$lib/icosahedron';

export function createGeodesic() {
	const icosahedronNew = new Icosahedron();
	console.log(icosahedronNew);

	const icosahedron = createIcosahedron();

	const sphericalVertices = icosahedron.sphericalVertices;
	let verticesCoordinates = sphericalVertices.map((sphericalVertex) =>
		sphericalToCartesian(...sphericalVertex)
	);

	let edgesReference = icosahedron.edgesReference;
	let facesReference = icosahedron.facesReference;

	// let subdividedFace = facesReference[0].map(
	// 	(vertexReference) => verticesCoordinates[vertexReference]
	// );
	// console.log('subdividedFace', subdividedFace);

	let vertexBetween = findVertexBetween(verticesCoordinates[0], verticesCoordinates[1]);

	verticesCoordinates.push(vertexBetween);

	domeData.set({
		verticesCoordinates,
		edgesReference,
		facesReference
	});
}
