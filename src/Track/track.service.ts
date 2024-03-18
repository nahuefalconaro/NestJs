import { Injectable } from '@nestjs/common';
export interface iTrack{
    id:number;
    title:string;
    duration:number;
    artist:string;
  }
  export const tracks: iTrack[] = [
    { id:1, title:'Last Night', duration: 163, artist: 'Morgan Wallen' },
    { id:2, title:'Fast Car', duration: 385, artist: 'Luke Combs'},
    { 
      id:3, 
      title:'La Cancion De Las  Bestias', 
      duration: 249, 
      artist: 'Fito Paez',
    },
    { id:4, title:'Calm Down', duration: 240, artist: 'Rema & Selena Gomez' },
    { 
      id:5, 
      title:'I Can See You', 
      duration: 273, 
      artist: 'Taylor Swift', 
    },
    { id:6, title:'Flowers', duration: 200, artist: 'Miley Cyrus' },
    { id:7, title:'Fukumean', duration: 125, artist: 'Gunna' },
    { 
      id:8, 
      title:'All My Life', 
      duration: 244, 
      artist: 'Lil Durk Featuring J. Cole',
    },
    { id:9, title:'Cruel Summer', duration: 178, artist: 'Taylor Swift' },
    { 
      id:10, 
      title:'Karma', 
      duration: 205, 
      artist: 'Taylor Swift Featuring Ice Spice',
    },
    { id:11, title:'Kill Bill', duration: 153, artist: 'SZA' },
    { id:12, title:'Snooze', duration: 201, artist: 'SZA'},
    { id:13, title:'Favorite Song', duration: 208, artist: 'Toosii' },
    { 
      id:14, 
      title:'Creepin', 
      duration: 222, 
      artist: 'Metro Boomin, The Weekend & 21 Savage',
    },
    { 
      id:15, 
      title:'Mine', 
      duration: 232, 
      artist: 'Taylor Swift',
    },
    { 
      id:16, 
      title:'Back To December', 
      duration: 295, 
      artist: 'Taylor Swift',
    },
    { id:17, title:'Need A Favor', duration: 197, artist: 'Jelly Roll' },
    { id:18, title:'Sure Thing', duration: 195, artist: 'Miguel' },
    { 
      id:19, 
      title:'Enchanted', 
      duration: 352, 
      artist: 'Taylor Swift',
    },
    { id:20, title:'Anti-Hero', duration: 201, artist: 'Taylor Swift' },
  ]
  
  @Injectable()
  export class TrackService {
    getTracks(): iTrack[] {
      return tracks;
    }

    getTrackById(id: number): iTrack {
        //version 1
        return tracks.find((e)=>{
            return e.id == id
        })
        //version 2
        //let track:iTrack;
        // tracks.forEach(e=>{
        //     if(e.id == id){
        //         console.log(e)
        //         track = e
        //     }
        // })
        //return track;
      }
  }