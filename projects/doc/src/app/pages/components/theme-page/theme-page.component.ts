import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { Highlight } from 'ngx-highlightjs';

@Component({
    selector: 'gd-theme-page',
    templateUrl: './theme-page.component.html',
    styleUrls: ['./theme-page.component.scss'],
    imports: [CardComponent, Highlight]
})
export class ThemePageComponent {
  themeStyle = "\n" +
    ":root{\n" +
    "\n" +
    "  // FONT\n" +
    "  --font-family: 'Roboto', sans-serif;\n" +
    "\n" +
    "\n" +
    "  --color-black: #2D3436;\n" +
    "\n" +
    "  //COLORS\n" +
    "  --color-white-rgb: 255, 255, 255;\n" +
    "  --color-red-rgb: 238,82,83;\n" +
    "  --color-yellow-rgb: 254,202,87;\n" +
    "  --color-green-rgb: 126,211,33;\n" +
    "  --color-blue-rgb: 46,134,222;\n" +
    "  --color-purple-rgb: 165,94,234;\n" +
    "  --color-cyan-rgb: 72,219,251;\n" +
    "  --color-orange-rgb: 255,165,0;\n" +
    "  --color-gray-rgb:131,149,167;\n" +
    "  --color-darkblue-rgb: 17, 25, 40;\n" +
    "\n" +
    "  //  BLURS\n" +
    "  --blur-small: blur( 4px );\n" +
    "  --blur-medium: blur( 8px );\n" +
    "  --blur-big: blur( 12px );\n" +
    "  --blur-bigger: blur( 16px );\n" +
    "\n" +
    "  // RADIUS\n" +
    "  --radius-simple: 12px;\n" +
    "\n" +
    "  --border-size: 2px;\n" +
    "}";
}
