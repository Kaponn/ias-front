import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pudzian, mustMatch } from '../helpers';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { User } from '../user/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  users: User[];

  newUser = new User();
  // asdf
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        login: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: [
          pudzian('password', 'pudzian'),
          mustMatch('password', 'confirmPassword'),
        ],
      }
    );

    this.apiService.getUsers().subscribe((users) => (this.users = users));
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.addUser({
      data: {
        username: this.registerForm.value.login,
        email: this.registerForm.value.email,
        id: this.users.length + 1,
        password: this.registerForm.value.password,
      },
    });
    console.log(this.users);
    this.router.navigate(['/main']);
    JSON.stringify(this.registerForm.value);
  }

  async getUser(id: number) {
    this.apiService.getUser(id);
  }

  async addUser(user: User): Promise<User> {
    if (!user.data.id) {
      let lastId = this.users.length;
      user.data.id = ++lastId;
    }
    this.apiService.addUser(user).subscribe((res) => this.users.push(res));
    this.newUser = new User();
    return user;
  }
}
