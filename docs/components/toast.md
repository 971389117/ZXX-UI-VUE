# toast

<ZXToast></ZXToast>


```html
<z-button type="primary" @click="showToast('top')">点我 TOP</z-button>
<z-button type="primary" @click="showToast('middle')">点我 MIDDLE</z-button>
<z-button type="primary" @click="showToast('bottom')">点我 BOTTOM</z-button>

<script>
export default {
methods:{
    showToast(position) {
             this.$toast('我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message', {
                 position,
                 closeButton: {
                     text: '知道了',
                     callback(toast) {
                         console.log('演得不错')
                     }
                 }
             })
         }
    },
  created(){
    this.$toast('<h1>我是 </h1>哈哈', {
        enableHtml: false,
        position: 'bottom',
        closeButton: {
            text: '知道了',
            callback(toast) {
                toast.log()
            }
        }
    })
},
}
}
</script>
```