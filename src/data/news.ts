export interface NewsItem {
	id: string;
	date: string;
	text: string;
	href?: string;
	placeholder: boolean;
}

// TODO: replace with real content. Dates and announcements below are placeholders.
export const newsItems: NewsItem[] = [
	{
		id: 'news-placeholder-01',
		date: 'YYYY.MM',
		text: 'Research update placeholder — replace with a concise announcement.',
		placeholder: true,
	},
	{
		id: 'news-placeholder-02',
		date: 'YYYY.MM',
		text: 'Publication update placeholder — replace with the paper or project news.',
		placeholder: true,
	},
	{
		id: 'news-placeholder-03',
		date: 'YYYY.MM',
		text: 'Talk or presentation placeholder — replace with the event details.',
		placeholder: true,
	},
	{
		id: 'news-placeholder-04',
		date: 'YYYY.MM',
		text: 'Research milestone placeholder — replace with the verified update.',
		placeholder: true,
	},
	{
		id: 'news-placeholder-05',
		date: 'YYYY.MM',
		text: 'Community update placeholder — replace with the verified announcement.',
		placeholder: true,
	},
];
