import { newSpecPage } from '@stencil/core/testing';
import { PostListDesktop } from '../post-list-desktop';

describe('post-list-desktop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostListDesktop],
      html: `<post-list-desktop></post-list-desktop>`,
    });
    expect(page.root).toEqualHtml(`
      <post-list-desktop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-list-desktop>
    `);
  });
});
