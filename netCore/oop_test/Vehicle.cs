namespace oop_test {
    public class Vehicle{

        public int numPassenger = 4;
        public double distance;

        public Vehicle(int val= 0) {
            numPassenger = val;
            distance = 0.0;
        }

        public void Move(double miles) {
            distance += miles;
        }
    }

}