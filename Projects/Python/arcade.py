import random as r

def roulette():
    number = r.randint(1,60)
    print("You want to go to the arcade and go to the roulette table")
    print("You sit down and are asked to pick")
    print("Do you want to pick a Number or a Choice")
    input1 = input()
    if input1 == "Number" or input1 == "number":
        print("Which number do you want to pick")
        inputnum = int(input())
        if inputnum == number:
            print(f"You are a lucky duck, the number is" + number + ", you got 1 point")
        elif inputnum != number:
            print(f"tough luck you got, the number was {number} and you answered {inputnum}.")
        elif inputnum.ischar():
            quit()

i = r.randint(1,9)

if i == 1:
    print(f"You have 1 token.")
else:
    print(f"You have {i} tokens.")

i0 = 1
while i > 0:
    roulette()
    print(f"you now have {i} tokens")
    print("do you want to back out ")
    quit = input()
    if quit == "yes" or quit == "Y" or quit == "Yes" or quit == "y":
        quit()
    i -= 1
quit()
