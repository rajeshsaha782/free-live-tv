import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { channel } from './Channel';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public current_channel = {};
  public channel_list: any[];
  public fcolor = this.getRandomColor();
  public current_channel_id;
  public isLoading = false;
  constructor(public sanitizer: DomSanitizer, public _dataService: DataService) {
  }
  ngOnInit() {
    this.current_channel_id = 1;
    this.channel_list = this._dataService.getAllChannelList();
    // console.log(Object.keys(this.current_channel).length);
    // console.log(this.current_channel['url'])

    // let current = this._dataService.getChannelById(this.current_channel_id);
    // this.current_channel['url'] = this.sanitizer.bypassSecurityTrustResourceUrl("http://freeiptv.ga/tv2.php?channel=0-9-zeebangla");
    // this.current_channel['name'] = 'Zee';
    // this.current_channel['div_width'] = '1060px';
    // this.current_channel['iframe-margin-top'] = '-150px';
     

    // this.channel['url'] =  this.sanitizer.bypassSecurityTrustResourceUrl("http://www.jagobd.com/jamunatv");      
    // this.channel['width'] = '660px';
    // this.channel['iframe-margin-top'] = '-100px';

    // this.channel['url'] =  this.sanitizer.bypassSecurityTrustResourceUrl("http://www.jagobd.com/atn-bangla");      
    // this.channel['width'] = '660px';
    // this.channel['iframe-margin-top'] = '-100px';

    // console.log(this.channel)
    this.toggleColor();
  }

  change_channel(current) {
    // console.log(current.url);
    let ongoing;
    if(this.current_channel['url']){
      ongoing = this.current_channel['url'].changingThisBreaksApplicationSecurity
    }
 
    if(current.url != ongoing){
      this.isLoading = true;
      this.current_channel['div_width'] = '0px';
      this.current_channel['div_height'] = '0px';
      this.current_channel_id = current.id;
      this.current_channel['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(current.url);
      this.current_channel['name'] = current.name;
    }

    // console.log(this.current_channel)
  }
  load(){
    this.isLoading = true;
    console.log('loading...',this.current_channel_id);
    let current:any = this._dataService.getChannelById(this.current_channel_id)[0];
    this.current_channel['div_width'] = current.div_width;
    this.current_channel['div_height'] = current.div_height;
    this.current_channel['iframe-margin-top'] = current.iframe_margin_top;
    this.isLoading = false;
  }

  toggleColor() {
    // console.log("color chaged!!!")
    setTimeout(() => {
      this.fcolor = this.getRandomColor();
      this.toggleColor();
    }, 1000);
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

}
