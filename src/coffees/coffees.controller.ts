import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return `This action updates a #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return `This action removes #${id} coffee`;
  }

}
