export const topics = [
    {
        title: "Syntax",
        path: "syntax",
        subtopics: [
            {
                title: "Variables",
                path: "variables",
                subtopics: [
                    {
                        title: "Declaration",
                        path: "declaration",
                        content: "Use syntax like `int x;` or `float y = 2.5;` to declare variables in C++.",
                    },
                    {
                        title: "Initialization",
                        path: "initialization",
                        content: "You can initialize variables at the time of declaration like `int x = 5;`.",
                    },
                    {
                        title: "Scope",
                        path: "scope",
                        content: "Variable scope defines where the variable is accessible — local, global, or static.",
                    },
                ],
            },
            {
                title: "Data Types",
                path: "data-types",
                subtopics: [
                    {
                        title: "Primitive Types",
                        path: "primitive",
                        content: "These include int, float, char, and bool — basic types provided by the language.",
                    },
                    {
                        title: "Derived Types",
                        path: "derived",
                        content: "Arrays, pointers, and functions that derive from primitive types.",
                    },
                    {
                        title: "User-defined Types",
                        path: "user-defined",
                        content: "Types like struct, union, and class allow you to define complex data models.",
                    },
                ],
            },
        ],
    },
    {
        title: "Control Flow",
        path: "control-flow",
        subtopics: [
            {
                title: "if-else",
                path: "if-else",
                subtopics: [
                    {
                        title: "Nested if",
                        path: "nested-if",
                        content: "You can nest if statements inside others to handle multiple conditions.",
                    },
                    {
                        title: "else-if Ladder",
                        path: "else-if",
                        content: "Used to check multiple conditions in sequence when `if` fails.",
                    },
                ],
            },
            {
                title: "Switch Case",
                path: "switch-case",
                subtopics: [
                    {
                        title: "Syntax",
                        path: "switch-syntax",
                        content: "`switch (expression) { case val1: ... break; case val2: ... break; default: ... }`",
                    },
                    {
                        title: "Break and Fallthrough",
                        path: "switch-break",
                        content: "`break` exits the switch. Without it, execution falls through to the next case.",
                    },
                ],
            },
            {
                title: "Loops",
                path: "loops",
                subtopics: [
                    {
                        title: "For Loop",
                        path: "for-loop",
                        content: "Used when the number of iterations is known. Syntax: `for(int i = 0; i < n; i++)`",
                    },
                    {
                        title: "While Loop",
                        path: "while-loop",
                        content: "Executes as long as the condition is true. Syntax: `while(condition) { }`",
                    },
                    {
                        title: "Do-While Loop",
                        path: "do-while-loop",
                        content: "Executes at least once. Syntax: `do { } while(condition);`",
                    },
                ],
            },
        ],
    },
];
