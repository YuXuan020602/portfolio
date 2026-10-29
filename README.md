# 拾光集 · 个人作品集 + 技术博客（纯静态）

一套**零依赖、无构建步骤**的静态站点模板，清新文艺风格，适合开发者展示作品与写作。

```
portfolio-site/
├── index.html        首页（简介 + 精选作品 + 最新文章）
├── works.html        作品集（支持分类筛选）
├── blog.html         博客列表（支持分类筛选）
├── about.html        关于我（含联系方式）
├── blog/
│   ├── post-1.html   示例文章：协作白板渲染引擎
│   ├── post-2.html   示例文章：静态站点生成器
│   └── post-3.html   示例文章：清新文艺与工程化
└── assets/
    ├── css/style.css 主题样式（改这里换色/字体）
    ├── js/main.js    移动端菜单、筛选、年份
    └── img/          头像等图片
```

## 本地预览

任意静态服务器即可，例如：

```bash
cd portfolio-site
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```

直接双击 `index.html` 也能看（部分浏览器对本地字体/路径更严格，建议用上面的方式）。

## 如何替换成你自己的内容

1. **个人信息**：全局搜索 `Chopper`、`hello@example.com`、`拾光集`，替换为你的名字、邮箱、站点名。
2. **头像**：用你的照片覆盖 `assets/img/avatar.jpg`（建议正方形，或用 `.jpg` 并在 HTML 里改 `src`）。
3. **作品**：编辑 `works.html` 里的 `.work-item` 卡片；新增项目复制一张卡片，改 `data-cat` 决定它出现在哪个分类筛选下（可选值：`web` / `oss` / `viz` / `ai`）。
4. **文章**：每篇博客是一个独立 HTML 文件，放在 `blog/` 下。
   - 复制 `blog/post-1.html` 改内容即可；
   - 在 `blog.html` 里加一张 `.post-item` 卡片指向新文件（分类：`eng` / `oss` / `design`）；
   - 文章正文写进 `.article-body`，已内置标题、引用、代码块、列表样式，首段会自动首字下沉。
5. **换色 / 字体**：打开 `assets/css/style.css`，改 `:root` 里的 `--accent`（主色）、`--bg`（底色）等变量即可整体换肤。

## 静态托管（任选其一）

都是把整个 `portfolio-site/` 目录传上去即可，无需任何构建。

- **GitHub Pages**：推到仓库 → Settings → Pages → 选 `main` 分支根目录。
- **Netlify / Vercel**：拖拽 `portfolio-site` 文件夹到部署页，或连 Git 仓库，发布目录设为 `portfolio-site`。
- **Cloudflare Pages**：同上，构建命令留空。
- **对象存储（腾讯云 COS / 阿里云 OSS / S3）**：开启静态网站托管，默认首页设为 `index.html`。

## 小提示

- 全站链接相对路径，部署到子目录（如 `example.com/blog/`）也能正常工作。
- 已做移动端适配与 `prefers-reduced-motion` 无障碍处理。
- 想加暗色模式、评论、RSS？都是纯前端可追加的小功能，欢迎继续扩展。
