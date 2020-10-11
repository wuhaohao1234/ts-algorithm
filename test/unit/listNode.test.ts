import { List } from '../../src/unit/listNode'
function insertNode() {
  let node1 = List.createNode(1)
  let node2 = List.createNode(2)
  let node3 = List.createNode(3)
  let list = new List()
  list.insert(node1)
  list.insert(node2)
  list.insert(node3)
  return list
}
describe('测试链表', () => {
  test('创建一个node节点，这个node节点的key为1,next为null', () => {
    let node = List.createNode(1)
    expect(node.key).toBe(1)
    expect(node.next).toBeNull()
  })
  test('创建2个node节点，插入链表中，得到第一个节点的key为2,第二个节点的key为1,第一个节点的next为第二个节点,并且节点的头部为第一个节点', () => {
    let node1 = List.createNode(1)
    let node2 = List.createNode(2)
    let list = new List()
    list.insert(node1)
    list.insert(node2)
    if (list.head) {
      expect(list.head.key).toBe(2)
      let nextNode = list.head.next
      if (nextNode) {
        expect(nextNode.key).toBe(1)
        expect(nextNode.next).toBeNull()
      }
    }
  })

  test('根据key查找节点', () => {
    let list = insertNode()
    if (list.head) {
      expect(list.find(2)).toBe(list.head.next)
      expect(list.find(3)).toBe(list.head)
    }
  })
  test('根据key节点的key为5', () => {
    let list = insertNode()
    let node = list.modify(3, 5)
    if (node) {
      if (node.key) {
        console.log('改变')
        expect(node.key).toBe(5)
      }
    }
    if (list.head) {
      console.log('查找5对应节点的位置')
      expect(list.find(5)).toBe(list.head)
    }
  })
  test('删除节点为3的', () => {
    let list = insertNode()
    const node = list.find(3)
    list.delete(node)
    if (list.head) {
      expect(list.head.key).toBe(2)
      expect(list.length).toBe(2)
    }
  })
  test('删除节点为2的', () => {
    let list = insertNode()
    const node = list.find(2)
    list.delete(node)
    if (list.head) {
      if (list.head.next) {
        expect(list.head.next.key).toBe(1)
        expect(list.length).toBe(2)
      }
    }
  })
  test('删除节点为1的', () => {
    let list = insertNode()
    const node = list.find(1)
    list.delete(node)
    expect(list.length).toBe(2)
    if (list.head) {
      if (list.head.next) {
        expect(list.head.next.next).toBeNull()
      }
    }
  })

})
