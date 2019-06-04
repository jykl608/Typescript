export default () => {
    const ProductRecordResponses = [
        { "status": 200, "data": { "name": "mock-detailed-widget", "title": "Mock Detailed Widget", "shortDescription": "The picture widget is used to place images onto a webpage.", "longDescription": "The picture widget is used to place images onto a webpage.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-frame/assets/icon.png", "version": "collection-c1-content/0.0.0.0.0-SNAPSHOT", "category": "ICE Content Widget", "builtBy": "Central 1", "buildDate": "2018-10-29", "screenshot1Url": "URL to Screenshot 1", "screenshot1Caption": "Caption for Screenshot 1", "screenshot2Url": "URL to Screenshot 2", "screenshot2Caption": "Caption for Screenshot 2", "screenshot3Url": "URL to Screenshot 3", "screenshot3Caption": "Caption for Screenshot 3", "screenshot4Url": "URL to Screenshot 4", "screenshot4Caption": "Caption for Screenshot 4", "screenshot5Url": "URL to Screenshot 5", "screenshot5Caption": "Caption for Screenshot 5", "screenshot6Url": "URL to Screenshot 6", "screenshot6Caption": "Caption for Screenshot 6", "screenshot7Url": "URL to Screenshot 7", "screenshot7Caption": "Caption for Screenshot 7", "screenshot8Url": "URL to Screenshot 8", "screenshot8Caption": "Caption for Screenshot 8", "screenshot9Url": "URL to Screenshot 9", "screenshot9Caption": "Caption for Screenshot 9", "screenshot10Url": "URL to Screenshot 10", "screenshot10Caption": "Caption for Screenshot 10", "commonUsages": "Pictures work well placed in a Grid layout\r\n Setting the picture width to 100% (at XS) and a height of a specific pixel value at XS will create a nice \"banner\" type image\r\n\tIf the focal area of the picture is out of the frame, then use the Image offset value to move it back into frame\r\nRecommend using percentage values for \"Image Offset\" x/y values.  A good rule of thumb is to try to figure out where the \"focal\" area of the image is and provide x/y percentage coordinates (of the original image) to that focal area.\r\nYou can make an image respond nicely to different screen sizes by providing 100% width at XS and a specific pixel value for heights at each breakpoint (you don't have to redefine 100% width for each breakpoint)\r\nIf you want to retain the exact original image size you can set the XS width and height to \"auto\"\r\n", "usage": "Drop the picture widget on to the page\r\nDrag an image into the picture drop area\r\nConfigure the picture widget for desired effect\r\n(Optional) Add a link to the image\r\n", "behaviour": "By default the image will be sized like:\r\n\tIf the image width is less than the width of the container containing the picture widget, then the image will retain it's original size (width/height auto)\r\n\tIf the image width is greater than the width of the container containing the picture widget, then the image will fill the container width exactly and scale its height accordingly (while maintaining its aspect ratio)\r\nThe \"image fit\" preference only takes effect if the image has a defined width AND height.\r\n\tAn image is considered to have a width or height defined if it has at least one width or height value defined for the current breakpoint OR lower\r\n", "goodToKnow": "This widget uses the `object-fit` polyfill to support the CSS object-fit property in IE11 See: feature-c1-polyfills\r\n", "notes": "There is currently a bug in Backbase that causes the picture widget to \"refresh\" improperly when setting a widget preference to an empty value.  If you clear a preference, you should refresh the page to see the change take effect.\r\n", "iceContentAreas": "Content area;;Type;;Description\r\nHeading;;plain text;;The heading text\r\nBody copy;;rich text;;The copy text\r\n", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" } } },
        { "status": 400, "data": null },
        { "status": 500, "data": null }
    ];
    const ProductResponses = [
        { "status": 200, "data": [{ "name": "layout-c1-frame", "title": "Mock Frame Layout", "buildDate": "2018-10-29", "shortDescription": "Content frame that supports adding padding or background colour to an area.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-frame/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout"] }, { "name": "layout-c1-grid", "title": "Mock Grid Layout", "buildDate": "2018-11-29", "shortDescription": "Use this layout to arrange widgets in a customizable grid pattern.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-grid/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout"] }, { "name": "layout-c1-header-with-background", "title": "Mock Header with Background Layout", "buildDate": "2018-12-29", "shortDescription": "Create a consistent page header with a background image for a website.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-header-with-background/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout", "header"] }, { "name": "layout-c1-login-overlay", "title": "Mock Login Overlay Layout", "buildDate": "2018-10-21", "shortDescription": "Create large header area with content and a login box that is overlayed on the content.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-login-overlay/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout"] }, { "name": "layout-c1-marquee-overlay", "title": "Mock Marquee Overlay Layout", "buildDate": "2018-10-10", "shortDescription": "Layout to use to draw attention to information by creating a visual overlay.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-marquee-overlay/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout"] }, { "name": "layout-c1-pager-footer", "title": "Mock Page Footer Layout", "buildDate": "2019-10-29", "shortDescription": "Multi-column page footer layout.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-pager-footer/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout", "footer"] }, { "name": "layout-c1-pager-header", "title": "Mock Page Header Layout", "buildDate": "2019-09-29", "shortDescription": "Create a consistant page header for a website.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-pager-header/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout", "header"] }, { "name": "layout-c1-page-structure", "title": "Mock Page Structure", "buildDate": "2019-12-10", "shortDescription": "Used to define the basic structure of a webpage.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-page-structure/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout"] }, { "name": "layout-c1-content-spacer", "title": "Mock Content Spacer", "buildDate": "2017-10-29", "shortDescription": "Use this layout to add visual space between items on a page.", "thumbnailUrl": "/gateway/api/portal/static/items/layout-c1-content-spacer/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["layout", "content"] }, { "name": "widget-c1-call-to-action", "title": "Mock Call to Action", "buildDate": "2017-09-29", "shortDescription": "Used to create a call to action, to draw customers' attention to a specific piece of information.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-call-to-action/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-hero", "title": "Mock Hero", "buildDate": "2017-12-10", "shortDescription": "A large area to call attention to the most important information on a page.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-hero/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-customer-advisory", "title": "Mock Customer Advisory", "buildDate": "2016-10-29", "shortDescription": "Draw attention to important information on your website.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-customer-advisory/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-collapsible-content", "title": "Mock Collapsible Content", "buildDate": "2016-11-22", "shortDescription": "Collapsible content area with a title and some rich text as content.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-collapsible-content/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-mdi-login-redirect", "title": "Mock MDi Login Redirect", "buildDate": "2018-10-29", "shortDescription": "Use this widget to redirect a user to the MDi login flow.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-mdi-login-redirect/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-mini-contact-us", "title": "Mock Mini contact us", "buildDate": "2018-10-28", "shortDescription": "Content widget providing telephone number, map link, and contact email address.Content managers can replace the default icons with uploaded icon images.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-mini-contact-us/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-page-header", "title": "Mock Page Header Widget", "buildDate": "2018-10-27", "shortDescription": "Create a consistant page header for a website.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-page-header/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["header"] }, { "name": "widget-c1-picture", "title": "Mock Picture", "buildDate": "2018-10-26", "shortDescription": "The picture widget is used to place images onto a webpage.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-picture/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-product-overview", "title": "Mock Product Overview", "buildDate": "2018-10-25", "shortDescription": "Used for highlighting the key features of a product and provides a Primary action \"Apply now\" button and Secondary action \"Learn more\" button. This works well in the Product Comparison Layout, but is able to stand on it's own as well.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-product-overview/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }, { "name": "widget-c1-secondary-marquee", "title": "Mock Secondary marquee", "buildDate": "2018-10-24", "shortDescription": "Create an impactful page section header with a background image under title and copy.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-secondary-marquee/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["header"] }, { "name": "widget-c1-title-with-copy", "title": "Mock Title with Copy", "buildDate": "2018-10-23", "shortDescription": "Create a heading (h1, h2, h3) with a rich-text content block.", "thumbnailUrl": "/gateway/api/portal/static/items/widget-c1-title-with-copy/assets/icon.png", "builtBy": "Central 1", "vendor": { "displayName": "Central 1", "logoUrl": "/gateway/api/portal/static/items/widget-c1-marketplace-product-gallery-ng/assets/icon.png", "vendorName": "central1" }, "categories": ["content"] }] },
        { "status": 400, "data": { "message": "Bad Request", "errors": [{ "message": "Value Exceeded. Must be between {min} and {max}.", "key": "common.api.shoesize", "context": { "max": "0", "min": "50" } }] } },
        { "status": 500, "data": { "message": "Description of error" } },
    ];
    // return Products for now
    const getProducts = () => {
        return new Promise((resolve) => {
            resolve(ProductResponses[0].data);
        });
    };
    const getProductRecord = () => {
        return new Promise((resolve) => {
            resolve(ProductRecordResponses[0].data);
        });
    };
    return {
        getProducts,
        getProductRecord
    };
};
