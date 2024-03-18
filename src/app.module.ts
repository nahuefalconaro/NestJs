import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackController } from './Track/track.controller';
import { TrackService } from './Track/track.service';

@Module({
  imports: [],
  controllers: [AppController, TrackController],
  providers: [AppService, TrackService],
})
export class AppModule {}
