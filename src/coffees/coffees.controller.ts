import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(@Res() response): string {
    return response.status(200).send('This action returns all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
