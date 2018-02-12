import {Routes} from "@angular/router";
import { HomeComponent } from './component/post/home/home.component';
import { ResultComponent } from './component/post/result/result.component'; 

export const router:Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'insta', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'result/:prefix', component: ResultComponent
    }
];