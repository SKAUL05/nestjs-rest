import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItem } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Get All Items');
  }
  @Post()
  create(@Body() createItemDto: CreateItem): string {
    return `Name : ${createItemDto.name}`;
  }
}
