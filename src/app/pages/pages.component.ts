import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';

declare function init_plugings();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor( public _settings: SettingsService) { }

  ngOnInit() {
    init_plugings();
  }

}
