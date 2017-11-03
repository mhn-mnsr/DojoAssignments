using System;
using System.Collections.Generic;

namespace basic_13
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Print1to255();
            PrintOdd1to255();
            // PrintSum();
            // IterateArray();
            FindMax();
            GetAverage(new List<int>(new int[] { 2, 10, 3 }));
            OddArray();
            GreaterThanY(new List<int>(new int[] { 1, 3, 5, 7 }), 3);
            SquareValues(new List<int>(new int[] { 1, 5, 10, -2 }));
            EliminateNegatives(new List<int>(new int[] { 1, 5, 10, -2 }));
            MinMaxAvg(new List<int>(new int[] { 1, 5, 10, -2 }));
            ShiftArray(new List<int>(new int[] { 1, 5, 10, -2 }));
            NumToString(new List<object>(new object[] { -1, -3, 2 }));
            RandomArray();
        }
        static void Print1to255()
        {
            for (int i = 0; i<255; i++)
            {
                Console.Write("{0}", i);
            }
        }
        static void PrintOdd1to255()
        {
            for (int i = 1; i <= 255 ; i+= 2)
            {
                Console.Write("{0}", i);
            }
        }
        static void FindMax()
        {
            List<int> maxList = new List<int>(new int[] { 1, 3, 5, 7, 9, -13, 100, -25, 0, 99});
            int max = maxList[0];
            int total = maxList[0];
            for (int i = 1; i < maxList.Count; i++)
            {
                if(maxList[i] > max) { max = maxList[i];}
                total += maxList[i];
            }
            Console.WriteLine("The max is {0}", max);
        }

        static void GetAverage(List<int> array)
        {
            int sum = array[0];
            for(int i = 1 ; i < array.Count ; i++)
            {
                sum += array[i];
            }
            Console.WriteLine("The average is {0}", sum / array.Count);
        }
        static void OddArray()
        {
            Console.WriteLine("Array with Odd Numbers");
            List<int> oddList = new List<int>();
            for (int i = 1; i<= 255; i+= 2)
            {
                oddList.Add(i);
            }
            Console.Write(oddList);
        }
        static void GreaterThanY(List<int> array, int y)
        {
            int count = 0;
            for( int i = 0; i < array.Count; i ++)
            {
                if(array[i]> y ) {count ++; }
            }
            Console.WriteLine("There are {0} items greater than {1} in the array", count, y);
        }
        static void SquareValues(List<int> array)
        {
            Console.WriteLine("Square the Values");
            Console.WriteLine("The array before squaring is {0}", array);
            for (int i = 0; i < array.Count; i++)
            {
                array[i] = array[i] * array[i];
            }
            Console.WriteLine("The array after squaring is {0}", array);
        }
        static void EliminateNegatives(List<int> array)
        {
            Console.WriteLine("Eliminate Negative Numbers");
            Console.WriteLine("The array before eliminating negatives is {0}", array);
            for (int i = 0; i < array.Count; i++)
            {
                if (array[i] < 0) { array[i] = 0; }
            }
            Console.WriteLine("The array after eliminating negatives is {0}", array);
        }
        static void MinMaxAvg(List<int> minMaxAvg)
        {
            Console.WriteLine("Min, Max, and Average");
            int min = minMaxAvg[0];
            int max2 = minMaxAvg[0];
            int sum2 = minMaxAvg[0];
            int average = 0;
            for (int i = 1; i < minMaxAvg.Count; i++)
            {
                if (minMaxAvg[i] < min) { min = minMaxAvg[i]; }
                if (minMaxAvg[i] > max2) { max2 = minMaxAvg[i]; }
                sum2 += minMaxAvg[i];
            }
            average = sum2 / minMaxAvg.Count;
            Console.WriteLine("The min is {0}, the max is {1}, and the average is {2}", min, max2, average);
        }
        static void ShiftArray(List<int> shiftArray)
        {
            Console.WriteLine("Shifting the values in an array");
            for (int i = 0; i < shiftArray.Count - 1; i++)
            {
                shiftArray[i] = shiftArray[i + 1];
            }
            shiftArray[shiftArray.Count - 1] = 0;
            Console.WriteLine("The shifted array is {0}.", shiftArray);
        }
        static void NumToString(List<object> numToString)
        {
            Console.WriteLine("Number to String");
            for (int i = 0; i < numToString.Count; i++)
            {
                if ((int)numToString[i] < 0) { numToString[i] = "Dojo"; }
            }
            Console.WriteLine("The array after removing negatives is: {0}", numToString);
        }

    }
}
