import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    const result = await this.db.query('SELECT * FROM categories ORDER BY id DESC');
    return result.rows;
  }

  async findOne(id: number) {
    const result = await this.db.query('SELECT * FROM categories WHERE id = $1', [id]);
    return result.rows[0];
  }

  async create(dto: CreateCategoryDto) {
    const result = await this.db.query(
      'INSERT INTO categories (name) VALUES ($1) RETURNING *',
      [dto.name],
    );
    return result.rows[0];
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const result = await this.db.query(
      'UPDATE categories SET name = $1 WHERE id = $2 RETURNING *',
      [dto.name, id],
    );
    return result.rows[0];
  }

  async remove(id: number) {
    const result = await this.db.query(
      'DELETE FROM categories WHERE id = $1 RETURNING *',
      [id],
    );
    return result.rows[0];
  }
}