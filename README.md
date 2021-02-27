# Design Patterns in es6

[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iluwatar/java-design-patterns/master/LICENSE.md)

## Getting Started

Here you can find the 23 Gang of Four `Gof` patterns in es6 with multiple examples so you can grasp a deep understanding of each pattern.

Design patterns are object-oriented solutions to commonly occurring software problems.  Patterns are about reusable designs and interactions of objects.  Each pattern has a name and becomes part of a vocabulary when discussing complex design solutions. 

## Patterns by type

### Creational

Creational patterns are ones that create objects, rather than having to instantiate objects directly. This gives the program more flexibility in deciding which objects need to be created for a given case.

- `Abstract factory` groups object factories that have a common theme.
- `Builder` constructs complex objects by separating construction and representation.
- `Factory method` creates objects without specifying the exact class to create.
- `Prototype` creates objects by cloning an existing object.
- `Singleton` restricts object creation for a class to only one instance.
### Structural
These concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.

- `Adapter` allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.
- `Bridge` decouples an abstraction from its implementation so that the two can vary independently.
- `Composite` composes zero-or-more similar objects so that they can be manipulated as one object.
- `Decorator` dynamically adds/overrides behaviour in an existing method of an object.
- `Facade` provides a simplified interface to a large body of code.
- `Flyweight` reduces the cost of creating and manipulating a large number of similar objects.
- `Proxy` provides a placeholder for another object to control access, reduce cost, and reduce complexity.
### Behavioural
Most of these design patterns are specifically concerned with communication between objects.

- `Chain of responsibility` delegates commands to a chain of processing objects.
- `Command` creates objects which encapsulate actions and parameters.
- `Interpreter` implements a specialized language.
- `Iterator` accesses the elements of an object sequentially without exposing its underlying representation.
- `Mediator` allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
- `Memento` provides the ability to restore an object to its previous state (undo).
- `Observer` is a publish/subscribe pattern which allows a number of observer objects to see an event.
- `State` allows an object to alter its behavior when its internal state changes.
- `Strategy` allows one of a family of algorithms to be selected on-the-fly at runtime.
- `Template method` defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.
- `Visitor` separates an algorithm from an object structure by moving the hierarchy of methods into one object.

## Contribute

Please fork this repo and submit a pull request if you want me to change or `improve` some of the examples in this repo.

## Installation

```
cd Javascript-design-patterns-6s
yarn
```

## Test
```
yarn test
```

## what to expect for this repo
I want to have a rich variety of examples written in es6 so that let almost anyone from junior to senior can have a quick understanding of how to apply design patterns written in javascript. 



