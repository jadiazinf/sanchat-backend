import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ExamplesService } from './examples.service';

@Controller('examples')
export class ExamplesController {
  constructor(private readonly svc: ExamplesService) {}

  @Get()
  all() {
    return this.svc.findAll();
  }

  @Get(':id')
  byId(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findById(id);
  }
}
