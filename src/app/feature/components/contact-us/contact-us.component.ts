import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allFormFieldsValidator } from 'src/app/utils/all-form-fields.validator';
import { getErrorMessages } from './messages';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
    public contactUsForm: FormGroup;

    public errorMessages: any;

    constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
        this.contactUsForm = this.formBuilder.group({
            name: ['', [Validators.pattern('^[a-zA-Z-ЁёА-я]+$')]],
            phone: ['', [Validators.pattern('^[0-9]+$')]],
            email: ['', [Validators.required, Validators.email]],
            questions: ['']
        });
    }

    ngOnInit() {
        this.errorMessages = getErrorMessages(this.translate);
    }

    get name() {
        return this.contactUsForm.get('name');
    }

    get phone() {
        return this.contactUsForm.get('phone');
    }

    get email() {
        return this.contactUsForm.get('email');
    }

    public submit(form: FormGroup) {
        if (form.valid) {
            console.log(form.value);
        } else {
            allFormFieldsValidator(form);
        }
    }
}