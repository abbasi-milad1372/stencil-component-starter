import { newE2EPage } from '@stencil/core/testing';

describe('post-list-desktop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-list-desktop></post-list-desktop>');

    const element = await page.find('post-list-desktop');
    expect(element).toHaveClass('hydrated');
  });
});
