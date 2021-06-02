import { newE2EPage } from '@stencil/core/testing';

describe('post-list-mobile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-list-mobile></post-list-mobile>');

    const element = await page.find('post-list-mobile');
    expect(element).toHaveClass('hydrated');
  });
});
