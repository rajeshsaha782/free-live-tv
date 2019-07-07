import { Component } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 public channel:SafeResourceUrl;
 constructor (public sanitizer:DomSanitizer) {
}
 ngOnInit() {
  this.channel =  this.sanitizer.bypassSecurityTrustResourceUrl("http://freeiptv.ga/tv2.php?channel=0-9-zeebangla");      
}

}
