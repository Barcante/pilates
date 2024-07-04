import { Tabs } from 'expo-router'

export default function Layout () {
return (
    <Tabs>
        <Tabs.Screen 
        name="settings" 
        options={{headerShown: false, title: "Settings"}}/>
        <Tabs.Screen 
        name="scheduleManagement" 
        options={{headerShown: false, title: "scheduleManagement"}}/>
        
    </Tabs>
)
}