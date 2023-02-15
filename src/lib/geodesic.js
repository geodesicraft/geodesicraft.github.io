import { domeData } from '$lib/stores.js';
import Icosahedron from '$lib/icosahedron';

export function createGeodesic() {
	let icosahedron = new Icosahedron();

	console.log(icosahedron);

	domeData.set(icosahedron);
}
