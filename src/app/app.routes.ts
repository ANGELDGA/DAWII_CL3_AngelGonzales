import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostrarComponent } from './dashboard/mostrar/mostrar.component';
import { FiltrarComponent } from './dashboard/filtrar/filtrar.component';

export const routes: Routes = [
    {path: "" , redirectTo:"dashboard", pathMatch:"full"},
    {path: "dashboard", component: DashboardComponent,
        children:[
            {path:"mostrar", component:MostrarComponent},
            {path:"filtrar", component: FiltrarComponent}
        ]
    },
    
];
