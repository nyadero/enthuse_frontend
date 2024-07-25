import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GobalSearchComponent } from './pages/gobal-search/gobal-search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PostsComponent } from './components/posts/posts.component';
import { EventsComponent } from './components/events/events.component';
import { ClubsModule } from '../clubs/clubs.module';
import { GarageModule } from '../garage/garage.module';
import { UsersModule } from '../users/users.module';
import { CoreModule } from '../shared/core.module';

@NgModule({
    declarations: [
        GobalSearchComponent,
        SearchInputComponent,
        PostsComponent,
        EventsComponent,
    ],
    exports: [
        GobalSearchComponent
    ],
    imports: [
        CommonModule,
        SearchRoutingModule,
        CoreModule,
        ClubsModule,
        GarageModule,
        UsersModule
    ]
})
export class SearchModule { }
