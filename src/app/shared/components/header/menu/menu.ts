import { TranslateService } from '@ngx-translate/core';

export const menuList = (translate: TranslateService) => {
    return [{
        label: translate.instant('menu.programs-services'),
        url: 'programs-and-services',
        children: [{
            label: translate.instant('menu.budget-credit'),
            url: 'content/budget-credit-counseling',
            children: [
                {
                    label: translate.instant('menu.budget-and-credit'),
                    url: 'budget-and-credit-counseling-disclosure'
                },
                {
                    label: translate.instant('menu.wiser-consumer'),
                    url: 'content/1-wiser-consumer-education-inc-budget-and-credit-counseling-faqs'
                }, {
                    label: translate.instant('menu.client-reviews'),
                    url: 'client-reviews-credit-counseling-course'
                }, {
                    label: translate.instant('menu.contact-counselor'),
                    url: 'content/contact-counselor'
                }]
        },
        {
            label: translate.instant('menu.pre-discharge'),
            url: 'content/debtor-education',
            children: [
                {
                    label: translate.instant('menu.pre-discharge-deb-education'),
                    url: 'debtor-education-disclosure'
                },
                {
                    label: translate.instant('menu.pre-discharge-deb-education-faqs'),
                    url: 'content/debtor-education-faqs'
                }, {
                    label: translate.instant('menu.client-reviews-debtor-education'),
                    url: 'client-reviews-debtor-education-course'
                },
                {
                    label: translate.instant('menu.contact-counselor'),
                    url: 'content/contact-counselor-debtor-education'
                }]
        }]
    },
    {
        label: translate.instant('menu.recources'),
        url: 'consumer-debt-information',
        children: [
            {
                label: translate.instant('menu.consumer-recources'),
                url: 'consumer-resources'
            },
            {
                label: translate.instant('menu.credit-laws'),
                url: 'credit-laws-summaries'
            },
            {
                label: translate.instant('menu.budgeting-faqs'),
                url: 'budgeting-faqs'
            },
            {
                label: translate.instant('menu.budget-credit-glossary'),
                url: 'content/budget-credit-glossary'
            },
            {
                label: translate.instant('menu.negotiating'),
                url: 'content/negotiating-creditors'
            },
            {
                label: translate.instant('menu.disaster-survivors'),
                url: 'disaster-survivors-tool-kit'
            },
        ]
    },
    ];

}