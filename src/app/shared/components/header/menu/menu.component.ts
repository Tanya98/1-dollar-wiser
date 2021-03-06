import { Component, OnInit, Renderer2 } from '@angular/core';
import { menuList } from './menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    public enteredButton = false;
    public isMatMenuOpen = false;
    public isMatMenu2Open = false;
    public prevButtonTrigger;
    public menuList: Array<any>;

    constructor(private ren: Renderer2, private translate: TranslateService) { }

    ngOnInit() {

        this.translate.get('ready').subscribe(() => {
            this.menuList = menuList(this.translate);
        });
    }

    menuenter() {
        this.isMatMenuOpen = true;
        if (this.isMatMenu2Open) {
            this.isMatMenu2Open = false;
        }
    }

    menuLeave(trigger, button) {
        setTimeout(() => {
            if (!this.isMatMenu2Open && !this.enteredButton) {
                this.isMatMenuOpen = false;
                trigger.closeMenu();
                this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            } else {
                this.isMatMenuOpen = false;
            }
        }, 80)
    }

    menu2enter() {
        this.isMatMenu2Open = true;
      }
    
      menu2Leave(trigger1, trigger2, button) {
        setTimeout(() => {
          if (this.isMatMenu2Open) {
            trigger1.closeMenu();
            this.isMatMenuOpen = false;
            this.isMatMenu2Open = false;
            this.enteredButton = false;
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
          } else {
            this.isMatMenu2Open = false;
            trigger2.closeMenu();
          }
        }, 100)
      }

    buttonEnter(trigger) {
        setTimeout(() => {
            if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
                this.prevButtonTrigger.closeMenu();
                this.prevButtonTrigger = trigger;
                this.isMatMenuOpen = false;
                this.isMatMenu2Open = false;
                trigger.openMenu();
            }
            else if (!this.isMatMenuOpen) {
                this.enteredButton = true;
                this.prevButtonTrigger = trigger
                trigger.openMenu();
            }
            else {
                this.enteredButton = true;
                this.prevButtonTrigger = trigger
            }
        })
    }

    buttonLeave(trigger, button) {
        setTimeout(() => {
            if (this.enteredButton && !this.isMatMenuOpen) {
                trigger.closeMenu();
                this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            } if (!this.isMatMenuOpen) {
                trigger.closeMenu();
                this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            } else {
                this.enteredButton = false;
            }
        }, 100)
    }
}