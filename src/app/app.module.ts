import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './components/child_to_parent__communication/child/child.component';
import { ParentComponent as ParentComponent2} from './components/child_to_parent__communication/parent/parent.component';
import { CompAComponent } from './components/child_to_child_communication/comp-a/comp-a.component';
import { CompBComponent } from './components/child_to_child_communication/comp-b/comp-b.component';
import { ExampleComponent } from './components/example/example.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { ProductService } from './services/productservice';
import { DiExampleComponent } from './components/di-example/di-example.component';
import { productServiceIT } from './injection-token';
import{ HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ServiceExampleComponent } from './components/service-example/service-example.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
    CustomPipe,
    ChildComponent,
    ParentComponent,
    ChildComponent2,
    ParentComponent2,
    CompAComponent,
    CompBComponent,
    ExampleComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    DiExampleComponent,
    ServiceExampleComponent,
    CreateUserComponent,
    ReadUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // ProductService //DI Token - Deufalt Type Token
    // {provide: ProductService, useClass: ProductService} //Type Token
    // {provide: "productService", useClass: ProductService} //String Token
    // {provide: productServiceIT, useClass: ProductService}, // Injection Token

    // {provide: "example", useValue: "Hello String"},
    // {provide: "func", useValue: () => {
    //    return "Hello Function"
    // }},
    // {provide: "productService", useFactory:  (httpClient: HttpClient) =>{
    //   const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe({next:data => console.log(data)});
    //   return new ProductService();
    // }, deps: [HttpClient]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
