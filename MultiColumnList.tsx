import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { largeData } from "./data";

type ItemProps = {
  title: string;
  itemId: number;
  removeItem: (itemKey: any) => void;
  imageUrl?: string;
};

const Item = ({ title, itemId, removeItem, imageUrl }: ItemProps) => {
  React.useEffect(() => {
    console.log("Item mounted, item id:", itemId);
  }, []);

  const removeThisItem = () => {
    removeItem(itemId);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {imageUrl ? (
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{ uri: imageUrl }}
        />
      ) : null}

      <TouchableOpacity onPress={removeThisItem} style={styles.removeButton}>
        <Text>Press to delete item!</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MultiColumnList = () => {
  const [listData, updateListData] = React.useState(largeData);

  const removeItem = (itemKey: any) => {
    const filteredData = listData.filter(
      (item: { id: string }) => item.id !== itemKey
    );
    updateListData(filteredData);
  };

  const _renderItem = ({ item }: any) => {
    return (
      <Item
        title={item.title}
        itemId={item.id}
        removeItem={removeItem}
        imageUrl={item.imageUrl}
      />
    );
  };

  return (
    <FlatList
      data={listData}
      // numColumns={3}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#bada55",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "33%",
    height: 200,
  },
  title: {
    fontSize: 16,
  },
  removeButton: {
    borderColor: "#bada55",
    borderWidth: 4,
    backgroundColor: "#fff",
  },
});
