# Factory Method

<!-- TODO update this file-->

### Wikipedia
> the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor. 

[Read the wikipedia article](https://en.wikipedia.org/wiki/Factory_method_pattern)

### in plain words

> is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the types of objects that will be created

### when to use 
> when you don't know beforehand the exact types and dependencies of the objects your code should work with

### UML Structure example  from `wikipedia`

> A maze game may be played in two modes, one with regular rooms that are only connected with adjacent rooms, and one with magic rooms that allow players to be transported at random. 

![Structure](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/New_WikiFactoryMethod.png/734px-New_WikiFactoryMethod.png)

> Room is the base class for a final product (MagicRoom or OrdinaryRoom). MazeGame declares the abstract factory method to produce such a base product. MagicRoom and OrdinaryRoom are subclasses of the base product implementing the final product. MagicMazeGame and OrdinaryMazeGame are subclasses of MazeGame implementing the factory method producing the final products. Thus factory methods decouple callers (MazeGame) from the implementation of the concrete classes. This makes the "new" Operator redundant, allows adherence to the Open/closed principle and makes the final product more flexible in the event of change. 