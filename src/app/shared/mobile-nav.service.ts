import { Injectable } from '@angular/core';

@Injectable()
export class MobileNavService {
    mobileNav: any;
    constructor() { }

    add(mobileNav: any): void {
        this.mobileNav = mobileNav;
    }

    close() {
        this.mobileNav.closeMobile();
    }
}