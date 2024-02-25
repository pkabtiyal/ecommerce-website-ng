import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private sellerService: SellerService, private router: Router) { }

  signup(data: SignUp):void {
    this.sellerService.userSignup(data).subscribe((res) => {
      if(res) {
        this.router.navigate(['seller-home']);
      }
    });
  }
}
