"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scamModule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function scamModule(options) {
    return (host, context) => {
        options.name = (0, core_1.basename)((0, core_1.normalize)(options.name));
        options.path = (0, core_1.dirname)((0, core_1.join)((0, core_1.normalize)(options.path), options.name));
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            options.routing
                ? (0, schematics_1.noop)()
                : (0, schematics_1.filter)((path) => !path.endsWith('-routing.module.ts.template')),
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, options), { classify: core_1.strings.classify, dasherize: core_1.strings.dasherize })),
            (0, schematics_1.move)(options.path),
        ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.externalSchematic)('@schematics/angular', 'module', options),
            (0, schematics_1.mergeWith)(templateSource, schematics_1.MergeStrategy.Overwrite),
        ]);
    };
}
exports.scamModule = scamModule;
//# sourceMappingURL=index.js.map