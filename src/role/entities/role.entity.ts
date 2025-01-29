import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Role extends Document {
  @Prop({ required: true })
  name: string;
  
  @Prop({ type: [String], default: [] })
  permissions: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
