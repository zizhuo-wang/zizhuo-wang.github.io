export interface ResearchExperienceItem {
	id: string;
	labName: string;
	labFullName?: string;
	institution: string;
	advisorName: string;
	advisorUrl: string;
	labUrl?: string;
	researchTopic: string;
	/** ISO year-month values; null denotes an ongoing experience. */
	startDate: string;
	endDate: string | null;
	logoPath: string;
	logoAlt: string;
	logoWidth: number;
	logoHeight: number;
}

export const researchExperienceItems: ResearchExperienceItem[] = [
	{
		id: 'thusi-lab',
		labName: 'THUSI Lab',
		labFullName: 'Tsinghua Spatial Intelligence Lab',
		institution: 'College of AI, Tsinghua University',
		advisorName: 'Prof. Yiming Li',
		advisorUrl: 'https://yimingli-page.github.io/',
		labUrl: 'https://github.com/THUSI-Lab',
		researchTopic: 'Humanoid Robot Learning & Agentic Robot Self-Improvement',
		startDate: '2026-02',
		endDate: null,
		logoPath: 'images/labs/thusi-logo.png',
		logoAlt: 'THUSI Lab logo',
		logoWidth: 200,
		logoHeight: 200,
	},
	{
		id: 'ember-center',
		labName: 'EMBER Center',
		labFullName: 'Embodied Intelligence & Robotics Center',
		institution: 'University of California, Berkeley',
		advisorName: 'Prof. S. Shankar Sastry',
		advisorUrl: 'https://people.eecs.berkeley.edu/~sastry/',
		labUrl: 'https://ember-lab.eecs.berkeley.edu/',
		researchTopic: 'Robot Manipulation',
		startDate: '2026-07',
		endDate: '2026-10',
		logoPath: 'images/labs/ember-logo.png',
		logoAlt: 'EMBER Center logo',
		logoWidth: 384,
		logoHeight: 384,
	},
	{
		id: 'ivg-lab',
		labName: 'IVG Lab',
		institution: 'Department of Electronic Engineering, Tsinghua University',
		advisorName: 'Prof. Yueqi Duan',
		advisorUrl: 'https://duanyueqi.github.io/',
		researchTopic: 'Real-to-Sim Reconstruction',
		startDate: '2025-08',
		endDate: '2025-12',
		logoPath: 'images/labs/tsinghua-logo.png',
		logoAlt: 'Tsinghua University emblem, used as the institutional logo for IVG Lab',
		logoWidth: 384,
		logoHeight: 384,
	},
	{
		id: 'sglab',
		labName: 'The ShuGuang Lab (SGLab)',
		institution: 'Department of Mechanical Engineering, Tsinghua University',
		advisorName: 'Prof. Shuguang Li',
		advisorUrl: 'https://www.lisglab.com/shuguangli',
		labUrl: 'https://www.lisglab.com/',
		researchTopic: 'Computational Design & Fabrication of Origami Robots',
		startDate: '2024-10',
		endDate: '2026-10',
		logoPath: 'images/labs/sglab-logo.png',
		logoAlt: 'The ShuGuang Lab logo',
		logoWidth: 384,
		logoHeight: 326,
	},
];
