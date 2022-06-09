import { defaultEquals } from "./defaultEquals"
import { Node } from "./Models/Node"

export default class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
}