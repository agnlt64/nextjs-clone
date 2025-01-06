# NextJS website clone in vanilla HTML, CSS and JS
Deployed at [agnlt64.github.io/nextjs-clone/](https://agnlt64.github.io/nextjs-clone/) via Github Pages.

## Assets
Font: [Geist](https://vercel.com/font), made by [Vercel](https://vercel.com)  
All the SVGs have been downloaded from the [NextJS official website](https://nextjs.org).  
Hamburger animation on mobile by [Kevin Powell](https://www.youtube.com/watch?v=R00QiudbD4Y). Demo on [Codepen](https://codepen.io/kevinpowell/pen/gOKpOyy).

## W3C compliance
All the pages of the site are fully w3c-compliant, according to their [HTML validator](https://validator.w3.org/). The CSS in [`css/index.css`](./css/index.css) is technically fully correct as well, but the validator does not support the new shorthand properties for `transform` and `rotate` (even though they are part of the [CSS standard](https://developer.mozilla.org/en-US/docs/Web/CSS/translate#browser_compatibility)) so it reports them as errors. This problem has been known for [quite some time](https://github.com/w3c/css-validator/issues/408) but it has still not been fixed.