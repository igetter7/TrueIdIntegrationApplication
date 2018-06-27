import { NgModule } from '@angular/core';

import { TrueIdIntegrationApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TrueIdIntegrationApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TrueIdIntegrationApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TrueIdIntegrationApplicationSharedCommonModule {}
