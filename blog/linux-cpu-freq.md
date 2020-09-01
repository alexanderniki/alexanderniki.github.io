# How to determine current CPU frequency on Linux

Here is a little note about how to determine current CPU frequency in Linux.

## Simple way

Open your terminal emulator and type:

```
$ cat /proc/cpuinfo | grep MHz
```

After that, you'll see something like

```
cpu MHz		: 932.128
cpu MHz		: 1000.354
cpu MHz		: 998.950
cpu MHz		: 858.709
```


## More complex way

First of all, install "cpufrequtils" package. For example, in Ubuntu:

```
$ sudo apt install cpufrequtils
```

Then, just use "cpufreq-info" command.

