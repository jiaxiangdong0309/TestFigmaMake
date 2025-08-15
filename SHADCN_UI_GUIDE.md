# shadcn/ui 使用指南

## 🎯 概述

本项目已成功集成 **shadcn/ui** 组件库，与现有组件并存，不会影响任何现有功能。

## 📦 已安装的组件

### 基础组件

- **Button** (`@/components/ui/button`) - 按钮组件
- **Card** (`@/components/ui/card`) - 卡片组件
- **Dialog** (`@/components/ui/dialog`) - 对话框组件
- **Input** (`@/components/ui/input`) - 输入框组件

### 工具函数

- **cn** (`@/lib/utils`) - 类名合并工具函数

## 🚀 如何使用

### 1. 导入组件

```jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
```

### 2. 使用示例

#### Button 组件

```jsx
// 基础用法
<Button>点击我</Button>

// 不同变体
<Button variant="secondary">次要按钮</Button>
<Button variant="destructive">危险按钮</Button>
<Button variant="outline">轮廓按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="link">链接按钮</Button>

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="default">默认大小</Button>
<Button size="lg">大按钮</Button>
```

#### Card 组件

```jsx
<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
    <CardDescription>卡片描述</CardDescription>
  </CardHeader>
  <CardContent>
    <p>卡片内容</p>
  </CardContent>
  <CardFooter>
    <Button>操作按钮</Button>
  </CardFooter>
</Card>
```

#### Dialog 组件

```jsx
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button>打开对话框</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>对话框标题</DialogTitle>
      <DialogDescription>对话框描述</DialogDescription>
    </DialogHeader>
    <div>对话框内容</div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        取消
      </Button>
      <Button onClick={() => setIsOpen(false)}>确认</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

#### Input 组件

```jsx
<Input placeholder="请输入内容..." />
```

## 🎨 设计系统兼容性

shadcn/ui 组件与您现有的设计系统完美兼容：

### 颜色系统

- 使用 CSS 变量定义颜色
- 支持亮色和暗色主题
- 与现有 Tailwind 配置协调

### 字体系统

- 继承现有的 PingFang SC 字体配置
- 支持响应式字体大小

### 间距和圆角

- 使用统一的间距系统
- 一致的圆角设计

## 📦 添加更多组件

要添加更多 shadcn/ui 组件，使用以下命令：

```bash
# 添加表单组件
npx shadcn@latest add form

# 添加选择器组件
npx shadcn@latest add select

# 添加表格组件
npx shadcn@latest add table

# 添加标签组件
npx shadcn@latest add badge

# 添加进度条组件
npx shadcn@latest add progress

# 添加工具提示组件
npx shadcn@latest add tooltip

# 添加下拉菜单组件
npx shadcn@latest add dropdown-menu

# 添加导航菜单组件
npx shadcn@latest add navigation-menu
```

## 🔧 自定义配置

### 修改组件样式

所有 shadcn/ui 组件都在 `src/components/ui/` 目录下，可以直接修改：

```jsx
// 修改 Button 组件
// 编辑 src/components/ui/button.tsx
```

### 自定义主题

在 `src/index.css` 中修改 CSS 变量：

```css
:root {
  --primary: #1d263a; /* 主色调 */
  --secondary: #777d89; /* 次要色 */
  --accent: #f8574c; /* 强调色 */
  --background: #ffffff; /* 背景色 */
  --foreground: #1d263a; /* 前景色 */
}
```

## 📋 最佳实践

### 1. 组件组合

```jsx
// 好的做法：组合使用
<Card>
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    <Input placeholder="输入..." />
  </CardContent>
  <CardFooter>
    <Button>提交</Button>
  </CardFooter>
</Card>
```

### 2. 状态管理

```jsx
// 使用 React hooks 管理状态
const [isOpen, setIsOpen] = useState(false);
const [value, setValue] = useState("");

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  {/* 对话框内容 */}
</Dialog>;
```

### 3. 可访问性

shadcn/ui 组件基于 Radix UI 构建，具有优秀的可访问性：

- 键盘导航支持
- 屏幕阅读器友好
- ARIA 属性自动管理

## 🎯 与现有组件的区别

| 特性       | 现有组件          | shadcn/ui 组件            |
| ---------- | ----------------- | ------------------------- |
| 设计风格   | 自定义 Figma 设计 | 现代化设计系统            |
| 可访问性   | 基础支持          | 优秀支持（基于 Radix UI） |
| 定制性     | 完全自定义        | 高度可定制                |
| 维护性     | 需要手动维护      | 社区维护                  |
| 功能丰富度 | 基础功能          | 功能丰富                  |

## 📚 相关资源

- [shadcn/ui 官方文档](https://ui.shadcn.com/)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

## 🤝 贡献

如果您想为项目添加更多 shadcn/ui 组件或改进现有实现，请：

1. 使用 `npx shadcn@latest add [component-name]` 添加组件
2. 根据需要自定义组件样式
3. 确保与现有设计系统协调
4. 测试组件的可访问性和响应式表现
