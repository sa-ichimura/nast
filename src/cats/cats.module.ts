import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  //幾つかのモジュール間でインスタンスを共有したい場合はここに書く
  exports: [CatsService],
})
export class CatsModule {}
