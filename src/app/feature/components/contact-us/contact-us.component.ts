import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allFormFieldsValidator } from 'src/app/utils/all-form-fields.validator';
import { getErrorMessages } from './messages';
import { TranslateService } from '@ngx-translate/core';
import { ContactUsFormService } from 'src/app/core/api/contact-us-form-api.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
    public contactUsForm: FormGroup;

    public errorMessages: any;

    constructor(private formBuilder: FormBuilder,
        private translate: TranslateService,
        private service: ContactUsFormService) {
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
            const formData = new FormData();
            formData.append('name', this.contactUsForm.get('name').value);
            formData.append('phone', this.contactUsForm.get('phone').value);
            formData.append('email', this.contactUsForm.get('email').value);
            formData.append('questions/comments', this.contactUsForm.get('questions').value);
            this.service.sendData(formData);
            this.contactUsForm.reset();
        } else {
            allFormFieldsValidator(form);
        }
    }
}