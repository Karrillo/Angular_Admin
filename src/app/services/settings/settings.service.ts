import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

 settingsThema: Settings = {
   themeUrl: 'assets/css/colors/default.css',
   theme: 'default'
 };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
   }

  saveSettings() {

    localStorage.setItem( 'settingsLocal', JSON.stringify( this.settingsThema ) );

  }

  loadSettings() {

    if ( localStorage.getItem('settingsLocal') ) {

      // If not exist a theme, the load the theme default
      this.settingsThema = JSON.parse( localStorage.getItem('settingsLocal') );
      this.applyThema(this.settingsThema.theme);

    }

  }

  applyThema( theme: string ) {

    let url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    // Save on localstore theme
    this.settingsThema.theme = theme;
    this.settingsThema.themeUrl = url;
    this.saveSettings();
  }

}

// Inferfaces
interface Settings {
  themeUrl: string;
  theme: string;
}
