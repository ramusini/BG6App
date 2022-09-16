# BG6App

DWC でポートフォリオをして作成した BG6 を ReactNative でスマホアプリとして開発する学習。
Udemy の講座を基礎にする。

■ 講座外の要素
・edit の screen を modal で実装してみる。
react-native-modal をインストールする。

・DB に FireStore を利用しないで、ローカル開発してみる。
調べた結果。realm というものを使った開発方法を一から解説するサイトがあった。
https://soji.dev/blog/realm-in-react-native#hea84b52a70
しかし、expo 未対応のためまたの機会に。
他に 5 つの手段を見つけたが、そのうち sqlite を利用することにした。デメリットがコード再利用できないことで、メリットは iOS や Android は sqlite のデータベースが付属しており作成しやすいから。学習目的なら十分なはず。
