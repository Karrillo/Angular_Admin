import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      tittle: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { tittle: 'Dashdoard', url: '/dashboard' },
        { tittle: 'ProgressBar', url: '/progress' },
        { tittle: 'Graphics', url: '/graphics' },
      ]
    }
  ];

  constructor() { }
}
