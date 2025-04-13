import { Component } from '@angular/core';

@Component({
    selector: 'app-setup-page',
    templateUrl: './setup-page.component.html',
    styleUrls: ['./setup-page.component.scss'],
    standalone: false
})
export class SetupPageComponent {
  themeConfig = '{\n' +
    '   "styles": [\n' +
    '       "node_modules/@gboutte/glassui/styles/theme.scss"\n' +
    '   ],\n' +
    '}';

  bashInstall = 'npm install @gboutte/glassui';
}
