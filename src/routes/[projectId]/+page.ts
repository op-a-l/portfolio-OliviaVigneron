import { galleryData, Projects } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const idtoGet = params.projectId;
	const singleData = galleryData.find((galleryData) => galleryData.id == idtoGet);
	return { singleData };
};
