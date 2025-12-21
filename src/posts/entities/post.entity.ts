import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from '../enums/post-type.enum';
import { CreateMetaOptionsDto } from '../../meta-data-options/dto/create-meta-options.dto';
import { PostStatus } from '../enums/post-status.enum';
import { MetaDataOptionEntity } from '../../meta-data-options/entities/meta-data-option.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @Column({
    name: 'post_type',
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    name: 'slug',
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: PostStatus,
    nullable: false,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Column({
    name: 'content',
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    name: 'schema',
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    name: 'featured_image_url',
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    name: 'publish_on',
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: Date;

  @Column({
    name: 'tags',
    type: 'simple-array',
    nullable: true,
  })
  tags?: string[];

  @OneToOne(() => MetaDataOptionEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'meta_options_id',
    referencedColumnName: 'id',
  })
  metaOptions?: MetaDataOptionEntity;
}
