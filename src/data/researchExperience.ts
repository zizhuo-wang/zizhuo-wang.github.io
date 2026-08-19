export interface ResearchExperienceItem {
	id: string;
	period: string;
	title: string;
	institution: string;
	detail?: string;
	placeholder: boolean;
}

// TODO: replace with real research experience content.
export const researchExperienceItems: ResearchExperienceItem[] = [
	{
		id: 'research-experience-placeholder-01',
		period: 'Dates',
		title: 'Research position to be added',
		institution: 'Organization or laboratory to be added',
		placeholder: true,
	},
];
