import { Component, OnInit } from '@angular/core'; 
import { FormGroup , FormBuilder , FormControl  , Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  authForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.initForm();
    this.authForm = this.fb.group({
      email: [''],
      username: ['', Validators.required],
      password: ['']
    });

    // this.authForm = new FormGroup({
    //   email: new FormControl(),
    //   username: new FormControl(),
    //   password: new FormControl()
    // });

    this.authForm.valueChanges.subscribe((value) => console.log(value));
  }

  // private initForm(): void {
  //   this.authForm = this.fb.group({
  //    type: null,
  //    name: null,
  //    address: null,
  //    password: null
  //   });
  //  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.authForm.value);
  }

}
