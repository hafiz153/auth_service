import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModule } from './role/role.module';
import { TestModule } from './test/test.module';
import config from './config';
import { SubscriptionPlanModule } from './subscriptionPlan/subscriptionPlan.module';
import { CustomFlexModule } from './customFlex/customFlex.module';
import { MicroServiceModule } from './common/redis/microserviceModule';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURL),
    MicroServiceModule.register(config.redisURL),
    AuthModule,
    UsersModule,
    RoleModule,
    TestModule,
    SubscriptionPlanModule,
    CustomFlexModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
