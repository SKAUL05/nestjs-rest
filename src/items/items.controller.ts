import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { CreateItem } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItem): Promise<Item> {
    return this.itemsService.createItem(createItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return this.itemsService.deleteItem(id);
  }
  @Put(':id')
  async update(
    @Body() updateItemDto: CreateItem,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemsService.updateItem(id, updateItemDto);
  }
}
