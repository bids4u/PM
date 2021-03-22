import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input',
})
export class InputDirective {
  /**
   * Input Element
   *
   * @type {HTMLInputElement}
   * @memberof InputDirective
   */
  public inputElement: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;

    this.setPlaceHolderEmpty();
    this.setAutocompleteOff();
    this.removeOninput();
    this.preventWheelScroll();
  }

  /**
   * Handle element input element
   */
  @HostListener('input', ['$event']) onEvent($event) {
    /**
     * Element Value
     */
    const value = this.inputElement.value;

    /**
     * Validate Element's MAX length
     */
    const length = value.length - 3; // -3 to remove ##.00
    if (length === 16 && this.inputElement.type == 'number') {
      this.inputElement.value = parseFloat('0').toFixed(2);
      var strLength = this.inputElement.value.length - 3;
      this.inputElement.type = 'text';
      this.inputElement.setSelectionRange(strLength, strLength);
      this.inputElement.type = 'number';
      // this.alertifyService.error(`Maximum length of value is ${length}.`);
    }
    /**
     * Validte all input number must have decimal places upto max 2
     */
    if (this.inputElement.getAttribute('type') == 'number') {
      this.inputElement.setAttribute('step', '0.01');
    }

    /**
     * Validate Element's MAX Value
     */
    if (this.inputElement.hasAttribute('max')) {
      const maxValue = parseFloat(this.inputElement.getAttribute('max'));

      if (parseFloat(value) > maxValue) {
        this.inputElement.value = '';
        // this.alertifyService.error(`Maximum possible value is ${maxValue}.`);
      }
    }

    /**
     * Validate Element's MIN Value
     */
    if (this.inputElement.hasAttribute('min')) {
      const minValue = parseFloat(this.inputElement.getAttribute('min'));

      if (parseFloat(value) < minValue) {
        this.inputElement.value = '';
        // this.alertifyService.error(`Minimum possible value is ${minValue}.`);
      }
    }
  }

  /**
   * Function that sets Autocomplete Off
   */
  private setAutocompleteOff() {
    this.inputElement.setAttribute('autocomplete', 'off');
  }

  /**
   * Function that sets Place Holder Empty
   */
  private setPlaceHolderEmpty() {
    this.inputElement.setAttribute('placeholder', '');

    //For Date Place Holder
    if (this.inputElement.hasAttribute('appdatepicker')) {
      this.inputElement.setAttribute('placeholder', 'YYYY-MM-DD');
    }
  }

  /**
   * Function that remove oninput event in text type = number
   */
  removeOninput() {
    if (this.inputElement.getAttribute('type') == 'number') {
      this.inputElement.removeAttribute('oninput');
    }
  }

  /**
   * Function that prevent scroll mouse wheel
   */
  preventWheelScroll() {
    if (this.inputElement.getAttribute('type') == 'number') {
      this.inputElement.setAttribute('onwheel', 'return false');
    }
  }
}
