# How to make your bash's tab-completion case-insensitive

## Instruction

Making your bash's tab-completion case-insensitive is extremely easy.

Create a file named .inputrc in your home directory. 

After that, place this line in it:

```
set completion-ignore-case on
```

That's all basically! Open a new shell and try it out.

**But**. Keep in mind, that this will prevent bash from reading the defaults from /etc/inputrc, breaking things like navigation with ctrl-left/right. 

To avoid this make sure to add $include /etc/inputrc in your ~/.inputrc


## Extra feature

You can make tab completion of file and directory names a little easier by adding in your ~/.inputrc the following line:

```
set show-all-if-ambiguous on
```

This makes it unnecessary to press Tab twice when there is more than one match.
