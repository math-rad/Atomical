interface meta_type {
    parent: meta_type;
    name: string;
    criteria: {
        includes: meta_critiera
        excludes: 
    }
    : meta_constraint
    inclusive: meta_constraint
}

type meta_critiera = {
    negate: boolean | undefined;
    regex: string
} & ({
    type: string
} | {
    content: string
})

interface meta_constraint {
    [index: number]: meta_critiera
} 

type meta_mode = {
    name: string
    modes: [meta_mode?]
    types: [meta_type?]
}

const x: meta_mode = {
    name: "default",
    modes: [
        {
            name: "string_overide",
            modes: [],
            types: [
                {
                    name: "content",
                    exclusive
                }
            ]
        }
    ],
    types: []

}

