namespace deck_of_cards{
    public class Card {
        public string stringVal;
        public string suit;
        public int val;
        public Card(string stringVal = "" , string suit = "" , int val = 0)
        {
            this.stringVal = stringVal;
            this.suit = suit;
            this.val = val;
        } 

    }
}