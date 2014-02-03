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

export default RunLoopQueue;
