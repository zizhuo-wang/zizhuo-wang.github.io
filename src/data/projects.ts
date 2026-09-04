export type ProjectLinkLabel = 'Paper' | 'Project' | 'Code' | 'Video' | 'Dataset';

export interface ProjectAuthor {
	name: string;
	isSiteOwner?: boolean;
	equalContribution?: boolean;
}

export interface ProjectLink {
	label: ProjectLinkLabel;
	href?: string;
}

export interface ProjectMedia {
	type: 'image' | 'video' | 'placeholder';
	src?: string;
	poster?: string;
	alt: string;
	fit?: 'cover' | 'contain';
}

export interface Project {
	id: string;
	title: string;
	description: string;
	media: ProjectMedia;
	authors: ProjectAuthor[];
	venue?: string;
	year?: string;
	publicationStatus?: string;
	awards?: string[];
	links: ProjectLink[];
	featured: boolean;
	placeholder: boolean;
}

const assetBase = import.meta.env.BASE_URL;

export const projects: Project[] = [
	{
		id: 'tactilestep',
		title:
			'TactileStep: Sole Tactile Learning for Regulating Foot–Terrain Interaction in Humanoid Locomotion',
		description:
			'TactileStep integrates deployable sole-pressure feedback with phase-aware reinforcement learning to regulate foot–terrain contact, enabling softer landings and more stable support during humanoid locomotion.',
		media: {
			type: 'placeholder',
			alt: 'Video preview forthcoming for TactileStep',
		},
		authors: [
			{ name: 'Zizhuo Wang', isSiteOwner: true, equalContribution: true },
			{ name: 'Ming-Ju Lee', equalContribution: true },
			{ name: 'Shaoting Zhu' },
			{ name: 'Haozhe Lou' },
			{ name: 'Hang Zhao' },
			{ name: 'Yiming Li' },
		],
		venue: 'CoRL',
		year: '2026',
		publicationStatus: 'Accepted',
		links: [{ label: 'Paper' }],
		featured: true,
		placeholder: false,
	},
	{
		id: 'echo-in-the-steps',
		title: 'Echo in the Steps: Learning Perceptive Humanoid Parkour with Gated Memory',
		description:
			'An end-to-end humanoid parkour framework combines foothold saliency, gated temporal memory, and alternating-step regularization to achieve precise foot placement on sparse terrain using onboard depth sensing.',
		media: {
			type: 'placeholder',
			alt: 'Video preview forthcoming for Echo in the Steps',
		},
		authors: [
			{ name: 'Ming-Ju Lee', equalContribution: true },
			{ name: 'Zizhuo Wang', isSiteOwner: true, equalContribution: true },
			{ name: 'Shaoting Zhu' },
			{ name: 'Haozhe Lou' },
			{ name: 'Hang Zhao' },
			{ name: 'Yiming Li' },
		],
		venue: 'CoRL',
		year: '2026',
		publicationStatus: 'Accepted',
		links: [{ label: 'Paper' }],
		featured: true,
		placeholder: false,
	},
	{
		id: 'simrecon',
		title: 'SimRecon: SimReady Compositional Scene Reconstruction from Real Videos',
		description:
			'SimRecon reconstructs object-centric, simulation-ready scenes from real videos through a Perception–Generation–Simulation pipeline designed for high visual fidelity and physical plausibility.',
		media: {
			type: 'image',
			src: `${assetBase}images/publications/simrecon-teaser.webp`,
			alt: 'SimRecon pipeline for reconstructing simulation-ready object-centric scenes from real videos',
			fit: 'contain',
		},
		authors: [
			{ name: 'Chong Xia', equalContribution: true },
			{ name: 'Kai Zhu', equalContribution: true },
			{ name: 'Zizhuo Wang', isSiteOwner: true },
			{ name: 'Fangfu Liu' },
			{ name: 'Zhizheng Zhang' },
			{ name: 'Yueqi Duan' },
		],
		venue: 'CVPR',
		year: '2026',
		publicationStatus: 'Accepted',
		awards: ['Highlight'],
		links: [
			{ label: 'Paper', href: 'https://arxiv.org/abs/2603.02133' },
			{ label: 'Project', href: 'https://xiac20.github.io/SimRecon/' },
			{ label: 'Code', href: 'https://github.com/xiac20/SimRecon' },
		],
		featured: true,
		placeholder: false,
	},
];
