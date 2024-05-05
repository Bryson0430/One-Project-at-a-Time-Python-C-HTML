import sys as s
import pandas as pd

def createlist(value: int):
    i = 0
    nlist = []
    for i in range(value):    
        print("Put in a value")
        in2 = input()
        if in2.isdigit():
            int(in2)
        elif in2.isdecimal():
            float(in2)
        else:
            str(in2)
        nlist.append(in2)
        i+=1
    return nlist

n = createlist(4)

print(n)