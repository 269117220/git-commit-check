# git-commit-check

用途：对git提交的commit格式约束
(采用[angular规范](https://github.com/angular/angular/commits/master))

Usage: 
- 安装
```
npm i -D git-commit-check
```
- `package.json`中配置(`这里依赖husky提供的钩子`)
```
"husky": {
    "hooks": {
      "commit-msg": "git-commit-check HUSKY_GIT_PARAMS"
    }
  }
```

## 相关
- npm link
- bin
- husky


