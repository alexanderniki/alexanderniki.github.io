# How to enable colors in Mercurial console output

## What is it

ColorExtension - is a [Mercurial](https://www.mercurial-scm.org/) extetsion that allows you to highlight some information in console output. The extension ships with Mercurial so there is no need to install it separately.


## Setup

To enable ColorExtension, open your hgrc file and add "color=" to "extensions" section. Like that:

```
[extensions]
color =
```

To override current colors, add "colors" section with color definitions to your hgrc. For example:

```
[color]
status.modified = blue bold underline red_background
status.added = green bold
status.removed = red bold blue_background
status.deleted = cyan bold underline
status.unknown = magenta bold underline
status.ignored = black bold
```

You can override colors for other states and actions in the same way.

If you want to switch some colors off, place "none" in the config:

```
status.clean = none
status.copied = none
```

Default color scheme lives [here](https://selenic.com/repo/hg-stable/file/436cc9d017c6/hgext/color.py)

