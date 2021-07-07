//angular içerisinden gelen paketlerin birleşim alanı ve aynı 
//zamanda hazırlamış olduğumuz companentleri barındırır  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//farklı bir companent tanımlandığında declaration içine alınır . 
    AppComponent
  ],
  imports: [//farklı bir angular modulü kullanılırsa bu import kısmına alınır 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//bu modül içerisindeki çalıştırılabilir ilk companent buraya yazılır. 
})
export class AppModule { }//export ile dışarıya açılır. 
