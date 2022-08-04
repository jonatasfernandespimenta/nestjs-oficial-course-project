import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(): string {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
