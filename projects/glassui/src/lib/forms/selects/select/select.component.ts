import {Component, Input, OnInit, Optional, Self} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";
import {SelectOptionInterface} from "../select-option.interface";
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'gl-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    imports: [NgIf, ReactiveFormsModule, NgFor]
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() label?: string;
  @Input() showErrors: boolean = false;

  @Input() options!: SelectOptionInterface[];
// The method called when the input is touched
  onTouched = () => {
  };
  inputId: string;
  control: FormControl = new FormControl<string>("");
  touched: boolean = false;

  constructor(@Optional() @Self() private ngControl: NgControl) {
    if (this.ngControl) this.ngControl.valueAccessor = this;
    this.inputId = 'glassui-select-' + Math.floor(Math.random() * 999999999);
  }

  get errors() {
    if (!this.ngControl || this.ngControl.errors === null) return [];
    const errorsValidator = this.ngControl.errors;
    return Object.keys(errorsValidator).map((key) => {
      return errorsValidator[key];
    }).filter((error) => {
      return error !== null && error !== undefined && typeof error === 'string' && error.length > 0;
    });
  }

  /**
   * Function to subscribe to changes
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe((value) => {
      this.markAsTouched();
      fn(value);
    });
  }


  /**
   * Function to subscribe when the input is touched
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * fucntion called to define the input as touched
   */
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }


  /**
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.input.disable();
    } else {
      this.input.enable();
    }
  }

  get input() {
    return this.control as FormControl;
  }

  get value(): string {
    return this.input.value;
  }

  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.input.disable();
    } else {
      this.input.enable();
    }
  }

  /**
   * The setter of the input value
   * @param value
   */
  writeValue(value: string): void {
    this.control.setValue(value);
  }

  ngOnInit(): void {
    if (this.ngControl !== null) {
      this.ngControl.control?.statusChanges.subscribe((status) => {
        if (status === 'INVALID') {
          this.control.setErrors({incorrect: true});
          this.control.markAsDirty();
          this.control.markAsTouched();
        } else {
          this.control.updateValueAndValidity({
            onlySelf: true,
            emitEvent: false,
          });
        }
      });
    }
  }
}
