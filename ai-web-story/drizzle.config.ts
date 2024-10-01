import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://MauroTre_owner:Uz6kHLaubEd8@ep-little-smoke-a5rsnazj.us-east-2.aws.neon.tech/AI%20Story%20book?sslmode=require",
  },
  verbose: true,
  strict: true,
});
