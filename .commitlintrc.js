// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: "docs: fix typos" },
        messages: {
            type: '选择你要提交的类型 :',
            subject: '填写简短精炼的变更描述 :\n',
            confirmCommit: '是否提交或修改commit ?'
        },
        types: [
            { value: "feat", name: "feat:     ✨  新增功能", emoji: ":sparkles:" },
            { value: "fix", name: "fix:      🐛  修复缺陷", emoji: ":bug:" },
            { value: "docs", name: "docs:     📝  文档变更", emoji: ":memo:" },
            { value: "style", name: "style:    💄  格式变化", emoji: ":lipstick:" },
            { value: "refactor", name: "refactor: ♻️   项目重构", emoji: ":recycle:" },
            { value: "perf", name: "perf:     ⚡️  性能优化", emoji: ":zap:" },
            { value: "test", name: "test:     ✅  测试改动", emoji: ":white_check_mark:" },
            { value: "build", name: "build:    📦️   构建变更", emoji: ":package:" },
            { value: "ci", name: "ci:       🎡  配置脚本", emoji: ":ferris_wheel:" },
            { value: "chore", name: "chore:    🔨  其他变化", emoji: ":hammer:" },
            { value: "revert", name: "revert:   ⏪️  回滚提交", emoji: ":rewind:" },
            { value: "init", name: "init:   🎉  初始项目", emoji: ":tada:" },
            { value: "remove", name: "remove:   🔥  删除代码或文件", emoji: ":fire:" }
        ],
        useEmoji: true,
        emojiAlign: "left",
        scopes: [],
        skipQuestions: ["body", "footerPrefix", "footer"],
    }
};
