import { Component } from '@angular/core';
import { PersonTemplateForm } from './person-template-form/person-template-form';
import { Person } from '../../shared/interfaces/person';
import { Step6SimpleDatatable } from '../step6-simple-datatable/step6-simple-datatable';

import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
    selector: 'app-step8-template-driven-forms',
    imports: [
    PersonTemplateForm,
    Step3PersonTableInput,
    Step3PersonTableInput,
    Step6SimpleDatatable
],
    templateUrl: './step8-template-driven-forms.html',
    styleUrl: './step8-template-driven-forms.css',
})
export class Step8TemplateDrivenForms {
}