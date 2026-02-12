import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header-component/header-component";
import { HomeComponent } from "../../components/home-component/home-component";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
