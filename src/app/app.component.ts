import { Component } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 public channel:SafeResourceUrl;
 public fcolor = this.getRandomColor();
 constructor (public sanitizer:DomSanitizer) {
}
 ngOnInit() {
  this.channel =  this.sanitizer.bypassSecurityTrustResourceUrl("http://freeiptv.ga/tv2.php?channel=0-9-zeebangla");      
  this.toggleColor();
}

toggleColor(){
  console.log("color chaged!!!")
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
