import { Pg3Page } from './app.po';

describe('pg3 App', () => {
  let page: Pg3Page;

  beforeEach(() => {
    page = new Pg3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
