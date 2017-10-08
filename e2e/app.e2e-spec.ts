import { AngularTest1Page } from './app.po';

describe('angular-test1 App', () => {
  let page: AngularTest1Page;

  beforeEach(() => {
    page = new AngularTest1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
