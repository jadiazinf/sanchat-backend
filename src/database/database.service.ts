import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DatabaseService.name);
  private client: Client;
  private _db: NodePgDatabase;

  constructor(private readonly config: ConfigService) {
    const connectionString = this.config.get<string>('DATABASE_URL')!;
    const isProd = this.config.get<string>('NODE_ENV') === 'production';
    this.client = new Client({ connectionString, ssl: isProd ? { rejectUnauthorized: false } : undefined });
    this._db = drizzle(this.client);
  }

  async onModuleInit() { await this.client.connect(); this.logger.log('Database connected'); }
  async onModuleDestroy() { await this.client.end(); this.logger.log('Database disconnected'); }

  get db() { return this._db; }
  get rawClient() { return this.client; }
}
