import 'package:flutter/material.dart';

import '../merch.dart';
import '../shop.dart';

class DrawBar extends StatefulWidget {
  const DrawBar({super.key, required this.omitPageName});

  final String omitPageName;

  @override
  State<DrawBar> createState() => _DrawBarState();
}

class _DrawBarState extends State<DrawBar> {
  // ↓のkeyがサイドバーで遷移するページ名になっている
  Map<String, Widget> pages = {
    'ショップ': const ShopPage(title: ''),
    '物販を登録': const MerchPage(title: ''),
  };

  List<ListTile> _buildPageList() {
    return pages.entries
        // 同じページには遷移しないようにサイドバーを開いた画面は弾く
        // TODO サイドバーで遷移するページ名と一致するかどうかで弾いている。
        // 各画面でサイドバーのページ名と一致した引数を渡す必要がありマジックナンバーと化しているので修正したい
        .where((e) => e.key != widget.omitPageName)
        .map((e) => ListTile(
            title: Text(e.key),
            onTap: () {
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(
                  builder: (context) => e.value,
                ),
              );
            }))
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(child: ListView(children: _buildPageList()));
  }
}
