import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TestingJHipsterApplicationSharedModule, UserRouteAccessService } from './shared';
import { TestingJHipsterApplicationHomeModule } from './home/home.module';
import { TestingJHipsterApplicationAdminModule } from './admin/admin.module';
import { TestingJHipsterApplicationAccountModule } from './account/account.module';
import { TestingJHipsterApplicationEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestingJHipsterApplicationSharedModule,
        TestingJHipsterApplicationHomeModule,
        TestingJHipsterApplicationAdminModule,
        TestingJHipsterApplicationAccountModule,
        TestingJHipsterApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestingJHipsterApplicationAppModule {}
