#calculates a, b, c by the user
a = input("what do you want to calculate.   ")
b = input("what do you want to calculate next  ")
print(" 1 +,2 -,3 *,4 **,5 /,6 //")
c = input("what do you want the symbol to be       ")
#checks if they are digits
if c.isdigit() and b.isdigit() and a.isdigit():
    c = int(c)
    a = int(a)
    b = int(b)
else:
    ("you won't do it again")

#c is chosen for symbols and this checks for it
if c == 1:
   total = a + b
elif c == 2:
    total = a - b
elif c == 3:
     total = a * b
elif c == 4:
    total = a ** b
if c == 5: 
    total = a / b
elif c == 6:
     total = a // b
#print the total
print(total)