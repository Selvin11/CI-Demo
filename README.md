## CI-Demo

[![Build Status](https://travis-ci.org/Selvin11/CI-Demo.svg?branch=master)](https://travis-ci.org/Selvin11/CI-Demo)

A demo of CI

`.travix.yml`详解：

> 配置根目录下的.travis.yml

```yaml
language: node_js
node_js:
  - 'stable'
install:
  - npm install
script:
  - npm run build 
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  local_dir: www # 选择push内容的根目录
  #name: Selvin11 # 发布名称
  #repo: Selvin11/selvin11.github.io # push到的项目名称
  #target_branch: master # push到该项目下的分支名称（默认gh-pages）
  #project_name: Blog # Deploy Blog to github.com/Selvin11/selvin11.github.io.git:master 构成的commit信息
  on:
    branch: master
cache:
  directories:
  - node_modules # NPM packages
```

此Demo项目没有涉及到发布至另外一个项目的需求，主要就是target_branch和repo的配置，此项目都是使用默认值

因此push之后，触发Travis-CI打包，并将打包后的www文件push到该项目的gh-pages分支