export const createIcosahedron = function () {
	return {
		// radians
		// radius rho, inclination theta, azimuth phi
		sphericalVertices: [
			[1, 0, 0],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 0],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 1],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 2],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 3],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 4],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 5],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 6],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 7],
			[1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 8],
			[1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 9],
			[1, Math.PI, 0]
		],
		sphericalEdges: [],
		sphericalFaces: []
	};
};
// https://en.wikipedia.org/wiki/Regular_icosahedron#Spherical_coordinates
