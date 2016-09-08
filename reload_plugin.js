videojs.plugin('reload', function() {
  var _player = this;
  _player.on('stalled',function(){
      videojs.log("stalled, time is:",_player.currentTime(),"seekable range is",_player.seekable().start(0),_player.seekable().end(0));
      if(_player.seekable().start(0) > _player.currentTime()){
        // I could just put up a UI message, or a button in the control bar... Any UI action would then call this:
        videojs.log("seeking to latest available time");
        _player.currentTime(_player.se ekable().end(0));
      }
  });
});