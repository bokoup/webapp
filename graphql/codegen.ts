import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'graphql/schema.graphql',
    documents: ['app/**/*.tsx', 'app/**/*.ts'],
    ignoreNoDocuments: true,
    generates: {
        'app/graphql/': {
            preset: 'client',
            plugins: []
        }
    }
}
export default config
