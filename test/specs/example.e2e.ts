describe('My Login application', () => {
  // Adding time out to make sure the app is load prior to test is run
  beforeEach(() => {
    $("~app-root").waitForDisplayed(11000, false)
  });

  it('Valid Login Test', async => {
    $('~username').setValue("shamique");
    $('~password').setValue("123456");

    $("~login").click();

    /*$("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('success');*/
  });

});

