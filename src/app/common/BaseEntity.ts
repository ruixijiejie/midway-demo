import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn({ comment: '主键，自增id', type: 'bigint' })
  id: number;
  @CreateDateColumn({ comment: '创建时间' })
  created_time: Timestamp;
  @UpdateDateColumn({ comment: '更新时间' })
  updated_time: Timestamp;
}
