import { readFile } from "node:fs/promises";
import { join } from "node:path";
import z from "zod";

const problemSetSchema = z.array(
	z.array(
		z.object({
			type: z.union([z.string("core"), z.string("extra")]),
			name: z.string(),
			url: z.string(),
			exp: z.number(),
		}),
	),
);

let cache: z.infer<typeof problemSetSchema> | null = null;
export async function loadProblemSet(root: string) {
	if (cache) {
		return cache;
	}

	const path = join(root, "..", "problemSet.json");
	const content = await readFile(path, "utf8");
	cache = problemSetSchema.parse(content);

	return cache;
}
