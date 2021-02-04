function pubsub() {
  this.events = new Map();
  this.bc = new BroadcastChannel("pubsub");
  this.bc.onmessage = (e) => {
    const callbacks = this.events.get(e.data.event) || [];
    if (Array.isArray(callbacks)) callbacks.forEach((cb) => cb(e.data.data));
  };

  this.publish = (event, data) => {
    this.bc.postMessage({ data: data, event: event });
  };

  this.subscribe = (event, cb) => {
    const callbacks = this.events.get(event) || [];
    callbacks.push(cb);
    this.events.set(event, callbacks);
  };

  return { publish: this.publish, subscribe: this.subscribe };
}
