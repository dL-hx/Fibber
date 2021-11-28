// 将虚拟dom 转换为真实Dom 方法
import updateNodeElement from "./updateNodeElement";

// 1. 将虚拟DOM节点 进行转换

// 2. 将虚拟DOM属性 进行转换

export default function createDOMElement(virtualDOM, container) {
    // 根据 virtualDOM 的 type 进行创建
    let newElement = null;
    if (virtualDOM.type === "text") {
      // 文本节点
      // 创建文本节点
      newElement =  document.createTextNode(virtualDOM.props.textContent)

    } else {
      // 元素节点
      // 1.创建元素节点
      newElement =  document.createElement(virtualDOM.type)

      // 2.为元素节点添加属性
      updateNodeElement(newElement, virtualDOM)
  
    }


  
    return newElement
  }
  