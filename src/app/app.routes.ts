import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { SimplyDatatableExampleComponent } from './components/simply-datatable-example/simply-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component:EventBindExampleComponent},
    // {path:'welcome', component: WelcomeComponent},
    // {path:" ", redirectTo: '/welcome', pathMatch:'full'}
        {path:" ", component: WelcomeComponent},
        {path:'for-directive-example', component:ForDirectiveExampleComponent},
        {path:"component-input-example", component: ComponentInputExampleComponent},
        {path:'simply-datatable-example',component:SimplyDatatableExampleComponent},
        {path:'component-output-example',component:ComponentOutputExampleComponent}

];
