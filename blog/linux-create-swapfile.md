# How to create swap file on linux


Step-by-step guide about how to create a swap file on Linux. 

Before using the guide, login as the Root user. Or use sudo.

## Step 1. Create storage file

Type the following command to create 512MB swap file (1024 * 512MB = 524288 block size):

```
dd if=/dev/zero of=/swapfile bs=1024 count=524288
```

Where

- if=/dev/zero : read from /dev/zero file. /dev/zero is a special file in that provides as many null characters to build storage file called /swapfile
- of=/swapfile : read from /dev/zero write stoage file to /swapfile
- bs=1024 : read and write 1024 BYTES bytes at a time.
- count=524288 : copy only 523288 **BLOCKS** input blocks.


## Step 2. Set up a Linux swap area

Type the following command to set up a Linux swap area in a file:

```
# mkswap /swapfile
```

Setup correct file permission for security reasons, enter:

```
# chown root:root /swapfile
# chmod 0600 /swapfile
```

A world-readable swap file is a huge local vulnerability. The above command makes sure only root user can read/write to the file. Finally, activate /swapfile swap space immediately, enter:

```
# swapon /swapfile
```

To activate /swapfile after Linux system reboot, add entry to /etc/fstab file. Open this file using a text editor such as nano:

```
# nano /etc/fstab
```

Append the following line:

```
/swapfile swap swap defaults 0 0
```


## Step 3. Verify swap is activated

Simply use the free command:

```
$ free -m
```
