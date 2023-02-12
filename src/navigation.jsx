import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import { View, Text } from 'react-native';
import Login from './pages/Login';
import Login4 from './pages/Login4';
import Login5 from './pages/Login5';
import LinearGradientFunc from './pages/LinearGradient';
import Todo from './pages/Todo';
import { FlatList } from 'react-native-gesture-handler';
import FlatlistFunc from './pages/Flatlist';
import Login3 from './pages/Login3';
import ImageCropPicker from './pages/ImageCropPicker';
import ImagePicker from './pages/ImagePicker';
import AdminFirst from './pages/AdminFirst';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// function StackNavigation() {
//     return (
//         <Stack.Navigator initialRouteName="chat"
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <Stack.Screen name="NestedChat" component={Chat} />
//             <Stack.Screen name="UserChat" component={UserChat} />
//         </Stack.Navigator>
//     );
// }




function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AdminFirst" component={AdminFirst} />

      <Drawer.Screen name="Chat" component={LinearGradientFunc} />
      <Drawer.Screen name="imagepicker" component={ImagePicker} />
    </Drawer.Navigator>
  );
}

function NavigationFunc() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false
                }}
                // initialRouteName={'Home'}
            >
                <Tab.Screen
                    options={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            return <AIcon name={'login'} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'orange',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    name="Signup"
                    component={MyDrawer}
                />
                <Tab.Screen
                    options={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            return <AIcon name={'login'} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'orange',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    name="Todo"
                    component={Todo}
                />
                <Tab.Screen
                    options={({ route }) => ({
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View style={{
                                    // borderWidth:1,
                                    padding:10,
                                    marginTop:-50,
                                    borderRadius:50,
                                    backgroundColor:'#f1f1f1',
                                }}>
                                        <View
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 25,
                                                backgroundColor: '#fff',
                                                shadowColor: '#000',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 3.84,
                                                elevation: 5,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Text>
                                                <AIcon name={'home'} size={size} color={color} />
                                            </Text>
                                        </View>
                                    </View>
                            );
                        },
                        tabBarActiveTintColor: 'orange',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    name="Home"
                    component={Login}
                />
                <Tab.Screen
                    options={props => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            return <EIcon name={'chat'} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'orange',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    name="Chat"
                    component={Login3}
                />
                <Tab.Screen
                    options={props => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            return <EIcon name={'chat'} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'orange',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    name="Test"
                    component={ImageCropPicker}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavigationFunc;
