import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserInterface } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
 
 
  private localStorageKey = "enthuse_user";

  constructor() { }

  // get item in localstorage
  getItem(){
     const item = localStorage.getItem(this.localStorageKey);
     if(item) {
      return JSON.parse(item);
     }
     return null;
  }

  // set item to localstorage
  setItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  // remove item from localstorage
  removeItem(key: string){
    localStorage.removeItem(key);
  }

   updateAvatar(userAvatar: any) {
     const user: UserInterface = this.getItem();
     console.log({user});
    if(user){
      user.avatar = userAvatar;
      console.log({userAvatar: user.avatar});
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    }
  }

   updateCoverpic(coverPic: any) {
      const user: UserInterface = this.getItem();
     console.log({user});
    if(user){
      user.coverPicture = coverPic;
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    }
  }

  // check token expiration
  isTokenExpired(): boolean {
    const user: UserInterface = this.getItem();
    if(user && user.jwtToken) {
      const expirationDate = this.getExpirationDate(user.jwtToken);
      return expirationDate !== null && expirationDate <= new Date();
    }
    return true;
  }

  getExpirationDate(token: string) : Date | null {
    const decodedToken = jwtDecode(token);
    console.log({decodedToken});
    if(decodedToken.exp){
      return new Date(decodedToken.exp * 1000)
    }
    return null;
  }

}
