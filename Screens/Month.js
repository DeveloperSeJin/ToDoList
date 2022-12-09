import { Calendar } from "react-native-calendars";
import { View } from 'react-native'
import { format } from "date-fns";
import {useState} from 'react'

const Month = (props) => {
    return (
        <Calendar 
            style = {{marginTop:'10%'}}
            theme={{
                selectedDayBackgroundColor: '#009688',
                arrowColor: '#009688',
                dotColor: '#009688',
                todayTextColor: '#009688',
            }} 
            onDayPress={(day) => {
                props.navigation.navigate("Today",
                {
                    year :day.year,
                    selectedDate:day.dateString
                })
            }} 
          />
    );
}

export default Month;