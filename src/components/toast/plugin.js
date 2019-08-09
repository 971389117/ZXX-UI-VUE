import Toast from './z-toast'

let currentToast

export default {
    install(Vue, option) {
        Vue.prototype.$toast = function (message, options) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({Vue, message, propsData: options,onClose(){
                    currentToast=null
                }});
        }

    }
}

function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}