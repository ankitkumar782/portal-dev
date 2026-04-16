import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isSecondFormActive = false;

  formData: any = {
    compName: '',
    dob: '',
    email: '',
    altEmail: '',
    mobile: '',
    altMobile: '',
    Reference: '',
    PanNo: '',
    AdharNo: '',
    GstNo: '',
    TDS: '',
    AgencyType: '',
    Other: '',
    FirstName: '',
    LastName: '',
    Address1: '',
    Address2: '',
    Landmark: '',
    City: '',
    State: '',
    Pin: '',
    Country: '',
    grandfather: '',
    spouseName: '',
    fatherInLaw: '',
    motherInLaw: ''
  };

  personalFields = [
    { label: 'Company Name', placeholder: 'Enter Comapny Name', type: 'text', model: 'compName' },
    // { label: 'Date of Birth', placeholder: 'Enter birth date', type: 'date', model: 'dob' },
    { label: 'Email', placeholder: 'Enter Email', type: 'text', model: 'email' },
    { label: 'Alternate Email', placeholder: 'Enter Email', type: 'text', model: 'altEmail' },
    { label: 'Mobile Number', placeholder: 'Enter Mobile Number', type: 'number', model: 'mobile' },
    { label: 'Alternate Mobile Number', placeholder: 'Enter Mobile number', type: 'number', model: 'altMobile' },
    { label: 'Reference', placeholder: 'Enter Reference', type: 'text', model: 'Reference' }
  ];

  identityFields = [
    { label: 'Pan No', placeholder: 'Enter Pan Number', type: 'text', model: 'PanNo' },
    { label: 'Adhar No', placeholder: 'Enter Aadhar Number', type: 'number', model: 'AdharNo' },
    { label: 'Gst No', placeholder: 'Enter GST Number', type: 'text', model: 'GstNo' },
    { label: 'TDS', placeholder: 'Enter TDS', type: 'text', model: 'TDS' },
    { label: 'Agency Type', placeholder: 'Enter Agency Type', type: 'text', model: 'AgencyType' },
    { label: 'Others', placeholder: 'Others', type: 'text', model: 'Other' }
  ];

  addressFields = [
    { label: 'First Name', placeholder: 'First Name', type: 'text', model: 'FirstName' },
    { label: 'Last Name', placeholder: 'Last Name', type: 'text', model: 'LastName' },
    { label: 'Address LIne 1', placeholder: 'Enter Address-1', type: 'text', model: 'Address1' },
    { label: 'Address Line 2', placeholder: 'Enter Address-2', type: 'text', model: 'Address2' },
    { label: 'Landmark', placeholder: 'Enter Landmark', type: 'text', model: 'Landmark' },
    { label: 'City', placeholder: 'Enter City', type: 'text', model: 'city' },
    { label: 'State', placeholder: 'Enter State', type: 'text', model: 'state' },
    { label: 'Pin', placeholder: 'Enter PIncode', type: 'number', model: 'pin' },
    { label: 'Country', placeholder: 'Enter Country', type: 'text', model: 'country' },
    // { label: 'Ward Number', placeholder: 'Enter ward number', type: 'number', model: 'wardNumber' }
  ];



  goToSecondForm() {
    const valid = this.personalFields.concat(this.identityFields).every(field => this.formData[field.model]);
   
      this.isSecondFormActive = true;
   
  }

  goToFirstForm() {
    this.isSecondFormActive = false;
  }

  onSubmit() {
    const valid = this.addressFields.every(field => this.formData[field.model]);
    if (valid) {
      console.log('Form submitted:', this.formData);
      alert('Form successfully submitted!');
    } else {
      alert('Please complete all address.');
    }
  }

}

