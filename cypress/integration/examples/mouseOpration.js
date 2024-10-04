// anytestcases is called as spec file
// the below one line code is for intelligence

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
require('@4tw/cypress-drag-drop');

describe('Mouse Operations', function()
 {
    it('Mouse Hover', function() {
      cy.visit("https://demo.opencart.com/");

      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible');
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible');


    })
    

    it('Mouse Right click', function() {
      // we can trigger the right click event or by direct method right click()
      cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
      
      //Approach1 by using trigger method
    //  cy.get("body.wy-body-for-nav:nth-child(2) div.wy-grid-for-nav:nth-child(1) section.wy-nav-content-wrap div.wy-nav-content div.rst-content div.document:nth-child(1) p:nth-child(4) > span.context-menu-one.btn.btn-neutral").trigger('contextmenu'); // it will perform the right click action- contextmenu
     // cy.get('body.wy-body-for-nav:nth-child(2) ul.context-menu-list.context-menu-root:nth-child(6) li.context-menu-item.context-menu-icon.context-menu-icon-copy:nth-child(3) > span:nth-child(1)').should('be.visible');
      //Approach2 by using direct right click
      cy.get('body.wy-body-for-nav:nth-child(2) div.wy-grid-for-nav:nth-child(1) section.wy-nav-content-wrap div.wy-nav-content div.rst-content div.document:nth-child(1) p:nth-child(4) > span.context-menu-one.btn.btn-neutral').rightclick();
      cy.get('body.wy-body-for-nav:nth-child(2) ul.context-menu-list.context-menu-root:nth-child(6) li.context-menu-item.context-menu-icon.context-menu-icon-copy:nth-child(3) > span:nth-child(1)').should('be.visible');

    })
    /*
    it('Mouse Double click', function() {
      cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
      cy.frameLoaded('#iframeResult') // load the frame
// approach1 by using trigger method
      //  cy.iframe('#iframeResult').find('body:nth-child(2) > button:nth-child(6)').trigger('dblclick');
        //cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
//approach2 by using direct double click
cy.iframe('#iframeResult').find('body:nth-child(2) > button:nth-child(6)').dblclick();
cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

    }) 

    it.only('Drag and Drop using plugin', function() {
      cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
      cy.get('#box6').should('be.visible')
      cy.get('#box106').should('be.visible')
      cy.wait(3000);
      cy.get('#box6').drag('#box106',{force:true});
    })*/

    it('Scrolling Page', function() {
      cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
      cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
      cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');
      cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000});
      cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible');
      cy.get('#footer').scrollIntoView({duration:2000});
      cy.get('#footer > ul > :nth-child(1) > a').should('be.visible');
    })

  

  })