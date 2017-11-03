using System;
using System.Collections.Generic;

namespace deck_of_cards{
    public class Deck
    {
        public List<Card> theDeck = new List<Card>();
        
        public Deck()
        {
            string[] stringVal = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
            string[] suit = {"Clubs", "Spades", "Hearts", "Diamonds"};
            int [] val = {1,2,3,4,5,6,7,8,9,10,11,12,13};
            for(int i = 0; i < stringVal.Length; i++){
                for(int j = 0; j<suit.Length; j++){
                Card newCard = new Card(stringVal[i], suit[j], val[i]);
                theDeck.Add(newCard);
                Console.WriteLine(newCard.stringVal + "of" + newCard.suit);
                
                }
            }
        }
        // public void ShowDeck(){
        //     for
        //     Console.WriteLine()
        // }
        public Card Deal()
        {
            Card topCard = theDeck[theDeck.Count - 1];
            return topCard;
        }

        public Deck Reset()
        {
            string[] stringVal = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
            string[] suit = {"Clubs", "Spades", "Hearts", "Diamonds"};
            int [] val = {1,2,3,4,5,6,7,8,9,10,11,12,13};
            for(int i = 0; i < stringVal.Length; i++)
            {
                for(int j = 0; j<suit.Length; j++)
                {
                Card newCard = new Card(stringVal[i], suit[j], val[i]);
                theDeck.Add(newCard);
                Console.WriteLine(newCard.stringVal + "of" + newCard.suit);
                
                }
            }
            return this;
        }
        
        public Deck Shuffle(){
            Random rand = new Random();
            for(int i = 0; i<theDeck.Count; i++){
                int randIndex = rand.Next(i, theDeck.Count);
                Card temp = theDeck[i];
                theDeck[i] = theDeck[randIndex];
                theDeck[randIndex] = temp;

            }
            return this;
        }
    }
        
    }
        


