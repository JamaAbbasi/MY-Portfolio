import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { SkilsComponent } from './skils/skils.component';
import { ContectComponent } from './contect/contect.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'aboutMe',component:AboutMeComponent},
    {path:'education',component:EducationComponent},
    {path:'skills',component:SkilsComponent},
    {path:'contect',component:ContectComponent},
];
@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)
export class AppRoutingModule{}