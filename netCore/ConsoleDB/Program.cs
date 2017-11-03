using System;
using System.Collections.Generic;
using DbConnection;

namespace ConsoleDB
{
    class Program
    {
        // static public void Read()
        // {
        //     List<Dictionary<string, object>> DBConnector.Query(string queryString)
        // }
        static public void Create() /* THIS WILL CREATE QUERIES INTO USERS DATABASE */
        {
            string first = "";
            string last = "";
            string number = "";

            Console.Write("Please enter your first name: ");
            first = Console.ReadLine(); //this allows the user to input informatiion. turns info into a string
            Console.WriteLine(); //this will print the line

            Console.Write("Please enter your last name: ");
            last = Console.ReadLine();
            Console.WriteLine();

            Console.Write("Please enter your favorite number: ");
            number = Console.ReadLine();
            Console.WriteLine();

            string x = $"INSERT INTO Users (FirstName, LastNAme, FavoriteNumber) VALUES('{first}', '{last}', '{number}')";
            System.Console.WriteLine(x);
            DbConnector.Execute(x);
        }
        // static public void Update()
        // {
        //     string first = "";
        //     string last = "";
        //     string number = "";
        //     string Id = "";

        //     Console.Write("Please enter the ID of the record you wish to update");
        //     Id = Console.ReadLine();
        //     string selectquery = $"SELECT * FROM Users where id = {Id}";
        //     List<Dictionary<string, object>> result = DbConnector.Query(selectquery);

        //     if(result.Count > 0)
        //     {
        //         Console.Write("Great, I have found that ID, now what is their new First Name? ");
        //         Console.WriteLine("1: Update the user");
        //         Console.WriteLine("2: Delete the user");
        //         Console.WriteLine("Choose: ");
        //         string answer = Console.ReadLine();
        //         if (answer.Trim()=="1")
        //         {
        //         Console.Write("Got it now tell me the first name: ");
        //         first = Console.ReadLine();
        //         Console.Write("Got it now tell me the last name: ");
        //         last = Console.ReadLine();
        //         Console.Write("Very good. What is their favorite number? ");
        //         number = Console.ReadLine();

        //         string updateQuery = $"update users set FirstName = '{first}', LastName = '{last}', FavoriteNumber = '{number}' WHERE id = '{Id}'";
        //         DbConnector.Query(updateQuery);
        //         Console.Write("YAAASSSS!!");
        //         }
        //         else if(answer.Trim()=="2")
        //         {
        //             string deleteQuery = $"update users set FirstName = '{first}', LastName = '{last}, FavoriteNumber = '{number}' WHERE id = '{Id}'";
        //             DbConnector.Query(deleteQuery);
        //             Console.WriteLine("I've terminated that user, goodbye");
        //         }
        //     }

        //         else
        //         {
        //             Console.WriteLine("who?");
        //         }

        // }

            static void Main(string[] args)
            {
                Create();
                // Update();
            }
    }
}

