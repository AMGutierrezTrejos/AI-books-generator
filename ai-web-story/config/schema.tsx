import { pgTable, serial, text, varchar, json } from "drizzle-orm/pg-core";

export const StoryData = pgTable("storyData", {
  id: serial("id").primaryKey(),
  storyId: varchar("storyId"),
  storySubject: text("storySubject"),
  storyType: varchar("storyType"),
  ageGroup: varchar("ageGroup"),
  imageStyle: varchar("imageStyle"),
  output: json("output"),
  coverImage: varchar("coverImage"),
});


// para adicionar novas colunas de datos, como coverimage, adicionarlas o modificar una existente y usar el comando npm run db:push, asi, cuando se use npm run db:studio, la DB se actualizara.