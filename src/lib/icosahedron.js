export const createIcosahedron = function () {
	return {
		// radians
		sphericalVertices: [
			[1, Math.PI * 0.5, Math.PI * 0.5],
			[1, ((Math.PI * 2) / 10) * 0, 2],
			[1, ((Math.PI * 2) / 10) * 1, 1],
			// [1, ((Math.PI * 2) / 10) * 2, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 3, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 4, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 5, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 6, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 7, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 8, Math.atan(1 / 2)],
			// [1, ((Math.PI * 2) / 10) * 9, Math.atan(1 / 2)],
			[1, Math.PI * 0.5, Math.PI * 1.5]
		],
		sphericalEdges: [],
		sphericalFaces: []
	};
};
// https://en.wikipedia.org/wiki/Regular_icosahedron#Spherical_coordinates
