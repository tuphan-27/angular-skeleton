import {
  MergeStrategy,
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  externalSchematic,
  filter,
  mergeWith,
  move,
  noop,
  applyTemplates,
  url,
} from '@angular-devkit/schematics'
import {
  basename,
  dirname,
  join,
  normalize,
  strings,
} from '@angular-devkit/core'

import { Schema } from './schema'

export function scamModule(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    options.name = basename(normalize(options.name))
    options.path = dirname(
      join(normalize(options.path as string), options.name),
    )

    const templateSource = apply(url('./files'), [
      options.routing
        ? noop()
        : filter((path) => !path.endsWith('-routing.module.ts.template')),
      applyTemplates({
        ...options,
        classify: strings.classify,
        dasherize: strings.dasherize,
      }),
      move(options.path),
    ])

    return chain([
      externalSchematic('@schematics/angular', 'module', options),
      mergeWith(templateSource, MergeStrategy.Overwrite),
    ])
  }
}
