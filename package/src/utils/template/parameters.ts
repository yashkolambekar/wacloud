class Parameters {

    constructor(){

    }

    static named(name: string, value: string){
        return {
            type: "text",
            parameter_name: name,
            text: value
        }
    }

    static positional(value: string){
        return {
            type: "text",
            text: value
        }
    }


}

export default Parameters;