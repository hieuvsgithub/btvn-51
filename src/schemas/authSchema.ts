import { z } from "zod";

const authSchema = z.object({
  name: z.string().trim().min(1, { message: "ko duoc de trong o nay" }),
  password: z.string().trim().min(6, { message: "toi thieu 6 ki tu" }),
  email: z.string().trim().min(1, { message: "ko duoc de trong o nay" }),
});

export default authSchema;
