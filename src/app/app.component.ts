import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
// 

// export class AppComponent  {
//   name = 'Angular1';
// }


export class AppComponent implements OnInit {
    name = 'Angular1';

    addressForm: FormGroup;
    states: Array;
    countries: Array;

    constructor(private formBuilder: FormBuilder) {
        this.countries = [{id: 'USA', name: 'United States'}, {id: 'UK', name: 'United Kingdom'}, {id: 'FR', name: 'France'}];
        this.states = [{ id: "AL", name: "Alabama" }, { id: "AK", name: "Alaska" }, { id: "AZ", name: "Arizona" }, { id: "AR", name: "Arkansas" }];
    }

    ngOnInit() {
       this.initAddressForm();
       this.onChanges();
    }

    initAddressForm() {
        this.addressForm = this.formBuilder.group({
            addressLine1: ['', Validators.required],
            addressLine2: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            postalCode: ['', Validators.required],
            country: ['', Validators.required]
        });
    }

    // The onChanges() function is simple. It gets the country control within
    // the addressForm and subscribes to any value changes. Whenever the value of the
    // Country field changes, the function is executed.
    onChanges() {
      console.log('onChanges');
      console.log('onChanges country = ' +  this.addressForm.get('country').value);
      console.log('onChanges state = ' +  this.addressForm.get('state').value);

      this.addressForm.get('country').valueChanges
      .subscribe(selectedCountry => {
           console.log('onChanges selectedCountry = ' +  selectedCountry);
          if (selectedCountry != 'USA') {
              this.addressForm.get('state').reset();
              this.addressForm.get('state').disable();
          }
          else {
              this.addressForm.get('state').enable();
          }
    });
}
}