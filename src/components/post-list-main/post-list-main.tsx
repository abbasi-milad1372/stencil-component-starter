import { Component, h } from '@stencil/core';

@Component({
  tag: 'post-list-main',
  styleUrl: 'post-list-main.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class PostListMain {

  render() {
    if (this.detectMob()) {
      return (   <post-list-mobile></post-list-mobile> )
    } else {
      return ( <post-list-desktop></post-list-desktop>)
    }
  }

  detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
}
