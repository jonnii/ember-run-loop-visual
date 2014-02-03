define("appkit/app",
  ["resolver","appkit/router"],
  function(Resolver, router) {
    "use strict";

    var App = Ember.Application.create({
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver,
      Router: Ember.Router.extend({
        router: router,
        location: 'none'
      })
    });


    return App;
  });
define("appkit/components/current-queue-blip",
  [],
  function() {
    "use strict";
    var QUEUE_WIDTH = 160;

    var CurrentQueueBlip = Ember.Component.extend({
      attributeBindings: ['style'],

      queueIndex: null
    });


    return CurrentQueueBlip;
  });
define("appkit/components/run-loop-queue",
  [],
  function() {
    "use strict";
    var RunLoopQueue = Ember.Component.extend({
      classNames: ['run-loop-queue'],
      classNameBindings: ['active'],
      active:function(){
    	return this.get('parentView.controller.content.hasItems') && this.get('queue.name') === this.get('parentView.controller.content.currentQueue');
      }.property('parentView.controller.content.currentQueue','parentView.controller.content.hasItems'),

      shortenedItems: function(){
        var queueItems = this.get('context.queue.actions'); 
          return (queueItems || []).slice(0,2);
      }.property('context.queue.actions.length'),
      moreItems:function(){
      	return this.get('context.queue.actions.length') > 2;
      }.property('context.queue.actions.length'),

      moreItemsLength:function(){
      	return this.get('context.queue.actions.length') - 2;
      }.property('context.queue.actions.length'),

    });


    return RunLoopQueue;
  });
define("appkit/controllers/application",
  [],
  function() {
    "use strict";
    var DEFAULT_CODE = [
    "function logFour() {",
    "  console.log('processing: task #4');",
    "}",
    "",
    "console.log('before Ember.run');",
    "Ember.run(function(){",
    "  Ember.run.schedule('actions', function task1(){",
    "    console.log('processing: task #1');",
    "  });",
    "",
    "  Ember.run.schedule('afterRender', function task3(){",
    "    console.log('processing: task #3');",
    "  });",
    "",
    "  Ember.run.scheduleOnce('afterRender', logFour);",
    "  Ember.run.scheduleOnce('afterRender', logFour);",
    "  Ember.run.scheduleOnce('afterRender', logFour);",
    "",
    "  Ember.run.schedule('render', function task2() {",
    "    console.log('processing: task #2');",
    "  });",
    "",
    "  console.log('end of callback');",
    "});",
    "",
    "console.log('after Ember.run');"
    ].join("\n");

    var ApplicationController = Ember.ObjectController.extend({
      code: DEFAULT_CODE,
      logs: [],
      showVisual: false,
      actions:
      {
      	displayCode: function(){
      		this.set('showVisual',false);
      	},
      	displayVisual: function(){
      		this.set('showVisual',true);
      	}
      }
    });


    return ApplicationController;
  });
define("appkit/models/stubbed_ember",
  [],
  function() {
    "use strict";
    var slice = [].slice;

    var StubbedEmber = Ember.create(Ember);

    var FakeRunLoop = Ember.Object.extend({
      currentQueueIndex: 0,
      currentQueue:'sync',

      isPlaying: false,
      queues: Ember.run.queues.map(function(queueName) {
        return { name: queueName, actions: [] };
      }),

      hasItems: false,

      schedule: function(queueName, action, once) {
        var queue = this.queues.findProperty('name', queueName);

        if (once){
          var count = queue.actions.reduce(function(sum, record) {
            return (record.fn.name===action.fn.name) ? sum+1 : 0;
          }, 0);

          if (count>0) { return; }
        }

        queue.actions.pushObject(action);
        this.set('hasItems', true);
      },

      nextStep: function() {
        var currentQueueIndex = this.get('currentQueueIndex'),
            queues = this.get('queues'),
            index;

        for (index = 0; index < currentQueueIndex; ++index) {
          if (queues[index].actions.length) {
            // Backtrack.
            this.set('currentQueueIndex', index);
            this.set('currentQueue', queues[index+1].name);
            return;
          }
        }

        var queue = queues[index];
        if (queue.actions.length === 0) {
          currentQueueIndex += 1;
          if (currentQueueIndex === queues.length) {
            this.set('isPlaying', false);
            this.set('currentQueueIndex', 0);
            this.set('currentQueue', 'sync');

            this.set('hasItems', false);
          } else {
            this.set('currentQueue', queues[index+1].name);
            this.set('currentQueueIndex', currentQueueIndex);
          }
          return;
        }

        var action = queue.actions.shiftObject();
        action.fn.apply(action.target, action.args);
      },

      play: function() {
        if (!this.get('isPlaying')) { return; }

        this.nextStep();

        Ember.run.later(this, 'play', 600);
      }.observes('isPlaying')
    });

    var runLoop = StubbedEmber.fakeRunLoop = FakeRunLoop.create();

    function normalize() {
      var args = slice.call(arguments),
          target = args.shift(),
          fn;

      if (typeof target === 'function') {
        fn = target;
        target = null;
      } else {
        args.shift();
        fn = args.shift();
      }

      return {
        target: target,
        fn: fn,
        args: args
      };
    }

    StubbedEmber.run = function(fn) {
      fn();
    };

    StubbedEmber.run.schedule = function(queueName) {
      runLoop.schedule(queueName, normalize.apply(null, slice.call(arguments, 1)), false);
    };

    StubbedEmber.run.scheduleOnce = function(queueName, args) {
      runLoop.schedule(queueName, normalize.apply(null, slice.call(arguments, 1)), true);
    };

    StubbedEmber.run.once = function(queue, args) {
      StubbedEmber.run.scheduleOnce.apply(null, ['actions'].concat(slice.call(arguments)));
    };

    StubbedEmber.run.next = function() {
      alert("run.next hasn't been implemented.");
    };

    StubbedEmber.run.later = function() {
      alert("run.later hasn't been implemented.");
    };


    return StubbedEmber;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var router = Ember.Router.map(function(){
    });


    return router;
  });
define("appkit/routes/application",
  ["appkit/models/stubbed_ember"],
  function(StubbedEmber) {
    "use strict";

    var map = Ember.ArrayPolyfills.map,
        runLater = Ember.run.later;

    var ApplicationRoute = Ember.Route.extend({
      model: function() {
        return StubbedEmber.fakeRunLoop;
      },
      actions: {
        runCode: function() {
          var Ember = StubbedEmber,
              console = Ember.create(window.console),
              controller = this.controller;

          console.log = function() {
            map.call(arguments, function(msg) {
              window.console.log(msg);
              controller.logs.pushObject('' + msg);
            });
          };

          eval(this.controller.get('code'));
        },

        play: function() {
          StubbedEmber.fakeRunLoop.set('isPlaying', true);
        },

        pause: function() {
          StubbedEmber.fakeRunLoop.set('isPlaying', false);
        },

        step: function() {
          StubbedEmber.fakeRunLoop.nextStep();
        }
      }
    });


    return ApplicationRoute;
  });
//@ sourceMappingURL=app.js.map