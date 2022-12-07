import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useState} from 'react'
import { format } from "date-fns";
import ko from "date-fns/esm/locale/ko/index.js";

const Home = () => {
    const [time, setTime] = useState(new Date())
    const [visible, setVisible] = useState(false); // 모달 노출 여부
    const [content, setContent] = useState("")
    const [plan, setPlan] = useState([])

    const onChangeInput = (event) => {
        setContent(event)
    }

    //일정 저장
    // const onAddPlan = () => {
    //     setPlan([...plan, {}])
    // }

    const onPressTime = () => { // 시간 클릭 시
        setVisible(true); // 모달 open
    };
    const onConfirm = (selectedDate) => { // 날짜 또는 시간 선택 시
        setVisible(false); // 모달 close
        setTime(selectedDate); // 선택한 날짜 변경
    };

    const onCancel = () => { // 취소 시
        setVisible(false); // 모달 close
    };

    return (
        <View
            style ={{backgroundColor:'#B7E1FF',
                     height:'100%'
        }}
        > 
            <Text
                style ={{marginTop:"25%", marginLeft:'30%',fontSize:30}}
            >
                오늘 날짜
            </Text>
            <View
                style ={{ marginLeft :'5%', backgroundColor:'#FFFFFF',
                        width: '90%', height:'75%', marginTop:'5%',
                        borderRadius:20}}
            >
                <View
                    style = {{flexDirection:'row'}}
                >
                    <TouchableOpacity onPress={onPressTime}>
                        <Text
                            style = {{marginLeft:'10%', marginTop:'10%', fontSize:15}}
                        >clik on your schedule : {format(new Date(time), 'p', {locale: ko})}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal 
                        isVisible={visible}
                        mode='time'
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        date={time} 
                    />
                    <TouchableOpacity>
                        <Text
                            style = {{marginLeft:'30%', marginTop:'15%', fontSize:15}}
                        >중요도</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style = {{flexDirection:'row', marginTop:'5%'}}
                >
                    <TextInput
                        style = {{marginLeft:'5%',height:'130%', width:'70%',marginRight:'10%',backgroundColor:'pink'}}
                        value = {content}
                        onChangeText = {onChangeInput}
                    />
                    <TouchableOpacity
                        //onPress={}
                    >
                        <Text
                            style={{ fontSize:15}}
                        >add</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderBottomColor: '#E9C0C0',
                        borderBottomWidth: 1,
                        marginLeft:'5%',
                        marginRight:'15%',
                        marginTop:'3%'
                    }}
                />
            </View>
        </View>
    )
}

//{console.log(new Date('2022-05-04'))}
//{console.log(new Date('2022-05-04') < time)}
//<Text>{format(new Date(time), 'PPP', {locale: ko})}</Text>
export default Home;