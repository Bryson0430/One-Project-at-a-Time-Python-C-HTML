def test(v, h):
    vert = 1
    hori = 1
    print(f"this is a table of {v}, {h}")
    int(v)
    int(h)
    for vert in range(v):
        
        hori == 1
        vert += 1
        print(" ", end = "\n")
        for hori in range(h + 1):
            
            total = vert * hori
            print(total, end = ", ")
            hori += 1
#write how much you want the table
print("how many rows do you want")
rows = int(input())
print("how many columns do you want")
columns = int(input())
print(f"Are you sure. {rows} * {columns}")
sure = input()
while sure == "N":
    print("how many rows do you want")
    rows = int(input())
    print("how many columns do you want")
    columns = int(input())
    print(f"Are you sure. {rows} * {columns}")
    sure = input()

if sure == "Y":
    test(rows, columns)