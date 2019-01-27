# netlify-cms-responsive-youtube-editor-widget

Adds a Vimeo widget to your editor allowing you to embed videos responsively with your app.

## Installation

```
npm install netlify-cms-responsive-youtube-editor-widget
```

## Usage

Within your `cms.js` file:

```js
import CMS from 'netlify-cms';
import ResponsiveYouTubeEditorWidget from 'netlify-cms-responsive-youtube-editor-widget';

CMS.registerEditorComponent(ResponsiveYouTubeEditorWidget);
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
