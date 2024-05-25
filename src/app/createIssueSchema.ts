import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(1).max(1000),
});
