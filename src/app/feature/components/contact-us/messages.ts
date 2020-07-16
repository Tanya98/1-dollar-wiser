import { TranslateService } from '@ngx-translate/core';

export const getErrorMessages = (translate: TranslateService) => {
    return {
        name: [
            { type: 'pattern', message: translate.instant('contact-us.errors.name.pattern') },
        ],
        phone: [
            { type: 'pattern', message: translate.instant('contact-us.errors.phone.pattern') },
        ],
        email: [
            { type: 'required', message: translate.instant('contact-us.errors.email.required') },
            { type: 'email', message: translate.instant('contact-us.errors.email.pattern') },
        ],
    }
}