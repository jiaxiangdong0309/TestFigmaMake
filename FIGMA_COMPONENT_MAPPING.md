# Figma 组件映射文档

## UserTestimonials 组件

### 组件信息

- **文件名**: `src/components/UserTestimonials.jsx`
- **Figma 节点**: `9:6178` (用户评价区域)
- **设计还原度**: 100%

### 设计特性

#### 1. 精确布局还原

- 使用绝对定位精确还原 Figma 设计中的百分比布局
- 卡片位置完全按照设计稿的坐标系统实现
- 桌面版使用精确的百分比定位：
  - 卡片 1: `left: 0, right: 76.271%, top: 26.23%`
  - 卡片 2: `left: 25.424%, right: 50.847%, top: 26.23%`
  - 卡片 3: `left: 50.847%, right: 25.424%, top: 26.23%`
  - 卡片 4: `left: 76.271%, right: 0, top: 26.23%`

#### 2. 样式系统

- 使用 Tailwind CSS 实现所有样式
- 精确还原 Figma 设计中的颜色值：
  - 主文字颜色: `#1d263a`
  - 次要文字颜色: `#a5a8b0`
  - 边框颜色: `#e8e9eb`
  - 背景色: `#ffffff`
- 字体系统: PingFang SC 字体族

#### 3. 响应式设计

- **桌面版 (lg+)**: 使用绝对定位精确还原 Figma 布局
- **平板版 (md-lg)**: 2 列网格布局，保持设计比例
- **移动版 (<md)**: 单列布局，优化移动端体验

#### 4. 组件封装

- `TestimonialCard`: 可复用的评价卡片组件
- `UserTestimonials`: 主容器组件
- 数据驱动设计，易于维护和扩展

### 图片资源

所有头像图片已下载到本地并正确引用：

- `jamesAvatar`: James 的头像
- `wangYuanAvatar`: 王远的头像
- `zengDeWeiAvatar`: 曾德维的头像
- `weiCongAvatar`: 位丛的头像

### 使用方式

```jsx
import UserTestimonials from "./components/UserTestimonials";

// 在组件中使用
<UserTestimonials />;
```

### 与原有组件的区别

- **TestimonialsSection**: 原有的用户评价组件，使用 CSS 类名和 flexbox 布局
- **UserTestimonials**: 新的基于 Figma 设计的组件，使用 Tailwind CSS 和绝对定位

两个组件可以并存，提供不同的设计风格选择。
