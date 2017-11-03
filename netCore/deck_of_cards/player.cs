using System;
using System.Collections.Generic;

namespace deck_of_cards
{
    public class Player
    {
        public string name;
        public List <Card> hand = new List <Card>();
        public Player(string name)
        {
            this.name= name;
        }
        
        public Card Draw(Deck myDeck)
        {
            Card card_drawn = myDeck.theDeck[0];
            hand.Add(card_drawn);
            myDeck.theDeck.Remove(card_drawn);
            return card_drawn;
        }

        public Card Discard(int idx)
        {
            if (idx >= hand.Count)
            {
                return null;
            }
            Card discarded = hand[idx];

            hand.RemoveAt(idx);

            return discarded;
        }
    }
}