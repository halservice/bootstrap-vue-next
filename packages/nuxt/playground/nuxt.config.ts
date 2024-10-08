export default defineNuxtConfig({
  modules: ['../src/module'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  bootstrapVueNext: {
    directives: {all: true},
    plugin: {
      components: {
        BAlert: {
          variant: 'danger',
        },
      },
    },
  },
  compatibilityDate: '2024-08-30',
})
