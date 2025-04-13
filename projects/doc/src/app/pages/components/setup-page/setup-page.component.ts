import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { Highlight } from 'ngx-highlightjs';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-setup-page',
    templateUrl: './setup-page.component.html',
    styleUrls: ['./setup-page.component.scss'],
    imports: [CardComponent, Highlight, RouterLink]
})
export class SetupPageComponent {
  themeConfig = '{\n' +
    '   "styles": [\n' +
    '       "node_modules/@gboutte/glassui/styles/theme.scss"\n' +
    '   ],\n' +
    '}';

  bashInstall = 'npm install @gboutte/glassui';
}
