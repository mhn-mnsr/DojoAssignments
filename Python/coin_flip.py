import random

heads = 0
tails = 0
count = 0


while count < 5000:

    coin = random.randint(1, 2)

    if coin == 1:
        print("Throwing a coin...It's a Head")
        heads += 1
        count += 1

    elif coin == 2:
        print("Throwing a coin...It's a Tail")
        tails += 1
        count += 1
    print("Got " + str(heads) + "heads so far and " + str(tails)+ " tails so far")
