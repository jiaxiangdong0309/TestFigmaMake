# Footer 组件说明

## 概述

基于 Figma 设计稿创建的 Footer 组件，完全还原了设计稿的视觉效果和布局。

## 组件结构

### 主要组件

1. **Footer** - 主组件
2. **FooterSection** - 页脚分区组件
3. **FooterLink** - 页脚链接组件
4. **QRCode** - 二维码组件
5. **FooterCopyright** - 版权信息组件

### 组件层次结构

```
Footer
├── FooterSection (4个分区)
│   ├── FooterLink (链接列表)
│   └── FooterLink (联系信息)
├── QRCode (3个二维码)
└── FooterCopyright (版权信息)
```

## 功能特性

### 1. 响应式设计

- 移动端：单列布局
- 桌面端：四列网格布局
- 自适应间距和字体大小

### 2. 交互效果

- 链接悬停效果
- 平滑过渡动画
- 可点击的链接区域

### 3. 二维码支持

- 支持自定义二维码图片
- 多种尺寸选项 (small, medium, large)
- 占位符显示

### 4. 内容管理

- 易于配置的链接数据
- 支持联系信息显示
- 可扩展的版权信息

## 使用方法

### 基本使用

```jsx
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* 其他组件 */}
      <Footer />
    </div>
  );
}
```

### 自定义配置

```jsx
// 在Footer组件中修改footerSections数组
const footerSections = [
  {
    title: "自定义标题",
    links: ["链接1", "链接2", "链接3"],
    isContact: false, // 是否为联系信息
  },
];

// 修改二维码配置
const qrCodes = [
  {
    name: "自定义二维码",
    image: "/path/to/qr-code.png",
  },
];
```

## 样式定制

### Tailwind CSS 类

组件使用了以下主要的 Tailwind CSS 类：

- **背景色**: `bg-[#1d263a]` (深蓝色背景)
- **文字颜色**: `text-white`, `text-white/50` (白色和半透明白色)
- **间距**: `py-16`, `px-8`, `gap-8` 等
- **响应式**: `grid-cols-1 md:grid-cols-4`

### 自定义样式

可以通过修改 Tailwind 配置或添加自定义 CSS 来调整样式：

```css
/* 自定义Footer样式 */
.custom-footer {
  background: linear-gradient(to bottom, #1d263a, #2a3447);
}
```

## 数据配置

### Footer Sections 配置

```javascript
const footerSections = [
  {
    title: "职能类别",
    links: [
      "互联网/电子/通信",
      "生物/制药/医疗/护理",
      "生产/制造/质量",
      "房地产/建筑/物业",
      "金融业",
    ],
  },
  {
    title: "关于",
    links: ["禾蛙动态", "猎企加盟", "猎企入驻", "反馈与建议", "禾蛙协议"],
  },
  {
    title: "服务支持",
    links: [], // 空数组表示无内容
  },
  {
    title: "联系我们",
    links: [
      "电话：400-777-5125",
      "网址：www.hewa.cn",
      "苏州地址：苏州工业园区星湖街328号创意产业园2-B405",
      "北京地址：北京市朝阳区朝阳门南大街10号兆泰国际A座501",
    ],
    isContact: true, // 标记为联系信息，不显示为链接
  },
];
```

### QR Codes 配置

```javascript
const qrCodes = [
  {
    name: "接单方小程序",
    image: "/images/qr-code-1.png",
  },
  {
    name: "发单方小程序",
    image: "/images/qr-code-2.png",
  },
  {
    name: "微信公众号",
    image: "/images/qr-code-3.png",
  },
];
```

## 组件 API

### FooterSection Props

| 属性      | 类型     | 默认值 | 说明           |
| --------- | -------- | ------ | -------------- |
| title     | string   | -      | 分区标题       |
| links     | string[] | []     | 链接列表       |
| isContact | boolean  | false  | 是否为联系信息 |

### QRCode Props

| 属性      | 类型                           | 默认值   | 说明           |
| --------- | ------------------------------ | -------- | -------------- |
| name      | string                         | -        | 二维码名称     |
| image     | string                         | -        | 二维码图片路径 |
| size      | 'small' \| 'medium' \| 'large' | 'medium' | 二维码尺寸     |
| className | string                         | ''       | 自定义 CSS 类  |

### FooterLink Props

| 属性      | 类型      | 默认值 | 说明           |
| --------- | --------- | ------ | -------------- |
| children  | ReactNode | -      | 链接文本       |
| href      | string    | '#'    | 链接地址       |
| isContact | boolean   | false  | 是否为联系信息 |
| className | string    | ''     | 自定义 CSS 类  |

## 注意事项

1. **图片路径**: 确保二维码图片路径正确，图片应放在 `public/images/` 目录下
2. **字体**: 组件使用了 `font-pingfang` 字体类，确保 Tailwind 配置中包含此字体
3. **响应式**: 在小屏幕设备上，布局会自动调整为单列
4. **可访问性**: 所有链接都包含适当的语义化标签和悬停效果

## 扩展建议

1. **国际化**: 可以添加多语言支持
2. **动态数据**: 可以从 API 获取 Footer 数据
3. **主题切换**: 可以添加深色/浅色主题支持
4. **动画效果**: 可以添加更多交互动画

## 文件结构

```
src/
├── components/
│   ├── Footer.jsx              # 主Footer组件
│   └── ui/
│       ├── FooterSection.jsx   # 页脚分区组件
│       ├── FooterLink.jsx      # 页脚链接组件
│       ├── QRCode.jsx          # 二维码组件
│       └── FooterCopyright.jsx # 版权信息组件
└── App.jsx                     # 使用Footer的示例
```
