using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            Artist FromMtVernon = Artists.Where(artist => artist.Hometown == "Mount Vernon").Single();
            Console.WriteLine ($"The artist {FromMtVernon.ArtistName} from Mt Vernon is {FromMtVernon.Age} years old");

            //Who is the youngest artist in our collection of artists?
            Artist YoungestArtist = Artists.OrderBy(artist => artist.Age).First();
            Console.WriteLine($"The youngest artist is {YoungestArtist.Age}");

            //Display all artists with 'William' somewhere in their real name
            List<Artist> William = Artists.Where(artist=> artist.RealName.Contains("William")).ToList();
            Console.WriteLine("The following artists have William in their name: ");
            foreach (var artist in William)
            {
                Console.WriteLine(artist.ArtistName+ "-" + artist.RealName);
            }

            //Display the 3 oldest artist from Atlanta
            List<Artist> Oldest = Artists.Where(artist => artist.Hometown == "Atlanta").OrderByDescending(artist => artist.Age)
            .Take(3)
            .ToList();
            Console.WriteLine("The three oldest artists from Atlanta are:");
            foreach(var artist in Oldest)
            {
                Console.WriteLine(artist.ArtistName + " - " + artist.Age);
            }



            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
        }
    }
}
