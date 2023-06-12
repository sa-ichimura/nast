import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from 'src/dto/cats/create-cat-dto';
import { UpdateCatDto } from 'src/dto/cats/update-cat-dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  //requestはHTTPリクエストを表す
  //パラメーター、HTTPヘッダー、本文のプロパティを持つ
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `this action return #${id} cat`;
  }

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateCatDto: UpdateCatDto) {
    return `this action update a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action remove a #${id} cat`;
  }
}
