import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from 'src/app/feature/components/start/start-page.component';

const routes: Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'registration-help',
        loadChildren: () => import('../../feature/components/registration-help/registration-help.module').then(m => m.RegistrationHelpModule),
    },
    {
        path: 'content/privacy-policy',
        loadChildren: () => import('../../feature/components/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
    },
    {
        path: 'content/about-1-wiser-consumer-education-inc',
        loadChildren: () => import('../../feature/components/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => import('../../feature/components/contact-us/contact-us.module').then(m => m.ContactUsModule)
    },
    {
        path: 'terms-service',
        loadChildren: () => import('../../feature/components/term-of-service/term-of-service.module').then(m => m.TermOfServiceModule)
    },
    {
        path: 'programs-and-services',
        loadChildren: () => import('../../feature/components/programs-and-services/programs-and-services.module').then(m => m.ProgramsAndServicesModule)
    },
    {
        path: 'consumer-debt-information',
        loadChildren: () => import('../../feature/components/consumer-debt-information/consumer-debt-information.module').then(m => m.ConsumerDebtInformationModule)
    },
    {
        path: 'content/budget-credit-counseling',
        loadChildren: () => import('../../feature/components/budget-credit-counseling/budget-credit-counseling.module').then(m => m.BudgetCreditCounselingModule)
    },
    {
        path: 'content/debtor-education',
        loadChildren: () => import('../../feature/components/debtor-education/debtor-education.module').then(m => m.DebtorEducationModule)
    },
    {
        path: 'budget-and-credit-counseling-disclosure',
        loadChildren: () => import('../../feature/components/disclosure-credit-counseling/disclosure-credit-counseling.module').then(m => m.DisclosureCreditCounselingModule)
    },
    {
        path: 'content/fee-schedule',
        loadChildren: () => import('../../feature/components/fee-schedule/fee-schedule.module').then(m => m.FeeScheduleModule)
    },
    {
        path: 'content/contact-counselor',
        loadChildren: () => import('../../feature/components/contact-counselor/contact-counselor.module').then(m => m.ContactCounselorModule)
    },
    {
        path: 'client-reviews-debtor-education-course',
        loadChildren: () => import('../../feature/components/client-reviews/client-reviews.module').then(m => m.ClientReviewsModule)
    },
    {
        path: 'content/debtor-education-faqs',
        loadChildren: () => import('../../feature/components/debtor-education-faqs/debtor-education-faqs.module').then(m => m.DebtorEducationFaqsModule)
    },
    {
        path: 'debtor-education-disclosure',
        loadChildren: () => import('../../feature/components/debtor-education-disclosure/debtor-education-disclosure.module').then(m => m.DebtorEducationDisclosureModule)
    },
    {
        path: 'content/1-wiser-consumer-education-inc-budget-and-credit-counseling-faqs',
        loadChildren: () => import('../../feature/components/budget-credit-counseling-faqs/budget-credit-counseling-faqs.module').then(m => m.BudgetCreditCounselingFaqsModule)
    },
    {
        path: 'client-reviews-credit-counseling-course',
        loadChildren: () => import('../../feature/components/credit-counseling-course/credit-counseling-course.module').then(m => m.CreditCounselingCourseModule)
    },
    {
        path: 'consumer-resources',
        loadChildren: () => import('../../feature/components/consumer-resources/consumer-resources.module').then(m => m.ConsumerResourcesModule)
    },
    {
        path: 'credit-laws-summaries',
        loadChildren: () => import('../../feature/components/credit-laws-summaries/credit-laws-summaries.module').then(m => m.CreditLawsSummariesModule)
    },
    {
        path: 'content/negotiating-creditors',
        loadChildren: () => import('../../feature/components/negotiating-creditors/negotiating-creditors.module').then(m => m.NegotiatingCreditorsModule)
    },
    {
        path: 'content/budget-credit-glossary',
        loadChildren: () => import('../../feature/components/budget-credit-glossary/budget-credit-glossary.module').then(m => m.BudgetCreditGlossaryModule)
    },
    {
        path: 'disaster-survivors-tool-kit',
        loadChildren: () => import('../../feature/components/disaster-survivors-tool-kit/disaster-survivors-tool-kit.module').then(m => m.DisasterSurvivorsToolkitModule)
    },
    {
        path: 'content/contact-counselor-debtor-education',
        loadChildren: () => import('../../feature/components/contact-counselor-debtor-education/contact-counselor-debtor-education.module').then(m => m.ContactCounselorDebtorEducationModule)
    },
    {
        path: 'content/1-wiser-consumer-education-fee-schedule',
        loadChildren: () => import('../../feature/components/consumer-education-fee-schedule/consumer-education-fee-schedule.module').then(m => m.ConsumerEducationFeeScheduleModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
