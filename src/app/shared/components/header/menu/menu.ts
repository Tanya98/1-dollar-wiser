import { TranslateService } from '@ngx-translate/core';

export const menuList = (translate: TranslateService) => {
    // translate.setDefaultLang('en');
    // let str = translate.instant('menu.programs-services');
    return [{
        label: translate.instant('menu.programs-services'),
        children: [{
            label: translate.instant('menu.budget-credit'),
            children: [
                {
                    label: translate.instant('menu.budget-and-credit'),
                    url: 'content/budget-credit-counseling'
                },
                {
                    label: translate.instant('menu.wiser-consumer'),
                    url: 'content/budget-credit-counseling'
                }, {
                    label: translate.instant('menu.client-reviews'),
                    url: 'content/budget-credit-counseling'
                }, {
                    label: translate.instant('menu.contact-counselor'),
                    url: 'content/budget-credit-counseling'
                }]
        },
        {
            label: translate.instant('menu.pre-discharge'),
            children: [
                {
                    label: translate.instant('menu.pre-discharge-deb-education'),
                    url: 'content/budget-credit-counseling'
                },
                {
                    label: translate.instant('menu.pre-discharge-deb-education-faqs'),
                    url: 'content/budget-credit-counseling'
                }, {
                    label: translate.instant('menu.client-reviews-debtor-education'),
                    url: 'content/budget-credit-counseling'
                }, 
                {
                    label: translate.instant('menu.contact-counselor'),
                    url: 'content/budget-credit-counseling'
                }]
        }]
    },
    {
        label: translate.instant('menu.recources'),
        url: 'consumer-debt-information',
        children: [
            {
                label: translate.instant('menu.consumer-recources'),
                url: 'content/budget-credit-counseling'
            },
            {
                label: translate.instant('menu.credit-laws'),
                url: 'content/budget-credit-counseling'
            },
            {
                label: translate.instant('menu.budgeting-faqs'),
                url: 'content/budget-credit-counseling'
            },
            {
                label: translate.instant('menu.budget-credit-glossary'),
                url: 'content/budget-credit-counseling'
            },
            {
                label: translate.instant('menu.negotiating'),
                url: 'content/budget-credit-counseling'
            },
            {
                label: translate.instant('menu.disaster-survivors'),
                url: 'content/budget-credit-counseling'
            },
        ]
    },
    ];

}