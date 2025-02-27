import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route:ActivatedRoute
  ){

  }

  irMostrar():void{
    this.router.navigate(["mostrar"],{relativeTo: this.route})
  }

  irFiltrar():void{
    this.router.navigate(["filtrar"],{relativeTo: this.route})
  }

}
