# NextJS website clone in vanilla HTML, CSS and JS

## Assets
Font: [Geist](https://vercel.com/font), made by [Vercel](https://vercel.com)  
All the SVGs have been downloaded from the [NextJS official website](https://nextjs.org).

## W3C compliance
`index.html` is fully w3c-compliant, according to their [HTML validator](https://validator.w3.org/). The CSS is technically fully correct as well, but the validator does not support the new shorthand properties for `transform` and `rotate` (even though they are part of the [CSS standard](https://developer.mozilla.org/en-US/docs/Web/CSS/translate#browser_compatibility)) so it reports them as errors. This problem has been known for [quite some time](https://github.com/w3c/css-validator/issues/408) but it has still not been fixed.