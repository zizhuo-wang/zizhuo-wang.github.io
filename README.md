# Zizhuo Wang · 王子卓 — Academic Homepage

个人学术主页，使用 Astro、TypeScript 和 Tailwind CSS 4 构建，包含个人介绍、联系方式、Publications 和 Research Experience。

## 在线主页与部署

- 主页：<https://zizhuo-wang.github.io/>
- 部署仓库：<https://github.com/zizhuo-wang/zizhuo-wang.github.io>
- 向部署仓库的 `main` 分支推送后，GitHub Actions 自动构建并发布；进度可在仓库的 Actions 页面查看。
- 使用组织根地址，不添加仓库路径前缀，也不需要购买域名或配置 `CNAME`。

本地 `origin` 指向部署仓库，原仓库保留为 `legacy` 远端。日常更新：

```powershell
npm.cmd run build
git diff --check
git add <需要提交的文件>
git commit -m "Update homepage"
git push origin main
```

部署工作流仅在 `zizhuo-wang/zizhuo-wang.github.io` 中运行，不会在原仓库重复发布。

## 本地预览：在默认浏览器中打开

在 Windows PowerShell 中运行：

```powershell
Set-Location 'D:\Homepage\zizhuo-homepage'
npm.cmd run dev -- --background
Start-Process 'http://localhost:4321/'
```

这两步先在后台启动开发服务器，再通过 `Start-Process` 在系统默认浏览器中打开主页。修改内容后，页面会自动更新。默认地址为 <http://localhost:4321/>；如果端口被占用，请先查看启动输出，再将 `Start-Process` 中的地址改为实际地址。

本项目使用的 Astro 版本在后台启动时不会传递 `--open` 参数，因此使用上面的独立浏览器打开命令。

如果服务器已经运行，先查看地址，再直接用浏览器打开：

```powershell
npm.cmd run dev -- status
Start-Process 'http://localhost:4321/'
```

如果 `status` 显示了其他端口，请相应替换 `Start-Process` 中的地址。

后台服务器管理命令：

```powershell
# 查看运行状态
npm.cmd run dev -- status

# 查看日志
npm.cmd run dev -- logs

# 停止后台服务器
npm.cmd run dev -- stop
```

## 首次安装

需要 Node.js 22.12.0 或更高版本。在项目根目录安装依赖一次：

```powershell
npm.cmd ci
```

以上命令使用 `npm.cmd`，避免 Windows PowerShell 对 `npm.ps1` 的执行策略限制。在 macOS / Linux 中使用 `npm`，并进入实际的项目目录。

## 生产构建与预览

```powershell
npm.cmd run build
npm.cmd run preview -- --open
```

构建输出位于 `dist/`。生产预览显示上一次构建的结果；更新源文件后需要重新构建。生产预览在前台运行，按 `Ctrl+C` 停止。日常修改页面时使用上面的开发预览命令。

## 内容维护

| 位置 | 用途 |
| --- | --- |
| `src/components/Intro.astro` | 姓名、个人介绍、肖像和联系方式 |
| `public/images/zizhuo-wang-portrait.jpg` | 当前肖像照片 |
| `src/data/projects.ts` | 论文标题、作者、录用信息、简介及资源链接 |
| `src/components/ProjectItem.astro` | 论文展示布局、共同一作标记及视频播放行为 |
| `public/images/publications/` | 论文展示图片 |
| `src/data/researchExperience.ts` | 科研经历数据 |
| `src/styles/global.css` | 全局配色、排版和样式变量 |

TactileStep 与 Echo in the Steps 的展示视频尚待补充，Paper 入口暂未启用；部分个人链接与科研经历仍为占位内容。

## 提交前检查

```powershell
npm.cmd run build
git diff --check
```

同时检查 375px、768px、1440px 下的页面布局。源码提交到 Git，`dist/` 和 `node_modules/` 不提交。
