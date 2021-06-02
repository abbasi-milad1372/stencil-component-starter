import { newE2EPage } from '@stencil/core/testing';

describe('post-list-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-list-main></post-list-main>');

    const element = await page.find('post-list-main');
    expect(element).toHaveClass('hydrated');
  });
});
