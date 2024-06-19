import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      {/* Existing Tabs */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Clients',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-add' : 'person-add-outline'} color={color} />
          ),
        }}
      />

      {/* New Tab */}
      <Tabs.Screen
        name="Login" // Choose a suitable name for your new tab
        options={{
          title: 'Login', // Customize the tab title
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} /> // Update icon names
          ),
        }}
      />
       <Tabs.Screen
        name="ScheduleManagement" // Choose a suitable name for your new tab
        options={{
          title: 'Schedule Management', // Customize the tab title
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} /> // Update icon names
          ),
        }}
      />
       <Tabs.Screen
        name="Settings" // Choose a suitable name for your new tab
        options={{
          title: 'Settings', // Customize the tab title
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} /> // Update icon names
          ),
        }}
      />
    </Tabs>
  );
}
