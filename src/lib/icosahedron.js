export const createIcosahedron = function () {
	return {
		// radians
		sphericalVertices: [
			[1, Math.PI * 0.5, Math.PI * 0.5],
			[1, Math.PI * 0, 0],
			[1, Math.PI * 0.5, 0],
			[1, Math.PI * 1, 0],
			[1, Math.PI * 1.5, 0],
			[1, Math.PI * 0.5, Math.PI * 1.5]
		],
		sphericalEdges: [],
		sphericalFaces: []
	};
};
