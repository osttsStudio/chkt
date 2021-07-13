# 菜花空调v0.2.1

## 关于项目

原项目：[云游君](https://github.com/YunYouJun/air-conditioner)

菜花牌空调 bilibili限定款

原来是新家伙 魔改坏掉了再经过几次大修后的产物

## Features

### 优势

- 随时随地打开空调
- 便携
- 低功耗（使用 HTML CSS 而非 Canvas 绘制）
- 低成本（静态托管 终生免费）
- 静音（指柴油发电机的声音 声音拉满大概是暴雨中的柴油发电机）
- 操作简单
- 安装便捷

### 劣势

- 心静自然凉（指没有风 物理上）
- 国内访问可能偏慢
- 魔改维修需要电工证

## 安装

### obs之类的推流软件

#### obs

添加浏览器源 在互动中控制空调（透明背景）

添加窗口捕获 在浏览器中直接控制空调（白色背景）

#### 直播姬

参考obs

## 自行部署

### 静态托管

根据托管网站 请自行查看相关文档

前端输出目录：./build

vercel可自动识别

### Docker

部署时可使用以下环境变量进行配置自定义：

- `AC_NGINX_DOMAIN` 指定域名
- `AC_NGINX_PORT` 指定监听端口

## Dev

```bash
# yarn dev
yarn start
# http://localhost:3000/

yarn build
# ./build
```

### 环境变量

```bash
cp .env.example .env
```

```bash
# 关闭广告
REACT_APP_DISABLE_ADSENSE=true
```

## Todo

- [x] 空调
  - [x] 能耗标签
  - [x] 温度范围（16-31˚C）
  - [x] 风 css
  - [x] 空调品牌（png）
  - [x] 音效
    - [x] 按钮
    - [x] 工作声
    - [ ] <s>接入 [喜马拉雅](https://m.ximalaya.com/sleepaudio/6?mixedTrackIds=331526646&utm_source=smxkt) 更多音效</s>  原项目规划 本项目不考虑
- [x] 适应系统的亮暗模式

## Ref

- 数字字体: [Digital 7](https://www.dafont.com/digital-7.font)，Free for personal use
- 空调工作声: [Air Extractor Fan | freesound](https://freesound.org/people/InspectorJ/sounds/403664/)
