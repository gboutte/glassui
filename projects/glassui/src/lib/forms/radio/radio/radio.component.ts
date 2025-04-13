import {Component, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";


@Component({
    selector: 'gl-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    imports: [ReactiveFormsModule]
})
export class RadioComponent implements ControlValueAccessor, OnInit {
  @Input() label?: string;
  @Input() radioGroup!: string;
  @Input() showErrors: boolean = false;
  @Input() value!: any;

  checked: boolean = false;
  currentSelectedValue: any;

  // The method called when the input is touched
  onTouched = () => {
  };
  // The method called when the input is touched
  onChanged = (value:any) => {
  };
  inputId: string;
  control: FormControl = new FormControl<boolean>(false);
  touched: boolean = false;
  constructor(@Optional() @Self() private ngControl: NgControl) {
    if (this.ngControl) this.ngControl.valueAccessor = this;
    this.inputId = 'glassui-radio-' + Math.floor(Math.random() * 999999999);
  }

  select(){
    this.currentSelectedValue = this.value;
    this.updateSelectedValue();
    this.markAsTouched();
    this.onChanged(this.currentSelectedValue);
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
    this.onChanged = fn;
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
  writeValue(value: any): void {
    this.currentSelectedValue = value;
    this.updateSelectedValue();
  }

  updateSelectedValue() {
    this.checked = this.currentSelectedValue === this.value;
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
