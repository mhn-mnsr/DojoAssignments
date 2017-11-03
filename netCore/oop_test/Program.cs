using System;

namespace oop_test
{
    class Program
    {
        static void Main(string[] args)
        {
            Vehicle myCar = new Vehicle(3);
            Vehicle myBike = new Vehicle(1);
            Console.WriteLine(myCar.numPassenger);
            Console.WriteLine(myBike.numPassenger);

            myCar.Move(4.5);
            myBike.Move(4.5);
            Console.WriteLine("My bike went {0} miles & and my car went {1} miles.", myBike.distance, myCar.distance );
        }
    }
}
