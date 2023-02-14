export const createIcosahedron = function () {
	return {
		// radians
		// radius rho, inclination theta, azimuth phi
		sphericalVertices: [
			// zig zag ring
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 0],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 1],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 2],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 3],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 4],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 5],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 6],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 7],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 8],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 9],
			// top
			[1, 0, 0],
			// bottom
			[1, Math.PI, 0]
		],
		sphericalEdges: [
			// zig zag ring
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9],
			[9, 0],
			// upper ring
			[0, 2],
			[2, 4],
			[4, 6],
			[6, 8],
			[8, 0],
			// lower ring
			[1, 3],
			[3, 5],
			[5, 7],
			[7, 9],
			[9, 1],
			// top
			[0, 10],
			[2, 10],
			[4, 10],
			[6, 10],
			[8, 10],
			// bottom
			[1, 11],
			[3, 11],
			[5, 11],
			[7, 11],
			[9, 11]
		],
		sphericalFaces: []
	};
};
// https://en.wikipedia.org/wiki/Regular_icosahedron#Spherical_coordinates
