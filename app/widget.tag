var control = require('./riot.control');
<widget>
  <h2>this is the widget and listening for messages</h2>

  <p>
    { msg }
  </p>

  control.on('msg_sent', msg => {
    this.msg = msg.msg;
    this.update();
  });
</widget>