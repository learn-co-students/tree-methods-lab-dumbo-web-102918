function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, node) {
    let currentNode = rootNode
    if (currentNode.data === node.data) {
        return true;
    } else {
        if (currentNode.data > node.data) {
            if (currentNode.left) {
                return findOrAdd(currentNode.left, node)
            } else {
                currentNode.left = node

            }
        }
        if (currentNode.data < node.data) {
            if (currentNode.right) {
                return findOrAdd(currentNode.right, node)
            } else {
                currentNode.right = node

            }
        }
    }
}

function max(rootNode) {
    let currentNode = rootNode;
    if (!currentNode.right) {
        return currentNode
    } else {
        return max(currentNode.right)
    }
}

function min(rootNode) {
    let currentNode = rootNode;
    if (!currentNode.left) {
        return currentNode
    } else {
        return min(currentNode.left)
    }
}