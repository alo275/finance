import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FinanceRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { FinanceCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { FinanceLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { FinanceDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { FinanceTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { FinanceEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { FinanceJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { FinanceJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FinanceRegionMySuffixModule,
        FinanceCountryMySuffixModule,
        FinanceLocationMySuffixModule,
        FinanceDepartmentMySuffixModule,
        FinanceTaskMySuffixModule,
        FinanceEmployeeMySuffixModule,
        FinanceJobMySuffixModule,
        FinanceJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinanceEntityModule {}
