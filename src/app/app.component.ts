import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//app companentinin nerede kullanılacağı
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user='Begüm';
  items=[
    {description:"Kahvaltı",action:"No"},
    {description:"Spor",action:"No"},
    {description:"Fatura",action:"No"},
    {description:"Ders Çalış",action:"No"}
  ];
}
