import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './entities/role.entity';
import { Permission, PermissionSchema } from './entities/permission.entity';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: Role.name, schema: RoleSchema },
        { name: Permission.name, schema: PermissionSchema },
      ]),
    ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
