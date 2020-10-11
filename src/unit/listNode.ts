export class ListNode {
  next: ListNode | any
  key: number
  constructor(key: number) {
    this.next = null
    this.key = key
  }
}
export class List {
  head: ListNode | null
  length: number = 0
  constructor() {
    this.head = null
  }
  static createNode(key: number) {
    return new ListNode(key)
  }
  insert(node: ListNode) {
    if (this.head) {
      node.next = this.head
    } else {
      node.next = null
    }
    this.head = node
    this.length++
  }
  find(key: number) {
    let node = this.head
    while (node !== null && node.key !== key) {
      node = node.next
    }
    return node
  }
  modify(key: number, num: number) {
    let node = this.find(key)
    if (node) {
      if (node.key) {
        node.key = num
      }
    }
    return node
  }
  delete(argNode: ListNode | null) {
    let node = this.head
    if (node) {
      if (node === argNode) {
        this.head = node.next
      }
      else {
        if(node.next) {
          while(node && node.next !== argNode) {
            node = node?.next
          }
          if(node) {
            if(node.next) {
              node.next = null
            }
          }
        }

      }
    }
    this.length--

  }
}