import { Component, Injector } from '@angular/core';
import { AppController } from './app.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends AppController {


  title = 'frontend';
  color = "green";
  constructor(public inj: Injector) // public appService: AppService
  {
    super(inj);
    // this.loadScripts();
  }
  // private loadScripts() {
  //   const dynamicScripts = [
  //     'assets/plugins/jqueryCalender/js/jquery.plugin.min.js',
  //     'assets/plugins/jqueryCalender/js/jquery.calendars.js',
  //     'assets/plugins/jqueryCalender/js/jquery.calendars.plus.js',
  //     'assets/plugins/jqueryCalender/js/jquery.calendars.nepali.js',
  //     'assets/plugins/jqueryCalender/js/jquery.calendars.picker.js',
  //   ];
  //   for (let i = 0; i < dynamicScripts.length; i++) {
  //     const node = document.createElement('script');
  //     node.src = dynamicScripts[i];
  //     node.type = 'text/javascript';
  //     node.async = false;
  //     node.charset = 'utf-8';
  //     document.getElementsByTagName('head')[0].appendChild(node);
  //   }
  // }
}
