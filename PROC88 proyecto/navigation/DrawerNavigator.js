import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import Logout from "../screeens/Logout";
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
             <Drawer.Screen name="Inicio" component={StackNavigator} options={{ unmountOnBlur: true }} />
             <Drawer.Screen name="Perfil" component={Profile} options={{ unmountOnBlur: true }} />
             <Drawer.Screen name="Cerrar Sesión" component={Logout} options={{ unmountOnBlur: true }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;