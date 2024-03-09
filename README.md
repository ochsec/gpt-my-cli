<div id="summary"></div>

# ⌨️ GPT-MY-CLI

## ✨ Unleash AI to Generate Commands and Wrangle Data ✨

1. [Summary](#summary)
2. [Commands](#commands)
3. [Development Plan](#plan-of-attack)

Description of project: A command line tool with a suite of commands to integrate an llm into the command line workflow. MVP will integrate OpenAI's GPT models.

Base command: ```llm```

<div id="commands"></div>

### Partial tree of commands [Top](#summary)
```
+
└── llm
    ├── complete
    ├── get-last
    ├── set-session
    ├── token-usage
    ├── view-session
    ├── which-session
    ├── ...
    ├── config
    │   ├── get-config
    │   ├── 
    │   ├── set-memory
    │   ├── set-models
    │   ├── set-default-config    
    │   ├── set-max-tokens
    │   └── ...
    └── util
        ├── article-from-html
        ├── fetch-text
        ├── save-file
        ├── load-file
        ├── set-work-dir
        ├── concat-files
        └── ...
```

<div id="plan-of-attack"></div>


### Plan of Attack [Top](#summary)
```
+-----------------------------------+-------------------+----------------+
|              Action               |     Timeframe     |    Status      |
+-----------------------------------+-------------------+----------------+
| Write tool in TypeScript and      |                   |                |
| compile to an executable file     |                   |                |
| with Deno compile                 |       Build v3    |   Completed    |
+-----------------------------------+-------------------+----------------+
| Unit tests/code coverage          |       Build v3    |   In Progress  |
+-----------------------------------+-------------------+----------------+
| Web site Documentation            |       Build v3    |   Not started  |
+-----------------------------------+-------------------+----------------+
| Port to Go for size/              |                   |                |
| performance optimization          |   Post-Build v3   |   Not started  |
+-----------------------------------+-------------------+----------------+
| Add additional LLMs               |   Post-Build v3   |   Not started  |
+-----------------------------------+-------------------+----------------+
| Add additional commands           |   Post-Build v3   |   Not started  |
+-----------------------------------+-------------------+----------------+
```