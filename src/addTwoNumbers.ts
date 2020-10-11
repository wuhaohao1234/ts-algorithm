// class ListNode {
//   next: null = null
//   key: number
//   constructor(key: number) {
//     this.key = key
//   }
// }
// class List {
//   head: any | ListNode
//   length: number
//   constructor() {
//     this.length = 0
//   }
//   static createNode(key: number) {
//     return new ListNode(key)
//   }
//   insert(node: ListNode) {
//     if (this.head) {
//       node.next = this.head
//     } else {
//       node.next = null
//     }
//     this.head = node
//     this.length++
//   }
//   delete(node: ListNode) {
//     if (this.length === 0) {
//       throw 'node is undefined'
//     }
//     if (node === this.head) {
//       this.head = node.next
//       this.length--
//       return
//     }
//     let preNode = this.head
//     while (preNode.next !== node) {
//       preNode = node.next
//     }
//     if(node.next === null) {
//       preNode = preNode.next
//     }
//     if(node.next) {
//       preNode.next = node.next
//     }
//     this.length --
//   }
// }
export const addTwoNumbers = () => {
  return 1
}