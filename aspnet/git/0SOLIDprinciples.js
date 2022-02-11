// SOLID Principles

// Short notes for interview:
// 1.SingleResp-Every class should be resp.only for 1purpose. Ex.:logs should written in separate class
// 2.Open-Closed-Obj. Open for Extension, closed for modification. Ex.:switch case for obj extension.
// 3.Liskov Subs-Obj needs to be substituted with subtype obj. Ex: S is subtype of T. Sqaure is also a rect. Allrounder is also a batsman.
// 4.Interface Segregation-split Interfaces separately based on specific func. 
// 5.Dependency Inversion-High lvl obj need not to be dependent on low lvl as vice-versa, Both should depend on abstractions.



// 1.SingleResponsibility
    //Problems: suppose if we change the mechanism we need to change every obj.
    // (example writting max calories/day log file in someother place is bad, so create separate class)


// 2.OpenClosed-class should be open for extension, but closed for modification(or limited modification).
    //Problems: Mutation in existing objects.
    // (Switch case segreation to separate class so that wont modify existing switch case, but exteneded in class way)



// 3.LiskovSubsitution(Props match=>Parent/Child).
    //Problems: If S is a subtype of T, then objects of type T may be replaced with objects of type S.
    // Ex1: Sqaure is also a rectangle.
    // Ex2: Certain birds can fly. 
    // Ex3: AllRounder In cricket replaces Allrounder only)


// 4.IntegrationSegregation(Interface Segregate)
    //Problems: Certain interfaces need to be segragated.
    //Ex1: Rock/Wall cant move, so no need to have move() interface in our movingObjects class


// 5.DependencyInversion()
// High-level modules should not import anything from low-level modules. 
// Both should depend on abstractions (e.g., interfaces).
// Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

    //Problems: Stripe API with other objects. Tightly coupled.
    //Ex1: