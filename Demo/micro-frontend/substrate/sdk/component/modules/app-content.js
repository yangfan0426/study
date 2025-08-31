/**
 * AppContent自定义元素
 * 用于渲染应用内容区域的Web Components组件
 */
export default class AppContent extends HTMLElement {
  constructor() {
    super();
    // 创建shadow DOM，实现组件样式和逻辑的封装
    this.attachShadow({ mode: "open" });
  }

  /**
   * 监听的属性列表
   * 当这些属性变化时会触发attributeChangedCallback回调
   * @returns {Array} 需要监听的属性名数组
   */
  static get observedAttributes() {
    return ["variant"];
  }

  /**
   * 元素被添加到文档时调用
   * 负责初始化组件渲染
   */
  connectedCallback() {
    this.render();
  }

  /**
   * 监听的属性变化时调用
   * 当observedAttributes中定义的属性发生变化时触发
   */
  attributeChangedCallback() {
    this.render();
  }

  /**
   * 渲染组件内容
   * 根据属性值和文本内容生成组件的内部结构
   */
  async render() {
    const container = document.createElement("div");
    // container.id = `app11`;
    this.shadowRoot.appendChild(container);
    await this.loadAppByName("app11");
  }
}

// 注册自定义元素   
customElements.define("app-content", AppContent);
