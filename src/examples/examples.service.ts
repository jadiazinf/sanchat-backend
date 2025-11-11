import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { example } from '../database/schema/example';
import { eq } from 'drizzle-orm';

@Injectable()
export class ExamplesService {
  constructor(private readonly dbx: DatabaseService) {}

  async findAll() {
    return this.dbx.db.select().from(example);
  }

  async findById(id: number) {
    const rows = await this.dbx.db
      .select()
      .from(example)
      .where(eq(example.id, id));
    return rows[0] ?? null;
  }
}
