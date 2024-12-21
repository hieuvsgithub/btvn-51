import * as z from "zod";
const actionSchema = z.object({
  title: z.string().trim().min(6, { message: "toi thieu 6 ki tu" }),
  price: z.number(),
  description: z.string().trim(),
});

export default actionSchema;
