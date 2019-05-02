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

    onChanges() {
      this.addressForm.get('country').valueChanges
      .subscribe(selectedCountry => {
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