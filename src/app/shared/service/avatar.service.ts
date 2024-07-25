import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { UserInterface } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private userAvatar: string | null = null;

  constructor(private localStorage: LocalstorageService) {
  }

  getUser(): Promise<UserInterface | null> {
    return new Promise((resolve) => {
      const user: UserInterface | null = this.localStorage.getItem();
      resolve(user);
    });
  }

  async getUserAvatar(): Promise<string> {
    if (this.userAvatar) {
      return this.userAvatar;
    } else {
      try {
        const user = await this.getUser();
        if (user && user.avatar) {
          this.userAvatar = user.avatar;
          return this.userAvatar;
        } else {
          throw new Error('User avatar not found');
        }
      } catch (error) {
        throw new Error('Failed to fetch user avatar');
      }
    }
  }
}
