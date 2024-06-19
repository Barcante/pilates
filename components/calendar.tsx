import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const months = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", 
    "November", "December"
];
   
const weekDays = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const state = {
    activeDate: new Date()
}

var year = state.activeDate.getFullYear();
var month = state.activeDate.getMonth();
var firstDay = new Date(year, month, 1).getDay();

var maxDays = nDays[month];
 if (month == 1) { // February
   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
     maxDays += 1;
   }
 }

 export type ThemedViewProps = ViewProps & {
    fontWeight?: string;
    darkColor?: string;
  };

 export function Calendar({ style, fontWeight, darkColor, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: fontWeight, dark: darkColor }, 'background');
  
    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
  }