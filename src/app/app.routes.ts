import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

export const router: Routes = [
];

@NgModule({
    imports:[RouterModule.forRoot(router)],
    exports:[RouterModule]
})
export class RoutingModule{

}