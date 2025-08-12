import db from "../configs/db";
import { generateId } from "../utils/id";

const SAMPLE_CATEGORIES = [
  { name: "Food", value: "food" },
  { name: "Rent", value: "rent" },
  { name: "Travel", value: "travel" },
  { name: "Daily necessities", value: "necessities" },
  { name: "Tea", value: "tea" },
];

SAMPLE_CATEGORIES.forEach(async (cat) => {
  await db.parameterizedQuery(
    `
    INSERT INTO categories(id, created_at, updated_at, name, value)
    VALUES($1, $2, $3, $4, $5)
    `,
    [generateId("CATEGORY_"), new Date(), new Date(), cat.name, cat.value]
  );
});
