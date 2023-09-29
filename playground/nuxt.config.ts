export default defineNuxtConfig({
	modules: ['dayjs-nuxt', '../src/module'],

	dayjsBusinessDays: {
		holidays: ['2022-11-01'],
		additionalWorkingDays: ['2022-10-15'],
		// holidayFormat: 'YYYY-MM-DD', // moved to default
		// additionalWorkingDayFormat: 'YYYY-MM-DD', // moved to default
		debug: true,
		verbose: true,
	},

	devtools: { enabled: false },

	vite: {
		clearScreen: false,
	},
})
