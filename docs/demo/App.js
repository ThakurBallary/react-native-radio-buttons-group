import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Vertical from './Vertical';
import Horizontal from './Horizontal';

export default TabNavigator(
    {
        Vertical,
        Horizontal,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Vertical') {
                    iconName = 'dots-vertical';
                } else if (routeName === 'Horizontal') {
                    iconName = 'dots-horizontal';
                }
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
