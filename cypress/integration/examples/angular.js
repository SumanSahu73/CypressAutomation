
/// <reference types="Cypress" />


import 'cypress-iframe'


describe('Angular website ', function () {
    it('Visit angular website and remove the suggestion survey', function () {
        cy.visit("https://angular.io/guide/example-apps-list");
        cy.get("aio-shell.aio-notification-show.folder-guide.mode-stable.page-guide-example-apps-list.sidenav-open.view-SideNav:nth-child(1) mat-toolbar.mat-toolbar.app-toolbar.no-print.mat-primary.mat-toolbar-multiple-rows mat-toolbar-row.mat-toolbar-row.notification-container:nth-child(1) aio-notification.ng-tns-c3814798766-0.ng-trigger.ng-trigger-hideAnimation.ng-star-inserted button.close-button.ng-tns-c3814798766-0.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base > span.mat-mdc-button-touch-target").click()

    })


    it('Go to reference->conceptual reference->angular concept tab and varify text', function () {
        // we can trigger the right click event or by direct method right click()
        cy.visit("https://angular.io/guide/example-apps-list");
        cy.get("aio-shell.aio-notification-show.folder-guide.mode-stable.page-guide-example-apps-list.view-SideNav.sidenav-open:nth-child(1) mat-sidenav-container.mat-drawer-container.mat-sidenav-container.sidenav-container.mat-drawer-transition.has-floating-toc.mat-drawer-container-has-open:nth-child(5) mat-sidenav.mat-drawer.mat-sidenav.sidenav.ng-tns-c3816625663-1.ng-trigger.ng-trigger-transform.ng-star-inserted.mat-drawer-side.mat-drawer-opened:nth-child(2) div.mat-drawer-inner-container.ng-tns-c3816625663-1 aio-nav-menu.ng-tns-c3816625663-1 aio-nav-item.ng-star-inserted:nth-child(9) div.ng-star-inserted div.heading-children.expanded.level-1.selected aio-nav-item.ng-star-inserted:nth-child(1) div.ng-star-inserted button.vertical-menu-item.heading.collapsed.level-2.ng-star-inserted > span:nth-child(1)").click()
        cy.get("aio-shell.aio-notification-show.folder-guide.mode-stable.page-guide-example-apps-list.sidenav-open.view-SideNav:nth-child(1) mat-sidenav-container.mat-drawer-container.mat-sidenav-container.sidenav-container.mat-drawer-transition.mat-drawer-container-has-open.has-floating-toc:nth-child(5) mat-sidenav.mat-drawer.mat-sidenav.sidenav.ng-tns-c3816625663-1.ng-trigger.ng-trigger-transform.ng-star-inserted.mat-drawer-side.mat-drawer-opened:nth-child(2) div.mat-drawer-inner-container.ng-tns-c3816625663-1 aio-nav-menu.ng-tns-c3816625663-1 aio-nav-item.ng-star-inserted:nth-child(9) div.ng-star-inserted div.heading-children.expanded.level-1.selected aio-nav-item.ng-star-inserted:nth-child(1) div.ng-star-inserted div.heading-children.level-2.expanded aio-nav-item.ng-star-inserted:nth-child(1) div.ng-star-inserted button.vertical-menu-item.heading.level-3.ng-star-inserted.collapsed > span:nth-child(1)").click()
        cy.get("aio-shell.aio-notification-show.folder-guide.mode-stable.page-guide-example-apps-list.sidenav-open.view-SideNav:nth-child(1) mat-sidenav-container.mat-drawer-container.mat-sidenav-container.sidenav-container.mat-drawer-transition.mat-drawer-container-has-open.has-floating-toc:nth-child(5) mat-sidenav.mat-drawer.mat-sidenav.sidenav.ng-tns-c3816625663-1.ng-trigger.ng-trigger-transform.ng-star-inserted.mat-drawer-side.mat-drawer-opened:nth-child(2) div.mat-drawer-inner-container.ng-tns-c3816625663-1 aio-nav-menu.ng-tns-c3816625663-1 aio-nav-item.ng-star-inserted:nth-child(9) div.ng-star-inserted div.heading-children.expanded.level-1.selected aio-nav-item.ng-star-inserted:nth-child(1) div.ng-star-inserted div.heading-children.level-2.expanded aio-nav-item.ng-star-inserted:nth-child(1) div.ng-star-inserted div.heading-children.level-3.expanded aio-nav-item.ng-star-inserted:nth-child(1) div.ng-star-inserted a.vertical-menu-item.collapsed.level-4 > span.vertical-menu-item-text").click()
        //cy.get('#introduction-to-angular-concepts').should('have.text','Introduction to Angular concepts');
        cy.get('#introduction-to-angular-concepts').then(function (e1) {
            const actualText = e1.text()
            expect(actualText.includes('Introduction to Angular concepts')).to.be.true
         })

        cy.get('#components').then(function (e1) {
            const actualText = e1.text()
            expect(actualText.includes('Components')).to.be.true
        })
    })
    
    
    it('Search the topic, verify option value is matching with description or not from tables', function() {
        cy.visit("https://angular.io/guide/example-apps-list");
        cy.get('input').type("Ngmodule")
        cy.wait(2000)
        cy.get('.priority-pages > :nth-child(1) > .search-result-item > :nth-child(2)').click()
       cy.get("#ngmodule").then(function (e1) {
        const actualText = e1.text()
        expect(actualText.includes('NgModule')).to.be.true
    })
    cy.get('.code-anchor').each(($e1, index, $list) => {
 
        const text=$e1.text()
        if(text.includes("bootstrap?"))
        {
     
            cy.get(':nth-child(5) > :nth-child(2) > p').then(function(Description)
            {
             const priceText=   Description.text()
             expect(priceText).to.equal('The set of components that are bootstrapped when this module is bootstrapped.')
            })
        }
     
    })
    }) 
/*
    it('VERIFY FOOTER CONTENT', function() {
        cy.visit("https://angular.io/guide/example-apps-list");
        cy.get('footer.no-print').scrollIntoView({duration:3000});
        cy.wait(2000)
        cy.xpath("//body[1]/aio-shell[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/footer[1]/aio-footer[1]/div[1]/div[3]/div[1]").then(function (e1) {
            const actualText = e1.text()
            expect(actualText.includes('COMMUNITY')).to.be.true
        })
        cy.xpath("//body[1]/aio-shell[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/footer[1]/aio-footer[1]/p[1]").then(function (e1) {
            const actualText = e1.text()
            expect(actualText.includes('Super-powered by Google ©2010-2024.')).to.be.true
        })
    })
/*
    it('Scrolling Page', function() {
      cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
     
    })

  */

})