import { View,Text } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.css'
import useStore from '../../store/index'
import useUserStore from '../../store/user'

function Index() {
  //本地持久化存储hook
  const { num: localNum, addNum: localAddNum } = useStore()
  
  //非长久化存储，刷新则重置
  const { num, addNum, decNum } = useUserStore()
  
  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>

      <View className="text-[#d84532]">tailwind Hello world!</View>

      <View>Zustand hook</View>
        <Text>{localNum}</Text>
      <Button  onClick={()=>localAddNum(2)}>+2</Button>
      

       <Text>{num}</Text>
      <Button   onClick={()=>addNum(1)}>+1</Button>
      <Button onClick={() => decNum(1)}>-1</Button>
    </View>
  )
}

export default Index
