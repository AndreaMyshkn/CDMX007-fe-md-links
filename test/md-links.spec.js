const mdLinks = require('../readMd.js');
const linksDocument = require ('../Links.js')


describe('readDirectory', () => {

  it('should be a function', () => {
    expect(typeof mdLinks.readDirectory).toEqual('function')
  });

});
describe ('foundLinksToValidate', ()=>{
  it('should be a function', ()=>{
    expect(typeof linksDocument.foundLinksToValidate).toEqual('function')
  })
})
describe ('foundLinksToStats', ()=>{
  it('should be a function', ()=>{
    expect(typeof linksDocument.foundLinksToStats).toEqual('function')
  })
})
describe ('foundLinksToValidateAndStats', ()=>{
  it ('should be a function', ()=>{
    expect(typeof linksDocument.foundLinksToValidateAndStats).toEqual('function')
  })
})