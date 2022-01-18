# fizzbuzz
FizzBuzz in Angular 11

It’s the summer of 1923. You and a few friends are on holiday in Goeteborg, Sweden. After one round ofstarköl in the Nobel Bar you start to feel funny. So you make fun of people around you – loudly. As you spot someone who has that distinct Einstein-haircut you tell him that "only two things are infinite, the universe and your stupidity, and I’m not sure about the former".

As it turns out this man is indeed Einstein celebrating after his Nobel price acceptance speech – and now he is mad at you. To settle this issue like civilized gentlemen he proposes a little drinking game called "fizz-buzz". In order to leave the table without a serious alcohol poisoning but some of your pride left you decide to do what every person would do: Cheat!

Any number divisible by three is replaced by the word fizz and any divisible by five by the word buzz. Numbers divisible by both become fizzbuzz. A player who makes a mistake has to take a drink.

Einstein will choose a random number to start with – for example: 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz…

You are requested to implement a .NET Web Api (.NET Core) with a method that receive an integer from Angular (use the last stable version) frontend with the random number to start and takes the number limit from another function and posted from the frontend, and that returns a List of strings with the correct Fizz Buzz series, and register on a file the List as a string with a datetime signature. Moreover it have to be possible to call concurrently more than 100 time per seconds the method with no problems writing the series on the file, and no bottlenecks.

Separate responsibilities in separate layers: distributed services, application and domain (Domain Driven Development pattern will be nice if is possible)

Implement error logging and manage exceptions in every layer.

Implement unit test for any layer, too (frontend and backend)

Take care of proper naming convections and SOLID principles.

Let your imagination fly to draw the frontend in the best way you consider. The correct use of Saas or Less will be evaluated as well as the layout in general

You can use any Dependency Injection, Unit Testing, Mocking frameworks or any other that you consider necessary.