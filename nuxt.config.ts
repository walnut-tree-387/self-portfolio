export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css'],
	compatibilityDate: '2025-05-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
});
