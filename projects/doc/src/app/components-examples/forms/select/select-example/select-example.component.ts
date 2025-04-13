import {Component} from '@angular/core';
import {SelectOptionInterface} from "../../../../../../../glassui/src/lib/forms/selects/select-option.interface";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'gd-select-example',
    templateUrl: './select-example.component.html',
    styleUrls: ['./select-example.component.scss'],
    standalone: false
})
export class SelectExampleComponent {

  selectOptions: SelectOptionInterface[] = [
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'},
    {value: '3', label: 'Option 3'},
    {value: '4', label: 'Option 4'},
  ];

  selectFormControl: FormControl = new FormControl('3');
}
