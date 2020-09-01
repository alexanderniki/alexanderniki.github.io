# Python3 cheat sheet


## Style

```python

# Variables

counter = 0
my_counter = 0
my_other_counter = 0

# Functions

def work(): ...

def do_something(): ...

def do_something_else(): ...

# Classes

class FooClass: ...

```


## Variables

### Declaration

```python
a = 1         # integer
b = 1.1       # float
c = 1 + 2j    # complex number (a + bi)
d = "python"  # string
e = True      # boolean (True / False)

# With type hints (3.6+)

a: int = 1
b: float = 1.1
c: complex = 1 + 2j
d: str = "python"
e: bool = True
```

### Falsy and empty values

```python
a = None
b = 0
c = ""
d = []
```


### Type convertion

```python
int(x)
float(x) 
bool(x) 
str(x)
```


### Strings

```python
x = "Python"
len(x)
x[0]
x[-1]
x[0:3]
 
# Formatted strings
name = f"{first} {last}"
 
# Escape sequences
\" \’ \\ \n
 
# String methods
x.upper()
x.lower()
x.title()
x.strip()
x.find("p")
x.replace("a", "b")
"a" in x
```


## Control flow

### Conditional statements

```python
if x == 1:
    print("a")
elif x == 2:
    print("b")
else:
    print("c")
 
# Ternary operator 
x = "a" if n > 1 else "b"
 
# Chaining comparison operators
if 18 <= age < 65:
    ...
```


### Loops

```python
for n in range(1, 10):
    print(n)

while n < 10:
    print(n)
    n += 1
```


## Functions

```python
def increment(number, by=1):
    return number + by
 
# Keyword arguments 
increment(2, by=1)
 
# Variable number of arguments 
def multiply(*numbers): 
    for number in numbers: 
        print(number) 
 

multiply(1, 2, 3, 4)
 
# Variable number of keyword arguments 
def save_user(**user): ...

save_user(id=1, name="username")


# With type hints (3.6+)

def increment(number: float, by: float = 1.0) -> float:
    return number + by
    

def do_something() -> None:  # When the function returns nothing
    ...
```


## Exceptions

```python

# Handling Exceptions 
try:
    do_something()
except (ValueError, ZeroDivisionError):
    do_something_else()
else: 
    ...  # no exceptions raised
finally:
    do_cleanup()  # cleanup code

# Raising exceptions
if x < 1: raise ValueError("...")

# The with statement 
with open("file.txt") as file:
    ...

```

## Classes

```python
class Point:
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def draw(self):
        ...


# Instance and class attributes
class Point:

    default_color = "red"
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    
# Instance and class methods
class Point:
    
    def draw(self):
        ...
    
    @classmethod
    def zero(cls):
        return cls(0, 0)


# Private members 
class Point:
    
    def __init__(self, x):
        self.__x = x


# Properties 
class Point:
    
    def __init__(self, x):
        self.__x = x
 
    @property
    def x(self):
        return self.__x
 
    @x.setter
    def x(self, value):
        self.__x = value


# Inheritance

class FileStream(Stream):

    def open(self):
        super().open()
        

# Multiple inheritance 
class FlyingFish(Flyer, Swimmer):
    ...
```


