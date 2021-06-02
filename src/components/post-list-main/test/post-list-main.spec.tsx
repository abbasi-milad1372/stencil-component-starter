import { newSpecPage } from '@stencil/core/testing';
import { PostListMain } from '../post-list-main';

describe('post-list-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostListMain],
      html: `<post-list-main></post-list-main>`,
    });
    expect(page.root).toEqualHtml(`
      <post-list-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-list-main>
    `);
  });
});
