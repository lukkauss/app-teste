import react from 'react';
import {} from '@react-navigation/stack'
import { StackActions } from '@react-navigation/routers';

import Preload from '../screens/Preload';
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';

const stack = createStackNavigatot();

export default () => (
    <StackActions.Navigator>
        <StackActions.Screen name="Preload" component={Preload}/>
        <StackActions.Screen name="SingIn" component={SingnIn}/>
        <StackActions.Screen name="SingUp" component={SingUp}/>
    </StackActions.Navigator>
);