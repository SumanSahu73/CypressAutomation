/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
import Login from '../../fixtures/TestData/Login.json'
import SwagLabs from '../../fixtures/Locators/SwagLabs.json'
var sum=0
var taxsum=0
class AddProduct
{
    RemoveProduct(RemoveItem) 
    {

        cy.get(SwagLabs.ItemNameLable).each(($e1, index, $list) => {
            if ($e1.text().includes(RemoveItem)) {
                cy.get(SwagLabs.removeButton).eq(index).click()

            }
        })
    }
    selectProduct(SwagProductName) 
    {
        cy.get(SwagLabs.SelectItemNameBox).each(($e1, index, $list) => {
            if ($e1.text().includes(SwagProductName)) {
                cy.get(SwagLabs.AddButton).eq(index).click()

            }
        })
    }
    getTotalSumwithoutTax()
    {
        cy.get(SwagLabs.PriceBox).each(($e1, index, $list) => {
            const amount=$e1.text()
            cy.log(amount)
            function removeCharacter() {
                let originalString = amount;
                let newString = originalString.replace("$", "");
                console.log(newString);
                sum=Number(sum)+Number(newString)
            }
             
            removeCharacter();
        
            }).then(function()
            {
                cy.log(sum)
        
        })
    }
    compareTotalAmountwithoutTax()
    {
        cy.get(SwagLabs.GetTotalAmountBox).then(function(e1){
            const total=e1.text()
            function removeText() {
             
                // Input string
                let originalText = total;
                 
                // Replace method with regEx
                let newText1 = originalText.replace(/Item/, '');
                let newText2 = newText1.replace(/total:/, '');
                let newText3 = newText2.replace("$", "");
                // Display output
                cy.log(newText3);
                var strToNum=Number(newText3)
                expect(strToNum).to.equal(sum)
            }
             
            // Function call
            removeText();
           
            
            
        })
    }
    getTotalSumwithTax()
    {
        cy.get(SwagLabs.GetTaxAmountBox).then(function(e1){
            const total=e1.text()
            function removeText() {
             
                // Input string
                let originalText = total;
                 
                // Replace method with regEx
                let newText1 = originalText.replace(/Tax:/, '');
               // let newText2 = newText1.replace(/total:/, '');
                let newText3 = newText1.replace("$", "");
                // Display output
                cy.log(newText3);
                var strToNum=Number(newText3)
                taxsum=sum+strToNum
                cy.log(taxsum)
               // expect(taxsum).to.equal(sum)
            }
             
            // Function call
            removeText();
           
            
            
        }) 
    }
    compareTotalAmountwithTax()
    {
        cy.get(SwagLabs.GetTotalAmountWithTaxBox).then(function(e1){
            const total=e1.text()
            function removeText() {
             
                // Input string
                let originalText = total;
                 
                // Replace method with regEx
                let newText1 = originalText.replace(/Total:/, '');
                let newText3 = newText1.replace("$", "");
                // Display output
                cy.log(newText3);
                var strToNum=Number(newText3)
                cy.log(strToNum)
                expect(strToNum).to.equal(taxsum)
            }
             
            // Function call
            removeText();
           
            
            
        })
    }
}
export default AddProduct;