const scraperObject = {
    url: 'https://pooltool.io/pool/f2d23cc3549ab3fe4c78dd9115aab0a9e47dde96b7c4346822c72aa3/',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url),  { waitUntil: 'networkidle2' };
        await page.waitFor('#app > div > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between');
        await sleep(60000)
         function sleep(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
         });
        }

  /* Run javascript inside of the page */

 let data = await page.evaluate(() => {
    let livestake = document.querySelector('#app > div > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(1) > span').innerText;
    let activestake = document.querySelector('#app > div > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(2) > span').innerText;
    let epochblocks = document.querySelector('#app > div > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(3) > span').innerText;
    let lifetimeblocks = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(4) > span').innerText;
    let lifetimeros = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(5) > span').innerText;
    let firstepoch = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(6) > span').innerText;
    let epochfee = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(7) > span').innerText;
    let variablefee = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(8) > span').innerText;
    let pledge = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(9) > span > span').innerText;
    let lifetimerewards = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(10) > span').innerText;
    let lifetimefees = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(11) > span').innerText;
    let lifetimestake = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(12) > span').innerText;
    let onlinerelays = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(13) > span.title').innerText;
    let onlinerelaynodes = document.querySelector('#app > div.v-application--wrap > div:nth-child(2) > main > div > div > div > div > div.pb-5 > div > div.v-card__text.mt-0.pt-0.pb-0.mb-0 > div.row.align-end.justify-space-between > div:nth-child(13) > span.caption').innerText;

  /* Returning an object filled with the scraped data */
    return {
      livestake,
      activestake,
      epochblocks,
      lifetimeblocks,
      lifetimeros,
      firstepoch,
      epochfee,
      variablefee,
      pledge,
      lifetimerewards,
      lifetimefees,
      lifetimestake,
      onlinerelays,
      onlinerelaynodes
    }
  });


  /* Outputting what we scraped */
  console.log(data);
  await browser.close();


// writefile.js

const fs = require('fs')

const content = JSON.stringify(data, null, 4)

fs.writeFileSync('/home/ftpuser/stats.json', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

}

}

module.exports = scraperObject;

