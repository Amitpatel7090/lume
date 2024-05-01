# Starting a New Project with Deno Lume

## Prerequisites

- Deno installed on your machine. You can download it from [Deno's official website](https://deno.land/).

## Installation

1. Install Lume using the following command:

```bash
deno run -A https://lume.land/init.ts
```



## This command creates the following files:
- `_config.ts`  


The Lume configuration file, where you can customize the site build.

- `deno.json`

The Deno's configuration file. It includes the import map and some tasks to run Lume. You can also configure other features of Deno like TypeScript, formatter, linter, etc.

## Setup Lume CLI on your computer

`deno install --allow-run --allow-env --allow-read --name lume --force --reload https://deno.land/x/lume_cli/mod.ts
`

### This creates the `lume` command:
- `lume init` will run the command deno run -Ar https://lume.land to initialize Lume in the current directory.
- `lume upgrade-cli` will upgrade the Lume CLI script to the latest version.
- ` lune -s` or lume --serve will start a local server to preview the site.
- checkout more with `lume --help`.
  
## use front matters for index pannel

- add front matters to the top of the markdown file to set the title and order of the page in the index pannel.
```md
---
title: "First Page"
nav_order: 1
---
```
