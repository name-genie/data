# data

> 仅存数据

## 目录

```text
() - 表示可自定义
[] - 表示可选
<> - 表示必须
prefix - 前缀
stem - 词干
interfix - 连接
suffix - 后缀
state - 状态
```

- [alchemy](alchemy) 丹药

```text
生成算法：(stem) + (suffix)
```

- [book](book) 秘籍

```text
生成算法：(stem) + [(interfix)] + (suffix) + [(state)]
```

- [clan](clan) 门派

```text
生成算法：(stem) + (suffix)
```

- [creature](creature) 生灵

```text
生成算法：(stem) + [(interfix)] + (suffix)
```

- [dao](dao) 道号

```text
生成算法：(stem) + (suffix)
```

- [material](material) 材料

```text
生成算法：(stem) + (suffix) + [(state)]
```

- [name](name) 姓氏/名字

```text
生成算法：(prefix) + (suffix)
```

- [nation](nation) 国家

```text
生成算法：(stem) + [interfix] + (suffix)
```

- [place](place) 地名

```text
生成算法：(stem) + (suffix)
```

- [skill](skill) 功法

```text
生成算法1：[numfix] + 路 + [prefix] + (stem) + (suffix)
生成算法2：[prefix] + (stem) + (suffix) + [numfix] + 式
```

- [talisman](talisman) 法宝

```text
生成算法：(stem) + [(interfix)] + (suffix) + [(state)]
```

- [shared](shared) 通用，其他stem组成的来源

## 特别感谢

- [random_chinese_fantasy_names](https://github.com/hythl0day/random_chinese_fantasy_names/tree/main)