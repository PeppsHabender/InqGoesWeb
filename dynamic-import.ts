import fs from "fs";
import path from "path";
import { Plugin } from "vite";

interface DynamicImportPluginOptions {
    folder: string;
    destination?: string;
    moduleName: string;
    extensions?: string[];
}

export default function imageListPlugin({
    folder,
    destination,
    moduleName,
    extensions,
}: DynamicImportPluginOptions): Plugin {
    return {
        name: "dynamic-import",

        resolveId(id) {
            if (id === `virtual:${moduleName}`) {
                return id;
            }
        },

        load(id) {
            if (id !== `virtual:${moduleName}`) {
                return;
            }

            const dirPath = path.resolve(process.cwd(), folder);
            let files: string[] = [];

            try {
                files = fs
                    .readdirSync(dirPath)
                    .filter((file) =>
                        (extensions ?? []).includes(
                            path.extname(file).toLowerCase(),
                        ),
                    )
                    .map((file) => path.join(destination ?? folder, file));
            } catch (err) {
                this.error(
                    `Error reading files from folder "${folder}": ${err}`,
                );
            }

            return `export default ${JSON.stringify(files)};`;
        },
    };
}
