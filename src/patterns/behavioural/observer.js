/**
 * A class implementation for the observer pattern
 * @constructor creates an array for subscribers
 */
class Observer {

  constructor(){
    this.state = {};
    this.subscribers = [];
  }
  /**
   * 
   * @param {*} subscriber is a fuction
   */
  subscribe = (subscriber) => {
    this.subscribers.push(subscriber);
  }
  /**
   * 
   * @param {*} subscriber is a fuction
   */
  unsubscribe = (subscriber) => {
    this.subscribers =
      this.subscribers.filter(
        item => item !== subscriber
      );
  }
  /**
   * This is the fire method that alert the subscribers of a state change
   * @param {objectDetails} objectDetails 
   * @param {thisObj} thisObj the context of this
   */
  _notifySubscribers(objectDetails, thisObj) {
    const scope = thisObj || window;
    this.subscribers.forEach( item => item.call(scope, objectDetails))
  }
}

export default Observer;

