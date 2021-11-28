import { createDOMElement, createReactInstance } from "../../DOM"
const createStateNode=(fiber)=>{
  if (fiber.tag === 'host_component') {
      return createDOMElement(fiber)
  }else {// 如果是组件类型
    return createReactInstance(fiber)
  }
}

export default createStateNode