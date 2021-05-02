//数组扩展
Array.prototype.includeArray = function (array) {

    let count = 0;
    for (let i of array) {
        if (this.includes(i))
            count++;
    }
    if (count == array.length) {
        return true;
    } else {
        return false;
    }
}

export class Tree {
    constructor(data) {
        this.root = new Node(data);
    }
    root;


    static hasChild(father, data) {
        for (let c of father.children) {
            if (c.data == data)
                return true
        }
        return false;
    }

    static getChild(father, data) {
        for (let c of father.children) {
            if (c.data == data)
                return c
        }
        return false
    }

    beTree(objArray, index) {
        if(!Object.keys( objArray[0]).includeArray(index))
        {
            console.log('分组依据错误');
            return;
        }
        for (let o of objArray) {
            recursion(this.root, o, index)
        }

    }


}

function recursion(root, obj, index, indexCount = 0) {
    if (index.length == indexCount)
    {
        return;
    }
    if (!Tree.hasChild(root, obj[index[indexCount]]))//如果不存在此省份,则加入子节点
    {
        let mynode = new Node(obj[index[indexCount]]);
        mynode.parent = root;
        root.children.push(mynode);
        recursion(Tree.getChild(root, obj[index[indexCount]]), obj, index, ++indexCount)
    } else {
        recursion(Tree.getChild(root, obj[index[indexCount]]), obj, index, ++indexCount)
    }

}

class Node {
    constructor(data) {
        this.data = data;
    }
    data = null;
    parent = null;
    children = [];
}