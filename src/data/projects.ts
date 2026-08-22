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

const placeholderAuthors: ProjectAuthor[] = [
	{ name: 'Author A' },
	{ name: 'Zizhuo Wang', isSiteOwner: true },
	{ name: 'Author B' },
];

const assetBase = import.meta.env.BASE_URL;

export const projects: Project[] = [
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
	{
		id: 'project-placeholder-02',
		title: 'Selected research project title 02',
		description:
			'A concise project summary will explain the research question, method, and main result in one or two sentences.',
		media: {
			type: 'placeholder',
			alt: 'Placeholder for selected research project 02 media',
		},
		authors: placeholderAuthors,
		venue: 'Venue to be added',
		year: 'Year',
		awards: ['Award to be added', 'Additional recognition to be added'],
		links: [
			{ label: 'Paper' },
			{ label: 'Project' },
			{ label: 'Video' },
			{ label: 'Dataset' },
		],
		featured: true,
		placeholder: true,
	},
	{
		id: 'project-placeholder-03',
		title: 'Selected research project title 03',
		description:
			'A concise project summary will explain the research question, method, and main result in one or two sentences.',
		media: {
			type: 'placeholder',
			alt: 'Placeholder for selected research project 03 media',
		},
		authors: placeholderAuthors,
		venue: 'Venue to be added',
		year: 'Year',
		links: [
			{ label: 'Paper' },
			{ label: 'Project' },
			{ label: 'Code' },
		],
		featured: true,
		placeholder: true,
	},
];
