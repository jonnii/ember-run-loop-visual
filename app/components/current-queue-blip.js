var QUEUE_WIDTH = 160;

var CurrentQueueBlip = Ember.Component.extend({
  attributeBindings: ['style'],

  queueIndex: null,
  height:function(){
  	//jQuery hax
  	return $('.run-loop-queue').eq(this.get('queueIndex')).height();
  }.property('queueIndex'),

  style: function() {
    var leftOffset = this.get('queueIndex') * QUEUE_WIDTH;
    return "left: " + leftOffset + "px; height:" + this.get('height')+"px;";
  }.property('queueIndex')
});

export default CurrentQueueBlip;
