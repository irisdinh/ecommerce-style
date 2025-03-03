import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    // { path: 'products', loadChildren: () => import('./components/products/products.component').then(m => m.ProductsComponent)},
    { path: 'cart', component: CartComponent },
    { path: 'confirmation', component: ConfirmationComponent }
];
