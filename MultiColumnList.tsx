import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { largeData } from "./data";

type ItemProps = {
  title: string;
  itemId: number;
  removeItem: (itemKey: any) => void;
  imageUrl?: string;
  key: any
};

const Item = ({ title, itemId, removeItem, imageUrl, key }: ItemProps) => {
  const [isPressed, setIsPressed] = React.useState(false);

  React.useEffect(() => {
    console.log("Item mounted, item id:", itemId);
  }, []);

  const removeThisItem = () => {
    removeItem(itemId);
  };

  return (
    <View
      style={[styles.item, { backgroundColor: isPressed ? "blue" : "red" }]}
    >
      <Pressable
        style={styles.chooseButton}
        onPress={React.useCallback(() => setIsPressed(!isPressed), [isPressed])}
      >
        <Text>Press to choose item # {itemId}{key}</Text>
      </Pressable>
      {isPressed ? (
        <View>
          <TouchableOpacity
            onPress={removeThisItem}
            style={styles.removeButton}
          >
            <Text>Press to delete item!</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};



export const MultiColumnList = () => {
  const [listData, updateListData] = React.useState(largeData);

  const removeItem = (itemKey: any) => {
    const filteredData = listData.filter(
      (item: { id: string }) => item.id !== itemKey
    );
    console.log("is this happening?");

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
      numColumns={3}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#bada55",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 3,
    width: "30%",
    height: 200,
  },
  title: {
    fontSize: 16,
  },
  chooseButton: {
    borderColor: "#000",
    borderWidth: 4,
    backgroundColor: "#fff",
  },
  removeButton: {
    borderColor: "#bada55",
    borderWidth: 4,
    backgroundColor: "#fff",
  },
});
