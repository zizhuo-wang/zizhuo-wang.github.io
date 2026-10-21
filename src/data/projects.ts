export type ProjectLinkLabel = 'Paper' | 'Project' | 'Code' | 'Code (coming soon)' | 'Video' | 'Dataset';

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
	/** Native media dimensions, when known, reserve space before loading. */
	width?: number;
	height?: number;
	/** Placeholder/loading ratio (e.g. 4 / 3); loaded media uses its native ratio. */
	aspectRatio?: number;
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
			type: 'video',
			src: `${assetBase}videos/publications/tactilestep-hero.mp4`,
			poster: `${assetBase}images/publications/tactilestep-poster.webp`,
			width: 1920,
			height: 1080,
			alt: 'TactileStep humanoid locomotion demonstration with sole-pressure feedback',
			fit: 'contain',
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
		awards: ['Spotlight (3.4%)'],
		links: [
			{ label: 'Paper', href: 'https://arxiv.org/abs/2609.28959' },
			{ label: 'Project', href: 'https://tactilestep.github.io/' },
			{ label: 'Code (coming soon)' },
		],
		featured: true,
		placeholder: false,
	},
	{
		id: 'echo-in-the-steps',
		title: 'Echo in the Steps: Learning Perceptive Humanoid Parkour with Gated Memory',
		description:
			'An end-to-end humanoid parkour framework combines foothold saliency, gated temporal memory, and alternating-step regularization to achieve precise foot placement on sparse terrain using onboard depth sensing.',
		media: {
			type: 'video',
			src: `${assetBase}videos/publications/echo-in-the-steps.mp4`,
			poster: `${assetBase}images/publications/echo-in-the-steps-poster.webp`,
			width: 1280,
			height: 720,
			alt: 'Echo in the Steps humanoid parkour demonstration on sparse terrain',
			fit: 'contain',
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
		links: [
			{ label: 'Paper', href: 'https://arxiv.org/abs/2609.28960' },
			{ label: 'Project', href: 'https://echo-in-the-steps.github.io/' },
			{ label: 'Code (coming soon)' },
		],
		featured: true,
		placeholder: false,
	},
	{
		id: 'customized-origami-end-effectors',
		title:
			'Computational Design of Customized Tendon-Driven Origami End-Effectors for Enveloping Grasp',
		description:
			'An end-to-end framework uses reinforcement learning to design object-specific origami grippers from target meshes, translating optimized geometries into manufacturable crease patterns and single-motor tendon-driven hardware for reliable, high-load enveloping grasps.',
		media: {
			type: 'video',
			src: `${assetBase}videos/publications/origami-gripper.mp4`,
			poster: `${assetBase}images/publications/origami-gripper-poster.webp`,
			width: 1280,
			height: 960,
			alt: 'Customized tendon-driven origami gripper demonstrating enveloping grasps',
			fit: 'contain',
		},
		authors: [
			{ name: 'Zizhuo Wang', isSiteOwner: true },
			{ name: 'Peiwen Yang' },
			{ name: 'Shuguang Li' },
		],
		venue: 'arXiv preprint',
		year: '2026',
		publicationStatus: 'RA-L revise and resubmit',
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
			width: 1600,
			height: 779,
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
