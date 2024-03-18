import { Controller, Get, Post,Delete, Param} from '@nestjs/common';
import { TrackService, iTrack } from './track.service';

@Controller('api/track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): iTrack[] {
    return this.trackService.getTracks();
  }

  @Get('/:id')//api/track/{id}
  getTrackById(@Param('id') id:number):iTrack{
    return this.trackService.getTrackById(id);
  }

  @Get(':id/:otroParam2/algoFijo/:param3/algoFijo2')//api/track/{id}
  getTrackById2(@Param() params:any):iTrack{
    console.log('Param1:', params.id);
    console.log('Param2:', params.otroParam2);
    console.log('Param3:', params.param3);
    return this.trackService.getTrackById(params.id);
  }

  @Post()
  createTracks(){}

  @Delete()
  deleteTracks(){}
}
