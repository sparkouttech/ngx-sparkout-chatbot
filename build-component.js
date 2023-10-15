const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/web-component/runtime.js',
        './dist/web-component/polyfills.js',
        './dist/web-component/main.js'
      ];

      await fs.ensureDir('widget');
      await concat(files, 'widget/sparkout-chat-widget.js');
}
build();
