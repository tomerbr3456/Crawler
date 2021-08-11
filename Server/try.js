
const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function scripeEbay(url) {
  const description = await getDescription(url);
  return description
}

async function getDescription(url) {
  const response = await fetch(url);
  const text = await response.text();


  const $ = cheerio.load(text);
  
  const relatedData=[]
  const items = []

  $('.srp-main--isLarge .srp-related-searches>span>a').each((index,element)=>{
    relatedData.push($(element).text())
  })

  $('.s-item').each((index, element) => {
    if(index!==0)
    items.push({
      price: $(element).find('.s-item__price').text(),
      shipsfrom: $(element).find('.s-item__location.s-item__itemLocation').text(),
      shipping: $(element).find('.s-item__shipping.s-item__logisticsCost').text(),
      title: $(element).find('.s-item__title').text(),
      image: $(element).find('.s-item__image-img').attr("src")
    })
  })
  return {items,relatedData}
}
// scripeEbay('https://www.ebay.com/sch/shoes')

// console.log(scripeEbay('https://www.ebay.com/sch/i.html?_nkw=shoes'));

module.exports = {
  scripeEbay, getDescription
}