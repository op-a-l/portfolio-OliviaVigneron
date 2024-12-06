export interface GalleryData {
	id: string;
	titre: string;
	image: string;
	imageAlt?: string;
	description: string;
	date: string;
}

export let galleryData = [
	{
		id: 'coucherDeSoleil',
		titre: 'Coucher de Soleil',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.booska-p.com%2Fwp-content%2Fuploads%2F2022%2F07%2FJeanJass-Visu-News-1.jpg&f=1&nofb=1&ipt=d662af7fb2b814151a51d90994b45f295a0dacd550d7d754a0a86394309c915d&ipo=images',
		description: 'Une magnifique vue sur un coucher de soleil au bord de la mer.',
		date: '2024-11-30'
	},
	{
		id: 'foretMysterieuse',
		titre: 'Forêt Mystérieuse',
		image: 'https://via.placeholder.com/300x200.png?text=For%C3%AAt+Myst%C3%A9rieuse',
		description: "Un chemin caché au milieu d'une forêt dense.",
		date: '2024-11-28'
	},
	{
		id: 'montagneEnneigees',
		titre: 'Montagnes Enneigées',
		image: 'https://via.placeholder.com/300x200.png?text=Montagnes+Enneig%C3%A9es',
		description: 'Une chaîne de montagnes enneigées sous un ciel bleu.',
		date: '2024-11-25'
	},
	{
		id: 'villeNocturne',
		titre: 'Ville Nocturne',
		image: 'https://via.placeholder.com/300x200.png?text=Ville+Nocturne',
		description: "Les lumières scintillantes d'une ville animée la nuit.",
		date: '2024-11-20'
	},
	{
		id: 'lacAuReveil',
		titre: 'Lac au Réveil',
		image: 'https://via.placeholder.com/300x200.png?text=Lac+au+R%C3%A9veil',
		description: 'Un lac paisible entouré de montagnes au lever du soleil.',
		date: '2024-11-15'
	}
];
