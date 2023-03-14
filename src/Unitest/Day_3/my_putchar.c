#include "my_putchar.h"

void my_putchar(char c)
{
    int fd = open("out.txt",O_CREAT,00777);
    write(fd, &c, 1);
}