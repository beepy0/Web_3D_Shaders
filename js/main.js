
/*
 * This is main.js which is referenced directly from within
 * a <script> node in index.html
 */

// "use strict" means that some strange JavaScript things are forbidden
"use strict";

/*********************************/
/**********    SETUP    **********/
/*********************************/

function main() {

  var sceneController = new SceneController();
  sceneController.setup();

  var htmlController = new HtmlController(sceneController);
  htmlController.setup();

    //this is how you output to the debugger console
  window.console.log("end main method");
}
