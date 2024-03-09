import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItem } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Get All Items');
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item :${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItem): string {
    return `Name : ${createItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete : ${id}`;
  }
  @Put(':id')
  update(@Body() updateItemDto: CreateItem, @Param('id') id): string {
    return `Update : ${id} - Name : ${updateItemDto.name}`;
  }
}
