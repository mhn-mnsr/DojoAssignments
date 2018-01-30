import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent},
  { path: 'products', pathMatch: 'full', component: ProductListComponent},
  { path: 'createproduct', pathMatch: 'full', component: CreateProductComponent},
  { path: 'products/editproduct/:productid', pathMatch:'full', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
