import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { TheTestComponent } from './thetest/thetest.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    TheTestComponent
  ],
  entryComponents: [
    TheTestComponent
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}