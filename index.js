#!/usr/bin/env node 

const fs = require('fs');
const findup = require('findup-sync');
const path = require('path');

const absGitPath = findup('.git');
const msgFileName = process.env.HUSKY_GIT_PARAMS ? process.env.HUSKY_GIT_PARAMS : process.env.GIT_PARAMS;
console.log('\033[45;37m git-commit-check \033[0m ');
if(!absGitPath) {
    console.log('\033[43;31m Error \033[40;31m .git file is not find... \033[0m');
    process.exit(1);
}
let absMsgPath = path.resolve(absGitPath, '../', msgFileName);
console.log('\033[42;30m MESSAGE PATH \033[0m ' + absMsgPath);

let commitMsg = fs.readFileSync(absMsgPath).toString();

let regPattern = /^(feat|fix|docs|style|refactor|test|chore)(\([^)]+\))?:\s[^\s].*/;
if(regPattern.test(commitMsg)) {
    console.log('\033[42;30m PASS \033[0m COMMIT_MESSAGE: ' + commitMsg);
    process.exit(0);
}else {
    console.log(`commit msg:${commitMsg}`);
    // console.log(`regPattern:${regPattern}`);
    console.log('\033[43;31m Error \033[40;31m invalid commit message format. please fix! \033[0m');
    process.exit(1);
}
