# pubsub
PubSub in 20 lines  with Broadcast Channels

```
window.pubsub = new pubsub();

window.pubsub.subscribe("showAlert", (data) => {
  alert(data.message);
});

window.pubsub.publish("showAlert", { message: "wazzup" });
```
