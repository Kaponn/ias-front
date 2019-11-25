import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // async emailChange(user: User, newEmail: string): Promise<User> {
  //   if (!user) {
  //     throwError('User does not exist');
  //   }
  //   return { ...user, email: newEmail };
  // }

  // async passwordChange(user: User, newPassword: string): Promise<User> {
  //   if (!user) {
  //     throwError('Error does not exist');
  //   }
  //   return { ...user, password: newPassword };
  // }

  constructor() {}
}
