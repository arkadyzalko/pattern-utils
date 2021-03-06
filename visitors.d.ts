declare module visitors {
    interface Visitor {
        visit: (part: Part) => void;
    }
    class Part {
        accept: (vistor: Visitor) => void;
    }
    class MethodVisitor implements Visitor {
        fnName: string;
        constructor(fnName: string);
        visit: (part: Part) => void;
    }
    class LambdaVisitor implements Visitor {
        fnName: string;
        constructor(visit: (part: Part) => void);
        visit: (part: Part) => void;
    }
}
