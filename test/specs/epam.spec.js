describe('EPAM website UI tests',()=>{

    beforeEach(async()=>{
        await browser.url('/');
        await browser.setWindowSize(1440,900);
    });

    it('Should open Home page and verify title and logo', async()=>{
        await expect(browser).toHaveTitle(/EPAM/i);

        const headerLogo = await $('a.header__logo-link');
        await expect(headerLogo).toBeDisplayed();
    });


    it('Should open search panel and search for "Automation', async()=>{
        const searchIcon = await $('button.header-search__button');
        await searchIcon.click();

        const searchInput = await $('#new_form_search');
        await searchInput.waitForDisplayed({timeout:5000});
        await searchInput.setValue('Automation');

        const findButton = await $('//button[contains(@class,"custom-search-button")]');
        await findButton.click();

        await expect(browser).toHaveUrl(expect.stringContaining('/search'));
    });



    it('Should navigate to Careers page', async()=>{
        const careersLink = await $('a.top-navigation__item-link[href="/careers"]');
        await careersLink.click();

        await expect(browser).toHaveUrl(expect.stringContaining('/careers'));
        const mainContent= await $('main');
        await expect(mainContent).toBeDisplayed();
    });


    it('Should navigate to About page and verify content', async()=>{
        const aboutLink = await $('a.top-navigation__item-link[href="/about"]');
        await aboutLink.click();

        await expect(browser).toHaveUrl(expect.stringContaining('/about'));
        const mainSection = await $('main');
        await expect(mainSection).toBeDisplayed();
    });

    it('Should open language selector menu', async()=>{
        const langBtn = await $('button.location-selector__button');
        await langBtn.waitForClickable({timeout:5000});
        await langBtn.click();

        const langPanel = await $('nav.location-selector__panel');
        await expect(langPanel).toBeDisplayed();
    });

});