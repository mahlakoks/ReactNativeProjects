import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { fetchUsers } from "../../redux";
import { useDispatch, useSelector, connect } from "react-redux";
import Card from "../Card/Card";


function Users() {
  const dispatch = useDispatch(); 
  const userData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (userData.loading) {
    return <Text>Loading...</Text>; 
  }

  if (userData.error) {
    return <Text>{userData.error}</Text>; 
  }

  return userData.loading ? (
    <Text> Loading...</Text>
  ) : userData.error ? (
    <Text>userData.error</Text>
  ) : (
    <View>
      <Text>Data Extracted all good</Text>
      <View>
        {console.log(
          "Data Extracted all good<",
          JSON.stringify(userData, null, 2)
        )}
        {/* {userData &&
          userData.map((user) => {
            return (
              <View key={user.id}>
                <Text>{user.name}</Text>
              </View>
            );
          })} */}
        <FlatList
              data={userData}
              renderItem={({ item }) =>
                // <Text>{item.name}</Text>
              <Card>{item.name}</Card>
              }
              keyExtractor={(item, index) => index.toString() + index}
              ItemSeparatorComponent={<View style={{margin:10}}></View>}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  users: {
    flex: 1,
    backgroundColor: "red",
  },
});

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
