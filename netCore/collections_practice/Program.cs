using System;
using System.Collections.Generic;

namespace collections_practice
{
    class Program
    {
        static void Main(string[] args)
        {
            // for(int i = 0; i < 10; i++){
            //     Console.WriteLine(i);
            // }

            List<string> myName = new List<string>();
            myName.Add("Tim");
            myName.Add("Martin");
            myName.Add("Nikki");
            myName.Add("Sara");
            // for (int idx = 0; idx < myName.Length; idx++){
            //     Console.WriteLine(myName[idx]);
            // }
            // bool[] boolArray = new bool[10];
            // for(int i = 0; i < 10; i ++)
            // {
            //     if(i % 2 == 0){
            //         boolArray[i] = true;
            //     }
            //     else if(i % 2 == 1){
            //         boolArray[i] = false;
            //     }
            //     Console.WriteLine(boolArray[i]);
            // }

            // int [,] multi = new int[10,10];
            // for(int x = 0; x < 10 ; x++){
            //     for(int y = 0; y < 10 ; y ++){
            //         multi[x, y] = (x + 1) * (y + 1);
            //     }
            // }
        List<string> icecream = new List<string>();
        icecream.Add("chocolate");
        icecream.Add("strawberry");
        icecream.Add("vanilla");
        icecream.Add("mango");
        icecream.Add("caramel");
        icecream.RemoveAt(2);
        // Console.WriteLine("We currently know of {0} icecream flavors.", icecream.Count);
        // // Console.WriteLine(icecream[2]);

        Dictionary<string,string> userInfo = new Dictionary<string,string>();
        for (int i = 0; i <= myName.Count - 1; i++){
            userInfo.Add(myName[i], null);
            Console.WriteLine("Added the name {0}.", myName[i]);
        }
        Random rand = new Random();
        var keys = new List<string>(userInfo.Keys);
        foreach (string key in keys){
            userInfo[key] = icecream[rand.Next(0,5)];
            Console.WriteLine("Setting {0}'skin flavor to {1}", key, userInfo[key]);
        }
        foreach (var user in userInfo){
            Console.WriteLine("The user is {0}, and their associated flavor is {1}", user.Key, user.Value);
        }
    }

}
}
    

