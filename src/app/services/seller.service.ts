import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient: HttpClient) { }

  userSignup (data: SignUp) {
    return this.httpClient.post("http://localhost:3000/sellers", data);
  }
}
