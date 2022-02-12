import { NgModule } from '@angular/core';

import { NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

export const NEBULAR_MODULES = [
  NbLayoutModule
];

@NgModule({
  imports: [
    ...NEBULAR_MODULES,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
  ],
  exports: [...NEBULAR_MODULES]
})
export class AppNebularModule {

}
