#include <stdio.h>
#include <stdlib.h>
main()
{
    // defines a, b, c
    int a;
    int b;
    int c;
    float total;
    // print and scan
    printf("what do you want to calculate.\n");
    scanf("%d", &a);
    printf("what do you want to calculate next.\n");
    scanf("%d", &b);
    printf("1 +,2 -,3 *,4 /,5 // \n");
    printf("what do you want the symbol to be.\n");
    scanf("%d", &c);
    if (c < 5 & c > 0)
    {
        printf("ok i am calculating...");
        // checks for if c == 1-5
        if (c == 1)
        {
            total = a + b;
        }
        if (c == 2)
        {
            total = a - b;
        }
        if (c == 3)
        {
            total = a * b;
        }

        if (c == 4)
        {
            total = a / b;
        }
        if (c == 5)
        {
            total = a % b;
        }

        printf("%.4f is the answer.", total);
        return 0;
    }
    else if (c > 5 || c < 0)
    {
        printf("You are a disgrace.");
        exit(1);
    }
}