---
title: Shell
---

# Shell

## What is the difference between **pts** and **tty** and **:0**?
https://unix.stackexchange.com/questions/335992/what-is-the-difference-between-pts-and-tty-and-0


1. pts = "pseudo terminal slave": login device when connecting through the network or a console (e.g. ssh).
2. tty = "teletype": serial or console connections (text mode)
3. :0 = "local:display #0": X11 server, used for graphical login (e.g. gdm)
