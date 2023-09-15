// archivos multimedia
declare module "*.svg"{
    const content: any;
    export default content;
}
declare module "*.jpg"{
    const content: any;
    export default content;
}
declare module "*.jpeg"{
    const content: any;
    export default content;
}

//archivos javascript
declare module "*.js"{
    const content : any
    export default content
}
declare module "*.jsx"{
    const content : any
    export default content
}

// módulos para estilos
declare module "*.module.scss"{
    const classes : {[key:string]:string}
    export default classes
}
declare module "*.module.css"{
    const classes : {[key:string]:string}
    export default classes
}