import { NgModule} from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { LandDetailsComponent } from './app/land-details/land-details.component';
import { LandenComponent } from './app/landen/landen.component';
import { TopInwonersComponent } from './app/top-inwoners/top-inwoners.component';

const routes: Routes = [
    {path: 'landen', component: LandenComponent},
    {path: 'top', component: TopInwonersComponent},
    {path: '', redirectTo: '/top', pathMatch: 'full'},
    {path: 'detail/:id', component: LandDetailsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}