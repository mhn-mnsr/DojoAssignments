using System;
using System.Collections.Generic;

namespace deck_of_cards
{
    class Program
    {
        static void Main(string[] args){
            Deck myDeck = new Deck();
            Console.Write(myDeck);

            myDeck.Deal();
            Console.WriteLine("This is the topcard");
            Console.WriteLine(myDeck.Deal().stringVal);

            myDeck.Reset();
            Console.WriteLine("This resets the cards");
            Console.WriteLine(myDeck.Reset());

            myDeck.Shuffle();
            Console.WriteLine("This shuffles the cards");
            foreach (Card card in myDeck.theDeck)
            {
                Console.WriteLine(card.stringVal + "of " + card.suit);
            }

            Player new_player = new Player("josh");
            new_player.Draw(myDeck);
            Console.WriteLine("This shows what the player has drawn");
            Console.WriteLine(new_player.hand[0].stringVal);

            new_player.Draw(myDeck);
            new_player.Draw(myDeck);
            Card discarded_card = new_player.Discard(5);
            Console.WriteLine("This is the card that got discarded by {0}", new_player.name);
            if( discarded_card == null)
            {
                Console.WriteLine("No card");
            }
            else{
                Console.WriteLine(discarded_card.suit);
            }
            
        }

    }
}

