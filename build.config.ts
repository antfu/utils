import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: 'node16',
  clean: true,
  externals: [],
  rollup: {
    inlineDependencies: true,
    dts: {
      respectExternal: true,
    },
  },
})
