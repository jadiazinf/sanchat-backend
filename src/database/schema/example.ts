import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const example = pgTable('example', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  note: text('note'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
