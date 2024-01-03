1. Create a font file in your project
2. Paste .tff file here
3. In input.css add 

@font-face {
    font-family: 'Product sans'; /*Name in .tff file*/
    src: url(./fonts/Google-logo-font.ttf);
}

4. Add extended font in tailwind config file

extend: {
      fontFamily: {
        'googleFont': ['Product Sans', 'cursive'], /*second one is for case when 1st is not supported*/
      }
    },