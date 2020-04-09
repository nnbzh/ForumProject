import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        user_id: 1,
        // status: 'admin',
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'qwerty123'
    },
    {
        user_id: 2,
        // status: 'user',
        username: 'Yera123',
        email: 'Yera@gmail.com',
        password: 'yera123'
    },
    {
        user_id: 3,
        // status: 'user',
        username: 'Nurik123',
        email: 'Nurik@gmail.com',
        password:'nurik123'
    }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.user_id)) + 1 : 4;
  }
}