# netlify-cms-responsive-vimeo-editor-widget

Adds a Vimeo widget to your editor allowing you to embed videos responsively with your app.

## Usage

Within your `cms.js` file:

```js
import CMS from 'netlify-cms';
import ResponsiveVimeoEditorWidget from 'netlify-cms-responsive-vimeo-editor-widget';

CMS.registerEditorComponent(ResponsiveVimeoEditorWidget);
```

If you're using Gatsby you need to direct Netlify CMS to your `cms.js` file like this:

```js
    ...
   {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
            modulePath: `${__dirname}/src/cms/cms.js`
        }
    }
    ...
```
