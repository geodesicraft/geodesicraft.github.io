import { edges, vertices, faces } from '$lib/stores.js';

export function createGeodesic() {
	setEdges();
	setVertices();
	setFaces();
}

function setEdges() {
	edges.set([
		[
			[0, 0, 0],
			[1, 1, 1]
		],
		[
			[0, 0, 0],
			[1, -1, 1]
		],
		[
			[0, 0, 0],
			[-1, -1, 1]
		],
		[
			[1, 1, 1],
			[1, -1, 1]
		],
		[
			[1, -1, 1],
			[-1, -1, 1]
		]
	]);
}

function setVertices() {
	vertices.set([
		[0, 0, 0],
		[1, 1, 1],
		[1, -1, 1],
		[-1, -1, 1]
	]);
}

function setFaces() {
	faces.set([
		[
			[0, 0, 0],
			[1, 1, 1],
			[1, -1, 1]
		],
		[
			[0, 0, 0],
			[1, -1, 1],
			[-1, -1, 1]
		]
	]);
}
