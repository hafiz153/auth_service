import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { PaginationFilterDto } from 'src/common/dto/paginate.dto';
import { Test } from './entities/test.entity';
import { MessagePattern } from '@nestjs/microservices';
import { RedisMessageEnum } from 'src/common/redis/message';

@ApiTags('Tests') // Group APIs under "Tests"
@Controller('test')
export class TestInternalController {
  constructor() {}

  @MessagePattern({cmd:RedisMessageEnum.TEST})
  async create(@Body() createTestDto:any ): Promise<any> {
    console.log({createTestDto})
    return await "called"
  }

  
}
