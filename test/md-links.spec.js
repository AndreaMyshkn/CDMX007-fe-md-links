const mdLinks = require('../readMd.js');
const linksDocument = require ('../Links.js')




describe('readDirectory should be a function', () => {
  it('Is a function', () => {
    expect(typeof mdLinks.readDirectory).toEqual('function')
  });
});
describe ('foundLinksToValidate should be a function', ()=>{
  it('Is a function', ()=>{
    expect(typeof linksDocument.foundLinksToValidate).toEqual('function')
  })
})
describe ('foundLinksToStats should be a function', ()=>{
  it('Is a function', ()=>{
    expect(typeof linksDocument.foundLinksToStats).toEqual('function')
  })
})
describe ('foundLinksToValidateAndStats should be a function', ()=>{
  it ('Is a function', ()=>{
    expect(typeof linksDocument.foundLinksToValidateAndStats).toEqual('function')
  })
})