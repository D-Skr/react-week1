//create interface for test1api.json

interface Info {
    desc: string;
    isActive: boolean;
}

interface Tag {
    name: String;
    value: number;
}

interface Reply {
    userId: number;
    id: number;
    title: string;
    info: Info;
    tags: Tag[];
}