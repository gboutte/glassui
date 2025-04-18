import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";


@Component({
    selector: 'gl-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    imports: [ReactiveFormsModule]
})
export class CheckboxComponent  implements ControlValueAccessor, OnInit {
  private ngControl = inject(NgControl, { optional: true, self: true });

  @Input() label?: string;
  @Input() showErrors: boolean = false;

  // The method called when the input is touched
  onTouched = () => {
  };
  inputId: string;
  control: FormControl = new FormControl<boolean>(false);
  touched: boolean = false;
  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
    this.inputId = 'glassui-checkbox-' + Math.floor(Math.random() * 999999999);
  }

  get errors() {
    if(!this.ngControl || this.ngControl.errors === null) return [];
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

  @Input()
  set value(value: boolean) {
    this.input.setValue(value, {emitEvent: false});
  }

  get value(): boolean {
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
  writeValue(value: boolean): void {
    this.control.setValue(!!value);
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
