export const sphericalToCartesian = function (rho, theta, phi) {
	// radius, inclination, aziumuth
	const x = rho * Math.sin(theta) * Math.cos(phi);
	const y = rho * Math.sin(theta) * Math.sin(phi);
	const z = rho * Math.cos(theta);
	return [x, y, z];
};
// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
