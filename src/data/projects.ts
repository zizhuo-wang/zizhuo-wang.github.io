export type ProjectLinkLabel = 'Paper' | 'Project' | 'Code' | 'Video' | 'Dataset';

export interface ProjectAuthor {
	name: string;
	isSiteOwner?: boolean;
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

// TODO: replace with real content. Every entry below is a structural placeholder.
export const projects: Project[] = [
	{
		id: 'project-placeholder-01',
		title: 'Selected research project title 01',
		description:
			'A concise project summary will explain the research question, method, and main result in one or two sentences.',
		media: {
			type: 'placeholder',
			alt: 'Placeholder for selected research project 01 media',
		},
		authors: placeholderAuthors,
		venue: 'Venue to be added',
		year: 'Year',
		publicationStatus: 'Publication status to be added',
		awards: ['Award or distinction to be added'],
		links: [
			{ label: 'Paper' },
			{ label: 'Project' },
			{ label: 'Code' },
			{ label: 'Video' },
		],
		featured: true,
		placeholder: true,
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
