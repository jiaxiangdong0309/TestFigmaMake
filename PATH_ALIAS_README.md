# 路径别名配置说明

## 概述
本项目已配置使用 `@` 符号作为 `src` 目录的别名，可以简化导入路径。

## 配置详情

### 1. Vite 配置 (vite.config.js)
```javascript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}
```

### 2. TypeScript 配置 (tsconfig.json)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 3. JavaScript 配置 (jsconfig.json)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 使用方法

### 之前的导入方式
```javascript
import { Button } from '../../../components/ui/Button'
import { cn } from '../../../lib/utils'
import { Navigation } from '../../../components/Navigation'
```

### 使用 @ 别名后
```javascript
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Navigation } from '@/components/Navigation'
```

## 支持的导入示例

✅ **组件导入**
```javascript
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/card'
import { Navigation } from '@/components/Navigation'
import { Banner } from '@/components/Banner'
```

✅ **工具函数导入**
```javascript
import { cn } from '@/lib/utils'
```

✅ **样式导入**
```javascript
import '@/styles/globals.css'
import '@/index.css'
```

✅ **资源导入**
```javascript
import logo from '@/assets/react.svg'
```

## 注意事项

1. **重启开发服务器**: 修改配置后需要重启开发服务器
2. **IDE 支持**: 确保你的 IDE 支持路径别名（VS Code 默认支持）
3. **文件扩展名**: 导入时可以省略 `.jsx` 或 `.tsx` 扩展名

## 故障排除

如果遇到导入问题：
1. 检查文件路径是否正确
2. 重启开发服务器
3. 清除 IDE 缓存
4. 确认配置文件语法正确

## 测试

运行以下命令测试配置：
```bash
npm run dev
```

然后查看浏览器控制台是否有导入错误。
