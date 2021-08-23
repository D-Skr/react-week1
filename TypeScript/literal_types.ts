let c: 'test' = 'test';

type actionType = 'up' | 'down';

// literal function with numeric return type
function performAction(action: actionType): -1 | 1 {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}

interface ComplexAction {
    s: string;
}

function performAction2(action: actionType | ComplexAction): -1 | 1 {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}