import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodos1723654686592 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table todos (
        id bigserial primary key,
        name text,
        completed boolean not null default false
      );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table todos;`);
  }
}
