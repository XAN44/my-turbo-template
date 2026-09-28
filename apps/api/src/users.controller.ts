import { Controller, Get } from '@nestjs/common';
import { UsersResponseSchema, type UsersResponse } from '@repo/contracts';
import { PrismaService } from './prisma/prisma.service';

@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<UsersResponse> {
    const users = await this.prisma.user.findMany();
    return UsersResponseSchema.parse(users);
  }
}
