Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n  Flushing ");
  stack1 = helpers._triageMustache.call(depth0, "currentQueue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" queue\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n  Not running\r\n");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    ");
  stack1 = helpers['if'].call(depth0, "isPlaying", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "step", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isPlaying")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Step</button>\r\n\r\n  ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pause", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Pause</button>\r\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "play", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Play</button>\r\n    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['run-loop-queue'] || (depth0 && depth0['run-loop-queue']),options={hash:{
    'queue': ("")
  },hashTypes:{'queue': "ID"},hashContexts:{'queue': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "run-loop-queue", options))));
  data.buffer.push("\r\n      ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <li>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n      ");
  return buffer;
  }

  data.buffer.push("<h1 class=\"title\">Run Loop Status: \r\n");
  stack1 = helpers['if'].call(depth0, "hasItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"button-bar\">\r\n  <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasItems")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "runCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Run Code</button>\r\n  ");
  stack1 = helpers['if'].call(depth0, "hasItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n</h1>\r\n<div class=\"queue-container\">\r\n      ");
  stack1 = helpers.each.call(depth0, "queues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<section class=\"bottom\">    \r\n      <div class=\"code\">\r\n         <h3>Code:</h3>\r\n\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("code"),
    'id': ("code"),
    'disabled': ("hasItems")
  },hashTypes:{'value': "ID",'id': "STRING",'disabled': "ID"},hashContexts:{'value': depth0,'id': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n      </div>\r\n      <div class=\"logs\">\r\n        <h3>Logging:</h3>\r\n        <ul>\r\n      ");
  stack1 = helpers.each.call(depth0, "logs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </ul>\r\n    </div>\r\n</div>\r\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["components/current-queue-blip"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/run-loop-queue"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n  <li>\r\n    <pre>");
  stack1 = helpers._triageMustache.call(depth0, "fn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</pre>\r\n  </li>\r\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n  <li>Empty!</li>\r\n  ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <li style=\"font-weight:bold\">");
  stack1 = helpers._triageMustache.call(depth0, "moreItemsLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" more...</li>\r\n  ");
  return buffer;
  }

  data.buffer.push("<h3>");
  stack1 = helpers._triageMustache.call(depth0, "queue.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\r\n");
  stack1 = helpers._triageMustache.call(depth0, "currentQueue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \r\n<ul>\r\n  ");
  stack1 = helpers.each.call(depth0, "shortenedItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  ");
  stack1 = helpers['if'].call(depth0, "moreItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  <li>\r\n</ul>\r\n");
  return buffer;
  
});