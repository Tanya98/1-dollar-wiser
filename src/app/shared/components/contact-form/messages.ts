import { TranslateService } from '@ngx-translate/core';

export const getErrorMessages = (translate: TranslateService) => {
    return {
        name: [
            { type: 'pattern', message: translate.instant('contact-us.errors.name.pattern') },
        ],
        email: [
            { type: 'email', message: translate.instant('contact-us.errors.email.pattern') },
        ],
    }
}