export type ExperienceCategory = 'Experience' | 'Education';

export interface ExperienceItem {
	id: string;
	period: string;
	category: ExperienceCategory;
	title: string;
	institution: string;
	detail?: string;
	placeholder: boolean;
}

// TODO: replace with real content. Every entry below is a structural placeholder.
export const experienceItems: ExperienceItem[] = [
	{
		id: 'experience-placeholder-01',
		period: 'Dates',
		category: 'Experience',
		title: 'Research position to be added',
		institution: 'Organization or laboratory to be added',
		placeholder: true,
	},
	{
		id: 'education-placeholder-01',
		period: 'Dates',
		category: 'Education',
		title: 'Degree and field to be added',
		institution: 'Institution to be added',
		placeholder: true,
	},
	{
		id: 'education-placeholder-02',
		period: 'Dates',
		category: 'Education',
		title: 'Degree and field to be added',
		institution: 'Institution to be added',
		placeholder: true,
	},
];
