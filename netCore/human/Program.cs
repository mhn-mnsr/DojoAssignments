using System;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Human alexis = new Human("alexis");
            Console.WriteLine(alexis.name);
            Console.WriteLine("His strength is {0}", alexis.strength);
            // Console.WriteLine(alexis.name);
            Human mike = new Human("mike", 20, 1, 90, 20);
            alexis.strength = 150; 
            Console.WriteLine("{0} has all these amount different power levels in strength{1}, dexterity{2}, intelligence{3}, health{4}", mike.name, mike.strength, mike.dexterity, mike.intelligence, mike.health);
            alexis.attack(mike);
            mike.attack(alexis);
        }
    }
}
