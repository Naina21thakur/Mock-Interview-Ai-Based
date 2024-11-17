/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:2dgNu8epJyDa@ep-lingering-scene-a5sxqafq.us-east-2.aws.neon.tech/AI-INTERVIEW?sslmode=require',
    }
  };