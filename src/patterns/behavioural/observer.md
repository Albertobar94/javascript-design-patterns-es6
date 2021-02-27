# Observer Pattern

### in plain words

> is a behavioral design pattern that lets you a subscription mechanism to notify multiple objects about any events that happen to the object they're observing

> the main object that notifies the events is called `publisher` and all the other objects that want to track changes to the publishe's state are called `subscribers`.

> it consists of an `array field` for storying a "list" of references to `subscriber objects` and several public methods which allow adding subscribers as well as removing them from that `array` "the list mentioned".

> whenever an important event happens to the publisher, it goes over its subscribers and calls the specific notification method on their objects.

> you would want to implement an interface for your publishers since they might have a lot of subscribers. So, you better make sure they all communicate via that interface. Also, if your app has several different types of publishers and you want to make your subscribers compatible with all of them, you can go even further and make all publishers follow the same interface.