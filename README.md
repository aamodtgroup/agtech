# AG Tech - Frontity theme

A starter theme for Frontity with support for common Gutenberg WordPress editor blocks, darkmode and fetching menus from wordpress. 

## Table of contents

<!-- toc -->

- [Quick install](#quick-install)
- [Gutenberg](#gutenberg)
- [Bootstrap](#bootstrap)
- [Credits](#credits)


<!-- tocstop -->

## Quick install

1. This theme requires a plugins that shows menus in the Wordpress Rest API, we recommend this plugin:
[WP-REST-API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)

2. After you have installed the plugin, create a menu called "Menu", and you are good to go.


3. Create a Frontity project named `agtech-project` with **AG Tech - Frontity theme**
 
```sh
npx frontity create --theme @aamodtgroup/agtech agtech-project
```

4.  The CLI will run its part and once completed, cd to the project

```sh
cd agtech-project
```

5. Open your code editor and edit the url in frontity.settings.js so that it points to your wordpress install

```javascript
{
  name: "@frontity/wp-source",
  state: {
    source: {
      url: "https://wpurl.com/",
    }
  }
}
```

6. Run the project and have fun! :tada:

 ```sh
npx frontity dev
```

## Gutenberg

By default, these theme includes all the default styles of Gutenberg blocks, which is taken from  

      wp-includes\css\dist\block-library\style.css
      wp-includes\css\dist\block-library\theme.css

In addition we have included certain theme specific styles to the page and post templates.

In order to add custom styles to your Gutenberg blocks you first need to add the blocks inside a "Group" block and assign a CSS class(es) to it. Thus you could use this CSS class(es) to style the entire block along with all sub blocks inside the group block. 

## Bootstrap

We have included a bare-minimum bootstrap css which combines following Bootstrap css/scss files: functions, variables, mixins, root, [reboot](https://getbootstrap.com/docs/4.0/content/reboot/), type, [grid](https://getbootstrap.com/docs/4.0/layout/grid/), forms and [utilities](https://getbootstrap.com/docs/4.0/utilities/borders/).

This essentially provides a base to common layout/grid and  [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints).

_No bootstrap JS included_

## Credits
- Frontity Team [ [1](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/), [2](https://docs.frontity.org/guides/understanding-mars-theme-1) ]