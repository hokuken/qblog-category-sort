# QBlog Category Sort

QHM 搭載の QBlog でメニューに表示されるカテゴリー一覧の内容を任意の順番に入れ替えることができます。

## インストール

`qblog-category-sort.min.js` ファイルを任意の場所へ置きます。
この例では `js` フォルダに設置したとします。

```html
<script src="js/qblog-category-sort.min.js"></script>
```

※jQuery 必須です。
QBlog であれば必ず jQuery を読み込んでいるので上記のように読み込むだけで動作します。


## 使い方

設定を記述した `script` タグをページ上に書き込みます。

```html
<script type="text/x-qblog-category-order">
カテゴリー1
カテゴリー2
カテゴリー3
カテゴリー4
：
</script>
```

## 具体例

QBlog の場合、「ブログ」＞「メニュー編集」で貼り付けるようにすれば効率的です。

```pukiwiki
#lastscript{{
<script src="js/qblog-category-sort.min.js"></script>
<script type="text/x-qblog-category-order">
カテゴリー1
カテゴリー2
カテゴリー3
カテゴリー4
：
</script>
}}
```

## ライセンス

The MIT License (MIT)

Copyright (c) 2015 Hokuken.Inc <customer@hokuken.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
