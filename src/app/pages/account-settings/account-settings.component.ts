import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})

export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService  ) { }

  ngOnInit() {
    this.placeCheck();
  }

  changeColor( theme: string, link: any) {

    // Get theme
    this.checkColor(link);

    // Apply theme saved
    this._settings.applyThema( theme );

  }

  checkColor( link: any) {

    let selector: any = document.getElementsByClassName('selector');
    for ( let ref of selector ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  placeCheck() {

    let selector: any = document.getElementsByClassName('selector');
    let theme = this._settings.settingsThema.theme;

    for ( let ref of selector ) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }

  }
}
