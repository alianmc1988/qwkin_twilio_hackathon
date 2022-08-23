import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:qwkin_twillio_hackathon/src/extensions/extensions.dart';
import 'package:qwkin_twillio_hackathon/src/widgets/src/home/src/home_store.dart';
import 'package:qwkin_twillio_hackathon/src/widgets/widgets.dart';

import 'widgets/widgets.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  HomeState createState() => HomeState();
}

class HomeState extends State<Home> {
  final store = HomeStore();

  @override
  Widget build(BuildContext context) => Scaffold(
    backgroundColor: Colors.grey,
        appBar: AppBar(
          backgroundColor: Color(0xFFEEEEEE),
          title: Image.asset('assets/qwkin_logo.png'),
        ),
        body: Center(
          child: Observer(
            builder: (BuildContext context) {
              return Column(
                children: [
                  Filter(
                    isExpanded: store.isFilterExpanded,
                    expansionCallback: store.toggleFilterExpansionPanel,
                  ).marginOnly(top: 7.5, bottom: 7.5),
                  Chart(),
                ],
              );
            },
          ),
        ),
      );
}
