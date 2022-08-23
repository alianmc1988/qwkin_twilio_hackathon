import 'package:flutter/material.dart';

typedef void ExpansionCallback(int index, bool isExpanded);

class Filter extends StatelessWidget {
  final ExpansionCallback expansionCallback;
  final bool isExpanded;

  const Filter({
    Key? key,
    required this.expansionCallback,
    required this.isExpanded,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ExpansionPanelList(
      expansionCallback: expansionCallback,
      children: [
        ExpansionPanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return ListTile(
              title: Text('Item 1'),
            );
          },
          body: ListTile(
            title: Text('Item 1 child'),
            subtitle: Text('Details goes here'),
          ),
          isExpanded: isExpanded,
        ),
      ],
    );
  }
}
