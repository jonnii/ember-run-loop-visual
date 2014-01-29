var RunLoopQueue = Ember.Component.extend({
  classNames: ['run-loop-queue'],
  classNameBindings: ['active'],
  active:function(){
	return this.get('parentView.controller.content.hasItems') && this.get('queue.name') === this.get('parentView.controller.content.currentQueue');
  }.property('parentView.controller.content.currentQueue','parentView.controller.content.hasItems')
});

export default RunLoopQueue;
