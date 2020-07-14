import { Component, OnInit } from '@angular/core';
import { allFormFieldsValidator } from 'src/app/utils/all-form-fields.validator';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { getErrorMessages } from './messages';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
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