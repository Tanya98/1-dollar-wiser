import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { allFormFieldsValidator } from 'src/app/utils/all-form-fields.validator';
import { TranslateService } from '@ngx-translate/core';
import { getErrorMessages } from './messages';

@Component({
    selector: 'app-contact-counselor',
    templateUrl: './contact-counselor.component.html',
    styleUrls: ['./contact-counselor.component.scss']
})

export class ContactCounselorComponent implements OnInit {
    public contactCounselorForm: FormGroup;

    public errorMessages: any;

    constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
        this.contactCounselorForm = this.formBuilder.group({
            name: ['', [Validators.pattern('^[a-zA-Z-ЁёА-я]+$')]],
            email: ['', [Validators.email]],
            subject: [''],
            message: ['']
        });
    }

    ngOnInit() {
        this.errorMessages = getErrorMessages(this.translate);
    }

    get name() {
        return this.contactCounselorForm.get('name');
    }

    get email() {
        return this.contactCounselorForm.get('email');
    }

    public submit(form: FormGroup) {
        if (form.valid) {
            console.log(form.value);
        } else {
            allFormFieldsValidator(form);
        }
    }
}