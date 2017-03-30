= Getting Started =
# In Chrome, go to chrome://extensions, Check 'Developer Mode', click "Load unpacked extension..." and select /path/to/matter-demo/download_ext.
# Open index.html

= Files =
* matter.js and chains.js are just copied from the matter-js repo / demo code.
* index.html just runs the chains examples, and then has a timer that every 2s, creates a png from the matter.js canvas, puts it into a hidden img element, and clicks the hidden button from the extension
* the extension reads the image data from the img element, and calls the background extension js, which actually saves the image

= Helpful Resources =

This is where I learned how to do this:

http://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf

http://stackoverflow.com/questions/20925222/how-to-force-chrome-to-not-open-saveas-dialog-when-downloading-a-url
