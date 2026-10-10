import "dotenv/config";
import z from "zod";

const schema = z
	.object({
		BOT_TOKEN: z
			.string()
			.regex(/^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+$/),
		APPLICATION_ID: z.string().regex(/^[0-9]+$/),
	})
	.readonly();

// add granular trace
export const Config = schema.parse(process.env);

export default Config;
