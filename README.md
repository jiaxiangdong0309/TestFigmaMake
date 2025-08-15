# React + Tailwind CSS 项目

这是一个使用现代前端技术栈构建的 React 应用程序，集成了 Tailwind CSS 框架。

## 🚀 技术栈

- **React 18** - 现代化的 React 框架
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - 自动添加 CSS 前缀

## 📦 项目特性

- ⚡ **快速开发** - 使用 Vite 提供极快的开发体验
- 🎨 **现代化 UI** - 使用 Tailwind CSS 构建美观的界面
- 🧩 **组件化** - 可复用的 React 组件
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🔥 **热重载** - 开发时实时预览更改

## 🛠️ 安装和运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Button.jsx      # 按钮组件
│   └── Card.jsx        # 卡片组件
├── assets/             # 静态资源
├── App.jsx             # 主应用组件
├── main.jsx            # 应用入口
└── index.css           # 全局样式（Tailwind CSS）
```

## 🎯 组件使用示例

### Button 组件

```jsx
import Button from './components/Button';

// 基础用法
<Button onClick={() => console.log('clicked')}>
  点击我
</Button>

// 不同变体
<Button variant="success" size="lg">
  成功按钮
</Button>

// 禁用状态
<Button disabled>
  禁用按钮
</Button>
```

### Card 组件

```jsx
import Card from "./components/Card";

<Card hover>
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</Card>;
```

## 🎨 Tailwind CSS 使用

项目已配置 Tailwind CSS，你可以直接使用其实用类：

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
  这是一个使用Tailwind CSS样式的元素
</div>
```

## 📝 开发指南

1. **组件开发** - 在 `src/components/` 目录下创建新组件
2. **样式定制** - 在 `tailwind.config.js` 中扩展主题
3. **代码规范** - 项目已配置 ESLint 进行代码检查

## 🔧 自定义配置

### Tailwind CSS 配置

编辑 `tailwind.config.js` 文件来自定义主题：

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        // 添加自定义颜色
      },
    },
  },
  plugins: [],
};
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！
