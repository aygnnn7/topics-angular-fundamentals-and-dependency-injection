import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
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
    CompBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
