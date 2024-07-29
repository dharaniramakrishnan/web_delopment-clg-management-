// course.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses = [
    { id: 1, name: 'B.Tech' },
    { id: 2, name: 'B.E.' },
    { id: 3, name: 'M.Sc' },
    { id: 4, name: 'B.Sc' },
    { id: 5, name: 'M.Tech' },
    { id: 6, name: 'M.E.' },
  ];

  cart: any[] = [];

  constructor(private router: Router) {}

  addToCart(course: any) {
    this.cart.push(course);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.router.navigate(['/cart']); // Navigate to the cart page
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
