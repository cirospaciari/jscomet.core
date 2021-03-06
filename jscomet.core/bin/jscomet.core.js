var z____memoryImport = z____memoryImport || {};



var ____imported = JSComet.include("bliss", false, z____memoryImport);

var Bliss = ____imported;;

var ____imported = JSComet.include("fs", false, z____memoryImport);

var fs = ____imported;;

var ____imported = JSComet.include('express', false, z____memoryImport);

var express = ____imported;;

var ____imported = JSComet.include('path', false, z____memoryImport);

var path = ____imported;;

var ____imported = JSComet.include('cookie-parser', false, z____memoryImport);

var cookieParser = ____imported;;

var ____imported = JSComet.include('body-parser', false, z____memoryImport);

var bodyParser = ____imported;;

var ____imported = JSComet.include('morgan', false, z____memoryImport);

var logger = ____imported;;

var ____imported = JSComet.include('serve-favicon', false, z____memoryImport);

var favicon = ____imported;;

var ____imported = JSComet.include('compression', false, z____memoryImport);

var compression = ____imported;;

var ____imported = JSComet.include('express-session', false, z____memoryImport);

var session = ____imported;;


var JSCometWeb = JSCometWeb || {}; 
(function (JSCometWeb) {
var Controller = (function(){
"use strict";

var ___privateStatic___ = {};
function Controller(){
	JSComet.checkClass(this, Controller);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'title', get: (function(){ var z____return = (function title(){return ___private___.z____title;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Controller#title - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function title(value){

if((value != null) &&(typeof value != 'string'))
 throw "Controller#title - the property 'value' must be 'string'";
 ___private___.z____title = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'layout', get: (function(){ var z____return = (function layout(){return ___private___.z____layout;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Controller#layout - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function layout(value){

if((value != null) &&(typeof value != 'string'))
 throw "Controller#layout - the property 'value' must be 'string'";
 ___private___.z____layout = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'viewRenderer', get: (function(){ var z____return = (function viewRenderer(){return ___private___.z____viewRenderer;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof ViewRenderer))
 throw "Controller#viewRenderer - the return type must be 'ViewRenderer'";
 return z____return;}), set:(function(){ return (function viewRenderer(value){

if(value !== null && !(value instanceof ViewRenderer))
 throw "Controller#viewRenderer - the property 'value' must be 'ViewRenderer'";
 ___private___.z____viewRenderer = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'viewBag', get: (function(){ var z____return = (function viewBag(){return ___private___.z____viewBag;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'object'))
 throw "Controller#viewBag - the return type must be 'object'";
 return z____return;}), set:(function(){ return (function viewBag(value){

if((value != null) &&(typeof value != 'object'))
 throw "Controller#viewBag - the property 'value' must be 'object'";
 ___private___.z____viewBag = value; }).apply(___self___, arguments);}) });

		___private___.z____title =  "";
		___private___.z____layout =  "layout";
		___private___.z____viewRenderer = null;
		___private___.z____viewBag =  {};
___self___.view =  (function view(){if(arguments.length == 0){
  var  z____return = (function view(){
        
			return this.view(null, null);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function view(model){
        
              if(typeof model == "string"){
                return this.view(model, null);    
            }
			return this.view(null, model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function view(viewName, model){


if((viewName != null) &&(typeof viewName != 'string'))
 throw "Controller#view - the parameter 'viewName' must be 'string'";

        
			return {
				isView: true,
				viewName: viewName,
				model: model
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Controller#view - No overload function takes '+arguments.length+' arguments';});
___self___.stream =  (function stream(stream){
  var  z____return = (function stream(stream){
        
			return {
				result: stream,
				isStream: true
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.buffer =  (function buffer(buffer,  status,  contentType){
  var  z____return = (function buffer(buffer, status, contentType){
        
			status = status || 200;
			contentType = contentType || 'application/octet-stream';
			return {
				result: buffer,
				status: status,
				contentType: contentType
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.file =  (function file(){if(arguments.length == 1){
  var  z____return = (function file(path){


if((path != null) &&(typeof path != 'string'))
 throw "Controller#file - the parameter 'path' must be 'string'";

        
			return {
				result: path,
				isFile: true
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function file(path, filename){


if((path != null) &&(typeof path != 'string'))
 throw "Controller#file - the parameter 'path' must be 'string'";

if((filename != null) &&(typeof filename != 'string'))
 throw "Controller#file - the parameter 'filename' must be 'string'";

        
			return {
				result: path,
				filename: filename,
				isFile: true
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Controller#file - No overload function takes '+arguments.length+' arguments';});
___self___.redirect =  (function redirect(url,  status){
  var  z____return = (function redirect(url, status){
        
			status = status || 302;
			return {
				contentType: "redirect",
				result: url,
				status: status
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.json =  (function json(object,  status){
  var  z____return = (function json(object, status){
        
			status = status || 200;
			return {
				result: JSON.stringify(object),
				status: status,
				contentType: 'application/json'
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.text =  (function text(result,  status){
  var  z____return = (function text(result, status){
        
			status = status || 200;
			return {
				result: result,
				status: status,
				contentType: 'text/plain'
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.error =  (function error(result,  status){
  var  z____return = (function error(result, status){
        
			status = status || 500;

			return {
				result: result,
				status: status,
				contentType: 'error'
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.html =  (function html(result,  status,  contentType){
  var  z____return = (function html(result, status, contentType){
        
			status = status || 200;
			contentType = contentType || 'text/html';
			return {
				result: result,
				status: status,
				contentType: contentType
			};
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.render =  (function render(){if(arguments.length == 1){
  var  z____return = (function render(model){
        
			if(!this.viewEngine)
				return null;
            if(typeof model == "string"){
                return this.viewEngine.render(model, null);    
            }
			return this.viewEngine.render(model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((z____return != null) &&(typeof z____return != 'string'))
 throw "Controller#render - the return type must be 'string'";
return z____return;}
if(arguments.length == 2){
  var  z____return = (function render(viewName, model){


if((viewName != null) &&(typeof viewName != 'string'))
 throw "Controller#render - the parameter 'viewName' must be 'string'";

        
			if(!this.viewRenderer)
				return null;

			return this.viewRenderer.render(viewName, model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(!(!((z____return != null) &&(typeof z____return != 'string')) ||
 !(z____return !== null && !(z____return instanceof undefined))))
 throw "Controller#render - the return type must be between types 'string', 'undefined'";
return z____return;}
throw 'Controller#render - No overload function takes '+arguments.length+' arguments';});
___self___.partial =  (function partial(){if(arguments.length == 1){
  var  z____return = (function partial(model){
        
			if(!this.viewRenderer)
				return null;
            if(typeof model == "string"){
                return this.viewEngine.partial(model, null);    
            }
			return this.viewRenderer.partial(model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((z____return != null) &&(typeof z____return != 'string'))
 throw "Controller#partial - the return type must be 'string'";
return z____return;}
if(arguments.length == 2){
  var  z____return = (function partial(viewName, model){


if((viewName != null) &&(typeof viewName != 'string'))
 throw "Controller#partial - the parameter 'viewName' must be 'string'";

        
			if(!this.viewRenderer)
				return null;

			return this.viewRenderer.partial(viewName, model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(!(!((z____return != null) &&(typeof z____return != 'string')) ||
 !(z____return !== null && !(z____return instanceof undefined))))
 throw "Controller#partial - the return type must be between types 'string', 'undefined'";
return z____return;}
throw 'Controller#partial - No overload function takes '+arguments.length+' arguments';});
___self___.async =  (function async(executor){
  var  z____return = (function async(executor){


if(executor !== null && !(executor instanceof Function))
 throw "Controller#async - the parameter 'executor' must be 'Function'";

        
			var self = this;
			return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
				try{
					executor.call(self, resolve, reject);
				}catch(ex){
					reject(ex);
				}
			}).apply(_this,arguments)});})(this)));
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(z____return !== null && !(z____return instanceof Promise))
 throw "Controller#async - the return type must be 'Promise'";
return z____return;});
___self___.onActionExecuting =  (function onActionExecuting(args){
  var  z____return = (function onActionExecuting(args){
        

		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onActionExecuted =  (function onActionExecuted(args){
  var  z____return = (function onActionExecuted(args){
        

		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Controller;
})();;

JSCometWeb.Controller = Controller;



	var RouteEngine = (function(){
"use strict";

var ___privateStatic___ = {};
function RouteEngine(appDirectory, viewEngine){
	JSComet.checkClass(this, RouteEngine);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'viewEngine', get: (function(){ var z____return = (function viewEngine(){return ___private___.z____viewEngine;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof ViewEngine))
 throw "RouteEngine#viewEngine - the return type must be 'ViewEngine'";
 return z____return;}), set:(function(){ return (function viewEngine(value){

if(value !== null && !(value instanceof ViewEngine))
 throw "RouteEngine#viewEngine - the property 'value' must be 'ViewEngine'";
 ___private___.z____viewEngine = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'appDirectory', get: (function(){ var z____return = (function appDirectory(){return ___private___.z____appDirectory;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "RouteEngine#appDirectory - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function appDirectory(value){

if((value != null) &&(typeof value != 'string'))
 throw "RouteEngine#appDirectory - the property 'value' must be 'string'";
 ___private___.z____appDirectory = value; }).apply(___self___, arguments);}) });

		___private___.z____viewEngine = null;
		___private___.z____appDirectory = null;
___self___.match =  (function match(request,  response){
  var  z____return = (function match(request, response){
        
			throw "Not implemented";
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "RouteEngine#match - the return type must be 'boolean'";
return z____return;});
___self___.error =  (function error(error,  request,  response){
  var  z____return = (function error(error, request, response){
        
			throw "Not implemented";
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(typeof z____return != 'undefined')
 
 throw "RouteEngine#error - the return type must be 'undefined'";
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(appDirectory, viewEngine){


if((appDirectory != null) &&(typeof appDirectory != 'string'))
 throw "RouteEngine#constructor - the parameter 'appDirectory' must be 'string'";

if(viewEngine !== null && !(viewEngine instanceof ViewEngine))
 throw "RouteEngine#constructor - the parameter 'viewEngine' must be 'ViewEngine'";

        
			this.viewEngine = viewEngine;
			this.appDirectory = appDirectory;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return RouteEngine;
})();;

JSCometWeb.RouteEngine = RouteEngine;


	var ViewRenderer = (function(){
"use strict";

var ___privateStatic___ = {};
function ViewRenderer(controller, controllerName, actionName, viewEngine, directory){
	JSComet.checkClass(this, ViewRenderer);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'controller', get: (function(){ var z____return = (function controller(){return ___private___.z____controller;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Controller))
 throw "ViewRenderer#controller - the return type must be 'Controller'";
 return z____return;}), set:(function(){ return (function controller(value){

if(value !== null && !(value instanceof Controller))
 throw "ViewRenderer#controller - the property 'value' must be 'Controller'";
 ___private___.z____controller = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'controllerName', get: (function(){ var z____return = (function controllerName(){return ___private___.z____controllerName;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "ViewRenderer#controllerName - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function controllerName(value){

if((value != null) &&(typeof value != 'string'))
 throw "ViewRenderer#controllerName - the property 'value' must be 'string'";
 ___private___.z____controllerName = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'actionName', get: (function(){ var z____return = (function actionName(){return ___private___.z____actionName;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "ViewRenderer#actionName - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function actionName(value){

if((value != null) &&(typeof value != 'string'))
 throw "ViewRenderer#actionName - the property 'value' must be 'string'";
 ___private___.z____actionName = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'directory', get: (function(){ var z____return = (function directory(){return ___private___.z____directory;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "ViewRenderer#directory - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function directory(value){

if((value != null) &&(typeof value != 'string'))
 throw "ViewRenderer#directory - the property 'value' must be 'string'";
 ___private___.z____directory = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'viewEngine', get: (function(){ var z____return = (function viewEngine(){return ___private___.z____viewEngine;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof ViewEngine))
 throw "ViewRenderer#viewEngine - the return type must be 'ViewEngine'";
 return z____return;}), set:(function(){ return (function viewEngine(value){

if(value !== null && !(value instanceof ViewEngine))
 throw "ViewRenderer#viewEngine - the property 'value' must be 'ViewEngine'";
 ___private___.z____viewEngine = value; }).apply(___self___, arguments);}) });

		___private___.z____controller = null;
		___private___.z____controllerName = null;
		___private___.z____actionName = null;
		___private___.z____directory = null;
		___private___.z____viewEngine = null;
		this.viewBag =  {};
___self___.render =  (function render(){if(arguments.length == 1){
  var  z____return = (function render(model){
        
            if(typeof model == "string"){
                return this.render(model, null);    
            }
			return this.render(null, model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((z____return != null) &&(typeof z____return != 'string'))
 throw "ViewRenderer#render - the return type must be 'string'";
return z____return;}
if(arguments.length == 2){
  var  z____return = (function render(viewName, model){


if((viewName != null) &&(typeof viewName != 'string'))
 throw "ViewRenderer#render - the parameter 'viewName' must be 'string'";

        
			this.viewBag = this.controller.viewBag || {};
			var body = this.partial(viewName, model);

			var layoutName = controller.layout + ".html";
			var layoutDir =  path.join(this.directory, "/views/" + (this.controllerName || "").toLowerCase() + "/" + layoutName);
			if(!fs.existsSync(layoutDir)){
				layoutDir = path.join(this.directory, "/views/shared/" + layoutName);
				if(!fs.existsSync(layoutDir)){
					layoutDir = null;
				}
			}
			var html = "";
			if(layoutDir)
				html = this.viewEngine.compile(layoutDir, controller.title, body, this);
			else
				html = body;

			return html;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'ViewRenderer#render - No overload function takes '+arguments.length+' arguments';});
___self___.partial =  (function partial(){if(arguments.length == 1){
  var  z____return = (function partial(model){
        
            if(typeof model == "string"){
                return this.partial(model, null);    
            }
			return this.partial(null, model);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((z____return != null) &&(typeof z____return != 'string'))
 throw "ViewRenderer#partial - the return type must be 'string'";
return z____return;}
if(arguments.length == 2){
  var  z____return = (function partial(viewName, model){


if((viewName != null) &&(typeof viewName != 'string'))
 throw "ViewRenderer#partial - the parameter 'viewName' must be 'string'";

            
            
			this.viewBag = this.controller.viewBag || {};
			var viewName = (viewName || this.actionName) + ".html";
			var viewDir = path.join(this.directory, "/views/" + (this.controllerName || "").toLowerCase() + "/" + viewName);
			if(!fs.existsSync(viewDir)){
				viewDir = path.join(this.directory, "/views/shared/" + viewName);
				if(!fs.existsSync(viewDir)){
					throw viewName + " not found.";
				}
			}

			return this.viewEngine.compile(viewDir, model, this);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(!(!((z____return != null) &&(typeof z____return != 'string')) ||
 !(z____return !== null && !(z____return instanceof undefined))))
 throw "ViewRenderer#partial - the return type must be between types 'string', 'undefined'";
return z____return;}
throw 'ViewRenderer#partial - No overload function takes '+arguments.length+' arguments';});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(controller, controllerName, actionName, viewEngine, directory){


if(controller !== null && !(controller instanceof Controller))
 throw "ViewRenderer#constructor - the parameter 'controller' must be 'Controller'";

if((controllerName != null) &&(typeof controllerName != 'string'))
 throw "ViewRenderer#constructor - the parameter 'controllerName' must be 'string'";

if((actionName != null) &&(typeof actionName != 'string'))
 throw "ViewRenderer#constructor - the parameter 'actionName' must be 'string'";

if(viewEngine !== null && !(viewEngine instanceof ViewEngine))
 throw "ViewRenderer#constructor - the parameter 'viewEngine' must be 'ViewEngine'";

if((directory != null) &&(typeof directory != 'string'))
 throw "ViewRenderer#constructor - the parameter 'directory' must be 'string'";

        

			this.controller = controller;
			this.controllerName = controllerName;
			this.actionName = actionName;
			this.viewEngine = viewEngine;
			this.directory = directory;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return ViewRenderer;
})();;

JSCometWeb.ViewRenderer = ViewRenderer;


	var ViewEngine = (function(){
"use strict";

var ___privateStatic___ = {};
function ViewEngine(){
	JSComet.checkClass(this, ViewEngine);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.compile =  (function compile(fileName, models){
  var  z____return = (function compile(fileName, models){
		models	=	Array.prototype.slice.call(arguments, 1);


if((fileName != null) &&(typeof fileName != 'string'))
 throw "ViewEngine#compile - the parameter 'fileName' must be 'string'";

        
			throw "Not implemented";
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((z____return != null) &&(typeof z____return != 'string'))
 throw "ViewEngine#compile - the return type must be 'string'";
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return ViewEngine;
})();;

JSCometWeb.ViewEngine = ViewEngine;


	var BlissViewEngine = (function(ViewEngine){
"use strict";

var ___privateStatic___ = {};
function BlissViewEngine(){
	JSComet.checkClass(this, BlissViewEngine);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		ViewEngine.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.compile =  (function compile(fileName, models){
  var  z____return = (function compile(fileName, models){
		models	=	Array.prototype.slice.call(arguments, 1);


if((fileName != null) &&(typeof fileName != 'string'))
 throw "BlissViewEngine#compile - the parameter 'fileName' must be 'string'";

        
			return ___privateStatic___.Current
								  .compileFile(fileName)
								  .apply(null, models);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((z____return != null) &&(typeof z____return != 'string'))
 throw "BlissViewEngine#compile - the return type must be 'string'";
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
            if(typeof ViewEngine != 'undefined') __callSuperConstructor__.call(this);}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.defineProperty(___privateStatic___, { enumerable: false, key: 'Current', get: (function(){ var z____return = (function Current(){return ___privateStatic___.z____Current;}).apply(BlissViewEngine, arguments);
 
if(z____return !== null && !(z____return instanceof Bliss))
 throw "BlissViewEngine#Current - the return type must be 'Bliss'";
 return z____return;}), set:(function(){ return (function Current(value){

if(value !== null && !(value instanceof Bliss))
 throw "BlissViewEngine#Current - the property 'value' must be 'Bliss'";
 ___privateStatic___.z____Current = value; }).apply(BlissViewEngine, arguments);}) });

___privateStatic___.z____Current =  new Bliss();
JSComet.inherits(BlissViewEngine, ViewEngine);

return BlissViewEngine;
})(ViewEngine);;

JSCometWeb.BlissViewEngine = BlissViewEngine;


	var MVCRoute = (function(){
"use strict";

var ___privateStatic___ = {};
function MVCRoute(name, url, controller, action, type){
	JSComet.checkClass(this, MVCRoute);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "MVCRoute#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "MVCRoute#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'url', get: (function(){ var z____return = (function url(){return ___private___.z____url;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "MVCRoute#url - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function url(value){

if((value != null) &&(typeof value != 'string'))
 throw "MVCRoute#url - the property 'value' must be 'string'";
 ___private___.z____url = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'controller', get: (function(){ var z____return = (function controller(){return ___private___.z____controller;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "MVCRoute#controller - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function controller(value){

if((value != null) &&(typeof value != 'string'))
 throw "MVCRoute#controller - the property 'value' must be 'string'";
 ___private___.z____controller = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'action', get: (function(){ var z____return = (function action(){return ___private___.z____action;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "MVCRoute#action - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function action(value){

if((value != null) &&(typeof value != 'string'))
 throw "MVCRoute#action - the property 'value' must be 'string'";
 ___private___.z____action = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'type', get: (function(){ var z____return = (function type(){return ___private___.z____type;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "MVCRoute#type - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function type(value){

if(value !== null && !(value instanceof Array))
 throw "MVCRoute#type - the property 'value' must be 'Array'";
 ___private___.z____type = value; }).apply(___self___, arguments);}) });

		___private___.z____name = null;
		___private___.z____url = null;
		___private___.z____controller = null;
		___private___.z____action = null;
		___private___.z____type = null;
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(name, url, controller, action, type){
		type	=	Array.prototype.slice.call(arguments, 4);


if((name != null) &&(typeof name != 'string'))
 throw "MVCRoute#constructor - the parameter 'name' must be 'string'";

if((url != null) &&(typeof url != 'string'))
 throw "MVCRoute#constructor - the parameter 'url' must be 'string'";

if((controller != null) &&(typeof controller != 'string'))
 throw "MVCRoute#constructor - the parameter 'controller' must be 'string'";

if((action != null) &&(typeof action != 'string'))
 throw "MVCRoute#constructor - the parameter 'action' must be 'string'";

        
			this.name = name;
			this.url = url;
			this.controller = controller;
			this.action = action;
			this.type = type;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return MVCRoute;
})();;

JSCometWeb.MVCRoute = MVCRoute;



	var Enum = (function(){
"use strict";

var ___privateStatic___ = {};
function Enum(key,  value){
	JSComet.checkClass(this, Enum);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'value', get: (function(){ var z____return = (function value(){
			return ___private___._value;
		}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function value(value){

 throw 'Enum#value - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'key', get: (function(){ var z____return = (function key(){
			return ___private___._key;
		}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function key(value){

 throw 'Enum#key - this property is readonly'; }).apply(___self___, arguments);}) });

		___private___._value = undefined;
		___private___._key = undefined;
___self___.toString =  (function toString(){
  var  z____return = (function toString(){
        
			return (this.key);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.toJSON =  (function toJSON(){
  var  z____return = (function toJSON(){
        
			return JSON.stringify(this.value);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(key, value){
        
			if (this.constructor === Enum)
      			throw new TypeError("Cannot construct Abstract instances directly");

		 ___private___._value = value;
		 ___private___._key = key;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Enum;
})();

	var Environment = (function(Enum){
"use strict";

var ___privateStatic___ = {};
function Environment(key, value){
	JSComet.checkClass(this, Environment);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Enum.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(key, value){


if((key != null) &&(typeof key != 'string'))
 throw "Environment#constructor - the parameter 'key' must be 'string'";

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Environment#constructor - the parameter 'value' must be a integer between -2147483648 and 2147483647";

        
		 if(typeof Enum != 'undefined') __callSuperConstructor__.call(this,key, value);

			switch(key){
				case "development":
				case "homologation":
				case "production":
					if(typeof ___privateStatic___.values[key] != "undefined")
					   throw new TypeError("Cannot instantiate Enum");
					break;
				default:
					throw new TypeError("Cannot instantiate Enum");
			}
		 ___privateStatic___.values[key] = this;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.defineProperty(Environment, { enumerable: false, key: 'development', get: (function(){ var z____return = (function development(){
			return ___privateStatic___.values["development"];
		}).apply(Environment, arguments);
  return z____return;}), set:(function(){ return (function development(value){

 throw 'Environment#development - this property is readonly'; }).apply(Environment, arguments);}) });

JSComet.defineProperty(Environment, { enumerable: false, key: 'homologation', get: (function(){ var z____return = (function homologation(){
			return ___privateStatic___.values["homologation"];
		}).apply(Environment, arguments);
  return z____return;}), set:(function(){ return (function homologation(value){

 throw 'Environment#homologation - this property is readonly'; }).apply(Environment, arguments);}) });

JSComet.defineProperty(Environment, { enumerable: false, key: 'production', get: (function(){ var z____return = (function production(){
			return ___privateStatic___.values["production"];
		}).apply(Environment, arguments);
  return z____return;}), set:(function(){ return (function production(value){

 throw 'Environment#production - this property is readonly'; }).apply(Environment, arguments);}) });

JSComet.defineProperty(Environment, { enumerable: false, key: 'keys', get: (function(){ var z____return = (function keys(){
			return Object.keys( ___privateStatic___.values);
		}).apply(Environment, arguments);
  return z____return;}), set:(function(){ return (function keys(value){

 throw 'Environment#keys - this property is readonly'; }).apply(Environment, arguments);}) });

JSComet.defineProperty(Environment, { enumerable: false, key: 'values', get: (function(){ var z____return = (function values(){
			var values = [];

			for(var i in ___privateStatic___.values)
				values.push( ___privateStatic___.values[i].value);

			return values;
		}).apply(Environment, arguments);
  return z____return;}), set:(function(){ return (function values(value){

 throw 'Environment#values - this property is readonly'; }).apply(Environment, arguments);}) });

Environment.fromValue =  (function fromValue(value){
  var  z____return = (function fromValue(value){


if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Environment#fromValue - the parameter 'value' must be a integer between -2147483648 and 2147483647";

        
			for(var i in ___privateStatic___.values)
				if( ___privateStatic___.values[i].value === value)
					return ___privateStatic___.values[i];
			return null;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
Environment.fromKey =  (function fromKey(key){
  var  z____return = (function fromKey(key){


if((key != null) &&(typeof key != 'string'))
 throw "Environment#fromKey - the parameter 'key' must be 'string'";

        
			return ___privateStatic___.values[key] || null;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___privateStatic___.values =  {};
JSComet.inherits(Environment, Enum);

return Environment;
})(Enum);
	new Environment("development", 0);
	new Environment("homologation", 1);
	new Environment("production", 2);

	
JSCometWeb.Environment = Environment;
;

	var MVCRouteEngine = (function(RouteEngine){
"use strict";

var ___privateStatic___ = {};
function MVCRouteEngine(appDirectory, viewEngine){
	JSComet.checkClass(this, MVCRouteEngine);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		RouteEngine.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		___private___.allRoutes =  {};
		___private___.routeCache =  {};
___self___.route =  (function route(route){
  var  z____return = (function route(route){


if(route !== null && !(route instanceof MVCRoute))
 throw "MVCRouteEngine#route - the parameter 'route' must be 'MVCRoute'";

        
		 ___private___.allRoutes[route.name] = route;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.load =  (function load(fileName){
  var  z____return = (function load(fileName){


if((fileName != null) &&(typeof fileName != 'string'))
 throw "MVCRouteEngine#load - the parameter 'fileName' must be 'string'";

        
			var loadedRoutes = {}


			if(require.main){
				loadedRoutes = require.main.require(fileName);
			
			}else if(__dirname && fileName.indexOf('.') == 0 && require.resolve){
				
				fileName = __dirname + '/.' + fileName;
				fileName = require.resolve(fileName);
				loadedRoutes = require(fileName);
			}
			else{
				loadedRoutes = require(fileName);
			}

			for(var i in loadedRoutes){
				loadedRoutes[i].name = i;
			 ___private___.allRoutes[i] = loadedRoutes[i];
			}
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.error =  (function error(error,  request,  response){
  var  z____return = (function error(error, request, response){
        

			error = {
				status: error.status || 500,
				message: error.message || error,
				error: (Environment.fromKey(process.env.NODE_ENV) === Environment.development) ? error : []
			};

			var directory = this.appDirectory;
			var errorDir =  path.join(directory, "/views/errors/"+(error.status)+".html");
			if(!fs.existsSync(errorDir)){
				errorDir = path.join(directory, "/views/errors/500.html");
			}
			var html = this.viewEngine.compile(errorDir, error);

			response.header('Content-Type', 'text/html');
			response.status(error.status);
			response.send(html);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(typeof z____return != 'undefined')
 
 throw "MVCRouteEngine#error - the return type must be 'undefined'";
return z____return;});
___self___.processResponse =  (function processResponse(request,  response,  actionResult, controller){
  var  z____return = (function processResponse(request, response, actionResult, controller){


if(controller !== null && !(controller instanceof Controller))
 throw "MVCRouteEngine#processResponse - the parameter 'controller' must be 'Controller'";

        
			 try{
				
				if(actionResult){

					if(typeof actionResult == "string"){
						
						response.header('Content-Type', 'text/html');
						response.status = 200;
						response.send(actionResult);

					}else if(actionResult.isView){
						
						var html = controller.render(actionResult.viewName, actionResult.model);

						response.header('Content-Type', 'text/html');
						response.status = 200;
						response.send(html);

					}else if(actionResult.isStream){
						
						actionResult.result.pipe(response);

					}else if(actionResult.isFile){
						
						if(actionResult.filename)
							response.download(actionResult.result, actionResult.filename);
						else
							response.download(actionResult.result);

					}else {
						
						if(actionResult.contentType == 'redirect'){
							response.redirect(actionResult.status, actionResult.result);
						}else{
							
							response.header('Content-Type', actionResult.contentType);
							response.status(actionResult.status).send(actionResult.result);
						}
					}
				}
			 }catch(ex){
				 this.error(ex, request, response);
			}
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___private___.removeEmpty =  (function removeEmpty(parts){ return  (function removeEmpty(parts){
  var  z____return = (function removeEmpty(parts){


if(parts !== null && !(parts instanceof Array))
 throw "MVCRouteEngine#removeEmpty - the parameter 'parts' must be 'Array'";

        
			var noEmptys = [];
			if(!parts)
				return parts;

			for(var i = 0; i < parts.length; i++){
				if(parts[i] != null && parts[i] != undefined && parts[i] != ''){
					noEmptys.push(parts[i]);
				}
			}
			return noEmptys;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(z____return !== null && !(z____return instanceof Array))
 throw "MVCRouteEngine#removeEmpty - the return type must be 'Array'";
return z____return;}).apply(this, arguments);});
___self___.match =  (function match(request,  response){
  var  z____return = (function match(request, response){
        
			var method = request.method;

			var url = require('url');
			var url_parts = url.parse(request.url, true);
			var query = url_parts.query;
			url = url_parts.pathname;
			if(url.length > 1 && (url[url.length - 1] == "/" || url[url.length - 1] == "\\"))
				url = url.substr(0, url.length - 1);

            var result = null;
            if( ___private___.routeCache[url]){
                result = ___private___.routeCache[url];
            }else{
                var parts = url.split(/\\|\//);
                parts = ___private___.removeEmpty(parts);

                for(var i in ___private___.allRoutes){
                    var route = ___private___.allRoutes[i];

                    var containsMethod = false;

                    for(var j = 0; j < route.type.length; j++)
                    {
                        if(route.type[j] == method.toLowerCase())
                        {
                            containsMethod = true;
                            break;
                        }
                    }
                    var routeParts = ___private___.removeEmpty(route.url.split(/\\|\//));

                    if(!containsMethod || parts.length != routeParts.length)
                        continue;

                    var parameters = {};

                    parameters["controller"] = route.controller;
                    parameters["action"] = route.action;
                    var success = true;

                    for(var j = 0; j < routeParts.length;j++){
                        var routePartValue  = routeParts[j].trim();
                        var partValue  = parts[j].trim();

                        if(routePartValue.indexOf("{") == 0 &&
                        (routePartValue.length > 1 && routePartValue[routePartValue.length-1] == "}" ) &&
                        routePartValue != "{}"){
                            routePartValue = routePartValue.substr(1, routePartValue.length-2).trim();
                            parameters[routePartValue] = decodeURIComponent(partValue);
                        }else if(routePartValue != partValue && routePartValue != "*"){
                            success = false;
                            break;
                        }
                    }
                    if(!success || !parameters["controller"] || !parameters["action"])
                        continue;
                    result = {};
                    result["controller"] = parameters["controller"];
                    result["action"] = parameters["action"];
                    result["parameters"] = [];
                    for(var j in parameters)
                        if(j != "controller" && j != "action")
                            result["parameters"].push(parameters[j]);

                    ___private___.routeCache[url] = result;
                    break;
                }
            }
			if(result){
				var controllerName = result["controller"];
				controllerName = (controllerName.charAt(0).toUpperCase() + controllerName.slice(1)) + "Controller";
				var action = result["action"];

				var directory = this.appDirectory;
				var controllerClass = null;
				try{
					if(require.main){
						controllerClass = require.main.require("./controllers/"+(controllerName))['default'];
					 
				   }else if(__dirname && require.resolve){
						
						var fileName = __dirname + "/../controllers/" + (controllerName);
						fileName = require.resolve(fileName);
						controllerClass = require(fileName)['default'];
					}else{
						controllerClass = require("./controllers/"+(controllerName))['default'];
					}
				}catch(ex){
					if(typeof ex.code != "undefined" && ex.code == "MODULE_NOT_FOUND")
						return false;

					this.error(ex, request, response);
					return true;
				}
				var controller = new controllerClass();
				controller.request = request;
				controller.response = response;
				controller.params = query || {};
				controller.query = query;
				controller.body = request.body || {};
				controller.files = request.files;
				controller.session = request.session || {};

				for(var j in parameters)
					if(j != "controller" && j != "action")
						controller.params[j] = parameters[j];

				for(var j in controller.body)
					controller.params[j] = controller.body[j];

				controller.viewRenderer = new ViewRenderer(controller, result["controller"], result["action"], this.viewEngine, directory);
				var actionResult = null;
				try{
					if(typeof controller[action] != "function")
						return false;

					var toAsync = function(result){
						if(result instanceof Promise){
							return result;
						}
						return new Promise(((function(_this){ return (function(){return (function (resolve){
							resolve(result);
						}).apply(_this,arguments)});})(this)));
					}

					var executingResult = null;
					if(typeof controller.onActionExecuting  == "function"){
						executingResult = controller.onActionExecuting({actionName: action, controllerName: controllerName});
					}
					executingResult = toAsync(executingResult);
					executingResult.then(((function(_this){ return (function(){return (function (){
						actionResult = controller[action].apply(controller, result["parameters"]);
						actionResult = toAsync(actionResult);
						actionResult.then(((function(_this){ return (function(){return (function (actionResult){
							var executedResult = null;
							var args = {actionName: action, controllerName: controllerName, actionResult: actionResult};
							if(typeof controller.onActionExecuted  == "function"){
								executedResult = controller.onActionExecuted(args);
							}
							executedResult = toAsync(executedResult);
							executedResult.then(((function(_this){ return (function(){return (function (){
								this.processResponse(request, response, actionResult, controller);
							}).apply(_this,arguments)});})(this))).catch(((function(_this){ return (function(){return (function (error){
    return this.error(error, request, response);}).apply(_this,arguments)});})(this)));
						}).apply(_this,arguments)});})(this)))
						
						.catch(((function(_this){ return (function(){return (function (error){
    return this.error(error, request, response);}).apply(_this,arguments)});})(this)));

					}).apply(_this,arguments)});})(this)))
					.catch(((function(_this){ return (function(){return (function (error){
    return this.error(error, request, response);}).apply(_this,arguments)});})(this)));

				}catch(ex){
					this.error(ex, request, response);
				}
				return true;
			}

			return false;
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "MVCRouteEngine#match - the return type must be 'boolean'";
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(appDirectory, viewEngine){


if(viewEngine !== null && !(viewEngine instanceof ViewEngine))
 throw "MVCRouteEngine#constructor - the parameter 'viewEngine' must be 'ViewEngine'";

        
		 if(typeof RouteEngine != 'undefined') __callSuperConstructor__.call(this,appDirectory, viewEngine);
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(MVCRouteEngine, RouteEngine);

return MVCRouteEngine;
})(RouteEngine);;

JSCometWeb.MVCRouteEngine = MVCRouteEngine;


	var JSCometApp = (function(){
"use strict";

var ___privateStatic___ = {};
function JSCometApp(config, routeEngine){
	JSComet.checkClass(this, JSCometApp);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'express', get: (function(){ var z____return = (function express(){
			return ___private___.app;
		}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function express(value){

 throw 'JSCometApp#express - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'environment', get: (function(){ var z____return = (function environment(){return ___private___.z____environment;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Environment))
 throw "JSCometApp#environment - the return type must be 'Environment'";
 return z____return;}), set:(function(){ return (function environment(value){

if(value !== null && !(value instanceof Environment))
 throw "JSCometApp#environment - the property 'value' must be 'Environment'";
 ___private___.z____environment = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'app', get: (function(){ var z____return = (function app(){return ___private___.z____app;}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function app(value){

 ___private___.z____app = value; }).apply(___self___, arguments);}) });

		___private___.z____environment = null;
		___private___.z____app = undefined;
		___private___.config = undefined;
		___private___.appDirectory = undefined;
___self___.run =  (function run(){
  var  z____return = (function run(){
        
			var config = ___private___.config;
			var app = ___private___.app;
			var directory = ___private___.appDirectory;
			return new Promise(((function(_this){ return (function(){return (function (resolve){

				if(config.ssl){
					try{

						var options = {
						  key: fs.readFileSync(path.join(directory, config.ssl.key), "utf8"),
						  cert: fs.readFileSync(path.join(directory, config.ssl.certificate), "utf8")
						};
						var https = require("https");
						var server = https.createServer(options, app).listen(config.port || 443, function() {
							 resolve(server.address().port);
						});
					}catch(ex){
						console.log(ex);
					}
				}else{
					var server = null;
					if(config.port){
						server = app.listen(config.port);
					}else{
						server = app.listen();
					}
					server.on('listening', function() {
						 resolve(server.address().port);
					});
				}
			}).apply(_this,arguments)});})(this)));


		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(config, routeEngine){


if(routeEngine !== null && !(routeEngine instanceof RouteEngine))
 throw "JSCometApp#constructor - the parameter 'routeEngine' must be 'RouteEngine'";

        
			var app = express();
		 ___private___.app = app;
		 ___private___.config	 = config;
			var directory = routeEngine.appDirectory;
		 ___private___.appDirectory = directory;

			app.use(session({
					secret: config.session.secret,
					name : config.session.name,
					resave: true,
					saveUninitialized: true,
					cookie: { maxAge: config.session.maxAge }
			}));

			app.use(compression());
			app.use(bodyParser.json());
			app.use(bodyParser.urlencoded({ extended: false }));
			app.use(cookieParser());
			app.use(config.publicDir, express.static(path.join(directory, config.publicDir)));
			app.use('/favicon.ico', express.static(path.join(directory, 'favicon.ico')));
			app.disable('x-powered-by');
			var router = express.Router();

			var routeHandler = ((function(_this){ return (function(){return (function (request, response, next){
				if(!routeEngine.match(request, response))
					next();
			}).apply(_this,arguments)});})(this));
            router.use(routeHandler);

			app.use("/", router);

			
			app.use(((function(_this){ return (function(){return (function (request, response, next){
			  var error = new Error('Not Found', request.originalUrl);
			  error.status = 404;
			  next(error);
			}).apply(_this,arguments)});})(this)));

			
			app.use(((function(_this){ return (function(){return (function (error, request, response, next){
				routeEngine.error(error, request, response);
			}).apply(_this,arguments)});})(this)));
		}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return JSCometApp;
})();;

JSCometWeb.JSCometApp = JSCometApp;

})(JSCometWeb || (JSCometWeb = {}));



module.exports. JSCometApp = JSCometWeb.JSCometApp ;
module.exports. Controller = 
	JSCometWeb.Controller ;
module.exports. MVCRouteEngine = 
	JSCometWeb.MVCRouteEngine ;
module.exports. BlissViewEngine = 
	JSCometWeb.BlissViewEngine ;
module.exports. ViewEngine = 
	JSCometWeb.ViewEngine ;
module.exports. RouteEngine = 
	JSCometWeb.RouteEngine ;
module.exports. MVCRoute = 
	JSCometWeb.MVCRoute ;
module.exports. Environment = 
	JSCometWeb.Environment ;


module.exports['default'] = JSCometWeb;













