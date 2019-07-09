import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public channel_list: any[];
  constructor() {
    this.channel_list = [];
    this.channel_list.push({ id: 1, name: 'Zee Bangla', logo: 'assets\\Zeebangla.png', url: 'http://freeiptv.ga/tv2.php?channel=0-9-zeebangla', div_width: '1060px',div_height:'600px', iframe_margin_top: '-150px' });
    this.channel_list.push({ id: 3, name: 'Zee Bangla Cinema', logo: 'assets/zeebangla_cinama.jpg', url: 'http://freeiptv.ga/tv2.php?channel=0-9-zeebanglacinema', div_width: '1060px',div_height:'600px', iframe_margin_top: '-150px' });
    this.channel_list.push({ id: 2, name: 'JamunaTv', logo: 'assets\\jamunatv.png', url: 'http://www.jagobd.com/jamunatv', div_width: '660px',div_height:'500px', iframe_margin_top: '-100px' });

  }

  public getChannelById(id){
    return this.channel_list.filter(x => x.id == id);
  }

  public getAllChannelList(){
    return this.channel_list;
  }

}
