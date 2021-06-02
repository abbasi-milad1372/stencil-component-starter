import { newSpecPage } from '@stencil/core/testing';
import { PostListMobile } from '../post-list-mobile';

describe('post-list-mobile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostListMobile],
      html: `<post-list-mobile></post-list-mobile>`,
    });
    expect(page.root).toEqualHtml(`
      <post-list-mobile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-list-mobile>
    `);
  });
});
